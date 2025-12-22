# Figma Tokens vs Implementation Comparison

This document compares the tokens/variables from Figma with what's currently implemented in the codebase.

## ✅ Colors - Imported from Figma

### Color Families Available in Figma (20 total)

| Family | Shades | Status | Usage Notes |
|--------|--------|--------|-------------|
| **Neutral** | 50-950 | ✅ All Used | Grays for backgrounds, borders, text |
| **Red** | 50-950 | ✅ 5 Used | Destructive/error states |
| **Blue** | 50-950 | ✅ 1 Used | Primary actions |
| **Slate** | 50-950 | Available | Alternative neutral |
| **Zinc** | 50-950 | Available | Alternative neutral |
| **Stone** | 50-950 | Available | Alternative neutral |
| **Sky** | 50-950 | Available | Light blue variant |
| **Orange** | 50-950 | Available | Warning states |
| **Lime** | 50-950 | Available | Success variant |
| **Yellow** | 50-950 | Available | Warning states |
| **Indigo** | 50-950 | Available | Primary variant |
| **Amber** | 50-950 | Available | Warning variant |
| **Emerald** | 50-950 | Available | Success states |
| **Teal** | 50-950 | Available | Accent color |
| **Cyan** | 50-950 | Available | Accent color |
| **Violet** | 50-950 | Available | Accent color |
| **Purple** | 50-950 | Available | Accent color |
| **Pink** | 50-950 | Available | Accent color |
| **Rose** | 50-950 | Available | Destructive variant |
| **Green** | 50-950 | Available | Success states |

### Current Implementation vs Figma

#### ✅ Implemented (Current tokens.ts)
- Semantic color tokens (primary, secondary, destructive, etc.)
- Light/dark mode support
- HSL format for theme switching

#### ✅ Available in Figma (Now Imported)
- 20 color families
- 11 shades per family (50-950)
- Hex format (converted to HSL)

### Mapping Recommendations

Based on shadcn-ui patterns and Figma usage:

```typescript
// Recommended mapping:
primary: blue-500 (#3B82F6) → '217 91% 60%'
secondary: neutral-200 (#E5E5E5) → '0 0% 90%'
destructive: red-500 (#EF4444) → '0 84% 60%'
muted: neutral-100 (#F5F5F5) → '0 0% 96%'
accent: blue-100 (#DBEAFE) → '214 96% 92%'
border: neutral-200 (#E5E5E5) → '0 0% 90%'
background: neutral-50 (#FAFAFA) → '0 0% 98%'
foreground: neutral-950 (#0A0A0A) → '0 0% 4%'
```

## 📊 Typography

### Current Implementation
- Font families: sans, mono
- Font sizes: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
- Font weights: light, normal, medium, semibold, bold
- Line heights: none, tight, snug, normal, relaxed, loose

### Figma Status
- ⚠️ **Need to check**: Typography variables in Figma
- Action: Navigate to Typography page in Figma to extract

## 📏 Spacing

### Current Implementation
- Spacing scale: 0, 1 (4px), 2 (8px), 3 (12px), 4 (16px), 5 (20px), 6 (24px), 8 (32px), 10 (40px), 12 (48px), 16 (64px), 20 (80px), 24 (96px)

### Figma Status
- ⚠️ **Need to check**: Spacing variables in Figma
- Action: Navigate to Spacing page in Figma to extract

## 🔲 Border Radius

### Current Implementation
- Radius: none, sm, md, lg, xl, 2xl, full
- Base radius: 0.5rem (8px)

### Figma Status
- ⚠️ **Need to check**: Border radius variables in Figma
- Action: Navigate to Border Radius page in Figma to extract

## 🌑 Shadows

### Current Implementation
- Shadow scale: sm, base, md, lg, xl, 2xl, inner, none

### Figma Status
- ⚠️ **Need to check**: Shadow/elevation variables in Figma
- Action: Navigate to Shadows/Elevation page in Figma to extract

## 📱 Breakpoints

### Current Implementation
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Figma Status
- ⚠️ **Need to check**: Breakpoint variables in Figma
- Action: Navigate to Breakpoints page in Figma to extract

## ✅ Action Items

### Completed
- [x] Extract all color families from Figma
- [x] Convert hex colors to HSL format
- [x] Create import file with all Figma colors
- [x] Create comparison document

### Next Steps
1. [ ] Navigate to Typography page in Figma and extract tokens
2. [ ] Navigate to Spacing page in Figma and extract tokens
3. [ ] Navigate to Border Radius page in Figma and extract tokens
4. [ ] Navigate to Shadows page in Figma and extract tokens
5. [ ] Navigate to Breakpoints page in Figma and extract tokens
6. [ ] Update main tokens.ts with Figma values
7. [ ] Update CSS variables in index.css
8. [ ] Test components with new tokens
9. [ ] Verify light/dark mode works correctly

## 📝 Notes

- All Figma colors are now available in `tokens-figma-import.ts`
- Colors are converted to HSL format for compatibility
- Semantic mapping needs to be done based on design system usage
- Other token types (typography, spacing, etc.) need to be extracted from Figma

## 🔄 Update Process

To update tokens from Figma:

1. Select the relevant page in Figma (Colors, Typography, Spacing, etc.)
2. Use MCP to get design context
3. Extract values
4. Update `tokens-figma-import.ts` or create new import files
5. Update main `tokens.ts` file
6. Update `index.css` CSS variables
7. Test and verify

