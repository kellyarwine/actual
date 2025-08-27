# `desktop-electron`

This package contains the Electron desktop application for Actual Budget. It wraps the web application in a native desktop environment for Windows, macOS, and Linux.

## Overview

The desktop application provides:

- **Native desktop experience** with OS integration
- **Local file system access** for budget storage
- **Menu bar integration** with keyboard shortcuts
- **Auto-updater support** for seamless updates
- **Cross-platform builds** for all major operating systems

## Development

### Prerequisites

- Node.js 18+
- Yarn package manager

### Running in Development

```bash
# Build and watch the desktop app
yarn start:desktop

# Or run individual components:
yarn desktop-dependencies
yarn start:desktop-electron
```

### Building for Production

```bash
# Build the complete desktop application
yarn build:desktop

# Build distribution files only (without executable)
yarn build:dist
```

## Architecture

- **Main Process**: Electron main process (`index.ts`)
- **Renderer Process**: Web application content
- **Preload Scripts**: Secure bridge between main and renderer
- **Menu System**: Native menu bar integration (`menu.ts`)
- **Window Management**: Window state and lifecycle (`window-state.ts`)

## Packaging

The application is packaged for distribution using electron-builder:

- **macOS**: DMG installer with notarization
- **Windows**: NSIS installer and APPX for Microsoft Store
- **Linux**: AppImage and Flatpak packages

## Security

The application implements security best practices:

- Context isolation enabled
- Node integration disabled in renderers
- Content Security Policy enforcement
- Secure preload script communication

## File Structure

- `index.ts` - Main application entry point
- `menu.ts` - Native menu definitions
- `preload.ts` - Secure renderer communication
- `security.ts` - Security policy configuration
- `icons/` - Application icons for all platforms
