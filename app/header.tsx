// app/header.tsx
'use client'
import Image from 'next/image'
import { TextLoop } from '@/components/ui/text-loop'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, Globe } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useState, useEffect } from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { ModeToggle } from '@/components/ui/mode-toggle'

const dict = {
  en: { name: 'Jun Zhang', subs: ['Solution Designer', 'Frontend Engineer', 'Design Hobbyist'] },
  zh: { name: '张钧', subs: ['解决方案设计师', '前端工程师', '设计爱好者'] },
};

const THEMES_OPTIONS = [
  { id: 'light', icon: <SunIcon className="h-4 w-4" />, label: 'Light' },
  { id: 'dark', icon: <MoonIcon className="h-4 w-4" />, label: 'Dark' },
  { id: 'system', icon: <Globe className="h-4 w-4" />, label: 'System' },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as 'en' | 'zh' | null;
    setLang(savedLang ?? 'en');
  }, []);

  const toggleLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    localStorage.setItem('lang', next);
    window.dispatchEvent(new CustomEvent('lang-change', { detail: next }));
  };

  return (
    <header className="sticky rounded-full top-0 z-40 flex h-24 w-full items-center justify-between px-4 sm:px-6 backdrop-blur-sm bg-white/70 dark:bg-zinc-950/70">      
      <div className="flex items-center gap-3">
        <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Image
            src="/avatar-light.png"
            alt={dict[lang].name}
            width={48}
            height={48}
            className="rounded-full object-cover border-2 border-zinc-300 dark:border-zinc-600"
          />
          {hover && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none">
              <div className="flex items-center gap-1.5">
                <svg width={22} height={24} viewBox="0 0 26 31" fill="none" className="drop-shadow-lg">
                  <path fill="#22c55e" stroke="#fff" strokeWidth={2} strokeLinecap="square" d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z" />
                </svg>
                <span className="rounded-md bg-green-500 px-2.5 py-1 text-xs font-medium text-white shadow-lg">
                  funny guy
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold">{dict[lang].name}</span>
          <TextLoop className="text-base font-light opacity-50" interval={3}>
            {dict[lang].subs.map((s) => <span key={s}>{s}</span>)}
          </TextLoop>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <AnimatedBackground
          className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
          defaultValue={theme}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
          enableHover={false}
          onValueChange={(id) => {
            setTheme(id as string);
          }}
        >
          {THEMES_OPTIONS.map((option) => (
            <button
              key={option.id}
              className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
              type="button"
              aria-label={`Switch to ${option.label} theme`}
              data-id={option.id}
            >
              {option.icon}
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </header>
  );
}