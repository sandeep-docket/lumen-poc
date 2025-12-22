# Design System

A comprehensive design system based on [shadcn-ui-kit](https://github.com/Obra-Studio/shadcn-ui-kit) with Atomic Design methodology.

## 🎯 Features

- ⚛️ **Atomic Design Structure** - Organized into atoms, molecules, and organisms
- 🎨 **Design Tokens** - Centralized theme with CSS variables
- 🌓 **Dark Mode Support** - Built-in light/dark theme switching
- 🔧 **TypeScript** - Fully typed components
- 💅 **Tailwind CSS** - Utility-first styling with custom configuration
- 🔌 **MCP Integration** - Generate components from Figma via Model Context Protocol
- ♿ **Accessible** - ARIA attributes and keyboard navigation
- 📦 **Tree-shakeable** - Import only what you need

## 📁 Project Structure

```
/Users/sandeepsalmon/Downloads/work/Docket/lumen test/
├── src/
│   ├── atoms/              # Basic building blocks
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Label/
│   │   └── Badge/
│   ├── molecules/          # Simple compositions
│   │   ├── Card/
│   │   ├── FormField/
│   │   └── SearchBar/
│   ├── organisms/          # Complex sections
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── LoginForm/
│   ├── theme/              # Design tokens & utilities
│   │   ├── tokens.ts
│   │   ├── theme.ts
│   │   └── utils.ts
│   └── index.ts            # Main entry point
├── docs/                   # Documentation
│   ├── MCP_SETUP.md        # Figma MCP configuration
│   └── ATOMIC_DESIGN.md    # Component classification guide
└── .cursorrules/           # Cursor AI configuration
    └── mcp.json
```

## 🚀 Quick Start

### Installation

```bash
# Clone or initialize in your project
cd "/Users/sandeepsalmon/Downloads/work/Docket/lumen test"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Basic Usage

```tsx
import { Button, Card, CardHeader, CardContent, Header } from '@/';

function App() {
  return (
    <>
      <Header
        logo={<span>Logo</span>}
        navItems={[
          { label: 'Home', href: '/', active: true },
          { label: 'About', href: '/about' },
        ]}
      />
      
      <main>
        <Card>
          <CardHeader>
            <h2>Welcome</h2>
          </CardHeader>
          <CardContent>
            <Button variant="primary">Get Started</Button>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
```

## 📚 Documentation

### Core Concepts

1. **[Atomic Design Structure](./docs/ATOMIC_DESIGN.md)** - Learn about atoms, molecules, and organisms
2. **[MCP Setup](./docs/MCP_SETUP.md)** - Configure Figma integration with Cursor AI
3. **Design Tokens** - Centralized theme system in `src/theme/tokens.ts`

### Component Levels

#### Atoms (Basic Elements)
- `Button` - Interactive button with variants (default, outline, destructive, etc.)
- `Input` - Text input field with validation states
- `Label` - Form labels with accessibility
- `Badge` - Status indicators and tags

#### Molecules (Compositions)
- `Card` - Container with header, content, footer subcomponents
- `FormField` - Label + Input + Error message combo
- `SearchBar` - Search input with button

#### Organisms (Complex Sections)
- `Header` - Navigation with logo, menu, and mobile responsive design
- `Footer` - Footer with links, social icons, copyright
- `LoginForm` - Complete login form with validation

## 🎨 Design Tokens

All design decisions are centralized in `src/theme/tokens.ts`:

```typescript
import { tokens } from '@theme';

// Access tokens
tokens.colors.light.primary;
tokens.typography.fontSize.lg;
tokens.spacing[4];
tokens.radius.md;
```

### Theme System

```typescript
import { applyTheme, toggleTheme, getTheme } from '@theme';

// Get current theme
const current = getTheme(); // 'light' | 'dark'

// Toggle between light/dark
toggleTheme();

// Set specific theme
applyTheme('dark');
```

## 🔌 Figma to Code (MCP)

This design system supports **Model Context Protocol (MCP)** for generating components from Figma.

### Setup

1. Enable MCP in Figma (Preferences → Dev Mode)
2. Get your Figma Personal Access Token
3. Configure `.cursorrules/mcp.json` with your token
4. See **[MCP_SETUP.md](./docs/MCP_SETUP.md)** for detailed instructions

### Usage

1. Copy Figma component link
2. In Cursor, paste and prompt:
   ```
   Generate this component from Figma using MCP.
   Use TypeScript, Tailwind, and our design tokens.
   Place it in src/atoms/ComponentName/
   ```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Build for production

# Lint
npm run lint             # Check code quality

# Storybook (optional)
npm run storybook        # Preview components
npm run build-storybook  # Build static Storybook
```

### Adding Components

#### New Atom
```bash
# Create structure
mkdir -p src/atoms/NewAtom
touch src/atoms/NewAtom/NewAtom.tsx
touch src/atoms/NewAtom/index.ts

# Update src/atoms/index.ts with export
```

#### New Molecule
```bash
# Create and compose atoms
mkdir -p src/molecules/NewMolecule
# Import atoms and combine
```

#### New Organism
```bash
# Create complex section
mkdir -p src/organisms/NewOrganism
# Compose molecules and atoms
```

See [ATOMIC_DESIGN.md](./docs/ATOMIC_DESIGN.md) for classification guidelines.

## 🎯 Best Practices

### Component Guidelines

1. **Use TypeScript** - Always type props and refs
2. **Forward Refs** - Enable DOM access with `React.forwardRef`
3. **Use Tokens** - Reference `@theme/tokens` instead of hardcoded values
4. **Variants** - Use `class-variance-authority` for style variants
5. **Accessibility** - Include ARIA attributes and keyboard support
6. **Composition** - Import lower-level components instead of duplicating

### Example Component

```tsx
import * as React from "react";
import { cn } from "@theme/utils";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva("base-styles", {
  variants: {
    variant: { default: "...", outline: "..." },
  },
});

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(variants({ variant }), className)}
        {...props}
      />
    );
  }
);
Component.displayName = "Component";
```

## 🔧 Configuration

### TypeScript Paths

Aliases are configured in `tsconfig.json`:

```json
{
  "paths": {
    "@/*": ["./src/*"],
    "@atoms/*": ["./src/atoms/*"],
    "@molecules/*": ["./src/molecules/*"],
    "@organisms/*": ["./src/organisms/*"],
    "@theme/*": ["./src/theme/*"]
  }
}
```

### Tailwind Configuration

Theme extends are in `tailwind.config.js` with CSS variables from `src/index.css`.

## 📦 Publishing

To publish as an npm package:

1. Update `package.json` with your package name
2. Build: `npm run build`
3. Publish: `npm publish`

## 🤝 Contributing

1. Follow Atomic Design principles
2. Use consistent naming (match Figma where possible)
3. Document new components
4. Ensure accessibility
5. Add TypeScript types

## 📄 License

MIT

## 🔗 Resources

- [shadcn-ui-kit](https://github.com/Obra-Studio/shadcn-ui-kit) - Reference implementation
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) - Methodology
- [Tailwind CSS](https://tailwindcss.com/) - Utility classes
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Cursor AI](https://cursor.com/) - AI-powered development

## 🆘 Support

For issues or questions:
1. Check [docs/](./docs/) for guides
2. Review existing components as examples
3. Refer to shadcn-ui-kit documentation

---

Built with ❤️ using Cursor AI and Atomic Design

