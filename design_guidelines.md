# Design Guidelines: Companion Module for Panasonic Auto Framing Control

## Design Approach

**Selected Approach**: Design System - Fluent Design / Professional Control Interface
**Justification**: This is a professional broadcast control module requiring clarity, efficiency, and information density. Drawing inspiration from industry-standard control software like vMix, OBS Studio, and Elgato Stream Deck interfaces.

**Key Design Principles**:
1. **Immediate Clarity**: All controls and status indicators visible without hunting
2. **Professional Efficiency**: Minimize clicks for frequent operations
3. **Status Transparency**: Real-time feedback on camera states and operations
4. **Fail-Safe Design**: Clear distinction between destructive and non-destructive actions

---

## Core Design Elements

### A. Typography

**Primary Font Family**: 
- Interface: Inter or Roboto (via Google Fonts CDN)
- Monospace (for IDs/technical data): JetBrains Mono

**Typography Scale**:
- Section Headers: 16px, font-semibold (600)
- Control Labels: 13px, font-medium (500)
- Button Text: 14px, font-medium (500)
- Status Indicators: 12px, font-normal (400)
- Camera IDs/Technical: 13px, font-mono

---

### B. Layout System

**Spacing Primitives**: Tailwind units of **2, 3, 4, 6, 8**
- Tight spacing (component internals): p-2, gap-2
- Standard spacing (between controls): p-3, gap-3, m-4
- Section separation: p-6, gap-6
- Major divisions: p-8, gap-8

**Grid Structure**:
- Main container: max-w-7xl with responsive padding (px-4 md:px-6)
- Multi-column layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for camera cards
- Control panels: Flexible grid adapting to content density

---

### C. Component Library

#### 1. **Core Camera Control Card**
Each camera gets a dedicated control card containing:
- **Header Section**: 
  - Camera ID (prominent, mono font)
  - Enable toggle (immediate visual ON/OFF state)
  - Connection status indicator (icon + text)
  
- **Primary Controls** (2-column grid):
  - Start/Stop button (large, primary action)
  - Auto Face Search button
  - Preset controls (Recall, Set, Delete as icon buttons)
  - Target Frame controls
  
- **Status Display Panel**:
  - Framing State (text readout)
  - Current tracking mode
  - Face detection count
  - Last action timestamp

- **Collapsible Advanced Section**:
  - Tracking Control sliders (compact, labeled)
  - Auto Zoom toggle
  - Frame Mapping button
  - Mask Area configuration

#### 2. **Navigation & Organization**
- **Top Bar**: 
  - Module title
  - Global controls (if applicable)
  - Settings access icon button
  - Connection status summary

- **Camera Grid**: 
  - Responsive card layout
  - Sortable/filterable by camera ID
  - Visual grouping if multiple camera groups exist

#### 3. **Form Elements**
- **Toggles**: Large hit areas (min 44px), clear ON/OFF states with text labels
- **Buttons**: 
  - Primary actions: Solid fill, min-h-10
  - Secondary actions: Outlined, min-h-9
  - Icon buttons: Square, p-2, hover state
  - Destructive actions: Distinct visual treatment with confirmation
  
- **Sliders**: Full-width within containers, labeled endpoints, current value display
- **Dropdowns**: Standard height (h-10), clear selected value
- **Input Fields**: Monospace for numeric/ID inputs, regular for text

#### 4. **Data Display**
- **Status Badges**: Compact, rounded-full px-2 py-1, icon + text
- **Real-time Indicators**: Pulsing animation for "active" states (use sparingly)
- **Value Readouts**: Tabular layout with label-value pairs, gap-2 between pairs

#### 5. **Feedback & Overlays**
- **Toast Notifications**: Top-right positioning, auto-dismiss, stackable
- **Confirmation Dialogs**: Centered modal, focused messaging, clear action buttons
- **Loading States**: Skeleton loaders within component boundaries (not full-screen)
- **Error States**: Inline error messages with retry actions where applicable

---

### D. Animations

**Minimal Animation Strategy**:
- Hover states: Subtle opacity/scale changes (150ms duration)
- Toggle switches: Smooth position transition (200ms)
- Panel expansion: Height animation (300ms ease-out)
- Toast entrance/exit: Slide + fade (250ms)

**No Animations For**:
- Status updates (instant feedback)
- Grid reordering
- Tab switching

---

## Interface Structure

### Main Control Dashboard

**Layout Pattern**: 
- Full-width header (h-16, fixed or sticky)
- Main content area with responsive grid
- Each camera card as self-contained unit

**Camera Card Dimensions**:
- Mobile: Full width, stacked
- Tablet (md:): 2 columns, min-w-80
- Desktop (lg:): 3 columns, max-w-96 per card

**Information Hierarchy Within Cards**:
1. Camera identification & enable state (always visible)
2. Primary framing controls (Start/Stop, Face Search)
3. Quick status readout (collapsed by default on mobile)
4. Advanced controls (collapsible accordion)

---

## Critical Implementation Notes

1. **No Color References**: Layout and structure only; color schemes applied separately
2. **Icon Library**: Use Heroicons (outline for secondary, solid for active states) via CDN
3. **Responsive Breakpoints**: 
   - Mobile-first approach
   - md: 768px (tablet)
   - lg: 1024px (desktop)
   - xl: 1280px (wide screens)

4. **Accessibility**:
   - All interactive elements min 44x44px touch target
   - Form labels explicitly associated with inputs
   - Status changes announced to screen readers
   - Keyboard navigation for all controls (tab order logical)

5. **Professional UX Patterns**:
   - Undo capability for preset deletions
   - Bulk operations for multi-camera control
   - Keyboard shortcuts for power users (display hint on hover)
   - Persistent state (remember collapsed/expanded panels)

---

## Images

**No hero images or marketing imagery required**. This is a functional control interface.

**Thumbnail Images** (from API):
- Advanced Preset thumbnails (aspect ratio 16:9, max-w-48)
- Target Frame thumbnails (same dimensions)
- Current Framing preview (larger, max-w-64)
- Display within camera cards with 1px border, rounded corners