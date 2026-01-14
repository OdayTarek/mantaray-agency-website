'use client'

import { useTranslations } from '@/lib/useTranslations'

export default function ToolsPage() {
  const t = useTranslations()

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: 'auto', paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-16)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="hero-badge" style={{ margin: '0 auto var(--space-8)' }}>
            <span>{t.toolsPage?.badge || 'Developer Tools'}</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-6)' }}>
            {t.toolsPage?.title1 || 'Design & Development'}
            <br />
            <span className="gradient-text">{t.toolsPage?.title2 || 'Toolkit'}</span>
          </h1>
          <p className="hero-description" style={{ margin: '0 auto', textAlign: 'center' }}>
            {t.toolsPage?.description || 'Explore our collection of design systems, mockups, and development tools to accelerate your next project.'}
          </p>
        </div>
      </section>

      {/* Featured: UI Catalog */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card card-elevated" style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: 'var(--space-12)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-12)',
            alignItems: 'center',
          }}>
            {/* Left: Content */}
            <div>
              <span className="section-label">{t.toolsPage?.featured?.label || 'Featured Tool'}</span>
              <h2 className="section-title" style={{ marginBottom: 'var(--space-4)' }}>
                {t.toolsPage?.featured?.title || 'UI Style Catalog'}
              </h2>
              <p style={{ color: 'var(--fg-muted)', marginBottom: 'var(--space-6)', lineHeight: 1.8 }}>
                {t.toolsPage?.featured?.description || 'Browse 10 production-ready design systems with 60+ live mockups. Export tokens in CSS, Tailwind, or JSON. Perfect for rapid prototyping and design handoff.'}
              </p>

              {/* Features List */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 var(--space-8) 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}>
                {[
                  '10 Production-Ready Design Systems',
                  '60+ Interactive Live Mockups',
                  'Export to CSS, Tailwind, or JSON',
                  'Side-by-Side Style Comparison',
                  'Dark & Light Mode Support',
                ].map((feature) => (
                  <li key={feature} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    color: 'var(--fg-muted)',
                    fontSize: 'var(--text-sm)',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://ui-catalog.mantaray.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
              >
                {t.toolsPage?.featured?.button || 'Explore Catalog'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>

            {/* Right: Visual Preview */}
            <div style={{
              background: 'var(--bg-base)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-default)',
              padding: 'var(--space-6)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-3)',
            }}>
              {[
                { name: 'Neubrutalism', hue: 45 },
                { name: 'Glassmorphism', hue: 200 },
                { name: 'Soft Minimalism', hue: 170 },
                { name: 'Dark Mode', hue: 260 },
                { name: 'Material 3', hue: 280 },
                { name: 'Retro', hue: 30 },
              ].map((style) => (
                <div
                  key={style.name}
                  style={{
                    aspectRatio: '1',
                    borderRadius: 'var(--radius-md)',
                    background: `linear-gradient(135deg, hsl(${style.hue}, 70%, 60%), hsl(${style.hue + 30}, 60%, 50%))`,
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 'var(--space-2)',
                  }}
                >
                  <span style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    color: 'white',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  }}>
                    {style.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="stat">
              <div className="stat-value">10</div>
              <div className="stat-label">Design Systems</div>
            </div>
            <div className="stat">
              <div className="stat-value">60+</div>
              <div className="stat-label">Live Mockups</div>
            </div>
            <div className="stat">
              <div className="stat-value">5</div>
              <div className="stat-label">Export Formats</div>
            </div>
            <div className="stat">
              <div className="stat-value">Free</div>
              <div className="stat-label">To Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-default)' }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-4)' }}>
              {t.toolsPage?.cta?.title || 'Need a Custom Design System?'}
            </h2>
            <p style={{ color: 'var(--fg-muted)', marginBottom: 'var(--space-8)' }}>
              {t.toolsPage?.cta?.description || "We can create a bespoke design system tailored to your brand and product needs."}
            </p>
            <a href="/contact" className="btn btn-secondary btn-lg">
              {t.toolsPage?.cta?.button || 'Get in Touch'}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
