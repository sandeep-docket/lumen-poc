# Design System - Atomic Design Structure

This design system follows [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology, organizing UI components into three hierarchical levels.

## Overview

```
src/
├── atoms/          # Smallest building blocks
├── molecules/      # Simple combinations of atoms
├── organisms/      # Complex assemblies
└── theme/          # Design tokens & utilities
```

## Atomic Design Levels

### 🔷 Atoms (`src/atoms/`)

**Definition:** The smallest, indivisible UI elements. Cannot be broken down further without losing functionality.

**Characteristics:**
- Single HTML-like elements
- Highly reusable
- Directly use design tokens
- No dependencies on other components

**Examples:**
- `Button` - Interactive button with variants
- `Input` - Text input field
- `Label` - Form label
- `Badge` - Status indicator

**When to create an Atom:**
- ✅ It's a single element (button, input, icon)
- ✅ It can be used independently
- ✅ It maps directly to tokens (colors, spacing, typography)

**File Structure:**
```
atoms/
├── Button/
│   ├── Button.tsx
│   └── index.ts
├── Input/
│   ├── Input.tsx
│   └── index.ts
└── index.ts (barrel export)
```

### 🔶 Molecules (`src/molecules/`)

**Definition:** Simple combinations of 2+ atoms that form a functional unit.

**Characteristics:**
- Compose multiple atoms
- Serve a single, focused purpose
- Relatively simple logic
- Reusable across different contexts

**Examples:**
- `Card` - Container with header, content, footer (uses atoms as building blocks)
- `FormField` - Label + Input + Error message
- `SearchBar` - Input + Button

**When to create a Molecule:**
- ✅ It combines 2+ atoms
- ✅ It serves one clear purpose
- ✅ It's simpler than a full page section
- ✅ It can be used in different organisms

**File Structure:**
```
molecules/
├── Card/
│   ├── Card.tsx (exports Card, CardHeader, CardContent, etc.)
│   └── index.ts
├── FormField/
│   ├── FormField.tsx
│   └── index.ts
└── index.ts
```

### 🔴 Organisms (`src/organisms/`)

**Definition:** Complex, standalone sections composed of molecules and/or atoms. Represent distinct interface sections.

**Characteristics:**
- Highly composed (uses molecules + atoms)
- Can have complex state/logic
- Represent meaningful page sections
- May include business logic

**Examples:**
- `Header` - Logo + Navigation + Actions (mobile responsive)
- `Footer` - Multiple link sections + social icons + copyright
- `LoginForm` - Multiple FormFields + Buttons + validation logic

**When to create an Organism:**
- ✅ It's a major page section
- ✅ It combines multiple molecules
- ✅ It has significant functionality/state
- ✅ It could appear on multiple pages

**File Structure:**
```
organisms/
├── Header/
│   ├── Header.tsx
│   └── index.ts
├── Footer/
│   ├── Footer.tsx
│   └── index.ts
└── index.ts
```

## Decision Tree: Where Does My Component Go?

```
Is it a single HTML element?
├─ YES → Atom
└─ NO → Does it combine 2-3 components for one task?
         ├─ YES → Molecule
         └─ NO → Is it a major page section?
                  ├─ YES → Organism
                  └─ NO → Consider if it's a template or page
```

## Guidelines by Type

### Atoms Guidelines

1. **Keep them pure:** No business logic, just presentation
2. **Use variants:** Leverage `class-variance-authority` for styles
3. **Accept props:** Make them flexible with TypeScript interfaces
4. **Ref forwarding:** Always use `React.forwardRef` for DOM access
5. **Theme integration:** Use tokens from `@theme/tokens`

Example:
```typescript
import { cn } from "@theme/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(/* base styles */, {
  variants: { /* ... */ }
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  }
);
```

### Molecules Guidelines

1. **Compose, don't duplicate:** Import and use atoms
2. **Single responsibility:** Each molecule does one thing well
3. **Expose subcomponents:** Export related pieces (e.g., CardHeader, CardContent)
4. **Controlled/uncontrolled:** Support both patterns where appropriate
5. **Prop drilling:** Keep props simple and flat

Example:
```typescript
import { Label } from "@atoms/Label";
import { Input } from "@atoms/Input";

export const FormField = ({ label, error, inputProps }) => (
  <div>
    <Label>{label}</Label>
    <Input {...inputProps} />
    {error && <p className="text-destructive">{error}</p>}
  </div>
);
```

### Organisms Guidelines

1. **Complex composition:** Freely use molecules and atoms
2. **State management:** Can include hooks, context, etc.
3. **Responsive design:** Handle mobile/desktop variations
4. **Flexible slots:** Use render props or children for customization
5. **Accessibility:** Ensure ARIA attributes, keyboard navigation

Example:
```typescript
import { Button } from "@atoms/Button";
import { SearchBar } from "@molecules/SearchBar";

export const Header = ({ logo, navItems, actions }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header>
      {logo}
      <nav>{navItems.map(/* ... */)}</nav>
      {actions}
      {/* Mobile menu toggle logic */}
    </header>
  );
};
```

## Common Patterns

### Composition Pattern
```typescript
// Molecule composing atoms
import { Button } from "@atoms/Button";
import { Input } from "@atoms/Input";

export const SearchBar = () => (
  <form>
    <Input type="search" />
    <Button type="submit">Search</Button>
  </form>
);
```

### Compound Components Pattern
```typescript
// Exporting related subcomponents
export const Card = ({ children }) => <div className="card">{children}</div>;
Card.Header = ({ children }) => <div className="card-header">{children}</div>;
Card.Content = ({ children }) => <div className="card-content">{children}</div>;

// Usage:
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Content>Content</Card.Content>
</Card>
```

### Variant Pattern (using CVA)
```typescript
import { cva } from "class-variance-authority";

const variants = cva("base-classes", {
  variants: {
    variant: { default: "...", outline: "..." },
    size: { sm: "...", lg: "..." },
  },
});
```

## Imports & Aliases

Use TypeScript path aliases for clean imports:

```typescript
// ✅ Good
import { Button } from "@atoms/Button";
import { Card } from "@molecules/Card";
import { Header } from "@organisms/Header";
import { tokens } from "@theme";

// ❌ Avoid
import { Button } from "../../atoms/Button";
```

## Testing Strategy

- **Atoms:** Test variants, props, accessibility
- **Molecules:** Test composition, interactions
- **Organisms:** Test complex flows, state changes

## Extending the System

### Adding a New Atom
1. Create folder: `src/atoms/NewAtom/`
2. Create component: `NewAtom.tsx`
3. Export in `index.ts`
4. Update `src/atoms/index.ts` barrel export
5. Document variants and props

### Adding a New Molecule
1. Identify required atoms
2. Create folder: `src/molecules/NewMolecule/`
3. Import and compose atoms
4. Export in `src/molecules/index.ts`
5. Test in isolation

### Adding a New Organism
1. Design the composition (sketch or Figma)
2. Identify required molecules and atoms
3. Create folder: `src/organisms/NewOrganism/`
4. Implement with state/logic as needed
5. Test responsive behavior
6. Export and document

## Migration from Figma

When using MCP to generate from Figma:

1. **Atoms:** Copy individual Figma components
2. **Molecules:** Copy component sets with variants
3. **Organisms:** Copy entire frames/sections
4. **Prompt Cursor** to classify and generate in correct folder
5. **Review** and ensure token usage

## Resources

- [Atomic Design Book](https://atomicdesign.bradfrost.com/)
- [shadcn/ui Structure](https://ui.shadcn.com/)
- [Component Driven Development](https://www.componentdriven.org/)

---

**Remember:** Classification isn't always black and white. When in doubt, start simple (atom or molecule) and refactor to a higher level if complexity grows.

