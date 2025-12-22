# Quick Start Guide

This guide will help you get started with the design system in 5 minutes.

## 1. Install Dependencies

```bash
cd "/Users/sandeepsalmon/Downloads/work/Docket/lumen test"
npm install
```

Required packages will be installed:
- React & TypeScript
- Tailwind CSS
- Radix UI primitives
- Class Variance Authority (CVA)
- Lucide icons

## 2. Run the Demo

```bash
npm run dev
```

Open http://localhost:5173 to see the demo application showcasing all components.

## 3. Import Components

```tsx
// Import atoms
import { Button, Input, Label, Badge } from '@atoms';

// Import molecules
import { Card, CardHeader, CardContent } from '@molecules';

// Import organisms
import { Header, Footer, LoginForm } from '@organisms';

// Or import from root
import { Button, Card, Header } from '@/';
```

## 4. Use Components

### Basic Button

```tsx
import { Button } from '@atoms/Button';

function MyComponent() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

### Card with Content

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@molecules/Card';

function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
    </Card>
  );
}
```

### Complete Layout

```tsx
import { Header, Footer } from '@organisms';

function Layout({ children }) {
  return (
    <>
      <Header
        logo={<span>Logo</span>}
        navItems={[
          { label: 'Home', href: '/', active: true },
        ]}
      />
      <main>{children}</main>
      <Footer copyright="© 2024 My App" />
    </>
  );
}
```

## 5. Customize Theme

Edit `src/theme/tokens.ts` to change colors, spacing, typography, etc.

```typescript
export const colors = {
  light: {
    primary: '220 50% 50%', // Change to your brand color
    // ...
  },
};
```

Or modify CSS variables in `src/index.css`:

```css
:root {
  --primary: 220 50% 50%; /* Your brand color */
  --radius: 0.5rem; /* Border radius */
}
```

## 6. Add Dark Mode Toggle

```tsx
import { useState } from 'react';
import { Button } from '@atoms/Button';
import { toggleTheme } from '@theme';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleToggle}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
```

## 7. Generate from Figma (Optional)

If you have Figma components:

1. Follow [docs/MCP_SETUP.md](./MCP_SETUP.md) to configure MCP
2. Copy a Figma component link
3. In Cursor, prompt:
   ```
   Generate this component from Figma using MCP.
   Use our design tokens and place in src/atoms/ComponentName/
   ```

## Next Steps

- 📚 Read [ATOMIC_DESIGN.md](./ATOMIC_DESIGN.md) to understand component classification
- 🔌 Set up [MCP integration](./MCP_SETUP.md) for Figma-to-code workflow
- 🎨 Customize tokens in `src/theme/tokens.ts`
- 🧩 Build new components following the Atomic Design structure
- 📦 Publish as npm package (update `package.json` first)

## Common Tasks

### Add a New Component

```bash
# Create folder structure
mkdir -p src/atoms/MyComponent
touch src/atoms/MyComponent/MyComponent.tsx
touch src/atoms/MyComponent/index.ts

# Add to barrel export
echo "export { MyComponent } from './MyComponent';" >> src/atoms/index.ts
```

### Build for Production

```bash
npm run build
```

Output will be in `dist/`.

### Lint Code

```bash
npm run lint
```

## Troubleshooting

**Issue:** Import errors

**Solution:** Check `tsconfig.json` paths are correct. Restart TypeScript server in your editor.

**Issue:** Styles not applying

**Solution:** Ensure Tailwind config includes your files in `content` array. Check `src/index.css` is imported.

**Issue:** Dark mode not working

**Solution:** Ensure `dark` class is added to `<html>` element. Use `applyTheme()` from `@theme`.

## Resources

- [Full README](../README.md)
- [Component Examples](../src/App.tsx)
- [Design Tokens](../src/theme/tokens.ts)

---

Need help? Check the main README or review example components in `src/`.

