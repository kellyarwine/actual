# Desktop Electron

The Electron desktop application wrapper for Actual Budget, providing a native desktop experience for Windows, macOS, and Linux.

## Overview

This package contains the Electron main process code that creates and manages the desktop application window, handles system integration, and provides native desktop features for Actual Budget.

## Features

- **Cross-platform**: Supports Windows, macOS, and Linux
- **Native menus**: Platform-specific application menus
- **File system access**: Local file operations for budget data
- **Window state management**: Remembers window size and position
- **Auto-updater**: Built-in update mechanism
- **Security**: Secure context isolation and CSP implementation

## Architecture

### Main Process (`index.ts`)

- Application lifecycle management
- Window creation and management
- IPC communication with renderer process
- Native system integration

### Preload Script (`preload.ts`)

- Secure bridge between main and renderer processes
- Exposes safe APIs to the web content
- Context isolation for security

### Menu System (`menu.ts`)

- Platform-specific application menus
- Keyboard shortcuts
- Native menu integration

### Window State (`window-state.ts`)

- Persistent window positioning and sizing
- Multi-monitor support
- Window state restoration

### Security (`security.ts`)

- Content Security Policy configuration
- Secure defaults for Electron

## Building

### Development

Run the desktop app in development mode:

```bash
yarn start:desktop
```

### Production Build

Build the desktop application:

```bash
yarn build:desktop
```

This creates platform-specific installers:

- **Windows**: NSIS installer (.exe) and Microsoft Store package (.appx)
- **macOS**: DMG installer for both Intel and Apple Silicon
- **Linux**: AppImage and Flatpak packages

## Distribution

The application is distributed through multiple channels:

- Direct download from [actualbudget.org](https://actualbudget.org/download/)
- Microsoft Store (Windows)
- Flathub (Linux)
- Homebrew Cask (macOS)

## Development Setup

1. Install dependencies from the repository root:

   ```bash
   yarn install
   ```

2. Build the required dependencies:

   ```bash
   yarn desktop-dependencies
   ```

3. Start development server:
   ```bash
   yarn start:desktop
   ```

## Testing

End-to-end tests are included using Playwright:

```bash
yarn e2e:desktop
```

## Platform-Specific Features

### Windows

- Windows Store packaging
- Windows-specific menu layouts
- File associations

### macOS

- Code signing and notarization
- macOS-specific menu conventions
- Universal binaries (Intel + Apple Silicon)

### Linux

- Flatpak packaging with runtime dependencies
- AppImage for universal Linux distribution
- FreeDesktop.org standards compliance

## Configuration

The application can be configured through:

- Command line arguments
- Environment variables
- Application menu preferences

## Security

The Electron app implements security best practices:

- Context isolation enabled
- Node integration disabled in renderer
- Secure defaults for web security
- Content Security Policy enforcement

## License

MIT - See the main repository LICENSE file for details.
