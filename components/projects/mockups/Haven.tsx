import { MockupFrame } from "./shared/MockupFrame";
import { havenData } from "./shared/types";
import type { Cabin, Amenity } from "./shared/types";

type HavenVariant = "home" | "cabins" | "experience" | "booking";

interface HavenMockupProps {
  variant?: HavenVariant;
}

// ─── Inline SVG Icons ───────────────────────────────────────────────────────

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
      <path d="M2 12h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8z" />
      <path d="M14 4h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M2 2h8v8H2z" />
    </svg>
  );
}

function ThermometerIcon() {
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
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
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

function ShoppingCartIcon() {
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
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
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
      <path d="M12 6v6l4 2" />
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
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
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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

function LockIcon() {
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
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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

function ChevronRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function HavenMockup({ variant = "home" }: HavenMockupProps) {
  return (
    <div className="haven-mockup">
      <MockupFrame url="haven-retreats.com">
        <div className="haven-app">
          <HavenHeader variant={variant} />
          <div className="haven-main">
            {variant === "home" && <HomeView />}
            {variant === "cabins" && <CabinsView />}
            {variant === "experience" && <ExperienceView />}
            {variant === "booking" && <BookingView />}
            <HavenFooter />
          </div>
        </div>
      </MockupFrame>

      <style jsx>{`
        .haven-mockup {
          --sage: #7c8c6e;
          --sage-light: #9aad8c;
          --sage-dark: #4a5d3e;
          --warm-white: #fdfcfa;
          --warm-beige: #f5f0eb;
          --cream: #f9f7f4;
          --sand: #f3ede7;
          --gold: #c9a96e;
          --terracotta: #c17b5a;
          --dark: #2c3e2d;
          --text-primary: #2a2a2a;
          --text-secondary: #6b6560;
          --text-muted: #9b9490;
          --border-color: #e8e4df;
          --border-light: #f0ece8;
          width: 100%;
          height: 100%;
          font-family: "Inter", sans-serif;
        }

        .haven-app {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--warm-white);
          color: var(--text-primary);
          direction: ltr;
        }

        .haven-main {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .haven-main::-webkit-scrollbar {
          width: 6px;
        }
        .haven-main::-webkit-scrollbar-track {
          background: var(--warm-white);
        }
        .haven-main::-webkit-scrollbar-thumb {
          background: var(--sage);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

// ─── Header ─────────────────────────────────────────────────────────────────

function HavenHeader({ variant }: { variant: HavenVariant }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "cabins", label: "Cabins" },
    { id: "experience", label: "Experience" },
    { id: "booking", label: "Book" },
  ];

  return (
    <header className="header">
      <div className="announcement">
        <span>New cabins coming soon — Stay tuned for exciting additions!</span>
      </div>
      <div className="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            <div className="logo-triangle">
              <svg width="28" height="28" viewBox="0 0 100 100">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="#7C8C6E"
                  opacity="0.9"
                />
                <rect
                  x="40"
                  y="55"
                  width="20"
                  height="35"
                  fill="#FDFCFA"
                  rx="2"
                />
              </svg>
            </div>
            <span className="logo-text">
              Haven Retreats<span className="dot">.</span>
            </span>
          </div>

          <nav className="nav-links">
            {navItems.map((item) => (
              <span
                key={item.id}
                className={`nav-item ${variant === item.id ? "active" : ""}`}
              >
                {item.label}
              </span>
            ))}
          </nav>

          <div className="nav-actions">
            <span className="nav-link">Login</span>
            <span className="nav-btn">Register</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .announcement {
          background: #7c8c6e;
          color: white;
          padding: 8px 24px;
          text-align: center;
          font-size: 11px;
          letter-spacing: 0.02em;
        }

        .container {
          padding: 0 24px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .navbar {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid #f0ece8;
          padding: 14px 0;
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-triangle {
          display: flex;
          align-items: center;
        }

        .logo-text {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
          color: #2a2a2a;
          letter-spacing: 0.02em;
        }

        .dot {
          color: #7c8c6e;
        }

        .nav-links {
          display: flex;
          gap: 28px;
        }

        .nav-item {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b6560;
          cursor: pointer;
          position: relative;
          padding-bottom: 4px;
        }

        .nav-item.active,
        .nav-item:hover {
          color: #2a2a2a;
        }

        .nav-item.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #7c8c6e;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-link {
          font-size: 12px;
          color: #9b9490;
          cursor: pointer;
        }

        .nav-btn {
          font-size: 12px;
          padding: 6px 16px;
          border: 1px solid #e8e4df;
          border-radius: 999px;
          color: #2a2a2a;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links,
          .nav-actions {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

// ─── Home View ──────────────────────────────────────────────────────────────

function HomeView() {
  return (
    <div className="home-view">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-label">Luxury Private Cabins</span>
            <h1 className="hero-title">
              Your private
              <br />
              <em>escape</em> awaits.
            </h1>
            <p className="hero-desc">
              European-style huts with heated pools and complete privacy,
              nestled in the European Countryside along the Cairo-Alexandria
              Desert Road.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">
                Explore Cabins <ChevronRightIcon />
              </button>
              <button className="btn btn-ghost">Our Story</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-img-placeholder">
              <img
                src="/mockups/haven/hero-exterior.jpeg"
                alt="European Hut cabin exterior with pool and lush landscape"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div className="hero-badge">
              <MapPinIcon />
              <div className="badge-text">
                <strong>Cairo-Alex Desert Road</strong>
                <span>European Countryside</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="intro">
        <div className="intro-inner">
          <span className="section-label">About Haven Retreats</span>
          <p className="intro-quote">
            &ldquo;We believe in creating <em>unforgettable</em> moments — where
            luxury meets privacy.&rdquo;
          </p>
          <p className="intro-text">
            Haven Retreats offers four uniquely designed cabins, each with
            heated swimming pools and 100% privacy. Located in the European
            Countryside on the Cairo-Alexandria Desert Road.
          </p>
          <div className="intro-line" />
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What Makes Us Special</span>
            <h2 className="section-title">A Closer Look</h2>
          </div>

          <div className="highlight-row">
            <div className="highlight-image">
              <div className="img-placeholder">
                <img
                  src="/mockups/haven/cabin-daylight.jpeg"
                  alt="A-frame cabin exterior with garden and pool in daylight"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="highlight-content">
              <span className="highlight-label">Unique Architecture</span>
              <h3 className="highlight-title">Iconic A-Frame Design</h3>
              <p className="highlight-text">
                Striking A-frame architecture with dramatic floor-to-ceiling
                glass panels, natural wood ceilings, and industrial steel beams.
              </p>
              <ul className="highlight-list">
                <li>
                  <CheckIcon /> Floor-to-ceiling glass walls
                </li>
                <li>
                  <CheckIcon /> Natural wood & steel construction
                </li>
                <li>
                  <CheckIcon /> Lush green gardens
                </li>
                <li>
                  <CheckIcon /> Play areas for children
                </li>
              </ul>
            </div>
          </div>

          <div className="highlight-row reverse">
            <div className="highlight-image">
              <div className="img-placeholder">
                <img
                  src="/mockups/haven/indoor-pool-2.jpeg"
                  alt="Indoor heated pool with swing chair and glass A-frame walls"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="highlight-content">
              <span className="highlight-label">Swim Year-Round</span>
              <h3 className="highlight-title">Heated Indoor Pools</h3>
              <p className="highlight-text">
                Swimming in a heated pool beneath a soaring wooden ceiling with
                hanging pendant lights and a rattan swing chair.
              </p>
              <ul className="highlight-list">
                <li>
                  <CheckIcon /> Heated for all seasons
                </li>
                <li>
                  <CheckIcon /> Poolside swing chairs
                </li>
                <li>
                  <CheckIcon /> Glass-walled enclosures
                </li>
                <li>
                  <CheckIcon /> Ambient pendant lighting
                </li>
              </ul>
            </div>
          </div>

          <div className="highlight-row">
            <div className="highlight-image">
              <div className="img-placeholder">
                <img
                  src="/mockups/haven/living-area-1.jpeg"
                  alt="Spacious A-frame living area with curved sofa and indoor pool"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="highlight-content">
              <span className="highlight-label">Designed for Comfort</span>
              <h3 className="highlight-title">Stylish Living Spaces</h3>
              <p className="highlight-text">
                Generous open-plan living areas with designer curved sofas,
                flat-screen TVs, and dining areas beneath the dramatic A-frame
                ceiling.
              </p>
              <ul className="highlight-list">
                <li>
                  <CheckIcon /> Designer curved sofas
                </li>
                <li>
                  <CheckIcon /> Smart TV entertainment
                </li>
                <li>
                  <CheckIcon /> Open-plan loft bedrooms
                </li>
                <li>
                  <CheckIcon /> Live-edge wood tables
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Cabin Preview */}
      <section className="cabin-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Collection</span>
            <h2 className="section-title">Choose Your Cabin</h2>
          </div>
          <div className="cabin-grid">
            {havenData.cabins.map((cabin: Cabin, i: number) => (
              <CabinCard key={cabin.id} cabin={cabin} index={i} />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-view {
          display: flex;
          flex-direction: column;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero */
        .hero {
          background: #fdfcfa;
          padding: 48px 24px 48px;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
        }

        .hero-label {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7c8c6e;
          margin-bottom: 16px;
        }

        .hero-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 42px;
          line-height: 1.08;
          color: #2a2a2a;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .hero-title em {
          font-style: italic;
          color: #7c8c6e;
        }

        .hero-desc {
          font-size: 14px;
          line-height: 1.8;
          color: #6b6560;
          margin-bottom: 28px;
          max-width: 400px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          padding: 12px 24px;
          border-radius: 999px;
          border: 1px solid transparent;
          cursor: pointer;
          white-space: nowrap;
        }

        .btn-primary {
          background: #7c8c6e;
          color: white;
          border-color: #7c8c6e;
        }

        .btn-ghost {
          background: transparent;
          color: #6b6560;
          border-color: transparent;
        }

        .hero-image {
          position: relative;
        }

        .hero-img-placeholder {
          width: 100%;
          height: 340px;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            #7c8c6e 0%,
            #4a5d3e 40%,
            #c9a96e 100%
          );
          position: relative;
          overflow: hidden;
        }

        .hero-img-placeholder::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(
            to top,
            rgba(44, 62, 45, 0.3),
            transparent
          );
        }

        .hero-badge {
          position: absolute;
          bottom: 20px;
          left: -10px;
          background: white;
          padding: 12px 20px;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 10px;
          color: #c17b5a;
        }

        .badge-text {
          display: flex;
          flex-direction: column;
        }

        .badge-text strong {
          font-size: 12px;
          color: #2a2a2a;
        }

        .badge-text span {
          font-size: 10px;
          color: #9b9490;
        }

        /* Intro */
        .intro {
          padding: 60px 0;
          background: white;
        }

        .intro-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .section-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7c8c6e;
          margin-bottom: 16px;
        }

        .intro-quote {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          line-height: 1.35;
          color: #2a2a2a;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .intro-quote em {
          font-style: italic;
          color: #c17b5a;
        }

        .intro-text {
          font-size: 14px;
          line-height: 1.9;
          color: #6b6560;
          max-width: 600px;
          margin: 0 auto;
        }

        .intro-line {
          width: 1px;
          height: 50px;
          background: #e8e4df;
          margin: 28px auto 0;
        }

        /* Highlights */
        .highlights {
          padding: 60px 0;
          background: #f9f7f4;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          color: #2a2a2a;
          font-weight: 400;
          margin: 0;
        }

        .highlight-row {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 48px;
        }

        .highlight-row:last-child {
          margin-bottom: 0;
        }

        .highlight-row.reverse {
          direction: rtl;
        }

        .highlight-row.reverse > * {
          direction: ltr;
        }

        .highlight-image {
          border-radius: 20px;
          overflow: hidden;
        }

        .img-placeholder {
          width: 100%;
          height: 280px;
          border-radius: 20px;
          overflow: hidden;
        }

        .highlight-content {
          padding: 16px;
        }

        .highlight-label {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c17b5a;
          margin-bottom: 8px;
        }

        .highlight-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          color: #2a2a2a;
          margin-bottom: 12px;
          font-weight: 400;
        }

        .highlight-text {
          font-size: 13px;
          line-height: 1.8;
          color: #6b6560;
          margin-bottom: 20px;
        }

        .highlight-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .highlight-list li {
          font-size: 12px;
          color: #6b6560;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .highlight-list li :global(svg) {
          color: #7c8c6e;
          flex-shrink: 0;
        }

        /* Cabin Preview */
        .cabin-preview {
          padding: 60px 0;
          background: #f9f7f4;
        }

        .cabin-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-desc {
            margin: 0 auto 28px;
          }
          .hero-actions {
            justify-content: center;
          }
          .highlight-row,
          .highlight-row.reverse {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          .cabin-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Cabin Card (shared) ────────────────────────────────────────────────────

function CabinCard({ cabin, index }: { cabin: Cabin; index: number }) {
  const cabinImages = [
    "/mockups/haven/cabin-night.jpeg",
    "/mockups/haven/cabin-sunset.jpeg",
    "/mockups/haven/indoor-pool-1.jpeg",
    "/mockups/haven/living-area-3.jpeg",
  ];

  const cabinAlts = [
    "Cabin 1 — exterior at night with indoor and outdoor heated pools",
    "Cabin 2 — A-frame cabin at sunset",
    "Cabin 3 — indoor heated swimming pool",
    "Cabin 4 — premium living area with glass pool",
  ];

  const badgeColors: Record<string, string> = {
    "Best Seller": "#7C8C6E",
    "Best Value": "#C17B5A",
    Premium: "#2A2A2A",
  };

  return (
    <div className="cabin-card">
      <div className="cabin-card-image">
        <div className="cabin-img">
          <img
            src={cabinImages[index % 4]}
            alt={cabinAlts[index % 4]}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
        {cabin.badge && (
          <span
            className="cabin-badge"
            style={{ background: badgeColors[cabin.badge] || "#7C8C6E" }}
          >
            {cabin.badge}
          </span>
        )}
      </div>
      <div className="cabin-card-body">
        <h3 className="cabin-name">{cabin.name}</h3>
        <div className="cabin-location">
          <MapPinIcon />
          <span>European Countryside, Cairo-Alex Desert Road</span>
        </div>
        <div className="cabin-tags">
          <span className="cabin-tag">{cabin.bedrooms} Bedrooms</span>
          {cabin.features.map((f: string, i: number) => (
            <span key={i} className="cabin-tag">
              {f}
            </span>
          ))}
        </div>
        <div className="cabin-footer">
          <div className="cabin-price">
            <strong>{cabin.pricePerNight}</strong> / night
          </div>
        </div>
      </div>

      <style jsx>{`
        .cabin-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #f0ece8;
          transition: all 0.3s ease;
        }

        .cabin-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        .cabin-card-image {
          position: relative;
          overflow: hidden;
        }

        .cabin-img {
          width: 100%;
          height: 180px;
        }

        .cabin-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: white;
        }

        .cabin-card-body {
          padding: 16px;
        }

        .cabin-name {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          color: #2a2a2a;
          margin-bottom: 6px;
          font-weight: 400;
        }

        .cabin-location {
          font-size: 11px;
          color: #9b9490;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 12px;
        }

        .cabin-location :global(svg) {
          width: 12px;
          height: 12px;
        }

        .cabin-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-bottom: 14px;
        }

        .cabin-tag {
          font-size: 9px;
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 999px;
          background: #f9f7f4;
          color: #6b6560;
          border: 1px solid #f0ece8;
        }

        .cabin-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid #f0ece8;
        }

        .cabin-price {
          font-size: 12px;
          color: #9b9490;
        }

        .cabin-price strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          color: #2a2a2a;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}

// ─── Cabins View ────────────────────────────────────────────────────────────

function CabinsView() {
  return (
    <div className="cabins-view">
      {/* Page Hero */}
      <section className="page-hero">
        <span className="hero-label">Our Collection</span>
        <h1 className="page-title">Choose Your Perfect Cabin</h1>
        <p className="page-desc">
          Four uniquely designed private cabins, each offering heated pools,
          full privacy, and European-inspired comfort for up to 8 guests.
        </p>
      </section>

      {/* Intro */}
      <section className="intro-section">
        <span className="section-label">Our Range</span>
        <p className="intro-quote">
          &ldquo;From <em>7,000 EGP</em> to <em>15,000 EGP</em> per night — find
          the perfect cabin.&rdquo;
        </p>
      </section>

      {/* Cabin Cards */}
      <section className="cabins-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">All Cabins</span>
            <h2 className="section-title">Explore Our Collection</h2>
          </div>
          <div className="cabin-grid">
            {havenData.cabins.map((cabin: Cabin, i: number) => (
              <CabinCard key={cabin.id} cabin={cabin} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Side by Side</span>
            <h2 className="section-title">Compare All Cabins</h2>
          </div>
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Cabin</th>
                  <th>Price / Night</th>
                  <th>Bedrooms</th>
                  <th>Pool Type</th>
                  <th>Special</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="table-name">Cabin 1</span>
                    <span className="table-badge seller">Best Seller</span>
                  </td>
                  <td className="table-price">12,000 EGP</td>
                  <td>3</td>
                  <td>Indoor + Outdoor Heated</td>
                  <td>Dual pools</td>
                </tr>
                <tr>
                  <td>
                    <span className="table-name">Cabin 2</span>
                    <span className="table-badge value">Best Value</span>
                  </td>
                  <td className="table-price">7,000 EGP</td>
                  <td>4 Master</td>
                  <td>Swimming Pool</td>
                  <td>Most spacious</td>
                </tr>
                <tr>
                  <td>
                    <span className="table-name">Cabin 3</span>
                  </td>
                  <td className="table-price">11,000 EGP</td>
                  <td>3</td>
                  <td>Indoor Heated</td>
                  <td>Intimate retreat</td>
                </tr>
                <tr>
                  <td>
                    <span className="table-name">Cabin 4</span>
                    <span className="table-badge premium">Premium</span>
                  </td>
                  <td className="table-price">15,000 EGP</td>
                  <td>4</td>
                  <td>Heated Glass Pool</td>
                  <td>Jacuzzi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cabins-view {
          display: flex;
          flex-direction: column;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .page-hero {
          padding: 48px 24px 32px;
          background: #f9f7f4;
          text-align: center;
        }

        .hero-label {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7c8c6e;
          margin-bottom: 12px;
        }

        .page-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          color: #2a2a2a;
          margin-bottom: 12px;
          font-weight: 400;
        }

        .page-desc {
          font-size: 14px;
          color: #6b6560;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .intro-section {
          padding: 48px 24px;
          text-align: center;
          background: white;
        }

        .section-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7c8c6e;
          margin-bottom: 16px;
        }

        .intro-quote {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          line-height: 1.35;
          color: #2a2a2a;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
        }

        .intro-quote em {
          font-style: italic;
          color: #c17b5a;
        }

        .cabins-section {
          padding: 48px 0;
          background: #f9f7f4;
        }

        .section-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .section-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          color: #2a2a2a;
          font-weight: 400;
          margin: 0;
        }

        .cabin-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        /* Comparison Table */
        .comparison-section {
          padding: 48px 0;
          background: #f9f7f4;
        }

        .table-wrap {
          overflow-x: auto;
          border-radius: 12px;
          border: 1px solid #e8e4df;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .comparison-table thead {
          background: #f3ede7;
        }

        .comparison-table th {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: 12px;
          color: #2a2a2a;
          padding: 12px 14px;
          text-align: left;
          border-bottom: 2px solid #e8e4df;
        }

        .comparison-table td {
          font-size: 12px;
          color: #6b6560;
          padding: 12px 14px;
          border-bottom: 1px solid #f0ece8;
        }

        .comparison-table tbody tr:last-child td {
          border-bottom: none;
        }

        .comparison-table tbody tr:hover {
          background: #fdfcfa;
        }

        .table-name {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13px;
          color: #2a2a2a;
        }

        .table-badge {
          display: inline-block;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 999px;
          margin-left: 6px;
          color: white;
        }

        .table-badge.seller {
          background: #7c8c6e;
        }
        .table-badge.value {
          background: #c17b5a;
        }
        .table-badge.premium {
          background: #2a2a2a;
        }

        .table-price {
          font-weight: 600;
          color: #4a5d3e;
        }

        @media (max-width: 768px) {
          .cabin-grid {
            grid-template-columns: 1fr;
          }
          .page-title {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Experience View ────────────────────────────────────────────────────────

function ExperienceView() {
  const amenityIcons: Record<string, React.ReactNode> = {
    pool: <PoolIcon />,
    lock: <LockIcon />,
    home: <HomeIcon />,
    users: <UsersIcon />,
  };

  return (
    <div className="experience-view">
      {/* Hero */}
      <section className="exp-hero">
        <span className="hero-label">Guest Experience</span>
        <h1 className="exp-title">
          The Haven Retreats
          <br />
          <em>Experience</em>
        </h1>
        <p className="exp-desc">
          From heated indoor pools to stunning A-frame architecture, discover
          what makes every stay unforgettable.
        </p>
      </section>

      {/* Amenities Grid */}
      <section className="amenities-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Amenities & Features</h2>
          </div>
          <div className="amenities-grid">
            {havenData.amenities.map((amenity: Amenity) => (
              <div key={amenity.id} className="amenity-item">
                <div className="amenity-icon">
                  {amenityIcons[amenity.icon] || <PoolIcon />}
                </div>
                <div className="amenity-name">{amenity.name}</div>
                <div className="amenity-desc">{amenity.description}</div>
              </div>
            ))}
            <div className="amenity-item">
              <div className="amenity-icon">
                <ThermometerIcon />
              </div>
              <div className="amenity-name">Climate Control</div>
              <div className="amenity-desc">Year-round comfort</div>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <CameraIcon />
              </div>
              <div className="amenity-name">Filming Available</div>
              <div className="amenity-desc">By arrangement</div>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <ShoppingCartIcon />
              </div>
              <div className="amenity-name">Nearby Supermarket</div>
              <div className="amenity-desc">Hyper One Desert Road</div>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <ShieldIcon />
              </div>
              <div className="amenity-name">Glass Pool</div>
              <div className="amenity-desc">Indoor heated glass pool</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Mosaic */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">See It For Yourself</span>
            <h2 className="section-title">Photo Gallery</h2>
          </div>
          <div className="gallery-grid">
            {[
              {
                label: "Pool & Garden View",
                wide: true,
                image: "/mockups/haven/garden-view.jpeg",
                alt: "Panoramic view from inside A-frame cabin overlooking pool and garden",
              },
              {
                label: "Pool Lounge",
                wide: false,
                image: "/mockups/haven/lounge-swing.jpeg",
                alt: "Indoor lounge with swing chair, sofas, and pool",
              },
              {
                label: "Loft Bedroom",
                wide: false,
                image: "/mockups/haven/bedroom-loft.jpeg",
                alt: "Loft bedroom with A-frame wooden ceiling and ambient lighting",
              },
              {
                label: "Night View",
                wide: false,
                image: "/mockups/haven/cabin-side-night.jpeg",
                alt: "A-frame cabin illuminated at night with rooftop terrace",
              },
              {
                label: "Living Area",
                wide: true,
                image: "/mockups/haven/living-moody.jpeg",
                alt: "Moody living area with curved sofa and indoor pool behind glass",
              },
              {
                label: "Kitchen",
                wide: false,
                image: "/mockups/haven/kitchen.jpeg",
                alt: "Kitchenette with white cabinets and wooden A-frame ceiling",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`gallery-item ${item.wide ? "wide" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div className="gallery-overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .experience-view {
          display: flex;
          flex-direction: column;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .exp-hero {
          padding: 48px 24px 32px;
          background: #fdfcfa;
          text-align: center;
        }

        .hero-label {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7c8c6e;
          margin-bottom: 12px;
        }

        .exp-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          color: #2a2a2a;
          margin-bottom: 12px;
          font-weight: 400;
          line-height: 1.15;
        }

        .exp-title em {
          font-style: italic;
          color: #7c8c6e;
        }

        .exp-desc {
          font-size: 14px;
          color: #6b6560;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Amenities */
        .amenities-section {
          padding: 48px 0;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .section-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7c8c6e;
          margin-bottom: 8px;
        }

        .section-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          color: #2a2a2a;
          font-weight: 400;
          margin: 0;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid #e8e4df;
          border-radius: 12px;
          overflow: hidden;
        }

        .amenity-item {
          padding: 28px 16px;
          text-align: center;
          border-right: 1px solid #e8e4df;
          border-bottom: 1px solid #e8e4df;
          background: white;
          transition: background 0.2s;
        }

        .amenity-item:nth-child(4n) {
          border-right: none;
        }

        .amenity-item:nth-last-child(-n + 4) {
          border-bottom: none;
        }

        .amenity-item:hover {
          background: #f9f7f4;
        }

        .amenity-icon {
          width: 40px;
          height: 40px;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7c8c6e;
        }

        .amenity-icon :global(svg) {
          width: 24px;
          height: 24px;
        }

        .amenity-name {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13px;
          color: #2a2a2a;
          margin-bottom: 2px;
        }

        .amenity-desc {
          font-size: 10px;
          color: #9b9490;
        }

        /* Gallery */
        .gallery-section {
          padding: 48px 0;
          background: #fdfcfa;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 160px;
          gap: 10px;
        }

        .gallery-item {
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .gallery-item.wide {
          grid-column: span 2;
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.5) 0%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay span {
          font-size: 11px;
          font-weight: 500;
          color: white;
        }

        @media (max-width: 768px) {
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .amenity-item:nth-child(2n) {
            border-right: none;
          }
          .amenity-item:nth-child(4n) {
            border-right: 1px solid #e8e4df;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .exp-title {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Booking View ───────────────────────────────────────────────────────────

function BookingView() {
  return (
    <div className="booking-view">
      {/* Rules Section */}
      <section className="rules-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Important Information</span>
            <h2 className="section-title">House Rules & Policies</h2>
          </div>
          <div className="rules-grid">
            <div className="rule-card">
              <div className="rule-icon">
                <UsersIcon />
              </div>
              <h3 className="rule-title">Guest Policy</h3>
              <p className="rule-text">
                Maximum 8 people including children. Couples, families, and
                women-only groups welcome.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
                <ClockIcon />
              </div>
              <h3 className="rule-title">Cabin 1 & 4 Timings</h3>
              <p className="rule-text">
                Check-in at 12:00 PM. Check-out at 9:00 AM the next day.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
                <ClockIcon />
              </div>
              <h3 className="rule-title">Cabin 2 & 3 Timings</h3>
              <p className="rule-text">
                Check-in at 2:00 PM. Check-out at 10:00 AM the next day.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
                <CameraIcon />
              </div>
              <h3 className="rule-title">Filming & Photography</h3>
              <p className="rule-text">
                Professional filming requires advance arrangement. Pricing
                varies by scope.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
                <MapPinIcon />
              </div>
              <h3 className="rule-title">Convenient Location</h3>
              <p className="rule-text">
                European Countryside on Cairo-Alex Desert Road, 30 min past
                Sheikh Zayed.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
                <ShieldIcon />
              </div>
              <h3 className="rule-title">Privacy Guaranteed</h3>
              <p className="rule-text">
                All cabins designed with 100% privacy. Your space is exclusively
                yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="section-label">Book Your Stay</span>
          <h2 className="cta-title">Ready to Escape?</h2>
          <p className="cta-text">
            Contact us directly to book your private cabin. Call or message us
            on WhatsApp for instant availability.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <PhoneIcon />
              <span>01200081890</span>
            </div>
            <div className="contact-item">
              <MapPinIcon />
              <span>View on Google Maps</span>
            </div>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary">Call Now</button>
            <button className="btn btn-secondary">
              <WhatsAppIcon />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Bilingual Footer Note */}
      <section className="bilingual-note">
        <div className="container">
          <div className="note-content">
            <div className="note-en">
              <StarIcon />
              <span>
                New cabins arriving at the beginning of the year — expanding our
                collection with even more unique designs.
              </span>
            </div>
            <div className="note-ar" dir="rtl">
              <StarIcon />
              <span>
                أكواخ جديدة قادمة في بداية العام — نوسع مجموعتنا بتصاميم فريدة
                أكثر.
              </span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .booking-view {
          display: flex;
          flex-direction: column;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Rules */
        .rules-section {
          padding: 48px 0;
          background: #f9f7f4;
        }

        .section-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .section-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7c8c6e;
          margin-bottom: 8px;
        }

        .section-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          color: #2a2a2a;
          font-weight: 400;
          margin: 0;
        }

        .rules-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .rule-card {
          background: white;
          border-radius: 14px;
          padding: 28px;
          border: 1px solid #f0ece8;
          text-align: center;
          transition: all 0.2s;
        }

        .rule-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          transform: translateY(-2px);
        }

        .rule-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #f9f7f4;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          color: #7c8c6e;
        }

        .rule-icon :global(svg) {
          width: 20px;
          height: 20px;
        }

        .rule-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 15px;
          color: #2a2a2a;
          margin-bottom: 6px;
          font-weight: 400;
        }

        .rule-text {
          font-size: 12px;
          line-height: 1.7;
          color: #6b6560;
        }

        /* CTA */
        .cta-section {
          padding: 48px 0;
          background: white;
        }

        .cta-inner {
          max-width: 700px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .cta-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          color: #2a2a2a;
          margin-bottom: 12px;
          font-weight: 400;
        }

        .cta-text {
          font-size: 14px;
          color: #6b6560;
          margin-bottom: 24px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .contact-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .contact-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #6b6560;
          font-weight: 500;
        }

        .contact-item :global(svg) {
          width: 18px;
          height: 18px;
          color: #7c8c6e;
        }

        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 999px;
          border: 1px solid transparent;
          cursor: pointer;
          white-space: nowrap;
        }

        .btn-primary {
          background: #7c8c6e;
          color: white;
          border-color: #7c8c6e;
        }

        .btn-secondary {
          background: transparent;
          color: #2a2a2a;
          border-color: #e8e4df;
        }

        .btn-secondary :global(svg) {
          width: 16px;
          height: 16px;
          color: #25d366;
        }

        /* Bilingual Note */
        .bilingual-note {
          padding: 32px 0;
          background: #f9f7f4;
          border-top: 1px solid #e8e4df;
        }

        .note-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .note-en,
        .note-ar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12px;
          color: #6b6560;
          line-height: 1.6;
        }

        .note-en :global(svg),
        .note-ar :global(svg) {
          color: #c9a96e;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .rules-grid {
            grid-template-columns: 1fr;
          }
          .cta-title {
            font-size: 26px;
          }
          .contact-info {
            flex-direction: column;
            gap: 12px;
          }
          .cta-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────

function HavenFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">
              Haven Retreats<span className="dot">.</span>
            </h2>
            <p className="footer-ar" dir="rtl">
              الكوخ الأوروبي
            </p>
            <p className="footer-desc">
              Luxury private cabin rentals with heated pools and 100% privacy on
              the Cairo-Alexandria Desert Road.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>Our Cabins</li>
              <li>Experience</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>01200081890</li>
              <li>WhatsApp</li>
              <li>Google Maps</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <ul>
              <li>Login</li>
              <li>Register</li>
              <li>Booking Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Haven Retreats (الكوخ الأوروبي). All rights reserved.</p>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 48px 0 20px;
          background: #f9f7f4;
          border-top: 1px solid #e8e4df;
          margin-top: auto;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 32px;
          padding-bottom: 32px;
          border-bottom: 1px solid #e8e4df;
        }

        .footer-logo {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
          color: #2a2a2a;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .dot {
          color: #7c8c6e;
        }

        .footer-ar {
          font-size: 13px;
          color: #6b6560;
          margin-bottom: 8px;
        }

        .footer-desc {
          font-size: 12px;
          color: #6b6560;
          line-height: 1.7;
        }

        .footer-col h4 {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #2a2a2a;
          margin-bottom: 14px;
          font-family: inherit;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
        }

        .footer-col ul li {
          font-size: 12px;
          color: #6b6560;
          margin-bottom: 8px;
          cursor: pointer;
        }

        .footer-col ul li:hover {
          color: #7c8c6e;
        }

        .footer-bottom {
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-bottom p {
          font-size: 10px;
          color: #9b9490;
        }

        .footer-links {
          display: flex;
          gap: 16px;
        }

        .footer-links span {
          font-size: 10px;
          color: #9b9490;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 24px;
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
