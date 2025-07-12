# loot-core

The core application logic and data layer for Actual Budget. This package contains the platform-agnostic business logic, database operations, and shared utilities that power the Actual Budget application across all platforms.

## Overview

loot-core is the heart of Actual Budget, providing:

- Database management and SQL operations
- Business logic for budgeting, transactions, and accounts
- Platform abstraction layer
- Import/export functionality
- Synchronization logic
- API and data models

## Architecture

### Core Components

#### `/server`

The main business logic and data processing layer:

- **`accounts/`** - Account management and synchronization
- **`api.ts`** - Main API interface and request handling
- **`app.ts`** - Application lifecycle and initialization
- **`budget/`** - Budget calculations and operations
- **`budgetfiles/`** - Budget file management
- **`importers/`** - Bank and file import functionality
- **`payees/`** - Payee management and rules
- **`reports/`** - Financial reporting and analytics
- **`schedules/`** - Recurring transaction schedules
- **`sync/`** - Cross-device synchronization
- **`transactions/`** - Transaction processing and rules

#### `/shared`

Utilities and helpers used across platforms:

- **`arithmetic.ts`** - Financial calculations and precision handling
- **`months.ts`** - Month/date utilities for budgeting
- **`schedules.ts`** - Schedule parsing and execution
- **`transactions.ts`** - Transaction categorization and rules
- **`util.ts`** - General utility functions

#### `/platform`

Platform-specific abstractions:

- **`client/`** - Client-side platform adapters
- **`server/`** - Server-side platform adapters
- **`exceptions/`** - Error handling

#### `/types`

TypeScript type definitions:

- **`models/`** - Data model type definitions
- **Various `.d.ts`** - Type declarations for external libraries

#### `/mocks`

Test mocks and fixtures for development and testing

## Key Features

### Database Layer

- SQLite-based storage with migrations
- Cross-platform SQL operations
- Transaction integrity and ACID compliance
- Schema versioning and upgrades

### Financial Logic

- Envelope budgeting implementation
- Account reconciliation
- Transaction categorization
- Payee matching and rules
- Schedule processing

### Import/Export

- Multiple bank format support (OFX, QIF, CSV)
- YNAB import compatibility
- Custom CSV mapping
- Data validation and sanitization

### Synchronization

- End-to-end encrypted sync
- Conflict resolution
- Offline-first architecture
- Multi-device support

### Platform Abstraction

- Unified API across web, desktop, and mobile
- Environment-specific optimizations
- Consistent data layer regardless of platform

## Development

### Building

Build for different platforms:

```bash
# Browser build
yarn build:browser

# Desktop/Node build
yarn build:node

# API build
yarn build:api
```

### Watch Mode

For development with hot reloading:

```bash
# Browser development
yarn watch:browser

# Desktop development
yarn watch:node
```

### Testing

Run the test suite:

```bash
yarn test
```

Tests are split by environment:

- `yarn test:node` - Node.js specific tests
- `yarn test:web` - Browser specific tests

## Usage

loot-core is typically not used directly but rather consumed by:

- `@actual-app/web` - The web interface
- `desktop-electron` - The desktop application
- `@actual-app/api` - The public API package

### API Interface

The main API is exposed through `api.ts` and provides methods for:

- Budget operations
- Account management
- Transaction processing
- Report generation
- File operations

### Platform Integration

Different platforms initialize loot-core differently:

```typescript
// Web platform
import { init } from 'loot-core/platform/client';

// Desktop platform
import { init } from 'loot-core/platform/server';
```

## Configuration

loot-core can be configured through:

- Environment variables
- Platform-specific configuration files
- Runtime options passed to `init()`

## Performance Considerations

- Database operations are optimized for large datasets
- Lazy loading for heavy operations
- Memory-efficient transaction processing
- Background sync operations

## Security

- End-to-end encryption for sync
- Local data encryption options
- Secure credential handling
- Input validation and sanitization

## Contributing

When contributing to loot-core:

1. Ensure cross-platform compatibility
2. Add tests for new functionality
3. Update type definitions as needed
4. Consider performance implications
5. Maintain backward compatibility for data formats

## License

MIT - See the main repository LICENSE file for details.
