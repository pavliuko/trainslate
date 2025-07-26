# Trainslate Development Guide

## Project Overview
Trainslate is a blazing-fast translation agent with a clean, familiar interface — no chat, just type and translate. Instantly edit inputs with live updates. Includes translation history and usage tracking. Fully customizable via repo fork: adjust prompts, logic, and UI. Hotkey-friendly and built for serious speed.

## Development Rules

### TODO Management
**IMPORTANT**: Always update the [TODO.md](./TODO.md) file when:
- Starting work on a new feature
- Completing a feature or subtask
- Discovering new requirements or edge cases
- Changing feature priorities
- Finding bugs that need to be tracked

The TODO.md file is the single source of truth for all pending work.

## Development Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run linter
```

## Environment Setup

### Required Dependencies
- Next.js 15+ with TypeScript
- Tailwind CSS for styling
- Lucide React for icons

### Local Storage Keys

## Architecture

### Core Components
- `MainPage` - Main translation interface
- `AuthPage` - Email authentication UI (not in MVP)

## The Vision

Enable this seamless workflow:
1. Open the app
2. Type your text in the input field
3. Trigger translation automatically or with a hotkey
4. Instantly see the translated result
5. Copy or reuse results from your translation history
6. Enjoy a fast, clean, keyboard-friendly experience


## Important Development Guidelines

### Code Development Rules
```
# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
ALWAYS update TODO.md when making progress on features, finding bugs, or discovering new requirements.
NEVER proactively commit and push to repository.
```

### TODO Management
The [TODO.md](./TODO.md) file must be kept up to date as the single source of truth for all pending work. Update it whenever you:
- Start or complete work on any feature
- Discover new requirements or edge cases
- Find bugs that need tracking
- Change priorities based on user feedback

### Build and Development Reminders
- Always run `npm run build` after modifications to:
  - Catch and fix potential build errors
  - Ensure production-ready code
  - Verify all changes compile correctly

## Git Workflow
rules/commit-message.md
rules/pr.md
rules/commit-staged-push.md

## Create/Update agent rules
rules/rules-meta-guide.md