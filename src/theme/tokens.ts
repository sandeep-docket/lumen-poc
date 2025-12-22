/**
 * Design Tokens
 * 
 * These tokens are generated from Figma variables and represent the core
 * design decisions of your design system. They follow the shadcn-ui-kit structure.
 * 
 * Colors are imported from Figma file: AoGtHpo2A4Y68YsWDMoMM4 (lumos)
 * Based on: Tailored v6 color system
 * 
 * Modes: web, docket, shadcn-dark
 */

import { semanticColors, rawColors } from './figma-tokens';

// Helper to get semantic color with fallback
function getSemanticColor(mode: 'web' | 'docket' | 'shadcn-dark', section: string, token: string): string {
  const modeData = semanticColors[mode];
  if (!modeData) return '0 0% 0%';
  
  const sectionData = modeData[section as keyof typeof modeData];
  if (!sectionData) return '0 0% 0%';
  
  // Try camelCase first, then original name
  const camelToken = token.replace(/\s+/g, '').replace(/^./, c => c.toLowerCase());
  const value = (sectionData as any)[camelToken] || (sectionData as any)[token];
  
  return value || '0 0% 0%';
}

// Color tokens - mapped from Figma semantic colors to shadcn-ui structure
export const colors = {
  web: {
    background: getSemanticColor('web', 'general', 'background'),
    foreground: getSemanticColor('web', 'general', 'foreground'),
    card: getSemanticColor('web', 'card', 'card'),
    cardForeground: getSemanticColor('web', 'card', 'card foreground'),
    popover: getSemanticColor('web', 'popover', 'popover'),
    popoverForeground: getSemanticColor('web', 'popover', 'popover foreground'),
    primary: getSemanticColor('web', 'general', 'primary'),
    primaryForeground: getSemanticColor('web', 'general', 'primary foreground'),
    secondary: getSemanticColor('web', 'general', 'secondary'),
    secondaryForeground: getSemanticColor('web', 'general', 'secondary foreground'),
    muted: getSemanticColor('web', 'general', 'muted'),
    mutedForeground: getSemanticColor('web', 'general', 'muted foreground'),
    accent: getSemanticColor('web', 'general', 'accent'),
    accentForeground: getSemanticColor('web', 'general', 'accent foreground'),
    destructive: getSemanticColor('web', 'general', 'destructive'),
    destructiveForeground: '0 0% 100%', // White for contrast on red background (overrides Figma value)
    border: getSemanticColor('web', 'general', 'border'),
    input: getSemanticColor('web', 'general', 'input'),
    ring: getSemanticColor('web', 'focus', 'ring'),
    chart1: rawColors.orange?.['500']?.hsl || '12 76% 61%',
    chart2: rawColors.emerald?.['500']?.hsl || '173 58% 39%',
    chart3: rawColors.blue?.['700']?.hsl || '197 37% 24%',
    chart4: rawColors.yellow?.['500']?.hsl || '43 74% 66%',
    chart5: rawColors.pink?.['500']?.hsl || '27 87% 67%',
  },
  docket: {
    background: getSemanticColor('docket', 'general', 'background'),
    foreground: getSemanticColor('docket', 'general', 'foreground'),
    card: getSemanticColor('docket', 'card', 'card'),
    cardForeground: getSemanticColor('docket', 'card', 'card foreground'),
    popover: getSemanticColor('docket', 'popover', 'popover'),
    popoverForeground: getSemanticColor('docket', 'popover', 'popover foreground'),
    primary: getSemanticColor('docket', 'general', 'primary'),
    primaryForeground: getSemanticColor('docket', 'general', 'primary foreground'),
    secondary: getSemanticColor('docket', 'general', 'secondary'),
    secondaryForeground: getSemanticColor('docket', 'general', 'secondary foreground'),
    muted: getSemanticColor('docket', 'general', 'muted'),
    mutedForeground: getSemanticColor('docket', 'general', 'muted foreground'),
    accent: getSemanticColor('docket', 'general', 'accent'),
    accentForeground: getSemanticColor('docket', 'general', 'accent foreground'),
    destructive: getSemanticColor('docket', 'general', 'destructive'),
    destructiveForeground: '0 0% 100%', // White for contrast on red background (overrides Figma value)
    border: getSemanticColor('docket', 'general', 'border'),
    input: getSemanticColor('docket', 'general', 'input'),
    ring: getSemanticColor('docket', 'focus', 'ring'),
    chart1: rawColors.orange?.['500']?.hsl || '12 76% 61%',
    chart2: rawColors.emerald?.['500']?.hsl || '173 58% 39%',
    chart3: rawColors.blue?.['700']?.hsl || '197 37% 24%',
    chart4: rawColors.yellow?.['500']?.hsl || '43 74% 66%',
    chart5: rawColors.pink?.['500']?.hsl || '27 87% 67%',
  },
  // Legacy support - map to docket mode
  light: {
    get background() { return colors.docket.background; },
    get foreground() { return colors.docket.foreground; },
    get card() { return colors.docket.card; },
    get cardForeground() { return colors.docket.cardForeground; },
    get popover() { return colors.docket.popover; },
    get popoverForeground() { return colors.docket.popoverForeground; },
    get primary() { return colors.docket.primary; },
    get primaryForeground() { return colors.docket.primaryForeground; },
    get secondary() { return colors.docket.secondary; },
    get secondaryForeground() { return colors.docket.secondaryForeground; },
    get muted() { return colors.docket.muted; },
    get mutedForeground() { return colors.docket.mutedForeground; },
    get accent() { return colors.docket.accent; },
    get accentForeground() { return colors.docket.accentForeground; },
    get destructive() { return colors.docket.destructive; },
    get destructiveForeground() { return colors.docket.destructiveForeground; },
    get border() { return colors.docket.border; },
    get input() { return colors.docket.input; },
    get ring() { return colors.docket.ring; },
    get chart1() { return colors.docket.chart1; },
    get chart2() { return colors.docket.chart2; },
    get chart3() { return colors.docket.chart3; },
    get chart4() { return colors.docket.chart4; },
    get chart5() { return colors.docket.chart5; },
  },
  // Legacy support - map to shadcn-dark if available, else web
  dark: {
    get background() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'background') : colors.web.background; },
    get foreground() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'foreground') : colors.web.foreground; },
    get card() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'card', 'card') : colors.web.card; },
    get cardForeground() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'card', 'card foreground') : colors.web.cardForeground; },
    get popover() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'popover', 'popover') : colors.web.popover; },
    get popoverForeground() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'popover', 'popover foreground') : colors.web.popoverForeground; },
    get primary() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'primary') : colors.web.primary; },
    get primaryForeground() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'primary foreground') : colors.web.primaryForeground; },
    get secondary() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'secondary') : colors.web.secondary; },
    get secondaryForeground() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'secondary foreground') : colors.web.secondaryForeground; },
    get muted() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'muted') : colors.web.muted; },
    get mutedForeground() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'muted foreground') : colors.web.mutedForeground; },
    get accent() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'accent') : colors.web.accent; },
    get accentForeground() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'accent foreground') : colors.web.accentForeground; },
    get destructive() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'destructive') : colors.web.destructive; },
    get destructiveForeground() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'unofficial', 'destructive foreground') || getSemanticColor('shadcn-dark', 'general', 'destructive') : colors.web.destructiveForeground; },
    get border() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'border') : colors.web.border; },
    get input() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'general', 'input') : colors.web.input; },
    get ring() { return semanticColors['shadcn-dark'] ? getSemanticColor('shadcn-dark', 'focus', 'ring') : colors.web.ring; },
    get chart1() { return colors.web.chart1; },
    get chart2() { return colors.web.chart2; },
    get chart3() { return colors.web.chart3; },
    get chart4() { return colors.web.chart4; },
    get chart5() { return colors.web.chart5; },
  },
} as const;

// Typography tokens
export const typography = {
  fontFamily: {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
} as const;

// Spacing tokens
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

// Border radius tokens
export const radius = {
  none: '0',
  sm: 'calc(var(--radius) - 4px)',
  md: 'calc(var(--radius) - 2px)',
  lg: 'var(--radius)',
  xl: 'calc(var(--radius) + 4px)',
  '2xl': 'calc(var(--radius) + 8px)',
  full: '9999px',
} as const;

// Shadow tokens
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const;

// Breakpoint tokens
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index tokens
export const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  auto: 'auto',
} as const;

// Export Figma tokens for direct access
export { semanticColors, rawColors } from './figma-tokens';

// Export all tokens
export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  breakpoints,
  zIndex,
} as const;

export default tokens;
