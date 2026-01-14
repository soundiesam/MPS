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

	return presets
}
