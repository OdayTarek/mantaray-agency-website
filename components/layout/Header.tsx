'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useI18n } from './I18nProvider'
import { useState, useEffect } from 'react'
import { useTranslations } from '@/lib/useTranslations'
import { Logo } from './Logo'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useI18n()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="logo">
            <Logo className="logo-mark" />
          </Link>

          {/* Navigation */}
          <nav className="nav">
            <Link href="/projects" className="nav-link">
              {t.nav.projects}
            </Link>
            <Link href="/tools" className="nav-link">
              {t.nav.tools}
            </Link>
            <Link href="/contact" className="nav-link">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Controls */}
          <div className="controls">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="control-btn"
                aria-label="Toggle theme"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {theme === 'dark' ? (
                    <>
                      <circle cx="12" cy="12" r="5"/>
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </>
                  ) : (
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  )}
                </svg>
                <span>{t.nav.theme}</span>
              </button>
            )}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="control-btn"
              aria-label="Toggle language"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>{language === 'en' ? 'EN' : 'AR'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
