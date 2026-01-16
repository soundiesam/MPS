# Panasonic Media Production Suite Control System

## Overview

This project is a professional broadcast control application for managing the complete Panasonic Media Production Suite including Auto Framing Plugin, Auto Tracking Plugin, Video Mixer Plugin, and License API. It consists of two main components:

1. **Web Application** - A React-based control interface for camera management and monitoring
2. **Bitfocus Companion Module** - A standalone module for hardware controller integration

The web application provides a professional control interface designed for broadcast environments, emphasizing clarity, efficiency, and real-time status feedback. The Companion module enables physical button deck integration for hands-on camera control.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **Build Tool**: Vite with hot module replacement

The frontend follows a professional control interface design pattern inspired by broadcast software like vMix and OBS, prioritizing information density and operational efficiency.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Build Process**: esbuild for server bundling, Vite for client

The server handles API routes and serves the static frontend in production. Development mode uses Vite middleware for HMR.

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Migrations**: Generated to `./migrations` directory
- **Development Storage**: In-memory storage implementation available for testing

### Companion Module Architecture
The `companion-module-panasonic-mps` subdirectory contains a standalone Bitfocus Companion module:
- **API Version**: Companion Module Base v1.11
- **Runtime**: Node.js 18+
- **Features**: 60+ actions, 15 feedbacks, 150+ variables for comprehensive control
- **Communication**: HTTP to four Panasonic APIs:
  - Auto Framing Plugin (port 1338) - 15 commands
  - Auto Tracking Plugin (port 1337) - 8 commands
  - Video Mixer Plugin (port 1337) - 11 commands
  - License API (port 1337) - 1 command

## External Dependencies

### Database
- PostgreSQL (configured via `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe database operations

### Third-Party Services
- **Panasonic Media Production Suite**: Web APIs for camera and video control
  - Auto Framing Plugin (port 1338)
  - Auto Tracking, Video Mixer, License APIs (port 1337)
- **Bitfocus Companion**: External control surface software that loads the companion module

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-zod`: Database ORM and validation
- `@radix-ui/*`: Accessible UI primitives
- `@companion-module/base`: Bitfocus Companion module SDK
- `wouter`: Client-side routing
- `express`: HTTP server framework