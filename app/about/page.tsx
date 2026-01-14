'use client'

import Link from 'next/link'
import { useTranslations } from '@/lib/useTranslations'

export default function AboutPage() {
  const t = useTranslations()

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: 'auto', paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-16)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="hero-badge" style={{ margin: '0 auto var(--space-8)' }}>
            <span>{t.aboutPage.badge}</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-6)' }}>
            <span className="gradient-text">{t.aboutPage.title}</span>
          </h1>
          <p className="hero-description" style={{ margin: '0 auto', textAlign: 'center' }}>
            {t.aboutPage.description}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div className="stats" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="stat">
              <div className="stat-value">{t.stats.projects.value}</div>
              <div className="stat-label">{t.stats.projects.label}</div>
            </div>
            <div className="stat">
              <div className="stat-value">{t.stats.timeline.value}</div>
              <div className="stat-label">{t.stats.timeline.label}</div>
            </div>
            <div className="stat">
              <div className="stat-value">{t.stats.experience.value}</div>
              <div className="stat-label">{t.stats.experience.label}</div>
            </div>
            <div className="stat">
              <div className="stat-value">{t.stats.delivery.value}</div>
              <div className="stat-label">{t.stats.delivery.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-label">{t.aboutPage.story.label}</span>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>{t.aboutPage.story.title}</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--fg-muted)', lineHeight: 1.8 }}>
              {t.aboutPage.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t.aboutPage.values.label}</span>
            <h2 className="section-title">{t.aboutPage.values.title}</h2>
          </div>
          <div className="value-grid">
            {t.aboutPage.values.items.map((value, i) => (
              <div key={i} className="value-card">
                <span className="value-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="value-content">
                  <div className="value-icon">
                    {i === 0 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )}
                    {i === 3 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t.aboutPage.team.label}</span>
            <h2 className="section-title">{t.aboutPage.team.title}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)', maxWidth: '1000px', margin: '0 auto' }}>
            {t.aboutPage.team.members.map((member, i) => (
              <div key={i} className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--primary)',
                  margin: '0 auto var(--space-6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 700,
                  color: 'var(--bg-base)',
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'var(--text-xl)',
                  color: 'var(--fg-default)',
                  marginBottom: 'var(--space-2)',
                }}>
                  {member.name}
                </h3>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--primary)',
                  marginBottom: 'var(--space-4)',
                }}>
                  {member.role}
                </div>
                <p style={{ color: 'var(--fg-muted)', fontSize: 'var(--text-sm)' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card card-elevated" style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            padding: 'var(--space-12)',
          }}>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-4)' }}>
              {t.aboutPage.cta.title}
            </h2>
            <p style={{ color: 'var(--fg-muted)', marginBottom: 'var(--space-8)' }}>
              {t.aboutPage.cta.description}
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              {t.aboutPage.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
