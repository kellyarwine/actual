# loot-core

The core application package for Actual Budget that runs on any platform (web, desktop, mobile). This package contains the main business logic, data handling, client/server functionality, and platform abstractions.

## Overview

`loot-core` is the heart of Actual Budget, providing:

- **Database management** using SQLite with CRDT synchronization
- **Business logic** for budgeting, transactions, and account management  
- **Client-side data layer** with Redux state management
- **Platform abstractions** for web, desktop, and server environments
- **Query system** for data fetching and manipulation
- **Import/export functionality** for various file formats
- **Sync capabilities** for multi-device data synchronization

## Architecture

The package is organized into several key areas:

### `/src/client`
Client-side code including Redux store, query hooks, and UI data management:
- `accounts/` - Account management logic
- `app/` - App-level state and utilities  
- `budgets/` - Budget management and calculations
- `data-hooks/` - React hooks for data fetching
- `queries/` - Database query builders and helpers
- `redux/` - Redux store configuration and actions

### `/src/server` 
Server-side business logic and data processing:
- Core budget calculations and transaction processing
- Database schema and migrations
- Import/export engines for various bank formats
- Sync server integration

### `/src/shared`
Shared utilities and types used across client and server:
- Common data types and interfaces
- Utility functions and helpers
- Validation logic

### `/src/platform`
Platform-specific implementations for different environments:
- `client/` - Client platform abstractions (web vs desktop)
- `server/` - Server platform abstractions (Node.js vs web)

## Development

### Building

```bash
# Build for desktop/Electron
yarn build:node

# Build for web browser  
yarn build:browser

# Build API exports
yarn build:api

# Watch mode for development
yarn watch:node    # Desktop development
yarn watch:browser # Web development
```

### Testing

```bash
# Run all tests
yarn test

# Run Node.js environment tests
yarn test:node

# Run web environment tests  
yarn test:web
```

### Key Exports

The package provides numerous exports for use by other packages:

- **Client exports**: Account management, budgets, queries, Redux store
- **Server exports**: Database utilities, business logic, sync capabilities  
- **Shared exports**: Types, utilities, validation helpers
- **Platform exports**: Environment-specific implementations

## Database

loot-core uses SQLite as the primary database with:
- **CRDT (Conflict-free Replicated Data Type)** support for sync
- **Migrations** for schema updates  
- **Cross-platform** compatibility (web via WebAssembly, desktop via better-sqlite3)

## Technologies

- **TypeScript** - Primary language
- **SQLite** - Database (@jlongster/sql.js for web, better-sqlite3 for desktop)
- **Redux Toolkit** - State management
- **Webpack** - Build system
- **Vitest** - Testing framework
- **Date-fns** - Date manipulation
- **CSV parsing/generation** - Import/export functionality

## Integration

This package is used by:
- `@actual-app/web` - Web interface
- `desktop-electron` - Desktop application  
- `@actual-app/sync-server` - Sync server
- `@actual-app/api` - Public API

For more information about the overall project structure, see the main [README](../../README.md).