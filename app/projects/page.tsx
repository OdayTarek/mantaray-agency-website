"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLanguage } from "@/lib/useTranslations";
import { getProjectMockup } from "@/components/projects/mockups";

const projects = [
  {
    slug: "pulse",
    titleKey: 0,
    industry: "fintech",
    timeline: "14 days",
    tech: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    slug: "bloom",
    titleKey: 1,
    industry: "ecommerce",
    timeline: "18 days",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "atlas",
    titleKey: 2,
    industry: "saas",
    timeline: "21 days",
    tech: ["Vue.js", "Python", "TensorFlow"],
  },
  {
    slug: "nomad",
    titleKey: 3,
    industry: "travel",
    timeline: "16 days",
    tech: ["React Native", "GraphQL", "MongoDB"],
  },
  {
    slug: "volt",
    titleKey: 4,
    industry: "fitness",
    timeline: "12 days",
    tech: ["Swift", "Kotlin", "Firebase"],
  },
  {
    slug: "medix",
    titleKey: 5,
    industry: "healthcare",
    timeline: "19 days",
    tech: ["Next.js", "WebRTC", "AWS"],
  },
  {
    slug: "barista",
    titleKey: 6,
    industry: "b2b",
    timeline: "16 days",
    tech: ["Next.js", "React", "Node.js"],
  },
  {
    slug: "luxe",
    titleKey: 7,
    industry: "fashion",
    timeline: "14 days",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

const projectNames = {
  en: [
    "Pulse Banking",
    "Bloom Marketplace",
    "Atlas CRM",
    "Nomad Booking",
    "Volt Fitness",
    "Medix Telehealth",
    "Barista Pro",
    "Luxe Threads",
  ],
  ar: [
    "بولس المصرفي",
    "سوق بلوم",
    "أطلس CRM",
    "نوماد للحجوزات",
    "فولت للياقة",
    "ميديكس للطب عن بعد",
    "باريستا برو",
    "لوكس ثريدز",
  ],
};

const projectDescriptions = {
  en: [
    "Modern dashboard with real-time analytics and AI-powered insights for financial institutions.",
    "Headless commerce platform with AR product visualization and AI recommendations.",
    "AI-driven customer relationship management platform with predictive analytics.",
    "Travel booking platform with real-time inventory and dynamic pricing.",
    "Fitness tracking app with personalized workout plans and nutrition guidance.",
    "Telemedicine platform connecting patients with healthcare providers.",
    "Premium B2B platform for commercial coffee equipment sales, maintenance, and barista training.",
    "Boutique fashion e-commerce platform with curated collections, same-day delivery, and personalized shopping experience.",
  ],
  ar: [
    "لوحة تحكم حديثة مع تحليلات فورية ورؤى مدعومة بالذكاء الاصطناعي للمؤسسات المالية.",
    "منصة تجارة إلكترونية مع تصور المنتجات بالواقع المعزز وتوصيات الذكاء الاصطناعي.",
    "منصة إدارة علاقات العملاء مدعومة بالذكاء الاصطناعي مع تحليلات تنبؤية.",
    "منصة حجز السفر مع المخزون الفوري والتسعير الديناميكي.",
    "تطبيق تتبع اللياقة البدنية مع خطط تمارين مخصصة وإرشادات غذائية.",
    "منصة الطب عن بعد تربط المرضى بمقدمي الرعاية الصحية.",
    "منصة B2B متخصصة في بيع معدات القهوة التجارية والصيانة وتدريب الباريستا.",
    "منصة أزياء إلكترونية فاخرة مع مجموعات مختارة بعناية وتوصيل في نفس اليوم وتجربة تسوق شخصية.",
  ],
};

export default function ProjectsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const t = useTranslations();

  const industries = [
    { key: "all", label: t.projectsPage.industries.all },
    { key: "fintech", label: t.projectsPage.industries.fintech },
    { key: "ecommerce", label: t.projectsPage.industries.ecommerce },
    { key: "saas", label: t.projectsPage.industries.saas },
    { key: "travel", label: t.projectsPage.industries.travel },
    { key: "fitness", label: t.projectsPage.industries.fitness },
    { key: "healthcare", label: t.projectsPage.industries.healthcare },
    { key: "b2b", label: t.projectsPage.industries.b2b },
  ];

  const filteredProjects =
    selectedIndustry === "all"
      ? projects
      : projects.filter((p) => p.industry === selectedIndustry);

  const lang = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          minHeight: "auto",
          paddingTop: "var(--space-32)",
          paddingBottom: "var(--space-16)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <div
            className="hero-badge"
            style={{ margin: "0 auto var(--space-8)" }}
          >
            <span>{t.projectsPage.badge}</span>
          </div>
          <h1
            className="hero-title"
            style={{
              fontSize: "var(--text-5xl)",
              marginBottom: "var(--space-6)",
            }}
          >
            <span className="gradient-text">{t.projectsPage.title}</span>
          </h1>
          <p
            className="hero-description"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            {t.projectsPage.description}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section
        className="section"
        style={{ paddingTop: 0, paddingBottom: "var(--space-8)" }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: "var(--space-2)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {industries.map((industry) => (
              <button
                key={industry.key}
                onClick={() => setSelectedIndustry(industry.key)}
                className={`btn btn-sm ${selectedIndustry === industry.key ? "btn-primary" : "btn-secondary"}`}
                style={{
                  boxShadow:
                    selectedIndustry === industry.key
                      ? "var(--shadow-brutal)"
                      : "none",
                }}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="section"
        style={{
          paddingTop: "var(--space-8)",
          paddingBottom: "var(--space-16)",
        }}
      >
        <div className="container">
          <div
            className="stats"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            <div className="stat">
              <div className="stat-value">
                {t.projectsPage.stats.projects.value}
              </div>
              <div className="stat-label">
                {t.projectsPage.stats.projects.label}
              </div>
            </div>
            <div className="stat">
              <div className="stat-value">
                {t.projectsPage.stats.timeline.value}
              </div>
              <div className="stat-label">
                {t.projectsPage.stats.timeline.label}
              </div>
            </div>
            <div className="stat">
              <div className="stat-value">
                {t.projectsPage.stats.industries.value}
              </div>
              <div className="stat-label">
                {t.projectsPage.stats.industries.label}
              </div>
            </div>
            <div className="stat">
              <div className="stat-value">
                {t.projectsPage.stats.satisfaction.value}
              </div>
              <div className="stat-label">
                {t.projectsPage.stats.satisfaction.label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t.projectsPage.allProjects}</span>
            <h2 className="section-title">{t.projectsPage.portfolio}</h2>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="project-card"
              >
                <div className="project-image">
                  {getProjectMockup(project.slug)}
                </div>
                <div className="project-body">
                  <span className="project-tag">
                    {industries.find((i) => i.key === project.industry)?.label}
                  </span>
                  <h3 className="project-title">
                    {projectNames[lang as "en" | "ar"][project.titleKey]}
                  </h3>
                  <p className="project-description">
                    {projectDescriptions[lang as "en" | "ar"][project.titleKey]}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-2)",
                      marginTop: "var(--space-4)",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.tech.slice(0, 2).map((tech) => (
                      <span key={tech} className="badge badge-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: "center", padding: "var(--space-16) 0" }}>
              <p
                style={{ color: "var(--fg-muted)", fontSize: "var(--text-lg)" }}
              >
                {t.projectsPage.noProjects}
              </p>
              <button
                onClick={() => setSelectedIndustry("all")}
                style={{
                  marginTop: "var(--space-4)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {t.projectsPage.viewAll}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div
            className="card card-elevated"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
              padding: "var(--space-12)",
            }}
          >
            <h2
              className="section-title"
              style={{ marginBottom: "var(--space-4)" }}
            >
              {t.projectsPage.cta.title}
            </h2>
            <p
              style={{
                color: "var(--fg-muted)",
                marginBottom: "var(--space-8)",
              }}
            >
              {t.projectsPage.cta.description}
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              {t.projectsPage.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
