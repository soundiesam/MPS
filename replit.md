# Panasonic Auto Framing Control System

## Overview

This project is a professional broadcast control application for managing Panasonic Media Production Suite Auto Framing Plugin. It consists of two main components:

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
The `companion-module-panasonic-autoframing` subdirectory contains a standalone Bitfocus Companion module:
- **API Version**: Companion Module Base v1.11
- **Runtime**: Node.js 22
- **Features**: 30+ actions, feedbacks, variables, and presets for camera control
- **Communication**: HTTP/HTTPS to Panasonic Auto Framing Plugin Web API v1.11.1

## External Dependencies

### Database
- PostgreSQL (configured via `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe database operations

### Third-Party Services
- **Panasonic Auto Framing Plugin**: Web API endpoint for camera control (default port 1338)
- **Bitfocus Companion**: External control surface software that loads the companion module

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-zod`: Database ORM and validation
- `@radix-ui/*`: Accessible UI primitives
- `@companion-module/base`: Bitfocus Companion module SDK
- `wouter`: Client-side routing
- `express`: HTTP server framework