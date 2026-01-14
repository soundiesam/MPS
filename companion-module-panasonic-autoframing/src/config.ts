import { Regex, type SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
        host: string
        port: number
        pollInterval: number
        cameraCount: number
}

export function getConfigFields(): SomeCompanionConfigField[] {
        return [
                {
                        type: 'textinput',
                        id: 'host',
                        label: 'IP Address',
                        width: 8,
                        regex: Regex.IP,
                        default: '192.168.0.200',
                        tooltip: 'IP address of the PC running Media Production Suite Auto Framing Plugin',
                },
                {
                        type: 'number',
                        id: 'port',
                        label: 'Port',
                        width: 4,
                        default: 1338,
                        min: 1,
                        max: 65535,
                        tooltip: 'Port number (default: 1338)',
                },
                {
                        type: 'number',
                        id: 'pollInterval',
                        label: 'Poll Interval (ms)',
                        width: 4,
                        default: 1000,
                        min: 200,
                        max: 10000,
                        tooltip: 'How often to poll for camera status (in milliseconds)',
                },
                {
                        type: 'number',
                        id: 'cameraCount',
                        label: 'Camera Count',
                        width: 4,
                        default: 10,
                        min: 1,
                        max: 100,
                        tooltip: 'Maximum number of cameras to poll when fallback mode is used',
                },
        ]
}
