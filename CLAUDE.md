# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 password generator web application (thepasswordgenerator.com) using TypeScript and React. The app generates secure passwords client-side with customizable options.

## Development Commands

```bash
# Development
npm run dev       # Start development server on http://localhost:3000

# Production
npm run build     # Create production build
npm run start     # Start production server

# Code Quality
npm run lint      # Run ESLint with Next.js rules
```

## Architecture

The project uses Next.js App Router with the following structure:

- **src/app/**: Main application code using App Router
  - `CreateForm.tsx`: Core password generator component with all generation logic
  - `page.tsx`: Home page that renders CreateForm and About components
  - `layout.tsx`: Root layout with metadata and Google Analytics
  - `globals.css`: Global styles with custom neon/glassmorphism theme
  - `Toast.tsx`: Toast notification component for user feedback
  - `blog/`: Blog section with SEO-optimized security articles

## Key Technical Details

### Password Generation
- All password generation happens client-side in `CreateForm.tsx`
- Uses crypto.getRandomValues() for secure random number generation
- Supports configurable character sets and ambiguous character filtering
- Length range: 8-256 characters

### Styling Approach
- Tailwind CSS for utility classes
- Custom CSS in globals.css for neon effects and glassmorphism
- Dark theme with glowing elements
- Responsive design using Tailwind breakpoints

### State Management
- Local component state with React hooks
- No global state management needed
- Form validation using Zod schemas

### Third-party Integrations
- Google Analytics 4 via react-ga4
- FontAwesome React components for icons
- Zod for runtime type validation

## Common Tasks

### Adding New Password Options
Modify the `CreateForm.tsx` component:
1. Add new state for the option
2. Update the password generation logic in the password generation function
3. Add UI controls in the form section

### Updating Styles
- Component-specific styles: Use Tailwind classes in the component
- Global theme changes: Edit `src/app/globals.css`
- Neon effects are defined as CSS custom properties in globals.css

### Analytics Events
Use the initialized ReactGA instance in layout.tsx to track events:
```typescript
import ReactGA from 'react-ga4';
ReactGA.event({ category: 'User', action: 'Generated Password' });
```