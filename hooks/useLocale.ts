]// hooks/useLocale.ts
import { useState, useEffect } from 'react'

const dict = {
  en: { name: 'Jun Zhang', subs: ['Solution Designer', 'Frontend Engineer', 'Design Hobbyist'] },
  zh: { name: '张钧', subs: ['解决方案设计师', '前端工程师', '设计爱好者'] },
}

export const useLocale = () => {
  const [lang, setLang] = useState<'en' | 'zh'>('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as 'en' | 'zh' | null
    setLang(saved ?? 'en')
  }, [])

  const toggle = () => {
    const next = lang === 'en' ? 'zh' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
    window.dispatchEvent(new CustomEvent('lang-change', { detail: next }))
  }

  return { t: dict[lang], lang, toggle }
}