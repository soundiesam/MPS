import {
        InstanceBase,
        InstanceStatus,
        runEntrypoint,
        type SomeCompanionConfigField,
} from '@companion-module/base'
import { getConfigFields, type ModuleConfig } from './config.js'
import { PanasonicAutoFramingApi, type FramingStateData } from './api.js'
import { getActions } from './actions.js'
import { getFeedbacks } from './feedbacks.js'
import { getPresets } from './presets.js'
import { getVariableDefinitions, updateVariablesFromState } from './variables.js'

export class PanasonicAutoFramingInstance extends InstanceBase<ModuleConfig> {
        public config: ModuleConfig = {
                host: '192.168.0.200',
                port: 1338,
                pollInterval: 1000,
                cameraCount: 10,
        }

        public api: PanasonicAutoFramingApi | null = null
        public cameraStates: Map<number, FramingStateData> = new Map()
        private pollTimer: ReturnType<typeof setInterval> | null = null
        private isPolling = false
        private consecutiveErrors = 0
        private readonly MAX_CONSECUTIVE_ERRORS = 5

        constructor(internal: unknown) {
                super(internal as ConstructorParameters<typeof InstanceBase<ModuleConfig>>[0])
        }

        async init(config: ModuleConfig): Promise<void> {
                this.config = config

                this.api = new PanasonicAutoFramingApi(config, (level, message) => {
                        this.log(level, message)
                })

                this.setActionDefinitions(getActions(this))
                this.setFeedbackDefinitions(getFeedbacks(this))
                this.setPresetDefinitions(getPresets())
                this.setVariableDefinitions(getVariableDefinitions())

                this.updateStatus(InstanceStatus.Connecting)
                this.startPolling()
        }

        async destroy(): Promise<void> {
                this.stopPolling()
                this.api = null
                this.cameraStates.clear()
        }

        async configUpdated(config: ModuleConfig): Promise<void> {
                this.config = config

                if (this.api) {
                        this.api.updateConfig(config)
                }

                this.stopPolling()
                this.consecutiveErrors = 0
                this.updateStatus(InstanceStatus.Connecting)
                this.startPolling()
        }

        getConfigFields(): SomeCompanionConfigField[] {
                return getConfigFields()
        }

        private startPolling(): void {
                this.stopPolling()

                this.pollCameraStates()

                this.pollTimer = setInterval(() => {
                        this.pollCameraStates()
                }, this.config.pollInterval)
        }

        private stopPolling(): void {
                if (this.pollTimer) {
                        clearInterval(this.pollTimer)
                        this.pollTimer = null
                }
                this.isPolling = false
        }

        private async pollCameraStates(): Promise<void> {
                if (!this.api || this.isPolling) return

                this.isPolling = true

                try {
                        const response = await this.api.framingState(0)

                        if (response.Response === 'ack' && response.FramingState) {
                                this.consecutiveErrors = 0
                                this.updateStatus(InstanceStatus.Ok)

                                let updatedAny = false
                                for (const state of response.FramingState) {
                                        const cameraId = state.camera_info?.id ?? 0
                                        if (cameraId > 0) {
                                                this.cameraStates.set(cameraId, state)
                                                const variables = updateVariablesFromState(cameraId, state)
                                                this.setVariableValues(variables)
                                                updatedAny = true
                                        }
                                }

                                if (updatedAny) {
                                        this.checkFeedbacks()
                                }
                        } else if (response.Response === 'nack') {
                                this.consecutiveErrors++
                                this.log('warn', `FramingState returned NACK: ${response.NACKDetail || 'Unknown error'}`)
                                
                                if (this.consecutiveErrors >= this.MAX_CONSECUTIVE_ERRORS) {
                                        this.updateStatus(InstanceStatus.ConnectionFailure, response.NACKDetail || 'Repeated errors')
                                } else {
                                        await this.pollIndividualCameras()
                                }
                        }
                } catch (error) {
                        this.consecutiveErrors++
                        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
                        this.log('debug', `Poll error (${this.consecutiveErrors}/${this.MAX_CONSECUTIVE_ERRORS}): ${errorMessage}`)

                        if (this.consecutiveErrors >= this.MAX_CONSECUTIVE_ERRORS) {
                                this.updateStatus(InstanceStatus.ConnectionFailure, errorMessage)
                        } else {
                                this.updateStatus(InstanceStatus.Connecting, 'Retrying...')
                        }
                } finally {
                        this.isPolling = false
                }
        }

        private async pollIndividualCameras(): Promise<void> {
                if (!this.api) return

                let anySuccess = false
                const maxCameras = this.config.cameraCount ?? 10

                for (let cameraId = 1; cameraId <= maxCameras; cameraId++) {
                        try {
                                const response = await this.api.framingState(cameraId)
                                if (response.Response === 'ack' && response.FramingState?.[0]) {
                                        const state = response.FramingState[0]
                                        this.cameraStates.set(cameraId, state)
                                        const variables = updateVariablesFromState(cameraId, state)
                                        this.setVariableValues(variables)
                                        anySuccess = true
                                }
                        } catch {
                                this.log('debug', `Failed to poll camera ${cameraId}`)
                        }

                        if (cameraId < maxCameras) {
                                await new Promise((resolve) => setTimeout(resolve, 50))
                        }
                }

                if (anySuccess) {
                        this.consecutiveErrors = 0
                        this.updateStatus(InstanceStatus.Ok)
                        this.checkFeedbacks()
                }
        }
}

runEntrypoint(PanasonicAutoFramingInstance, [])
