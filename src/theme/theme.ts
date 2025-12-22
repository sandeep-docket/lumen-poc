/**
 * Theme Configuration
 * 
 * This file exports theme utilities and CSS variable generation
 * for use throughout the design system.
 * 
 * Supports Figma modes: web, docket, shadcn-dark
 * Legacy support: light (maps to docket), dark (maps to shadcn-dark or web)
 */

import { colors } from './tokens';

export type ThemeMode = 'web' | 'docket' | 'shadcn-dark' | 'light' | 'dark';

/**
 * Generate CSS variables for a given color mode
 */
export function generateCSSVariables(mode: ThemeMode): string {
  const modeColors = colors[mode as keyof typeof colors];
  if (!modeColors) return '';
  
  return Object.entries(modeColors)
    .map(([key, value]) => {
      // Convert camelCase to kebab-case
      const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `  --${cssVar}: ${value};`;
    })
    .join('\n');
}

/**
 * Apply theme to root element
 */
export function applyTheme(mode: ThemeMode): void {
  const root = document.documentElement;
  
  // Remove all mode classes
  root.classList.remove('dark', 'mode-web', 'mode-docket', 'mode-shadcn-dark');
  
  // Apply appropriate class
  if (mode === 'dark') {
    root.classList.add('dark');
  } else if (mode === 'web') {
    root.classList.add('mode-web');
  } else if (mode === 'docket') {
    // docket is the default, no class needed
  } else if (mode === 'shadcn-dark') {
    root.classList.add('dark'); // Use dark class for shadcn-dark
  } else if (mode === 'light') {
    // light maps to docket (default), no class needed
  }
}

/**
 * Get current theme from system or localStorage
 */
export function getTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'docket';
  
  const stored = localStorage.getItem('theme') as ThemeMode | null;
  if (stored && ['web', 'docket', 'shadcn-dark', 'light', 'dark'].includes(stored)) {
    return stored;
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'docket';
}

/**
 * Set and persist theme
 */
export function setTheme(mode: ThemeMode): void {
  localStorage.setItem('theme', mode);
  applyTheme(mode);
}

/**
 * Toggle between light and dark mode (legacy)
 */
export function toggleTheme(): ThemeMode {
  const current = getTheme();
  const next = current === 'dark' || current === 'shadcn-dark' ? 'docket' : 'dark';
  setTheme(next);
  return next;
}

/**
 * Cycle through Figma modes: docket -> web -> dark -> docket
 */
export function cycleThemeMode(): ThemeMode {
  const current = getTheme();
  const modes: ThemeMode[] = ['docket', 'web', 'dark'];
  const currentIndex = modes.indexOf(current);
  const nextIndex = (currentIndex + 1) % modes.length;
  const next = modes[nextIndex];
  setTheme(next);
  return next;
}

