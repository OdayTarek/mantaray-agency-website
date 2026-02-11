import { MockupFrame } from "./shared/MockupFrame";
import { alpineData } from "./shared/types";
import type { Cabin, Amenity } from "./shared/types";

type AlpineVariant = "home" | "cabins" | "gallery" | "contact";

interface AlpineMockupProps {
  variant?: AlpineVariant;
}

// ─── Inline SVG Icons ───────────────────────────────────────────────────────

function MountainIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PoolIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 15c6.667-6 13.333 0 20 0" />
      <path d="M2 19c6.667-6 13.333 0 20 0" />
      <path d="M9 3v8" />
      <path d="M15 3v8" />
      <path d="M6 8h12" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c-4.97 0-9-2.69-9-6 0-4 5-11 9-14 4 3 9 10 9 14 0 3.31-4.03 6-9 6z" />
      <path d="M12 22c-1.66 0-3-1.34-3-3 0-2 2-5 3-6 1 1 3 4 3 6 0 1.66-1.34 3-3 3z" />
    </svg>
  );
}

function SkiIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M15 22l-3-9-3 9" />
      <path d="M9 13l-4 9" />
      <path d="M15 13l4 9" />
      <path d="M6 9h12" />
    </svg>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function AlpineMockup({ variant = "home" }: AlpineMockupProps) {
  return (
    <div className="alpine-mockup">
      <MockupFrame url="alpine-lodge.com">
        <div className="alpine-app">
          <AlpineNav variant={variant} />
          <div className="alpine-main">
            {variant === "home" && <HomeView />}
            {variant === "cabins" && <CabinsView />}
            {variant === "gallery" && <GalleryView />}
            {variant === "contact" && <ContactView />}
          </div>
          <AlpineFooter />
        </div>
      </MockupFrame>

      <style jsx>{`
        .alpine-mockup {
          width: 100%;
          height: 100%;
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;
          --alpine-dark: #1a1a1a;
          --alpine-brown: #8b6c4d;
          --alpine-cream: #faf7f2;
          --alpine-gold: #c9a96e;
          --alpine-dark-brown: #5c4a32;
          --alpine-warm-gray: #9b8b7a;
          --alpine-charcoal: #2d2926;
          --alpine-offwhite: #f0ebe3;
          --alpine-heading:
            "Palatino Linotype", "Book Antiqua", Palatino, serif;
        }

        .alpine-app {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--alpine-dark);
          color: var(--alpine-cream);
          direction: ltr;
        }

        .alpine-main {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .alpine-main::-webkit-scrollbar {
          width: 5px;
        }
        .alpine-main::-webkit-scrollbar-track {
          background: var(--alpine-dark);
        }
        .alpine-main::-webkit-scrollbar-thumb {
          background: var(--alpine-brown);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

// ─── Navigation ─────────────────────────────────────────────────────────────

function AlpineNav({ variant }: { variant: AlpineVariant }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "cabins", label: "Cabins" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="alpine-nav">
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="logo-text">Alpine</span>
          <span className="logo-accent">Lodge</span>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <span
              key={item.id}
              className={`nav-link ${variant === item.id ? "nav-link--active" : ""}`}
            >
              {item.label}
            </span>
          ))}
        </div>
        <div className="nav-cta">Book Now</div>
      </div>

      <style jsx>{`
        .alpine-nav {
          background: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(201, 169, 110, 0.15);
          padding: 0 20px;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
          height: 52px;
        }
        .nav-logo {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .logo-text {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 18px;
          font-weight: 700;
          color: #faf7f2;
          letter-spacing: -0.02em;
        }
        .logo-accent {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 18px;
          font-weight: 400;
          font-style: italic;
          color: #c9a96e;
        }
        .nav-links {
          display: flex;
          gap: 24px;
        }
        .nav-link {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(250, 247, 242, 0.55);
          cursor: pointer;
          transition: color 0.2s;
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link:hover,
        .nav-link--active {
          color: #c9a96e;
        }
        .nav-link--active::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1px;
          background: #c9a96e;
        }
        .nav-cta {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1a1a1a;
          background: #c9a96e;
          padding: 7px 18px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nav-cta:hover {
          background: #d4b87e;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}

// ─── Home View ──────────────────────────────────────────────────────────────

function HomeView() {
  return (
    <div className="home-view">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-label">
            <span className="hero-label-line" />
            Private Cabin Retreats
          </div>
          <h1 className="hero-title">
            Where <em>Privacy</em> Meets
            <br />
            European Elegance
          </h1>
          <p className="hero-subtitle">
            Exclusive huts with heated pools, modern interiors, and 100% privacy
            — nestled in the European Countryside.
          </p>
          <div className="hero-actions">
            <span className="btn-gold">Explore Our Cabins</span>
            <span className="btn-outline">WhatsApp Us</span>
          </div>
          <div className="hero-scroll">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Exclusive Cabins</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Max Guests</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Complete Privacy</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">30 min</div>
            <div className="stat-label">Past Sheikh Zayed</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-images">
            <div className="about-img about-img--tall">
              <div
                className="img-placeholder"
                style={{
                  background:
                    "linear-gradient(160deg, #5C4A32 0%, #8B6C4D 50%, #3a2a1a 100%)",
                }}
              />
            </div>
            <div className="about-img">
              <div
                className="img-placeholder"
                style={{
                  background:
                    "linear-gradient(135deg, #2D2926 0%, #8B6C4D 100%)",
                }}
              />
            </div>
            <div className="about-img">
              <div
                className="img-placeholder"
                style={{
                  background:
                    "linear-gradient(135deg, #C9A96E 0%, #5C4A32 100%)",
                }}
              />
            </div>
          </div>
          <div className="about-content">
            <div className="section-label">
              <span className="label-line" />
              About Alpine Lodge
            </div>
            <h2 className="section-heading">
              A European Escape, Minutes from Cairo
            </h2>
            <p className="about-text">
              Alpine Lodge brings the charm of European countryside living to
              Egypt. Located just half an hour past Sheikh Zayed, our exclusive
              retreat offers beautifully designed cabins — each with its own
              heated pool and complete privacy.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon-circle">
                  <PoolIcon />
                </div>
                <div>
                  <h4 className="feature-title">Heated Pools</h4>
                  <p className="feature-desc">
                    Indoor & outdoor heated swimming pools
                  </p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon-circle">
                  <ShieldIcon />
                </div>
                <div>
                  <h4 className="feature-title">100% Privacy</h4>
                  <p className="feature-desc">
                    Each hut is fully private and secluded
                  </p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon-circle">
                  <HomeIcon />
                </div>
                <div>
                  <h4 className="feature-title">European Design</h4>
                  <p className="feature-desc">
                    Elegant interiors with premium finishes
                  </p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon-circle">
                  <UsersIcon />
                </div>
                <div>
                  <h4 className="feature-title">Family Friendly</h4>
                  <p className="feature-desc">
                    Families, couples & women-only welcome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Parallax Section */}
      <section className="experience-section">
        <div className="experience-bg" />
        <div className="experience-overlay" />
        <div className="experience-content">
          <div className="experience-text">
            <div className="section-label" style={{ color: "#C9A96E" }}>
              <span className="label-line" />
              The Experience
            </div>
            <h2 className="section-heading" style={{ color: "#FAF7F2" }}>
              More Than a Stay — It&apos;s a Lifestyle
            </h2>
            <p
              style={{
                color: "rgba(250, 247, 242, 0.75)",
                fontSize: "13px",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              From the moment you arrive, every detail has been designed to
              transport you into a world of comfort and privacy. Our cabins are
              destinations in themselves.
            </p>
            <span className="btn-gold">Book Your Experience</span>
          </div>
          <div className="experience-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <PoolIcon />
              </div>
              <h4>Heated Pools</h4>
              <p>Indoor & outdoor heated swimming year-round</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <ShieldIcon />
              </div>
              <h4>Full Privacy</h4>
              <p>Secluded huts with private entrances</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <HomeIcon />
              </div>
              <h4>European Design</h4>
              <p>Architect-crafted interiors & exteriors</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <MapPinIcon />
              </div>
              <h4>Easy Access</h4>
              <p>30 min past Sheikh Zayed</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-view {
          background: #1a1a1a;
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #2d2926 0%,
            #5c4a32 30%,
            #8b6c4d 60%,
            #3a2a1a 100%
          );
          z-index: 1;
        }
        .hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse at 70% 30%,
              rgba(201, 169, 110, 0.15) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse at 20% 80%,
              rgba(92, 74, 50, 0.3) 0%,
              transparent 50%
            );
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(26, 26, 26, 0.8) 0%,
            rgba(26, 26, 26, 0.4) 50%,
            rgba(26, 26, 26, 0.15) 100%
          );
          z-index: 2;
        }
        .hero-content {
          position: relative;
          z-index: 3;
          padding: 60px 32px 50px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }
        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 16px;
        }
        .hero-label-line {
          display: block;
          width: 36px;
          height: 1px;
          background: #c9a96e;
        }
        .hero-title {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 36px;
          font-weight: 700;
          color: #faf7f2;
          line-height: 1.1;
          max-width: 480px;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .hero-title em {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-style: italic;
          font-weight: 400;
          color: #c9a96e;
        }
        .hero-subtitle {
          font-size: 13px;
          line-height: 1.75;
          color: rgba(250, 247, 242, 0.7);
          max-width: 400px;
          margin-bottom: 24px;
        }
        .hero-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .btn-gold {
          display: inline-flex;
          align-items: center;
          padding: 10px 24px;
          background: #c9a96e;
          color: #1a1a1a;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-gold:hover {
          background: #d4b87e;
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 10px 24px;
          background: transparent;
          color: #faf7f2;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid rgba(250, 247, 242, 0.35);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          border-color: #c9a96e;
          color: #c9a96e;
        }
        .hero-scroll {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(250, 247, 242, 0.4);
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .scroll-line {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, #c9a96e, transparent);
        }

        /* ── Stats Bar ── */
        .stats-bar {
          background: #2d2926;
          padding: 20px 24px;
        }
        .stats-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          max-width: 800px;
          margin: 0 auto;
        }
        .stat-item {
          text-align: center;
          flex: 1;
        }
        .stat-number {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 22px;
          font-weight: 700;
          color: #c9a96e;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(250, 247, 242, 0.45);
        }
        .stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(250, 247, 242, 0.1);
        }

        /* ── About Section ── */
        .about-section {
          padding: 48px 24px;
        }
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: center;
        }
        .about-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .about-img {
          border-radius: 6px;
          overflow: hidden;
        }
        .about-img--tall {
          grid-row: span 2;
        }
        .about-img .img-placeholder {
          width: 100%;
          height: 140px;
          border-radius: 6px;
        }
        .about-img--tall .img-placeholder {
          height: 100%;
          min-height: 290px;
        }
        .about-content {
          padding-left: 16px;
        }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 12px;
        }
        .label-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #c9a96e;
        }
        .section-heading {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 24px;
          font-weight: 600;
          color: #faf7f2;
          line-height: 1.2;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
        }
        .about-text {
          font-size: 12px;
          line-height: 1.8;
          color: #9b8b7a;
          margin-bottom: 20px;
        }
        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .about-feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .feature-icon-circle {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201, 169, 110, 0.1);
          border-radius: 50%;
          color: #c9a96e;
        }
        .feature-icon-circle :global(svg) {
          width: 16px;
          height: 16px;
        }
        .feature-title {
          font-size: 11px;
          font-weight: 600;
          color: #faf7f2;
          margin-bottom: 2px;
        }
        .feature-desc {
          font-size: 10px;
          color: #9b8b7a;
          line-height: 1.4;
        }

        /* ── Experience Section ── */
        .experience-section {
          position: relative;
          padding: 48px 24px;
          overflow: hidden;
        }
        .experience-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            #1a1a1a 0%,
            #3a2a1a 40%,
            #5c4a32 70%,
            #2d2926 100%
          );
          z-index: 1;
        }
        .experience-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 60% 40%,
            rgba(201, 169, 110, 0.08) 0%,
            transparent 70%
          );
        }
        .experience-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(26, 26, 26, 0.7) 0%,
            rgba(26, 26, 26, 0.3) 50%,
            rgba(26, 26, 26, 0.5) 100%
          );
          z-index: 2;
        }
        .experience-content {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: center;
        }
        .experience-text h2 {
          margin-bottom: 12px;
        }
        .experience-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .highlight-card {
          text-align: center;
          padding: 16px 12px;
          background: rgba(250, 247, 242, 0.06);
          border: 1px solid rgba(250, 247, 242, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(8px);
          transition: all 0.25s;
        }
        .highlight-card:hover {
          background: rgba(250, 247, 242, 0.1);
          transform: translateY(-2px);
        }
        .highlight-icon {
          color: #c9a96e;
          margin-bottom: 6px;
        }
        .highlight-icon :global(svg) {
          width: 20px;
          height: 20px;
        }
        .highlight-card h4 {
          font-size: 11px;
          font-weight: 600;
          color: #faf7f2;
          margin-bottom: 3px;
        }
        .highlight-card p {
          font-size: 9px;
          color: rgba(250, 247, 242, 0.5);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 26px;
          }
          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }
          .about-container {
            grid-template-columns: 1fr;
          }
          .about-content {
            padding-left: 0;
          }
          .experience-content {
            grid-template-columns: 1fr;
          }
          .stats-inner {
            flex-wrap: wrap;
            gap: 16px;
          }
          .stat-divider {
            display: none;
          }
          .stat-item {
            min-width: 80px;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Cabins View ────────────────────────────────────────────────────────────

function CabinsView() {
  const cabins = alpineData.cabins;

  return (
    <div className="cabins-view">
      {/* Header */}
      <section className="cabins-header">
        <div className="cabins-header-inner">
          <div className="section-label">
            <span className="label-line" />
            Our Collection
          </div>
          <h2 className="section-heading">Choose Your Private Retreat</h2>
          <p className="cabins-intro">
            Each cabin offers a unique experience with heated pools, modern
            amenities, and complete privacy.
          </p>
        </div>
      </section>

      {/* Cabin Cards */}
      <section className="cabins-grid-section">
        <div className="cabins-grid">
          {cabins.map((cabin: Cabin, index: number) => (
            <CabinCard key={cabin.id} cabin={cabin} index={index} />
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="amenities-section">
        <div className="amenities-inner">
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span className="label-line" />
              Features & Amenities
            </div>
            <h2 className="section-heading">Everything You Need</h2>
          </div>
          <div className="amenities-grid">
            {alpineData.amenities.map((amenity: Amenity) => (
              <div key={amenity.id} className="amenity-card">
                <div className="amenity-icon">
                  {amenity.icon === "mountain" && <MountainIcon />}
                  {amenity.icon === "pool" && <PoolIcon />}
                  {amenity.icon === "ski" && <SkiIcon />}
                  {amenity.icon === "fire" && <FireIcon />}
                </div>
                <h4 className="amenity-title">{amenity.name}</h4>
                <p className="amenity-desc">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .cabins-view {
          background: #1a1a1a;
        }

        /* ── Header ── */
        .cabins-header {
          padding: 36px 24px 0;
        }
        .cabins-header-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 12px;
        }
        .label-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #c9a96e;
        }
        .section-heading {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 24px;
          font-weight: 600;
          color: #faf7f2;
          line-height: 1.2;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .cabins-intro {
          font-size: 13px;
          color: #9b8b7a;
          line-height: 1.7;
          max-width: 500px;
        }

        /* ── Grid ── */
        .cabins-grid-section {
          padding: 28px 24px;
        }
        .cabins-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Amenities ── */
        .amenities-section {
          padding: 36px 24px 48px;
          background: #2d2926;
        }
        .amenities-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        .amenity-card {
          text-align: center;
          padding: 20px 14px;
          background: rgba(250, 247, 242, 0.04);
          border: 1px solid rgba(250, 247, 242, 0.08);
          border-radius: 8px;
          transition: all 0.25s;
        }
        .amenity-card:hover {
          border-color: rgba(201, 169, 110, 0.3);
          transform: translateY(-3px);
        }
        .amenity-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          background: rgba(201, 169, 110, 0.1);
          border-radius: 50%;
          color: #c9a96e;
        }
        .amenity-icon :global(svg) {
          width: 20px;
          height: 20px;
        }
        .amenity-title {
          font-size: 12px;
          font-weight: 600;
          color: #faf7f2;
          margin-bottom: 4px;
        }
        .amenity-desc {
          font-size: 10px;
          color: #9b8b7a;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .cabins-grid {
            grid-template-columns: 1fr;
          }
          .amenities-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Cabin Card Sub-component ───────────────────────────────────────────────

function CabinCard({ cabin, index }: { cabin: Cabin; index: number }) {
  const gradients = [
    "linear-gradient(135deg, #5C4A32 0%, #8B6C4D 50%, #2D2926 100%)",
    "linear-gradient(135deg, #2D2926 0%, #5C4A32 60%, #C9A96E 100%)",
    "linear-gradient(135deg, #3a2a1a 0%, #8B6C4D 40%, #5C4A32 100%)",
    "linear-gradient(135deg, #1a1a1a 0%, #5C4A32 50%, #8B6C4D 100%)",
  ];

  const badgeColors: Record<string, string> = {
    "Best Seller": "#C9A96E",
    Premium: "#8B6C4D",
    "Best Value": "#5C4A32",
  };

  return (
    <article className="cabin-card">
      <div className="cabin-card-image">
        <div
          className="cabin-img-placeholder"
          style={{ background: gradients[index % gradients.length] }}
        />
        {cabin.badge && (
          <span
            className="cabin-badge"
            style={{ background: badgeColors[cabin.badge] || "#C9A96E" }}
          >
            {cabin.badge}
          </span>
        )}
      </div>
      <div className="cabin-card-body">
        <h3 className="cabin-name">{cabin.name}</h3>
        <div className="cabin-features">
          {cabin.features.map((feature: string, i: number) => (
            <span key={i} className="cabin-feature-tag">
              {feature}
            </span>
          ))}
        </div>
        <div className="cabin-meta">
          <div className="cabin-detail">
            <BedIcon />
            <span>{cabin.bedrooms} Bedrooms</span>
          </div>
        </div>
        <div className="cabin-footer">
          <div className="cabin-price">
            {cabin.pricePerNight}
            <span className="price-unit"> / night</span>
          </div>
          <span className="privacy-badge">
            <CheckIcon />
            100% Privacy
          </span>
        </div>
        <div className="cabin-book-btn">Book via WhatsApp</div>
      </div>

      <style jsx>{`
        .cabin-card {
          border-radius: 8px;
          overflow: hidden;
          background: #2d2926;
          border: 1px solid rgba(250, 247, 242, 0.06);
          transition: all 0.3s;
        }
        .cabin-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(201, 169, 110, 0.2);
        }
        .cabin-card-image {
          position: relative;
          height: 180px;
          overflow: hidden;
        }
        .cabin-img-placeholder {
          width: 100%;
          height: 100%;
          transition: transform 0.4s;
        }
        .cabin-card:hover .cabin-img-placeholder {
          transform: scale(1.05);
        }
        .cabin-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 4px 10px;
          color: #1a1a1a;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 2px;
        }
        .cabin-card-body {
          padding: 16px;
        }
        .cabin-name {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 17px;
          font-weight: 600;
          color: #faf7f2;
          margin-bottom: 10px;
        }
        .cabin-features {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }
        .cabin-feature-tag {
          font-size: 9px;
          font-weight: 500;
          color: #c9a96e;
          background: rgba(201, 169, 110, 0.1);
          padding: 3px 8px;
          border-radius: 2px;
          letter-spacing: 0.02em;
        }
        .cabin-meta {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(250, 247, 242, 0.06);
        }
        .cabin-detail {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #9b8b7a;
        }
        .cabin-detail :global(svg) {
          width: 14px;
          height: 14px;
          opacity: 0.6;
        }
        .cabin-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .cabin-price {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 18px;
          font-weight: 700;
          color: #faf7f2;
        }
        .price-unit {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #9b8b7a;
        }
        .privacy-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 9px;
          font-weight: 600;
          color: #c9a96e;
          letter-spacing: 0.03em;
        }
        .privacy-badge :global(svg) {
          width: 12px;
          height: 12px;
        }
        .cabin-book-btn {
          display: block;
          width: 100%;
          padding: 10px;
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1a1a1a;
          background: #c9a96e;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .cabin-book-btn:hover {
          background: #d4b87e;
        }
      `}</style>
    </article>
  );
}

// ─── Gallery View ───────────────────────────────────────────────────────────

function GalleryView() {
  const galleryItems = [
    {
      caption: "Aerial Pool View",
      gradient:
        "linear-gradient(135deg, #2D2926 0%, #8B6C4D 50%, #5C4A32 100%)",
      wide: true,
    },
    {
      caption: "Modern Staircase",
      gradient: "linear-gradient(160deg, #5C4A32 0%, #C9A96E 100%)",
      wide: false,
    },
    {
      caption: "Cozy Living Area",
      gradient: "linear-gradient(135deg, #3a2a1a 0%, #8B6C4D 100%)",
      wide: false,
    },
    {
      caption: "Garden Panorama",
      gradient:
        "linear-gradient(135deg, #1a1a1a 0%, #5C4A32 50%, #8B6C4D 100%)",
      wide: true,
    },
    {
      caption: "Loft Bedroom",
      gradient: "linear-gradient(160deg, #8B6C4D 0%, #2D2926 100%)",
      wide: false,
    },
    {
      caption: "Designer Kitchen",
      gradient:
        "linear-gradient(135deg, #C9A96E 0%, #5C4A32 50%, #1a1a1a 100%)",
      wide: false,
    },
    {
      caption: "Indoor Pool Night",
      gradient:
        "linear-gradient(135deg, #1a1a1a 0%, #3a2a1a 40%, #C9A96E 100%)",
      wide: true,
    },
    {
      caption: "Exterior at Dusk",
      gradient:
        "linear-gradient(160deg, #2D2926 0%, #8B6C4D 60%, #C9A96E 100%)",
      wide: false,
    },
    {
      caption: "Lounge Swing",
      gradient: "linear-gradient(135deg, #5C4A32 0%, #1a1a1a 100%)",
      wide: false,
    },
  ];

  return (
    <div className="gallery-view">
      <section className="gallery-header">
        <div className="gallery-header-inner">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span className="label-line" />
            Gallery
          </div>
          <h2 className="section-heading" style={{ textAlign: "center" }}>
            Step Inside Our World
          </h2>
          <p className="gallery-intro">
            A glimpse into the stunning spaces that await you at Alpine Lodge.
          </p>
        </div>
      </section>

      <section className="gallery-mosaic-section">
        <div className="gallery-mosaic">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${item.wide ? "gallery-item--wide" : ""}`}
            >
              <div
                className="gallery-img"
                style={{ background: item.gradient }}
              />
              <div className="gallery-overlay">
                <div className="gallery-caption">
                  <CameraIcon />
                  <span>{item.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .gallery-view {
          background: #1a1a1a;
        }

        .gallery-header {
          padding: 36px 24px 0;
          text-align: center;
        }
        .gallery-header-inner {
          max-width: 600px;
          margin: 0 auto;
        }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 12px;
        }
        .label-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #c9a96e;
        }
        .section-heading {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 24px;
          font-weight: 600;
          color: #faf7f2;
          line-height: 1.2;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .gallery-intro {
          font-size: 13px;
          color: #9b8b7a;
          line-height: 1.7;
          text-align: center;
        }

        .gallery-mosaic-section {
          padding: 28px 24px 48px;
        }
        .gallery-mosaic {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .gallery-item {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          height: 160px;
          cursor: pointer;
        }
        .gallery-item--wide {
          grid-column: span 2;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          transition: transform 0.5s;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(26, 26, 26, 0.8) 0%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: flex-end;
          padding: 12px;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-caption {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #faf7f2;
          font-size: 11px;
          font-weight: 500;
        }
        .gallery-caption :global(svg) {
          width: 14px;
          height: 14px;
          color: #c9a96e;
        }

        @media (max-width: 768px) {
          .gallery-mosaic {
            grid-template-columns: 1fr;
          }
          .gallery-item--wide {
            grid-column: span 1;
          }
          .gallery-item {
            height: 140px;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Contact View ───────────────────────────────────────────────────────────

function ContactView() {
  return (
    <div className="contact-view">
      {/* CTA Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <div
            className="section-label"
            style={{ justifyContent: "center", color: "#C9A96E" }}
          >
            <span className="label-line" />
            Book Your Escape
          </div>
          <h2
            className="section-heading"
            style={{ textAlign: "center", color: "#FAF7F2", fontSize: "28px" }}
          >
            Your Dream Retreat is One Message Away
          </h2>
          <p className="contact-hero-text">
            Whether it&apos;s a romantic getaway, a family holiday, or a
            women-only retreat — our cabins are waiting to welcome you.
          </p>
          <div className="contact-hero-actions">
            <span className="btn-gold-lg">
              <WhatsAppIcon />
              Book via WhatsApp
            </span>
            <span className="btn-white">
              <PhoneIcon />
              Call Us
            </span>
          </div>
          <p className="contact-urgency">
            <StarIcon />
            Limited availability on weekends and holidays — Book early
          </p>
        </div>
      </section>

      {/* Location & Info */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="info-icon">
              <MapPinIcon />
            </div>
            <h3 className="info-title">Our Location</h3>
            <div className="info-details">
              <div className="info-detail">
                <h4>Address</h4>
                <p>European Countryside, Cairo-Alexandria Desert Road</p>
              </div>
              <div className="info-detail">
                <h4>Getting There</h4>
                <p>Half hour past Sheikh Zayed on the Desert Road</p>
              </div>
              <div className="info-detail">
                <h4>Nearby</h4>
                <p>Hyper One Desert Road & local supermarket</p>
              </div>
            </div>
            <div className="map-placeholder">
              <div className="map-gradient" />
              <div className="map-pin">
                <MapPinIcon />
              </div>
              <span className="map-label">Open in Google Maps</span>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="info-icon">
              <ClockIcon />
            </div>
            <h3 className="info-title">Operating Hours & Rules</h3>
            <div className="rules-list">
              <div className="rule-item">
                <div className="rule-icon">
                  <CheckIcon />
                </div>
                <div>
                  <h4>Guest Policy</h4>
                  <p>Maximum 8 people per cabin, including children</p>
                </div>
              </div>
              <div className="rule-item">
                <div className="rule-icon">
                  <CheckIcon />
                </div>
                <div>
                  <h4>Check-in / Check-out</h4>
                  <p>Check-in: 12:00 PM — Check-out: 9:00 AM</p>
                </div>
              </div>
              <div className="rule-item">
                <div className="rule-icon">
                  <CheckIcon />
                </div>
                <div>
                  <h4>Guests Welcome</h4>
                  <p>Couples, families, or women-only groups</p>
                </div>
              </div>
              <div className="rule-item">
                <div className="rule-icon">
                  <CheckIcon />
                </div>
                <div>
                  <h4>Filming & Photography</h4>
                  <p>Professional filming requires advance arrangement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Channels */}
      <section className="channels-section">
        <div className="channels-inner">
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span className="label-line" />
              Get in Touch
            </div>
            <h2 className="section-heading" style={{ textAlign: "center" }}>
              Communication Channels
            </h2>
          </div>
          <div className="channels-grid">
            <div className="channel-card">
              <div className="channel-icon channel-icon--whatsapp">
                <WhatsAppIcon />
              </div>
              <h4>WhatsApp</h4>
              <p>Quick responses, booking inquiries</p>
              <span className="channel-action">Message Us</span>
            </div>
            <div className="channel-card">
              <div className="channel-icon channel-icon--phone">
                <PhoneIcon />
              </div>
              <h4>Phone</h4>
              <p>Direct calls for urgent bookings</p>
              <span className="channel-action">Call Now</span>
            </div>
            <div className="channel-card">
              <div className="channel-icon channel-icon--map">
                <MapPinIcon />
              </div>
              <h4>Google Maps</h4>
              <p>Get directions to our location</p>
              <span className="channel-action">Open Maps</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-view {
          background: #1a1a1a;
        }

        /* ── CTA Hero ── */
        .contact-hero {
          position: relative;
          padding: 48px 24px;
          text-align: center;
          overflow: hidden;
        }
        .contact-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #1a1a1a 0%,
            #3a2a1a 30%,
            #5c4a32 60%,
            #2d2926 100%
          );
          z-index: 1;
        }
        .contact-hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 50% 50%,
            rgba(201, 169, 110, 0.12) 0%,
            transparent 60%
          );
        }
        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26, 26, 26, 0.6);
          z-index: 2;
        }
        .contact-hero-content {
          position: relative;
          z-index: 3;
          max-width: 560px;
          margin: 0 auto;
        }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 12px;
        }
        .label-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #c9a96e;
        }
        .section-heading {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 24px;
          font-weight: 600;
          color: #faf7f2;
          line-height: 1.2;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .contact-hero-text {
          font-size: 13px;
          color: rgba(250, 247, 242, 0.7);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .contact-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .btn-gold-lg {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: #c9a96e;
          color: #1a1a1a;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-gold-lg :global(svg) {
          width: 16px;
          height: 16px;
        }
        .btn-gold-lg:hover {
          background: #d4b87e;
        }
        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: #faf7f2;
          color: #1a1a1a;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-white :global(svg) {
          width: 16px;
          height: 16px;
        }
        .btn-white:hover {
          background: #f0ebe3;
        }
        .contact-urgency {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 10px;
          color: #c9a96e;
          font-weight: 500;
          letter-spacing: 0.03em;
        }
        .contact-urgency :global(svg) {
          width: 12px;
          height: 12px;
        }

        /* ── Info Section ── */
        .contact-info-section {
          padding: 0 24px 36px;
        }
        .contact-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .contact-info-card {
          background: #2d2926;
          border-radius: 8px;
          padding: 24px;
          border: 1px solid rgba(250, 247, 242, 0.06);
        }
        .info-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201, 169, 110, 0.1);
          border-radius: 50%;
          color: #c9a96e;
          margin-bottom: 14px;
        }
        .info-icon :global(svg) {
          width: 18px;
          height: 18px;
        }
        .info-title {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 17px;
          font-weight: 600;
          color: #faf7f2;
          margin-bottom: 16px;
        }
        .info-details {
          margin-bottom: 16px;
        }
        .info-detail {
          margin-bottom: 12px;
          padding-left: 12px;
          border-left: 2px solid rgba(201, 169, 110, 0.3);
        }
        .info-detail h4 {
          font-size: 11px;
          font-weight: 600;
          color: #faf7f2;
          margin-bottom: 2px;
        }
        .info-detail p {
          font-size: 11px;
          color: #9b8b7a;
          line-height: 1.5;
        }
        .map-placeholder {
          position: relative;
          height: 100px;
          border-radius: 6px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .map-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #3a2a1a 0%,
            #5c4a32 50%,
            #8b6c4d 100%
          );
          opacity: 0.5;
        }
        .map-pin {
          position: relative;
          z-index: 2;
          color: #c9a96e;
        }
        .map-pin :global(svg) {
          width: 24px;
          height: 24px;
        }
        .map-label {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          font-size: 9px;
          font-weight: 600;
          color: #c9a96e;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ── Rules ── */
        .rules-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .rule-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .rule-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201, 169, 110, 0.1);
          border-radius: 50%;
          color: #c9a96e;
        }
        .rule-icon :global(svg) {
          width: 12px;
          height: 12px;
        }
        .rule-item h4 {
          font-size: 11px;
          font-weight: 600;
          color: #faf7f2;
          margin-bottom: 2px;
        }
        .rule-item p {
          font-size: 10px;
          color: #9b8b7a;
          line-height: 1.5;
        }

        /* ── Channels ── */
        .channels-section {
          padding: 36px 24px 48px;
          background: #2d2926;
        }
        .channels-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .channels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .channel-card {
          text-align: center;
          padding: 24px 16px;
          background: rgba(250, 247, 242, 0.04);
          border: 1px solid rgba(250, 247, 242, 0.08);
          border-radius: 8px;
          transition: all 0.25s;
        }
        .channel-card:hover {
          border-color: rgba(201, 169, 110, 0.3);
          transform: translateY(-3px);
        }
        .channel-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          border-radius: 50%;
        }
        .channel-icon :global(svg) {
          width: 22px;
          height: 22px;
        }
        .channel-icon--whatsapp {
          background: rgba(37, 211, 102, 0.1);
          color: #25d366;
        }
        .channel-icon--phone {
          background: rgba(201, 169, 110, 0.1);
          color: #c9a96e;
        }
        .channel-icon--map {
          background: rgba(139, 108, 77, 0.15);
          color: #8b6c4d;
        }
        .channel-card h4 {
          font-size: 13px;
          font-weight: 600;
          color: #faf7f2;
          margin-bottom: 4px;
        }
        .channel-card p {
          font-size: 10px;
          color: #9b8b7a;
          line-height: 1.4;
          margin-bottom: 12px;
        }
        .channel-action {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          color: #c9a96e;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.2s;
        }
        .channel-action:hover {
          color: #d4b87e;
        }

        @media (max-width: 768px) {
          .contact-hero-actions {
            flex-direction: column;
          }
          .contact-info-grid {
            grid-template-columns: 1fr;
          }
          .channels-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────

function AlpineFooter() {
  return (
    <footer className="alpine-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">Alpine</span>
              <span className="footer-logo-accent">Lodge</span>
            </div>
            <p className="footer-brand-desc">
              Luxury private cabin retreats. Where European elegance meets
              Egyptian hospitality.
            </p>
            <div className="footer-socials">
              <span className="social-link">IG</span>
              <span className="social-link">FB</span>
              <span className="social-link">TT</span>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Explore</h4>
            <div className="footer-links">
              <span className="footer-link">Our Cabins</span>
              <span className="footer-link">The Experience</span>
              <span className="footer-link">Amenities</span>
              <span className="footer-link">Gallery</span>
              <span className="footer-link">Booking Rules</span>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-links">
              <span className="footer-link">WhatsApp</span>
              <span className="footer-link">Phone</span>
              <span className="footer-link">Google Maps</span>
              <span className="footer-link">Instagram</span>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Info</h4>
            <div className="footer-links">
              <span className="footer-info">Max 8 guests per cabin</span>
              <span className="footer-info">Couples, families, women only</span>
              <span className="footer-info">Check-in 12 PM</span>
              <span className="footer-info">Hyper One nearby</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 Alpine Lodge. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <span>Find Us</span>
            <span>WhatsApp</span>
            <span>Call Us</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .alpine-footer {
          background: #111;
          padding: 36px 24px 0;
          color: rgba(250, 247, 242, 0.5);
          border-top: 1px solid rgba(201, 169, 110, 0.1);
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 32px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(250, 247, 242, 0.06);
        }
        .footer-logo {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 10px;
        }
        .footer-logo-text {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 16px;
          font-weight: 700;
          color: #faf7f2;
        }
        .footer-logo-accent {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 16px;
          font-weight: 400;
          font-style: italic;
          color: #c9a96e;
        }
        .footer-brand-desc {
          font-size: 11px;
          line-height: 1.6;
          color: rgba(250, 247, 242, 0.4);
          max-width: 240px;
          margin-bottom: 12px;
        }
        .footer-socials {
          display: flex;
          gap: 8px;
        }
        .social-link {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(250, 247, 242, 0.12);
          border-radius: 50%;
          font-size: 9px;
          font-weight: 600;
          color: rgba(250, 247, 242, 0.5);
          cursor: pointer;
          transition: all 0.2s;
        }
        .social-link:hover {
          border-color: #c9a96e;
          color: #c9a96e;
        }
        .footer-col-title {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #faf7f2;
          margin-bottom: 12px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-link {
          font-size: 11px;
          color: rgba(250, 247, 242, 0.4);
          cursor: pointer;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #c9a96e;
        }
        .footer-info {
          font-size: 11px;
          color: rgba(250, 247, 242, 0.35);
          line-height: 1.4;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
        }
        .footer-copyright {
          font-size: 10px;
          color: rgba(250, 247, 242, 0.25);
        }
        .footer-bottom-links {
          display: flex;
          gap: 16px;
        }
        .footer-bottom-links span {
          font-size: 10px;
          color: rgba(250, 247, 242, 0.25);
          cursor: pointer;
          transition: color 0.2s;
        }
        .footer-bottom-links span:hover {
          color: #c9a96e;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
