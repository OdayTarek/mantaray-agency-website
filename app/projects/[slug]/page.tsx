"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLanguage } from "@/lib/useTranslations";
import {
  getProjectMockup,
  projectVariants,
} from "@/components/projects/mockups";

// Icons for capability cards
function CapabilityIcon({ index }: { index: number }) {
  const icons = [
    // Sync/Real-time icon
    <svg
      key="0"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 0 1 9-9" />
    </svg>,
    // Smart/AI icon
    <svg
      key="1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      <circle cx="8" cy="14" r="1" />
      <circle cx="16" cy="14" r="1" />
    </svg>,
    // Alert/Notification icon
    <svg
      key="2"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>,
    // Export/Download icon
    <svg
      key="3"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>,
  ];
  return icons[index % icons.length];
}

const projectMeta: Record<
  string,
  {
    title: string;
    timelineEn: string;
    timelineAr: string;
    tech: string[];
    related: string[];
  }
> = {
  pulse: {
    title: "Pulse Expense",
    timelineEn: "18 days",
    timelineAr: "18 يوماً",
    tech: ["Next.js", "React", "PostgreSQL", "OCR API"],
    related: ["bloom", "atlas"],
  },
  bloom: {
    title: "Bloom Marketplace",
    timelineEn: "18 days",
    timelineAr: "18 يوماً",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    related: ["pulse", "nomad"],
  },
  atlas: {
    title: "Atlas CRM",
    timelineEn: "21 days",
    timelineAr: "21 يوماً",
    tech: ["Vue.js", "Python", "TensorFlow", "PostgreSQL"],
    related: ["pulse", "bloom"],
  },
  nomad: {
    title: "Nomad Booking",
    timelineEn: "16 days",
    timelineAr: "16 يوماً",
    tech: ["React Native", "GraphQL", "MongoDB", "Mapbox"],
    related: ["bloom", "volt"],
  },
  volt: {
    title: "Volt Fitness",
    timelineEn: "12 days",
    timelineAr: "12 يوماً",
    tech: ["Swift", "Kotlin", "Firebase", "HealthKit"],
    related: ["nomad", "pulse"],
  },
  medix: {
    title: "Medix Telehealth",
    timelineEn: "19 days",
    timelineAr: "19 يوماً",
    tech: ["Next.js", "WebRTC", "AWS", "HIPAA"],
    related: ["pulse", "volt"],
  },
  barista: {
    title: "Barista Pro",
    timelineEn: "16 days",
    timelineAr: "16 يوماً",
    tech: ["Next.js", "React", "Node.js", "Stripe"],
    related: ["bloom", "atlas"],
  },
  luxe: {
    title: "Luxe Threads",
    timelineEn: "14 days",
    timelineAr: "14 يوماً",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    related: ["bloom", "bazaar"],
  },
  bazaar: {
    title: "Bazaar Hub",
    timelineEn: "18 days",
    timelineAr: "18 يوماً",
    tech: ["React", "Node.js", "MongoDB", "Redis"],
    related: ["luxe", "bloom"],
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslations();
  const lang = useLanguage();

  const meta = projectMeta[slug];
  const projectData =
    t.projectDetail.projects[slug as keyof typeof t.projectDetail.projects];
  const variants = projectVariants[slug] || [];

  if (!meta || !projectData) {
    notFound();
  }

  // Get variant IDs for the different sections
  const [heroVariant, challengeVariant, solutionVariant] = variants;

  return (
    <>
      {/* Back Link */}
      <section
        className="section"
        style={{ paddingTop: "var(--space-32)", paddingBottom: 0 }}
      >
        <div className="container">
          <Link
            href="/projects"
            className="btn btn-secondary"
            style={{ display: "inline-flex", gap: "var(--space-2)" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transform: lang === "ar" ? "rotate(180deg)" : "none" }}
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t.projectDetail.backToProjects}
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section
        className="section"
        style={{
          paddingTop: "var(--space-8)",
          paddingBottom: "var(--space-8)",
        }}
      >
        <div className="container">
          <div className="hero-badge" style={{ margin: "0 0 var(--space-4)" }}>
            <span>{projectData.industry}</span>
          </div>

          <h1
            style={{
              fontSize: "var(--text-5xl)",
              fontWeight: 700,
              color: "var(--fg-default)",
              marginBottom: "var(--space-4)",
              lineHeight: 1.1,
            }}
          >
            {meta.title}
          </h1>

          <p
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--fg-muted)",
              maxWidth: "600px",
              lineHeight: 1.6,
              marginBottom: "var(--space-6)",
            }}
          >
            {projectData.description}
          </p>

          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)" }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--fg-subtle)",
                  display: "block",
                  marginBottom: "var(--space-1)",
                }}
              >
                {t.projectDetail.timeline}
              </span>
              <span style={{ fontWeight: 600, color: "var(--fg-default)" }}>
                {lang === "ar" ? meta.timelineAr : meta.timelineEn}
              </span>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--fg-subtle)",
                  display: "block",
                  marginBottom: "var(--space-1)",
                }}
              >
                {t.projectDetail.tech}
              </span>
              <span style={{ fontWeight: 600, color: "var(--fg-default)" }}>
                {meta.tech.slice(0, 3).join(", ")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Screenshot */}
      <section
        className="section"
        style={{ paddingTop: 0, paddingBottom: "var(--space-16)" }}
      >
        <div className="container">
          <div className="mockup-screenshot mockup-screenshot--hero">
            {heroVariant && getProjectMockup(slug, heroVariant.id)}
          </div>
        </div>
      </section>

      {/* Challenge Section - Text Left, Image Right */}
      <section
        className="section"
        style={{
          background: "var(--bg-elevated)",
          borderTop: "1px solid var(--border-default)",
          borderBottom: "1px solid var(--border-default)",
        }}
      >
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <span className="section-label">
                {t.projectDetail.theChallenge}
              </span>
              <p
                style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--fg-default)",
                  lineHeight: 1.7,
                  marginTop: "var(--space-4)",
                }}
              >
                {projectData.challenge}
              </p>
            </div>
            <div className="split-image">
              <div className="mockup-screenshot">
                {challengeVariant &&
                  getProjectMockup(slug, challengeVariant.id)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Image Left, Text Right */}
      <section className="section">
        <div className="container">
          <div className="split-section split-section--reverse">
            <div className="split-content">
              <span className="section-label">
                {t.projectDetail.theSolution}
              </span>
              <p
                style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--fg-default)",
                  lineHeight: 1.7,
                  marginTop: "var(--space-4)",
                }}
              >
                {projectData.solution}
              </p>
            </div>
            <div className="split-image">
              <div className="mockup-screenshot">
                {solutionVariant && getProjectMockup(slug, solutionVariant.id)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section
        className="section"
        style={{
          background: "var(--bg-elevated)",
          borderTop: "1px solid var(--border-default)",
          borderBottom: "1px solid var(--border-default)",
        }}
      >
        <div className="container">
          <div
            className="section-header"
            style={{ textAlign: "center", marginBottom: "var(--space-12)" }}
          >
            <span className="section-label">{t.projectDetail.results}</span>
            <h2 className="section-title">{t.projectDetail.capabilities}</h2>
          </div>

          <div className="capabilities-grid">
            {projectData.capabilities.slice(0, 4).map((capability, i) => (
              <div key={i} className="capability-card">
                <div className="capability-icon">
                  <CapabilityIcon index={i} />
                </div>
                <h3 className="capability-title">{capability.title}</h3>
                <p className="capability-description">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              {t.projectDetail.moreProjects}
            </span>
            <h2 className="section-title">{t.projectDetail.relatedWork}</h2>
          </div>

          <div className="project-grid">
            {meta.related.map((relatedSlug) => {
              const relatedMeta = projectMeta[relatedSlug];
              const relatedProject =
                t.projectDetail.projects[
                  relatedSlug as keyof typeof t.projectDetail.projects
                ];
              if (!relatedMeta || !relatedProject) return null;
              return (
                <Link
                  key={relatedSlug}
                  href={`/projects/${relatedSlug}`}
                  className="project-card"
                >
                  <div className="project-image">
                    {getProjectMockup(relatedSlug)}
                  </div>
                  <div className="project-body">
                    <span className="project-tag">
                      {relatedProject.industry}
                    </span>
                    <h3 className="project-title">{relatedMeta.title}</h3>
                    <p className="project-description">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{
          background: "var(--bg-elevated)",
          borderTop: "1px solid var(--border-default)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 700,
                color: "var(--fg-default)",
                marginBottom: "var(--space-4)",
              }}
            >
              {t.projectDetail.ctaTitle}
            </h2>
            <p
              style={{
                color: "var(--fg-muted)",
                marginBottom: "var(--space-8)",
              }}
            >
              {t.projectDetail.ctaDescription}
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              {t.projectDetail.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .split-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
        }

        .split-section--reverse {
          direction: ${lang === "ar" ? "ltr" : "rtl"};
        }

        .split-section--reverse > * {
          direction: ${lang === "ar" ? "rtl" : "ltr"};
        }

        .split-content {
          max-width: 480px;
        }

        .split-image {
          display: flex;
          justify-content: center;
        }

        .mockup-screenshot {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          background: var(--bg-default);
          border: 1px solid var(--border-default);
        }

        .mockup-screenshot--hero {
          max-width: 100%;
          margin: 0 auto;
          aspect-ratio: 16/9;
        }

        .split-image .mockup-screenshot {
          width: 100%;
          max-width: 100%;
          aspect-ratio: 16/9;
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
          max-width: 900px;
          margin: 0 auto;
        }

        .capability-card {
          background: var(--bg-default);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          border: 1px solid var(--border-default);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .capability-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .capability-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bg-base);
          margin-bottom: var(--space-4);
        }

        .capability-title {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--fg-default);
          margin-bottom: var(--space-2);
        }

        .capability-description {
          font-size: var(--text-sm);
          color: var(--fg-muted);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .split-section {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .split-section--reverse {
            direction: ltr;
          }

          .split-section--reverse > * {
            direction: ${lang === "ar" ? "rtl" : "ltr"};
          }

          .split-content {
            max-width: 100%;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          /* Contained mockup height on mobile with internal scrolling */
          .mockup-screenshot--hero {
            aspect-ratio: auto;
            height: 75vh;
            max-height: 600px;
            min-height: 450px;
          }

          .split-image .mockup-screenshot {
            aspect-ratio: auto;
            height: 65vh;
            max-height: 500px;
            min-height: 380px;
          }
        }
      `}</style>
    </>
  );
}
