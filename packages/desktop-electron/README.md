# desktop-electron

The Electron wrapper for Actual Budget's desktop application. This package handles building, packaging, and distributing the native desktop app for Windows, macOS, and Linux.

## Overview

`desktop-electron` provides:

- **Native desktop app** using Electron framework
- **Multi-platform builds** for Windows, macOS, and Linux
- **App packaging and distribution** with electron-builder
- **System integration** (menus, window management, file system access)
- **Auto-updater support** for seamless updates
- **Security hardening** with CSP and sandboxing

## Features

### Cross-Platform Support
- **Windows**: NSIS installer and Windows Store (APPX) packages
- **macOS**: DMG installer with Apple notarization  
- **Linux**: AppImage and Flatpak packages

### Native Integration
- Native menu bar with standard keyboard shortcuts
- Window state persistence (size, position)
- System notifications
- File system access for import/export
- Deep linking support

## Development

### Prerequisites
- Node.js 20+ 
- Yarn 4.9+
- Platform-specific build tools (Xcode for macOS, Visual Studio Build Tools for Windows)

### Scripts

```bash
# Start development mode
yarn watch

# Build distribution files
yarn build:dist

# Build full app packages  
yarn build

# Run end-to-end tests
yarn e2e

# Clean build artifacts
yarn clean
```

### Development Workflow

1. **Start development server**:
   ```bash
   yarn watch
   ```
   This builds the TypeScript code and starts Electron with hot reload.

2. **The app will use local data directory**: `../../data`

3. **Main process debugging**: Use VS Code or Chrome DevTools for the main process

4. **Renderer debugging**: Use built-in Chrome DevTools (Cmd+Option+I / Ctrl+Shift+I)

## Architecture

### Main Process (`index.ts`)
- Application lifecycle management
- Window creation and management  
- Menu setup and handling
- Security policies
- Auto-updater integration

### Preload Script (`preload.ts`)
- Secure context bridge between main and renderer
- Exposes limited APIs to the web content
- File system operations
- System integration features

### Security (`security.ts`)
- Content Security Policy configuration
- Sandbox restrictions
- Context isolation enforcement

## Build Configuration

The build process uses `electron-builder` with platform-specific configurations:

### Windows
- **NSIS installer**: Standard Windows installer with auto-updater
- **APPX package**: Microsoft Store distribution
- **Code signing**: Authenticode signatures (when certificates available)

### macOS  
- **DMG installer**: Drag-and-drop installer
- **Notarization**: Apple notarization for security
- **Universal builds**: Support for Intel and Apple Silicon
- **Code signing**: Apple Developer certificates required

### Linux
- **AppImage**: Portable application format
- **Flatpak**: Sandboxed application distribution
- **Auto-updater**: Supported via GitHub releases

## Distribution

### Release Process
1. Version bump in `package.json`
2. Build artifacts: `yarn build`
3. Upload to GitHub Releases
4. Auto-updater picks up new versions

### Artifacts
- **Windows**: `.exe` (NSIS), `.appx` (Store)
- **macOS**: `.dmg` (installer)  
- **Linux**: `.AppImage`, `.flatpak`

## File Structure

```
packages/desktop-electron/
├── index.ts              # Main Electron process
├── preload.ts           # Preload script for security
├── menu.ts              # Application menu setup
├── window-state.ts      # Window state management
├── security.ts          # Security configuration
├── server.ts            # Local server setup
├── icons/               # App icons for all platforms
├── e2e/                 # End-to-end tests
└── build/               # Built TypeScript output
```

## Environment Variables

- `ACTUAL_DOCUMENT_DIR`: Override document directory
- `ACTUAL_DATA_DIR`: Override data directory  
- `ACTUAL_SERVER_URL`: Connect to external sync server

## Technologies

- **Electron 30.5+** - Desktop app framework
- **TypeScript** - Primary language
- **electron-builder** - Packaging and distribution
- **Playwright** - End-to-end testing
- **better-sqlite3** - Native SQLite integration

## Troubleshooting

### Build Issues
- Ensure all platform-specific tools are installed
- Check Node.js version compatibility (20+)
- Clear `node_modules` and rebuild: `yarn install`

### Runtime Issues
- Check data directory permissions
- Verify security policies aren't blocking features
- Use Developer Tools for debugging renderer process

For more information about the overall project, see the main [README](../../README.md).