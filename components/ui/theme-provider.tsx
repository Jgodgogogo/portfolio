// components/theme-switch.tsx
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, Globe } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('lang') as 'en' | 'zh' | null;
    setLang(savedLang ?? 'en');
  }, []);

  if (!mounted) return null;

  const toggleLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    localStorage.setItem('lang', next);
    window.dispatchEvent(new CustomEvent('lang-change', { detail: next }));
  };

  const buttons = [
    { id: 'light', icon: <SunIcon className="h-4 w-4" />, action: () => setTheme('light') },
    { id: 'dark', icon: <MoonIcon className="h-4 w-4" />, action: () => setTheme('dark') },
    { id: 'lang', icon: <Globe className="h-4 w-4" />, action: toggleLang },
  ];

  return (
    <AnimatedBackground
      className="inline-flex h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme || 'light'}
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
      enableHover={false}
      onValueChange={(id) => buttons.find((b) => b.id === id)?.action?.()}
    >
      {buttons.map(({ id, icon }) => (
        <button
          key={id}
          data-id={id}
          className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          aria-label={id}
        >
          {icon}
        </button>
      ))}
    </AnimatedBackground>
  );
}