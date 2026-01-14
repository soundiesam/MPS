import { combineRgb, type CompanionFeedbackDefinitions, type DropdownChoice } from '@companion-module/base'
import type { PanasonicAutoFramingInstance } from './main.js'

export function getFeedbacks(instance: PanasonicAutoFramingInstance): CompanionFeedbackDefinitions {
	const cameraIdChoices: DropdownChoice[] = []
	for (let i = 1; i <= 20; i++) {
		cameraIdChoices.push({ id: i, label: `Camera ${i}` })
	}

	return {
		framingEnabled: {
			type: 'boolean',
			name: 'Framing Enabled',
			description: 'Check if Auto Framing is enabled for a camera',
			defaultStyle: {
				bgcolor: combineRgb(0, 204, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					type: 'dropdown',
					id: 'camera_id',
					label: 'Camera',
					choices: cameraIdChoices,
					default: 1,
				},
			],
			callback: (feedback) => {
				const cameraId = Number(feedback.options.camera_id)
				const state = instance.cameraStates.get(cameraId)
				return state?.FramingEnable !== undefined && state.FramingEnable > 0
			},
		},

		framingRunning: {
			type: 'boolean',
			name: 'Framing Running',
			description: 'Check if tracking is currently running',
			defaultStyle: {
				bgcolor: combineRgb(0, 204, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					type: 'dropdown',
					id: 'camera_id',
					label: 'Camera',
					choices: cameraIdChoices,
					default: 1,
				},
			],
			callback: (feedback) => {
				const cameraId = Number(feedback.options.camera_id)
				const state = instance.cameraStates.get(cameraId)
				return state?.FramingStartStop === 1
			},
		},

		framingStatus: {
			type: 'boolean',
			name: 'Framing Status',
			description: 'Check current framing status',
			defaultStyle: {
				bgcolor: combineRgb(0, 204, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					type: 'dropdown',
					id: 'camera_id',
					label: 'Camera',
					choices: cameraIdChoices,
					default: 1,
				},
				{
					type: 'dropdown',
					id: 'status',
					label: 'Status',
					choices: [
						{ id: 0, label: 'Stopped' },
						{ id: 1, label: 'Tracking' },
						{ id: 2, label: 'Lost' },
						{ id: 3, label: 'Searching' },
					],
					default: 1,
				},
			],
			callback: (feedback) => {
				const cameraId = Number(feedback.options.camera_id)
				const targetStatus = Number(feedback.options.status)
				const state = instance.cameraStates.get(cameraId)
				return state?.FramingStatus === targetStatus
			},
		},

		autoZoomEnabled: {
			type: 'boolean',
			name: 'Auto Zoom Enabled',
			description: 'Check if Auto Zoom is enabled',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 204),
				color: combineRgb(255, 255, 255),
			},
			options: [
				{
					type: 'dropdown',
					id: 'camera_id',
					label: 'Camera',
					choices: cameraIdChoices,
					default: 1,
				},
			],
			callback: (feedback) => {
				const cameraId = Number(feedback.options.camera_id)
				const state = instance.cameraStates.get(cameraId)
				return state?.AutoZoom === true
			},
		},

		autoFaceSearchEnabled: {
			type: 'boolean',
			name: 'Auto Face Search Enabled',
			description: 'Check if Auto Face Search is enabled',
			defaultStyle: {
				bgcolor: combineRgb(204, 102, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [
				{
					type: 'dropdown',
					id: 'camera_id',
					label: 'Camera',
					choices: cameraIdChoices,
					default: 1,
				},
			],
			callback: (feedback) => {
				const cameraId = Number(feedback.options.camera_id)
				const state = instance.cameraStates.get(cameraId)
				return state?.AutoFaceSearch === true
			},
		},

		ptzMoving: {
			type: 'boolean',
			name: 'PTZ Moving',
			description: 'Check if camera PTZ is currently moving',
			defaultStyle: {
				bgcolor: combineRgb(255, 204, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					type: 'dropdown',
					id: 'camera_id',
					label: 'Camera',
					choices: cameraIdChoices,
					default: 1,
				},
			],
			callback: (feedback) => {
				const cameraId = Number(feedback.options.camera_id)
				const state = instance.cameraStates.get(cameraId)
				return state?.ptz_status?.ptz_move === true
			},
		},

		hasTargets: {
			type: 'boolean',
			name: 'Has Tracking Targets',
			description: 'Check if camera has active tracking targets',
			defaultStyle: {
				bgcolor: combineRgb(102, 51, 153),
				color: combineRgb(255, 255, 255),
			},
			options: [
				{
					type: 'dropdown',
					id: 'camera_id',
					label: 'Camera',
					choices: cameraIdChoices,
					default: 1,
				},
			],
			callback: (feedback) => {
				const cameraId = Number(feedback.options.camera_id)
				const state = instance.cameraStates.get(cameraId)
				return state?.target_id !== undefined && state.target_id.length > 0
			},
		},

		personDetected: {
			type: 'boolean',
			name: 'Person Detected',
			description: 'Check if any person is detected in the frame',
			defaultStyle: {
				bgcolor: combineRgb(0, 102, 204),
				color: combineRgb(255, 255, 255),
			},
			options: [
				{
					type: 'dropdown',
					id: 'camera_id',
					label: 'Camera',
					choices: cameraIdChoices,
					default: 1,
				},
			],
			callback: (feedback) => {
				const cameraId = Number(feedback.options.camera_id)
				const state = instance.cameraStates.get(cameraId)
				return state?.person !== undefined && state.person.length > 0
			},
		},

		autoStartAreaEnabled: {
			type: 'boolean',
			name: 'Auto Start Area Enabled',
			description: 'Check if Auto Start Area is enabled',
			defaultStyle: {
				bgcolor: combineRgb(153, 102, 51),
				color: combineRgb(255, 255, 255),
			},
			options: [
				{
					type: 'dropdown',
					id: 'camera_id',
					label: 'Camera',
					choices: cameraIdChoices,
					default: 1,
				},
			],
			callback: (feedback) => {
				const cameraId = Number(feedback.options.camera_id)
				const state = instance.cameraStates.get(cameraId)
				return state?.auto_start_area?.AutoStartAreaEnable === 1
			},
		},
	}
}
