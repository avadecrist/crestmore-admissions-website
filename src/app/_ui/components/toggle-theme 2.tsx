'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Prevent hydration mismatch + load saved theme
    const saved = (localStorage.getItem('theme') as Theme | null) ?? 'light';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  // Avoid rendering wrong state before mount
  if (!mounted) return null;
  const isDark = theme === 'dark';
  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className='
        inline-flex items-center justify-center
        h-5 w-5 rounded-full
        border border-offblack/30
        bg-background text-foreground
        hover:opacity-90
        focus:outline-none focus:ring-1 focus:ring-navy/40 focus:ring-offset-1 focus:ring-offset-background
        transition
        cursor-pointer
      '
    >
      {/* for screen readers */}
      <span className='sr-only'>
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
        
      {/* sun and moon icon */}
      {isDark ? (
        <Sun className='h-3 w-3' aria-hidden='true' />
      ) : (
        <Moon className='h-3 w-3' aria-hidden='true' />
      )}

    </button>
  );
}
