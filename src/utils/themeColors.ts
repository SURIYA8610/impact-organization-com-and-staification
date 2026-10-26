export interface ThemeColorStyles {
  gradient: string;
  badgeBg: string;
  badgeText: string;
  borderGlow: string;
  accentText: string;
  accentBg: string;
  buttonGradient: string;
  ring: string;
}

export const THEME_COLOR_MAP: Record<string, ThemeColorStyles> = {
  blue: {
    gradient: 'from-blue-600 via-indigo-600 to-blue-800',
    badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200 dark:border-blue-800',
    badgeText: 'text-blue-600 dark:text-blue-400',
    borderGlow: 'hover:border-blue-500/60 hover:shadow-blue-500/20',
    accentText: 'text-blue-600 dark:text-blue-400',
    accentBg: 'bg-blue-50 dark:bg-blue-950/40',
    buttonGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/25',
    ring: 'focus:ring-blue-500'
  },
  teal: {
    gradient: 'from-teal-600 via-emerald-600 to-teal-800',
    badgeBg: 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200 border-teal-200 dark:border-teal-800',
    badgeText: 'text-teal-600 dark:text-teal-400',
    borderGlow: 'hover:border-teal-500/60 hover:shadow-teal-500/20',
    accentText: 'text-teal-600 dark:text-teal-400',
    accentBg: 'bg-teal-50 dark:bg-teal-950/40',
    buttonGradient: 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white shadow-teal-500/25',
    ring: 'focus:ring-teal-500'
  },
  purple: {
    gradient: 'from-purple-600 via-violet-600 to-indigo-800',
    badgeBg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200 dark:border-purple-800',
    badgeText: 'text-purple-600 dark:text-purple-400',
    borderGlow: 'hover:border-purple-500/60 hover:shadow-purple-500/20',
    accentText: 'text-purple-600 dark:text-purple-400',
    accentBg: 'bg-purple-50 dark:bg-purple-950/40',
    buttonGradient: 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-purple-500/25',
    ring: 'focus:ring-purple-500'
  },
  cyan: {
    gradient: 'from-cyan-600 via-sky-600 to-blue-800',
    badgeBg: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200 dark:border-cyan-800',
    badgeText: 'text-cyan-600 dark:text-cyan-400',
    borderGlow: 'hover:border-cyan-500/60 hover:shadow-cyan-500/20',
    accentText: 'text-cyan-600 dark:text-cyan-400',
    accentBg: 'bg-cyan-50 dark:bg-cyan-950/40',
    buttonGradient: 'bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white shadow-cyan-500/25',
    ring: 'focus:ring-cyan-500'
  },
  indigo: {
    gradient: 'from-indigo-600 via-blue-600 to-violet-800',
    badgeBg: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800',
    badgeText: 'text-indigo-600 dark:text-indigo-400',
    borderGlow: 'hover:border-indigo-500/60 hover:shadow-indigo-500/20',
    accentText: 'text-indigo-600 dark:text-indigo-400',
    accentBg: 'bg-indigo-50 dark:bg-indigo-950/40',
    buttonGradient: 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-indigo-500/25',
    ring: 'focus:ring-indigo-500'
  },
  emerald: {
    gradient: 'from-emerald-600 via-teal-600 to-green-800',
    badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
    badgeText: 'text-emerald-600 dark:text-emerald-400',
    borderGlow: 'hover:border-emerald-500/60 hover:shadow-emerald-500/20',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    accentBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    buttonGradient: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/25',
    ring: 'focus:ring-emerald-500'
  },
  amber: {
    gradient: 'from-amber-500 via-orange-600 to-amber-700',
    badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200 border-amber-200 dark:border-amber-800',
    badgeText: 'text-amber-600 dark:text-amber-400',
    borderGlow: 'hover:border-amber-500/60 hover:shadow-amber-500/20',
    accentText: 'text-amber-600 dark:text-amber-400',
    accentBg: 'bg-amber-50 dark:bg-amber-950/40',
    buttonGradient: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-amber-500/25',
    ring: 'focus:ring-amber-500'
  },
  rose: {
    gradient: 'from-rose-600 via-pink-600 to-rose-800',
    badgeBg: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200 border-rose-200 dark:border-rose-800',
    badgeText: 'text-rose-600 dark:text-rose-400',
    borderGlow: 'hover:border-rose-500/60 hover:shadow-rose-500/20',
    accentText: 'text-rose-600 dark:text-rose-400',
    accentBg: 'bg-rose-50 dark:bg-rose-950/40',
    buttonGradient: 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-rose-500/25',
    ring: 'focus:ring-rose-500'
  }
};

export function getThemeStyles(colorName: string): ThemeColorStyles {
  return THEME_COLOR_MAP[colorName] || THEME_COLOR_MAP.blue;
}
