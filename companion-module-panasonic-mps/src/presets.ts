import { combineRgb, type CompanionPresetDefinitions } from '@companion-module/base'

export function getPresets(): CompanionPresetDefinitions {
        const presets: CompanionPresetDefinitions = {}

        for (let cam = 1; cam <= 4; cam++) {
                presets[`cam${cam}_enable`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Enable Framing`,
                        style: {
                                text: `CAM${cam}\\nENABLE`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 51),
                        },
                        feedbacks: [
                                {
                                        feedbackId: 'framingEnabled',
                                        options: { camera_id: cam },
                                        style: {
                                                bgcolor: combineRgb(0, 204, 0),
                                                color: combineRgb(0, 0, 0),
                                        },
                                },
                        ],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'framingEnable',
                                                        options: { camera_id: cam, enable: 'on' },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_disable`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Disable Framing`,
                        style: {
                                text: `CAM${cam}\\nDISABLE`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(102, 0, 0),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'framingEnable',
                                                        options: { camera_id: cam, enable: 'off' },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_start`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Start Tracking`,
                        style: {
                                text: `CAM${cam}\\nSTART`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(0, 102, 0),
                        },
                        feedbacks: [
                                {
                                        feedbackId: 'framingRunning',
                                        options: { camera_id: cam },
                                        style: {
                                                bgcolor: combineRgb(0, 204, 0),
                                                color: combineRgb(0, 0, 0),
                                        },
                                },
                        ],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'framingStart',
                                                        options: { camera_id: cam },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_stop`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Stop Tracking`,
                        style: {
                                text: `CAM${cam}\\nSTOP`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(102, 0, 0),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'framingStop',
                                                        options: { camera_id: cam },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_toggle`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Toggle Tracking`,
                        style: {
                                text: `CAM${cam}\\nTOGGLE`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 51),
                        },
                        feedbacks: [
                                {
                                        feedbackId: 'framingRunning',
                                        options: { camera_id: cam },
                                        style: {
                                                bgcolor: combineRgb(0, 204, 0),
                                                color: combineRgb(0, 0, 0),
                                        },
                                },
                        ],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'framingToggle',
                                                        options: { camera_id: cam },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_autozoom`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Auto Zoom Toggle`,
                        style: {
                                text: `CAM${cam}\\nAUTO\\nZOOM`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 51),
                        },
                        feedbacks: [
                                {
                                        feedbackId: 'autoZoomEnabled',
                                        options: { camera_id: cam },
                                        style: {
                                                bgcolor: combineRgb(0, 153, 204),
                                                color: combineRgb(255, 255, 255),
                                        },
                                },
                        ],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'autoZoomToggle',
                                                        options: { camera_id: cam },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_facesearch`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Auto Face Search`,
                        style: {
                                text: `CAM${cam}\\nFACE\\nSEARCH`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 51),
                        },
                        feedbacks: [
                                {
                                        feedbackId: 'autoFaceSearchEnabled',
                                        options: { camera_id: cam },
                                        style: {
                                                bgcolor: combineRgb(204, 102, 0),
                                                color: combineRgb(255, 255, 255),
                                        },
                                },
                        ],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'autoFaceSearch',
                                                        options: { camera_id: cam, mode: 1 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_mapping`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Frame Mapping`,
                        style: {
                                text: `CAM${cam}\\nMAPPING`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(102, 51, 153),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'frameMapping',
                                                        options: { camera_id: cam },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_pan_left`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Pan Left`,
                        style: {
                                text: `CAM${cam}\\n◀ PAN`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 102),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'panLeft',
                                                        options: { camera_id: cam, amount: 10 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_pan_right`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Pan Right`,
                        style: {
                                text: `CAM${cam}\\nPAN ▶`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 102),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'panRight',
                                                        options: { camera_id: cam, amount: 10 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_tilt_up`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Tilt Up`,
                        style: {
                                text: `CAM${cam}\\n▲ TILT`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 102),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'tiltUp',
                                                        options: { camera_id: cam, amount: 10 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_tilt_down`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Tilt Down`,
                        style: {
                                text: `CAM${cam}\\nTILT ▼`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 102),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'tiltDown',
                                                        options: { camera_id: cam, amount: 10 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_zoom_in`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Zoom In`,
                        style: {
                                text: `CAM${cam}\\nZOOM +`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 102, 51),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'zoomIn',
                                                        options: { camera_id: cam, amount: 5 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`cam${cam}_zoom_out`] = {
                        type: 'button',
                        category: `Camera ${cam}`,
                        name: `Zoom Out`,
                        style: {
                                text: `CAM${cam}\\nZOOM -`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 102, 51),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'zoomOut',
                                                        options: { camera_id: cam, amount: 5 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                for (let preset = 1; preset <= 5; preset++) {
                        presets[`cam${cam}_preset${preset}_recall`] = {
                                type: 'button',
                                category: `Camera ${cam}`,
                                name: `Preset ${preset} Recall`,
                                style: {
                                        text: `CAM${cam}\\nP${preset}`,
                                        size: 'auto',
                                        color: combineRgb(255, 255, 255),
                                        bgcolor: combineRgb(0, 51, 102),
                                },
                                feedbacks: [],
                                steps: [
                                        {
                                                down: [
                                                        {
                                                                actionId: 'presetRecall',
                                                                options: { camera_id: cam, preset_num: preset },
                                                        },
                                                ],
                                                up: [],
                                        },
                                ],
                        }
                }

                for (let preset = 1; preset <= 5; preset++) {
                        presets[`cam${cam}_targetframe${preset}_recall`] = {
                                type: 'button',
                                category: `Camera ${cam}`,
                                name: `Target Frame ${preset}`,
                                style: {
                                        text: `CAM${cam}\\nTF${preset}`,
                                        size: 'auto',
                                        color: combineRgb(255, 255, 255),
                                        bgcolor: combineRgb(102, 51, 0),
                                },
                                feedbacks: [],
                                steps: [
                                        {
                                                down: [
                                                        {
                                                                actionId: 'targetFrameRecall',
                                                                options: { camera_id: cam, preset_num: preset },
                                                        },
                                                ],
                                                up: [],
                                        },
                                ],
                        }
                }
        }

        // Video Mixer Presets
        for (let cell = 1; cell <= 4; cell++) {
                presets[`vm_pgm_${cell}`] = {
                        type: 'button',
                        category: 'Video Mixer',
                        name: `PGM Cell ${cell}`,
                        style: {
                                text: `PGM\\n${cell}`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 51),
                        },
                        feedbacks: [
                                {
                                        feedbackId: 'vmPgmCell',
                                        options: { cell: cell },
                                        style: {
                                                bgcolor: combineRgb(204, 0, 0),
                                                color: combineRgb(255, 255, 255),
                                        },
                                },
                        ],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'vmSetPgmCell',
                                                        options: { cell: cell },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }
        }

        for (let layout = 1; layout <= 4; layout++) {
                presets[`vm_layout_${layout}`] = {
                        type: 'button',
                        category: 'Video Mixer',
                        name: `Layout ${layout}`,
                        style: {
                                text: `LAYOUT\\n${layout}`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 102),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'vmSetLayout',
                                                        options: { layout: layout },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }
        }

        presets['vm_enable'] = {
                type: 'button',
                category: 'Video Mixer',
                name: 'VM Enable',
                style: {
                        text: 'VM\\nENABLE',
                        size: 'auto',
                        color: combineRgb(255, 255, 255),
                        bgcolor: combineRgb(51, 51, 51),
                },
                feedbacks: [
                        {
                                feedbackId: 'vmEnabled',
                                options: {},
                                style: {
                                        bgcolor: combineRgb(0, 153, 0),
                                        color: combineRgb(255, 255, 255),
                                },
                        },
                ],
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'vmSetEnable',
                                                options: { enable: 1 },
                                        },
                                ],
                                up: [],
                        },
                ],
        }

        presets['vm_disable'] = {
                type: 'button',
                category: 'Video Mixer',
                name: 'VM Disable',
                style: {
                        text: 'VM\\nDISABLE',
                        size: 'auto',
                        color: combineRgb(255, 255, 255),
                        bgcolor: combineRgb(102, 0, 0),
                },
                feedbacks: [],
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'vmSetEnable',
                                                options: { enable: 0 },
                                        },
                                ],
                                up: [],
                        },
                ],
        }

        presets['vm_dsk_on'] = {
                type: 'button',
                category: 'Video Mixer',
                name: 'DSK On',
                style: {
                        text: 'DSK\\nON',
                        size: 'auto',
                        color: combineRgb(255, 255, 255),
                        bgcolor: combineRgb(0, 102, 102),
                },
                feedbacks: [],
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'vmSetDsk',
                                                options: { enable: 1 },
                                        },
                                ],
                                up: [],
                        },
                ],
        }

        presets['vm_dsk_off'] = {
                type: 'button',
                category: 'Video Mixer',
                name: 'DSK Off',
                style: {
                        text: 'DSK\\nOFF',
                        size: 'auto',
                        color: combineRgb(255, 255, 255),
                        bgcolor: combineRgb(51, 51, 51),
                },
                feedbacks: [],
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'vmSetDsk',
                                                options: { enable: 0 },
                                        },
                                ],
                                up: [],
                        },
                ],
        }

        presets['vm_fade_out_black'] = {
                type: 'button',
                category: 'Video Mixer',
                name: 'Fade to Black',
                style: {
                        text: 'FADE\\nBLACK',
                        size: 'auto',
                        color: combineRgb(255, 255, 255),
                        bgcolor: combineRgb(0, 0, 0),
                },
                feedbacks: [],
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'vmFadeOut',
                                                options: { color: 0 },
                                        },
                                ],
                                up: [],
                        },
                ],
        }

        presets['vm_fade_out_white'] = {
                type: 'button',
                category: 'Video Mixer',
                name: 'Fade to White',
                style: {
                        text: 'FADE\\nWHITE',
                        size: 'auto',
                        color: combineRgb(0, 0, 0),
                        bgcolor: combineRgb(255, 255, 255),
                },
                feedbacks: [],
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'vmFadeOut',
                                                options: { color: 1 },
                                        },
                                ],
                                up: [],
                        },
                ],
        }

        presets['vm_fade_in'] = {
                type: 'button',
                category: 'Video Mixer',
                name: 'Fade In',
                style: {
                        text: 'FADE\\nIN',
                        size: 'auto',
                        color: combineRgb(255, 255, 255),
                        bgcolor: combineRgb(0, 102, 0),
                },
                feedbacks: [],
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'vmFadeIn',
                                                options: {},
                                        },
                                ],
                                up: [],
                        },
                ],
        }

        // Auto Tracking Presets (cameras 1-4)
        for (let cam = 1; cam <= 4; cam++) {
                presets[`at_cam${cam}_enable`] = {
                        type: 'button',
                        category: 'Auto Tracking',
                        name: `AT Cam ${cam} Enable`,
                        style: {
                                text: `AT${cam}\\nENABLE`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 51),
                        },
                        feedbacks: [
                                {
                                        feedbackId: 'atEnabled',
                                        options: { camera_id: cam },
                                        style: {
                                                bgcolor: combineRgb(0, 153, 0),
                                                color: combineRgb(255, 255, 255),
                                        },
                                },
                        ],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'atSetEnable',
                                                        options: { camera_id: cam, enable: 1 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`at_cam${cam}_disable`] = {
                        type: 'button',
                        category: 'Auto Tracking',
                        name: `AT Cam ${cam} Disable`,
                        style: {
                                text: `AT${cam}\\nDISABLE`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(102, 0, 0),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'atSetEnable',
                                                        options: { camera_id: cam, enable: 0 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`at_cam${cam}_lock`] = {
                        type: 'button',
                        category: 'Auto Tracking',
                        name: `AT Cam ${cam} Lock`,
                        style: {
                                text: `AT${cam}\\nLOCK`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 51),
                        },
                        feedbacks: [
                                {
                                        feedbackId: 'atLocked',
                                        options: { camera_id: cam },
                                        style: {
                                                bgcolor: combineRgb(204, 153, 0),
                                                color: combineRgb(0, 0, 0),
                                        },
                                },
                        ],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'atSetLock',
                                                        options: { camera_id: cam, lock: 1 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                presets[`at_cam${cam}_unlock`] = {
                        type: 'button',
                        category: 'Auto Tracking',
                        name: `AT Cam ${cam} Unlock`,
                        style: {
                                text: `AT${cam}\\nUNLOCK`,
                                size: 'auto',
                                color: combineRgb(255, 255, 255),
                                bgcolor: combineRgb(51, 51, 51),
                        },
                        feedbacks: [],
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'atSetLock',
                                                        options: { camera_id: cam, lock: 0 },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                }

                // Auto Tracking presets 1-5
                for (let preset = 1; preset <= 5; preset++) {
                        presets[`at_cam${cam}_preset${preset}`] = {
                                type: 'button',
                                category: 'Auto Tracking',
                                name: `AT Cam ${cam} Preset ${preset}`,
                                style: {
                                        text: `AT${cam}\\nP${preset}`,
                                        size: 'auto',
                                        color: combineRgb(255, 255, 255),
                                        bgcolor: combineRgb(102, 51, 102),
                                },
                                feedbacks: [],
                                steps: [
                                        {
                                                down: [
                                                        {
                                                                actionId: 'atPresetExec',
                                                                options: { camera_id: cam, preset_num: preset },
                                                        },
                                                ],
                                                up: [],
                                        },
                                ],
                        }
                }
        }

        // License preset
        presets['license_refresh'] = {
                type: 'button',
                category: 'License',
                name: 'Refresh License',
                style: {
                        text: 'LICENSE\\nREFRESH',
                        size: 'auto',
                        color: combineRgb(255, 255, 255),
                        bgcolor: combineRgb(51, 51, 51),
                },
                feedbacks: [],
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'licenseGetData',
                                                options: {},
                                        },
                                ],
                                up: [],
                        },
                ],
        }

        return presets
}
