# Todo2 📋

A modern, feature-rich todo application built with React and Node.js. Todo2 helps you organize your tasks, set priorities, and boost your productivity with an intuitive interface and powerful features.

## ✨ Features

- 📝 **Task Management**: Create, edit, delete, and organize your tasks
- 🏷️ **Categories & Tags**: Organize tasks with custom categories and tags
- ⏰ **Due Dates**: Set deadlines and get reminders
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔄 **Real-time Sync**: Synchronize your tasks across all devices
- 🎨 **Customizable Themes**: Choose from multiple themes or create your own
- 📊 **Progress Tracking**: Visual indicators for task completion
- 🔍 **Advanced Search**: Find tasks quickly with powerful search and filtering
- 📋 **Lists & Projects**: Organize tasks into lists and projects
- ✅ **Subtasks**: Break down complex tasks into manageable subtasks

## 🚀 Quick Start

### Prerequisites

- Node.js (v20 or higher)
- Yarn (v4.9.1 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kellyarwine/todo2.git
   cd todo2
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to start using Todo2!

## 🏗️ Project Structure

```
todo2/
├── packages/
│   ├── desktop-client/     # React frontend application
│   ├── sync-server/        # Node.js backend server
│   ├── loot-core/         # Core business logic
│   ├── desktop-electron/  # Electron desktop app
│   ├── api/               # REST API layer
│   └── component-library/ # Shared UI components
├── data/                  # Database and storage
├── docs/                  # Documentation
└── bin/                   # Build scripts
```

## 📖 Usage

### Creating Tasks

1. Click the "+" button or press `Ctrl+N` (Windows/Linux) or `Cmd+N` (Mac)
2. Enter your task title and description
3. Set optional due date, priority, and category
4. Click "Save" or press `Enter`

### Organizing Tasks

- **Lists**: Group related tasks into custom lists
- **Categories**: Use categories to classify tasks by type
- **Tags**: Add hashtags for flexible organization
- **Priorities**: Set High, Medium, or Low priority levels

### Keyboard Shortcuts

- `Ctrl/Cmd + N`: New task
- `Ctrl/Cmd + F`: Search tasks
- `Ctrl/Cmd + D`: Mark task as done
- `Delete`: Delete selected task
- `Ctrl/Cmd + E`: Edit selected task

## 🔧 Development

### Available Scripts

- `yarn start`: Start development server
- `yarn start:desktop`: Start desktop application
- `yarn start:server`: Start backend server only
- `yarn build:browser`: Build web application
- `yarn build:desktop`: Build desktop application
- `yarn test`: Run all tests
- `yarn lint`: Run linting
- `yarn typecheck`: Run TypeScript type checking

### Testing

Run the test suite:
```bash
yarn test --watch=false
```

Run tests for specific package:
```bash
yarn workspace @todo2/desktop-client run test
```

### Building for Production

**Web Application:**
```bash
yarn build:browser
```

**Desktop Application:**
```bash
yarn build:desktop
```

**Server:**
```bash
yarn build:server
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

### Using Docker

```bash
# Build the image
docker build -t todo2 .

# Run the container
docker run -d -p 5006:5006 --name todo2-app todo2
```

## 🌐 Deployment Options

1. **Self-hosted**: Use Docker or deploy directly to your server
2. **Cloud platforms**: Deploy to Heroku, Vercel, or Netlify
3. **Desktop app**: Download the standalone application

## 📱 Mobile Support

Todo2 is fully responsive and works great on mobile devices. For the best mobile experience:

- Add Todo2 to your home screen (PWA support)
- Use touch gestures for quick actions
- Enable push notifications for reminders

## 🎨 Customization

### Themes

Todo2 supports multiple themes:
- Light theme (default)
- Dark theme
- High contrast theme
- Custom themes via CSS variables

### Configuration

Customize your experience in Settings:
- Default view (list, board, calendar)
- Date format preferences
- Notification settings
- Keyboard shortcuts

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run `yarn lint` and `yarn test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 🐛 Bug Reports & Feature Requests

- **Bug Reports**: [Create an issue](https://github.com/kellyarwine/todo2/issues/new?template=bug_report.md)
- **Feature Requests**: [Create an issue](https://github.com/kellyarwine/todo2/issues/new?template=feature_request.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🙏 Acknowledgments

- Built with React, Node.js, and TypeScript
- UI components from our custom component library
- Icons from [Heroicons](https://heroicons.com/)
- Inspired by modern productivity tools

## 📞 Support

- 📧 Email: support@todo2.app
- 💬 Discord: [Join our community](https://discord.gg/todo2)
- 📖 Documentation: [docs.todo2.app](https://docs.todo2.app)

---

Made with ❤️ by the Todo2 team
