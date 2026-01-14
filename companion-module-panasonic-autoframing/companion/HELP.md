# Panasonic Auto Framing Plugin

This module controls the **Panasonic Media Production Suite Auto Framing Plugin** via its Web API (Version 1.11.1).

## Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **IP Address** | IP address of the PC running Media Production Suite | 192.168.0.200 |
| **Port** | Port number of the Auto Framing Plugin | 1338 |
| **Poll Interval** | How often to poll camera status (ms) | 1000 |
| **Camera Count** | Maximum cameras to poll in fallback mode (1-100) | 10 |

## Requirements

- Panasonic Media Production Suite software with Auto Framing Plugin installed
- Network connectivity to the PC running the software
- Cameras registered in a single group (not multiple groups) for proper API operation

## Actions

### Framing Control
| Action | Description |
|--------|-------------|
| **Framing Enable** | Enable/disable Auto Framing for a camera |
| **Framing Enable Toggle** | Toggle Auto Framing enable/disable |
| **Framing Start** | Start tracking framing |
| **Framing Stop** | Stop tracking framing |
| **Framing Start/Stop Toggle** | Toggle tracking on/off |

### Tracking Settings
| Action | Description |
|--------|-------------|
| **Tracking Control** | Set Pan/Tilt Speed, Zoom Speed, and Sensitivity (-2 to +2) |
| **Auto Face Search** | Enable/disable automatic face search |
| **Auto Face Search Toggle** | Toggle auto face search on/off |
| **Auto Zoom** | Enable/disable automatic zoom |
| **Auto Zoom Toggle** | Toggle auto zoom on/off |

### Presets (Advanced Preset)
| Action | Description |
|--------|-------------|
| **Advanced Preset Recall** | Recall a saved preset (1-20) |
| **Advanced Preset Set** | Save current position to a preset |
| **Advanced Preset Clear** | Delete a preset |

### Target Frame
| Action | Description |
|--------|-------------|
| **Target Frame Recall** | Recall a target frame preset (1-20) |
| **Target Frame Set** | Save current frame as target frame |
| **Target Frame Clear** | Clear a target frame preset |

### Target Selection
| Action | Description |
|--------|-------------|
| **Target Position** | Select/add/remove targets by screen coordinates |
| **Target Position (Reference Camera)** | Target selection on reference camera |
| **Target Face Select** | Select face(s) for tracking by ID or name |
| **Target Face Clear** | Clear face selection |

### Frame Adjustment
| Action | Description |
|--------|-------------|
| **Current Frame (Absolute)** | Set frame position using absolute coordinates |
| **Current Frame (Relative)** | Adjust frame position using relative values |
| **Pan Left** | Pan the current frame left |
| **Pan Right** | Pan the current frame right |
| **Tilt Up** | Tilt the current frame up |
| **Tilt Down** | Tilt the current frame down |
| **Zoom In** | Increase zoom level |
| **Zoom Out** | Decrease zoom level |

### Area Configuration
| Action | Description |
|--------|-------------|
| **Auto Start Area** | Configure the auto start detection area |
| **Auto Start Area Toggle** | Toggle auto start area on/off |
| **Mask Area** | Configure mask areas (1-3) |
| **Mask Area Clear** | Clear a mask area (removes the area by omitting coordinates) |
| **Frame Mapping** | Execute frame mapping |

### Image Retrieval
| Action | Description |
|--------|-------------|
| **Get Image (Log URL)** | Logs the URL for retrieving thumbnails (CurrentFrame, TargetFrame, AdvancedPreset) |

## Feedbacks

| Feedback | Description | Default Color |
|----------|-------------|---------------|
| **Framing Enabled** | True when Auto Framing is enabled | Green |
| **Framing Running** | True when tracking is actively running | Green |
| **Framing Status** | Check specific status (Stopped/Tracking/Lost/Searching) | Green |
| **Auto Zoom Enabled** | True when Auto Zoom is enabled | Cyan |
| **Auto Face Search Enabled** | True when Auto Face Search is enabled | Orange |
| **PTZ Moving** | True when camera is actively moving | Yellow |
| **Has Tracking Targets** | True when targets are being tracked | Purple |
| **Person Detected** | True when persons are detected in frame | Blue |
| **Auto Start Area Enabled** | True when Auto Start Area is active | Brown |

## Variables

Each camera (1-10) has the following variables available. Replace `1` with the camera number:

| Variable | Description |
|----------|-------------|
| `$(panasonic-autoframing:cam1_name)` | Camera name |
| `$(panasonic-autoframing:cam1_ip)` | Camera IP address |
| `$(panasonic-autoframing:cam1_framing_enabled)` | Framing enable status (Off/Built-in/PC_GPU/Reference) |
| `$(panasonic-autoframing:cam1_framing_running)` | Running/Stopped |
| `$(panasonic-autoframing:cam1_framing_status)` | Status (Stopped/Tracking/Lost/Searching) |
| `$(panasonic-autoframing:cam1_auto_zoom)` | Auto Zoom On/Off |
| `$(panasonic-autoframing:cam1_auto_face_search)` | Auto Face Search On/Off |
| `$(panasonic-autoframing:cam1_person_count)` | Number of persons detected |
| `$(panasonic-autoframing:cam1_target_count)` | Number of active targets |
| `$(panasonic-autoframing:cam1_ptz_moving)` | Moving/Idle |
| `$(panasonic-autoframing:cam1_target_zoom)` | Target zoom level (10-70) |
| `$(panasonic-autoframing:cam1_pt_speed)` | Pan/Tilt speed (-2 to +2) |
| `$(panasonic-autoframing:cam1_z_speed)` | Zoom speed (-2 to +2) |
| `$(panasonic-autoframing:cam1_sensitivity)` | Sensitivity (-2 to +2) |

## Presets

Pre-configured button presets are available for cameras 1-4 including:

- Enable/Disable framing
- Start/Stop/Toggle tracking
- Auto Zoom toggle
- Auto Face Search
- Frame Mapping
- Pan Left/Right controls
- Tilt Up/Down controls
- Zoom In/Out controls
- Advanced Preset recall (1-5)
- Target Frame recall (1-5)

## API Information

- Protocol: HTTP 1.1 GET requests
- Default Port: 1338
- Status update rate: ~5 Hz
- Coordinate system: 1920x1080, upper-left origin

### API Commands Implemented

All 15 commands from the Panasonic Web API v1.11.1 specification:

1. FramingEnable
2. FramingStartStop
3. FramingState
4. TrackingControl
5. AutoFaceSearch
6. Preset
7. TargetFrame
8. TargetPosition
9. TargetFace
10. AutoZoom
11. AutoStartArea
12. MaskArea
13. FrameMapping
14. CurrentFrame
15. GetImage

## Notes

- Some features require the Advanced Auto Framing license (PC_GPU mode)
- Reference cameras have limited functionality (no start/stop, target selection)
- The Auto Framing Plugin GUI must be open for some preset operations

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Connection Failed** | Verify IP address and port; ensure Media Production Suite is running |
| **Commands Return NACK** | Check if camera is properly registered and not a reference camera |
| **Status Not Updating** | Increase poll interval or check network connectivity |
| **Advanced Features Not Working** | Ensure PC_GPU mode is enabled and licensed |
| **Preset Operations Fail** | Open the Auto Framing Plugin in a web browser |

## Support

For issues with this module, please visit the Bitfocus Companion GitHub repository.

For issues with the Panasonic Media Production Suite, contact Panasonic support.
