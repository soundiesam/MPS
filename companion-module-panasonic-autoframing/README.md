# companion-module-panasonic-autoframing

Bitfocus Companion module for controlling **Panasonic Media Production Suite Auto Framing Plugin** (Web API v1.11.1).

See [HELP.md](./companion/HELP.md) and [LICENSE](./LICENSE)

## Getting Started

### Prerequisites

- Node.js v18 or later (v22 recommended)
- Yarn package manager
- Bitfocus Companion v3.0 or later

### Installation

1. Clone or download this module to your Companion development folder
2. Install dependencies:

```bash
yarn install
```

### Building

Build the module once:

```bash
yarn build
```

This compiles TypeScript to the `dist/` directory.

### Development

Run the compiler in watch mode:

```bash
yarn dev
```

Files will automatically recompile on save.

## Features

This module provides comprehensive control of the Panasonic Auto Framing Plugin:

### Actions (30+)
- **Framing Control** - Enable/disable, start/stop, toggle tracking
- **Tracking Settings** - Speed, sensitivity, auto zoom, face search with toggle variants
- **Presets** - Advanced presets and target frames (20 slots each)
- **Target Selection** - Position-based and face recognition targeting
- **Frame Adjustment** - Pan, tilt, zoom controls (absolute and relative)
- **Area Configuration** - Auto start areas and mask areas

### Feedbacks (9)
- Framing enabled/running status
- Tracking state (Stopped/Tracking/Lost/Searching)
- Auto Zoom and Auto Face Search status
- PTZ movement detection
- Target and person detection

### Variables (140)
- Camera name and IP address
- Framing status and settings
- Person and target counts
- Speed and sensitivity values

### Presets (72)
- Pre-configured buttons for cameras 1-4
- Quick access to common operations

## API Coverage

All 15 commands from the Panasonic Web API specification v1.11.1:

| Command | Description |
|---------|-------------|
| FramingEnable | Enable/disable auto framing |
| FramingStartStop | Start/stop tracking |
| FramingState | Get camera status |
| TrackingControl | Set speed and sensitivity |
| AutoFaceSearch | Enable/disable face search |
| Preset | Advanced preset operations |
| TargetFrame | Target frame presets |
| TargetPosition | Target selection by coordinates |
| TargetFace | Face recognition targeting |
| AutoZoom | Enable/disable auto zoom |
| AutoStartArea | Configure auto start area |
| MaskArea | Configure mask areas |
| FrameMapping | Execute frame mapping |
| CurrentFrame | Frame position adjustment |
| GetImage | Retrieve thumbnails |

## Compatibility

- **Companion**: v3.0+
- **Node.js**: v18+ (v22 recommended)
- **Panasonic Software**: Media Production Suite with Auto Framing Plugin

## License

MIT
