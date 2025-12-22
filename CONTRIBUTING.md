# Contributing to Design System

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/REPO_NAME.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Running Locally

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Check code quality
```

### Project Structure

```
src/
├── atoms/       # Basic building blocks (Button, Input, etc.)
├── molecules/   # Simple compositions (Card, FormField, etc.)
├── organisms/   # Complex sections (Header, Footer, etc.)
└── theme/       # Design tokens and utilities
```

## Adding Components

### 1. Determine Classification

Before creating a component, determine its level:

- **Atom:** Single HTML element (button, input, icon)
- **Molecule:** 2-3 atoms combined (form field, search bar)
- **Organism:** Complex section (header, footer, login form)

See [docs/ATOMIC_DESIGN.md](./docs/ATOMIC_DESIGN.md) for detailed guidelines.

### 2. Create Component Files

For an atom called `Switch`:

```bash
mkdir -p src/atoms/Switch
touch src/atoms/Switch/Switch.tsx
touch src/atoms/Switch/index.ts
```

### 3. Write the Component

Follow these patterns:

```tsx
// src/atoms/Switch/Switch.tsx
import * as React from "react";
import { cn } from "@theme/utils";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "base-classes",
  {
    variants: {
      size: {
        sm: "h-4 w-8",
        md: "h-6 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof switchVariants> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={cn(switchVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Switch.displayName = "Switch";
```

```tsx
// src/atoms/Switch/index.ts
export { Switch } from './Switch';
export type { SwitchProps } from './Switch';
```

### 4. Update Barrel Exports

Add to `src/atoms/index.ts`:

```typescript
export { Switch } from './Switch';
export type { SwitchProps } from './Switch';
```

### 5. Add Documentation

Update `docs/EXAMPLES.md` with usage examples.

## Code Standards

### TypeScript

- ✅ Always provide type definitions
- ✅ Use interfaces for props
- ✅ Export prop types
- ✅ Use `React.forwardRef` for DOM components

### Styling

- ✅ Use Tailwind utility classes
- ✅ Use `cn()` utility for class merging
- ✅ Use CVA for variants
- ✅ Reference design tokens from `@theme/tokens`
- ❌ Avoid inline styles
- ❌ Don't hardcode colors or spacing

### Accessibility

- ✅ Add ARIA attributes where needed
- ✅ Support keyboard navigation
- ✅ Test with screen readers
- ✅ Ensure proper color contrast

### Example (Good)

```tsx
import { cn } from "@theme/utils";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
```

### Example (Bad)

```tsx
// ❌ No TypeScript, no forwardRef, inline styles
export const Button = ({ onClick }) => {
  return (
    <button
      style={{ backgroundColor: '#007bff', padding: '10px' }}
      onClick={onClick}
    >
      Click
    </button>
  );
};
```

## Commit Messages

Follow conventional commits:

```
feat: add Switch component
fix: correct Button hover state
docs: update EXAMPLES.md with Card usage
style: format code with prettier
refactor: simplify Header mobile menu logic
test: add Button tests
chore: update dependencies
```

## Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/switch-component
   ```

2. **Make Changes**
   - Add component
   - Update documentation
   - Add examples

3. **Test Locally**
   ```bash
   npm run lint
   npm run build
   npm run dev  # Verify in browser
   ```

4. **Commit**
   ```bash
   git add .
   git commit -m "feat: add Switch component with variants"
   ```

5. **Push**
   ```bash
   git push origin feature/switch-component
   ```

6. **Create Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Fill out template
   - Request review

### PR Checklist

- [ ] Component follows Atomic Design principles
- [ ] TypeScript types are defined
- [ ] Component uses design tokens
- [ ] Documentation is updated
- [ ] Examples are added
- [ ] Code is linted (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Component is responsive (if applicable)
- [ ] Accessibility is considered

## Design Tokens

When adding or modifying components, use tokens from `src/theme/tokens.ts`:

```tsx
import { tokens } from '@theme';

// ✅ Use tokens
const spacing = tokens.spacing[4];
const primaryColor = tokens.colors.light.primary;

// ❌ Don't hardcode
const spacing = '16px';
const primaryColor = '#007bff';
```

## Using MCP for Figma Integration

If generating from Figma:

1. Set up MCP following [docs/MCP_SETUP.md](./docs/MCP_SETUP.md)
2. Copy Figma component link
3. Use Cursor to generate component
4. Review and refine generated code
5. Ensure it matches design system patterns

## Questions?

- Check [docs/](./docs/) for guides
- Review existing components for patterns
- Open an issue for discussion

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow

Thank you for contributing! 🎉

