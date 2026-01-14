'use client'

import Link from 'next/link'
import { useTranslations } from '@/lib/useTranslations'
import { CodeEditorMockup } from '@/components/CodeEditorMockup'

export default function HomePage() {
  const t = useTranslations()

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span>{t.hero.badge}</span>
              </div>
              <h1 className="hero-title">
                <span className="gradient-text">{t.hero.title1}</span><br />
                <span className="gradient-text">{t.hero.title2}</span><br />
                <span className="gradient-text">{t.hero.title3}</span>
              </h1>
              <p className="hero-description">
                {t.hero.description}
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  {t.hero.cta}
                </Link>
                <Link href="/projects" className="btn btn-secondary btn-lg">
                  {t.hero.secondary}
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <CodeEditorMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          <span className="marquee-item">{t.marquee}</span>
          <span className="marquee-item">{t.marquee}</span>
          <span className="marquee-item">{t.marquee}</span>
          <span className="marquee-item">{t.marquee}</span>
          <span className="marquee-item">{t.marquee}</span>
          <span className="marquee-item">{t.marquee}</span>
        </div>
      </div>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats">
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

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t.services.label}</span>
            <h2 className="section-title">{t.services.title}</h2>
          </div>
          <div className="value-grid">
            {t.services.items.map((service, i) => (
              <div key={i} className="value-card">
                <span className="value-number">{service.number}</span>
                <div className="value-content">
                  <div className="value-icon">
                    {i === 0 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                        <path d="M9 22v-4h6v4"/>
                        <path d="M8 6h.01"/>
                        <path d="M16 6h.01"/>
                        <path d="M12 6h.01"/>
                        <path d="M12 10h.01"/>
                        <path d="M12 14h.01"/>
                        <path d="M16 10h.01"/>
                        <path d="M16 14h.01"/>
                        <path d="M8 10h.01"/>
                        <path d="M8 14h.01"/>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 8V4H8"/>
                        <rect width="16" height="12" x="4" y="8" rx="2"/>
                        <path d="M2 14h2"/>
                        <path d="M20 14h2"/>
                        <path d="M15 13v2"/>
                        <path d="M9 13v2"/>
                      </svg>
                    )}
                    {i === 3 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m12 19 7-7 3 3-7 7-3-3z"/>
                        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                        <path d="m2 2 7.586 7.586"/>
                        <circle cx="11" cy="11" r="2"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="value-title">{service.title}</h3>
                  <p className="value-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t.projectsSection.label}</span>
            <h2 className="section-title">{t.projectsSection.title}</h2>
          </div>
          <div className="project-grid">
            {t.projectsSection.projects.map((project, i) => (
              <Link
                key={i}
                href={`/projects/${['pulse', 'bloom', 'atlas'][i]}`}
                className="project-card"
              >
                <div className="project-image"></div>
                <div className="project-body">
                  <span className="project-tag">{project.tag}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Suite Section */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t.products.label}</span>
            <h2 className="section-title">{t.products.title}</h2>
          </div>
          <div className="product-grid">
            {t.products.items.map((product, i) => (
              <div key={i} className="product-card">
                <div className="product-icon">
                  {i === 0 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18"/>
                      <path d="m19 9-5 5-4-4-3 3"/>
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" x2="12" y1="19" y2="22"/>
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7.5 6.5h.01"/>
                      <path d="M2.5 12h.01"/>
                      <path d="M16.5 6.5h.01"/>
                      <path d="M22 12h.01"/>
                      <path d="M7.5 17.5h.01"/>
                      <path d="M16.5 17.5h.01"/>
                      <rect width="20" height="12" x="2" y="6" rx="2"/>
                    </svg>
                  )}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <span className="product-status">{product.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
