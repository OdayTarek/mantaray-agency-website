import { MockupFrame } from "./shared/MockupFrame";
import {
  bazaarData,
  RetailCategory,
  RetailProduct,
  Branch,
} from "./shared/types";

type BazaarVariant = "home" | "categories" | "products" | "branches";

interface BazaarMockupProps {
  variant?: BazaarVariant;
}

export function BazaarMockup({ variant = "home" }: BazaarMockupProps) {
  return (
    <div className="bazaar-mockup">
      <MockupFrame url="bazaar-hub.com">
        <div className="bazaar-app" dir="rtl">
          <BazaarHeader variant={variant} />
          <div className="bazaar-main">
            {variant === "home" && <HomeView />}
            {variant === "categories" && <CategoriesView />}
            {variant === "products" && <ProductsView />}
            {variant === "branches" && <BranchesView />}
          </div>
          <BazaarFooter />
        </div>
      </MockupFrame>

      <style jsx>{`
        .bazaar-mockup {
          width: 100%;
          height: 100%;
          font-family: "Cairo", "Tajawal", sans-serif;
          --purple: #864b9e;
          --purple-dark: #5e2d78;
          --purple-light: #a66bbe;
          --purple-bg: #f8f0fc;
          --dark: #1a1a2e;
          --gold: #d4a853;
          --white: #ffffff;
          --gray-100: #f7f7f9;
          --gray-200: #e8e8ed;
          --gray-300: #d1d1db;
          --gray-500: #6b6b80;
          --gray-700: #3d3d50;
          --success: #28a745;
          --whatsapp: #25d366;
          --accent-red: #e94560;
        }

        .bazaar-app {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--white);
          color: var(--dark);
          overflow: hidden;
        }

        .bazaar-main {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .bazaar-main::-webkit-scrollbar {
          width: 6px;
        }
        .bazaar-main::-webkit-scrollbar-track {
          background: var(--gray-100);
        }
        .bazaar-main::-webkit-scrollbar-thumb {
          background: var(--purple);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

/* ===== SVG Icon Components ===== */

function IconShoppingBag() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
    </svg>
  );
}

function IconMapMarker() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
    </svg>
  );
}

function IconBox() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function IconStore() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconComment() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
    </svg>
  );
}

/* ===== Category Icon Components ===== */

function CategoryIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    accessories: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    home: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    decor: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    makeup: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
    ),
    toys: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    perfume: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M16 6V2H8v4H2v16h20V6h-6zm-6-2h4v2h-4V4zm10 16H4V8h16v12z" />
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
    birthday: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12c.01-1.66-1.33-3-2.99-3z" />
      </svg>
    ),
    stationery: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    ),
    glass: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z" />
      </svg>
    ),
    plastic: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z" />
      </svg>
    ),
    clothing: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M21.6 18.2L13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6.15 18L12 13.67 17.85 18H6.15z" />
      </svg>
    ),
    electronics: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
      </svg>
    ),
    food: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
      </svg>
    ),
    sports: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M15.04 3.52C14.19 3.19 13.12 3 12 3S9.81 3.19 8.96 3.52L12 12l3.04-8.48zM3.52 8.96C3.19 9.81 3 10.88 3 12s.19 2.19.52 3.04L12 12 3.52 8.96zM20.48 8.96L12 12l8.48 3.04c.33-.85.52-1.92.52-3.04s-.19-2.19-.52-3.04zM8.96 20.48c.85.33 1.92.52 3.04.52s2.19-.19 3.04-.52L12 12l-3.04 8.48z" />
      </svg>
    ),
    bags: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
      </svg>
    ),
    gifts: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z" />
      </svg>
    ),
  };

  return icons[type] || icons.accessories;
}

/* ===== Header ===== */

function BazaarHeader({ variant }: { variant: BazaarVariant }) {
  const navItems = [
    { id: "home" as const, label: "الرئيسية" },
    { id: "categories" as const, label: "الأقسام" },
    { id: "products" as const, label: "المتجر" },
    { id: "branches" as const, label: "فروعنا" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">B</span>
          <span className="logo-text">BAZAAR HUB</span>
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${variant === item.id ? "active" : ""}`}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <div className="cart-btn-wrapper">
            <div className="action-btn cart-btn">
              <IconShoppingBag />
              <span className="cart-count">3</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(134, 75, 158, 0.08);
          padding: 12px 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 20px;
          color: var(--purple);
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          color: var(--white);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 900;
        }
        .nav-links {
          display: flex;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          font-size: 14px;
          font-weight: 600;
          color: var(--gray-700);
          cursor: pointer;
          position: relative;
          transition: color 0.3s;
        }
        .nav-item:hover,
        .nav-item.active {
          color: var(--purple);
        }
        .nav-item.active::after {
          content: "";
          position: absolute;
          bottom: -4px;
          right: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            var(--purple),
            var(--purple-light)
          );
          border-radius: 1px;
        }
        .nav-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .action-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--purple-bg);
          color: var(--purple);
          cursor: pointer;
          transition: all 0.3s;
        }
        .action-btn:hover {
          background: var(--purple);
          color: var(--white);
        }
        .cart-btn-wrapper {
          position: relative;
        }
        .cart-count {
          position: absolute;
          top: -4px;
          left: -4px;
          background: var(--accent-red);
          color: var(--white);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--white);
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

/* ===== Home View ===== */

function HomeView() {
  const { categories, branches } = bazaarData;

  return (
    <div className="home-view">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <IconStar />
              <span>أكبر تشكيلة في مصر</span>
            </div>
            <h1>
              كل ما تريد في <span>مكان واحد</span>
            </h1>
            <p>
              اكتشف أكبر تشكيلة من المنتجات المنزلية، الإكسسوارات، الميكب،
              الألعاب والمزيد. أسعار موحدة وتشكيلة لا مثيل لها.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <IconShoppingBag />
                تسوق الآن
              </button>
              <button className="btn btn-outline">
                <IconGrid />
                تصفح الأقسام
              </button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>+10K</h3>
                <p>منتج متنوع</p>
              </div>
              <div className="hero-stat">
                <h3>5</h3>
                <p>فروع بالقاهرة</p>
              </div>
              <div className="hero-stat">
                <h3>+13</h3>
                <p>قسم مختلف</p>
              </div>
              <div className="hero-stat">
                <h3>2022</h3>
                <p>منذ أبريل</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <IconBox />
            </div>
            <h3>+10K</h3>
            <p>منتج في المتجر</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <IconStore />
            </div>
            <h3>5</h3>
            <p>فروع في القاهرة</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <IconTag />
            </div>
            <h3>13+</h3>
            <p>قسم متنوع</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <IconHeart />
            </div>
            <h3>آلاف</h3>
            <p>عميل سعيد</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <div className="about-image-placeholder"></div>
            <div className="about-badge">
              <IconCalendar />
              <span>منذ أبريل 2022</span>
            </div>
          </div>
          <div className="about-text">
            <h2>بداية الحكاية كانت من هنا</h2>
            <p>
              بدأنا في أبريل 2022، وفكرتنا كانت توحيد الأسعار لجميع مستلزمات
              البيت. الفكرة قلبت كل الموازين وأضافت لأهالي القاهرة ميزة جديدة.
            </p>
            <p>
              بفضل الله قدرنا نوصل في سنة واحدة لـ 5 فروع حول القاهرة وقريبًا
              جدًا هنضيف زيهم.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <IconTag />
                </div>
                <span>أقل أسعار في مصر</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <IconBox />
                </div>
                <span>+10 آلاف منتج</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <IconStore />
                </div>
                <span>5 فروع بالقاهرة</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <IconTruck />
                </div>
                <span>توصيل لكل مكان</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="categories-preview">
        <div className="section-container">
          <h2 className="section-title">أقسام بازار هب</h2>
          <p className="section-subtitle">
            أكتر من 13 قسم يضم أكبر تشكيلة منتجات بأقل الأسعار
          </p>
          <div className="section-divider"></div>
          <div className="categories-grid">
            {categories.map((cat: RetailCategory) => (
              <div key={cat.id} className="category-card">
                <div className="category-image">
                  <div className="category-icon-wrapper">
                    <CategoryIcon type={cat.icon} />
                  </div>
                </div>
                <div className="category-info">
                  <h3>{cat.name}</h3>
                  <p>{cat.productCount} منتج</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Reels Grid */}
      <section className="social-section">
        <div className="section-container">
          <h2 className="section-title">تابعونا على السوشيال ميديا</h2>
          <p className="section-subtitle">
            شوفوا أحدث المنتجات والعروض على صفحاتنا
          </p>
          <div className="section-divider"></div>
          <div className="reels-grid">
            {[
              {
                caption: "أكبر تشكيلة اكسسوارات بأقل الأسعار",
                likes: "2.4K",
                comments: "186",
              },
              {
                caption: "جديد قسم الديكور - لمسات تغير بيتك",
                likes: "3.1K",
                comments: "245",
              },
              {
                caption: "جولة في فرع بازار هب الجديد!",
                likes: "5.8K",
                comments: "412",
              },
              {
                caption: "أفضل منتجات الميكب عندنا وبس",
                likes: "4.2K",
                comments: "327",
              },
            ].map((reel, i) => (
              <div key={i} className="reel-card">
                <div
                  className="reel-placeholder"
                  style={{
                    background: `linear-gradient(135deg, ${
                      i === 0
                        ? "#864b9e, #d4a853"
                        : i === 1
                          ? "#5e2d78, #a66bbe"
                          : i === 2
                            ? "#1a1a2e, #864b9e"
                            : "#d4a853, #e94560"
                    })`,
                  }}
                >
                  <div className="reel-overlay">
                    <div className="reel-play">
                      <IconPlay />
                    </div>
                    <div className="reel-info">
                      <span>
                        <IconHeart /> {reel.likes}
                      </span>
                      <span>
                        <IconComment /> {reel.comments}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="reel-caption">{reel.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>جاهز تتسوق؟</h2>
        <p>
          اكتشف آلاف المنتجات بأفضل الأسعار. تسوق أونلاين أو زور أقرب فرع ليك!
        </p>
        <div className="cta-buttons">
          <button className="btn btn-cta-outline">
            <IconShoppingBag />
            تسوق الآن
          </button>
        </div>
      </section>

      <style jsx>{`
        .home-view {
          display: flex;
          flex-direction: column;
        }

        /* Hero */
        .hero {
          position: relative;
          padding: 80px 24px 60px;
          background: linear-gradient(
            135deg,
            rgba(75, 12, 100, 0.9) 0%,
            rgba(134, 75, 158, 0.8) 50%,
            rgba(75, 12, 100, 0.9) 100%
          );
          overflow: hidden;
        }
        .hero-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }
        .shape-1 {
          width: 200px;
          height: 200px;
          top: -40px;
          left: -60px;
        }
        .shape-2 {
          width: 150px;
          height: 150px;
          bottom: 10%;
          left: 20%;
        }
        .shape-3 {
          width: 100px;
          height: 100px;
          top: 30%;
          left: 10%;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(26, 26, 46, 0.3) 100%
          );
        }
        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-content {
          max-width: 600px;
          color: var(--white);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 13px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--gold);
        }
        .hero h1 {
          font-size: 36px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .hero h1 span {
          color: var(--gold);
        }
        .hero p {
          font-size: 15px;
          opacity: 0.9;
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }
        .btn-primary {
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          color: var(--white);
          box-shadow: 0 4px 15px rgba(134, 75, 158, 0.3);
        }
        .btn-outline {
          background: transparent;
          color: var(--white);
          border: 2px solid rgba(255, 255, 255, 0.5);
        }
        .hero-stats {
          display: flex;
          gap: 36px;
          margin-top: 40px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }
        .hero-stat h3 {
          font-size: 28px;
          color: var(--gold);
          font-weight: 800;
        }
        .hero-stat p {
          font-size: 12px;
          opacity: 0.8;
          margin-bottom: 0;
        }

        /* Stats Bar */
        .stats-bar {
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          padding: 32px 24px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .stat-item {
          color: var(--white);
        }
        .stat-icon {
          color: var(--gold);
          margin-bottom: 8px;
          display: flex;
          justify-content: center;
        }
        .stat-item h3 {
          font-size: 28px;
          color: var(--gold);
          margin-bottom: 4px;
          font-weight: 800;
        }
        .stat-item p {
          font-size: 13px;
          opacity: 0.85;
        }

        /* About Section */
        .about-section {
          padding: 60px 24px;
        }
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .about-image {
          position: relative;
        }
        .about-image-placeholder {
          width: 100%;
          height: 280px;
          background: linear-gradient(
            135deg,
            var(--purple-bg),
            var(--purple-light)
          );
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(134, 75, 158, 0.15);
        }
        .about-badge {
          position: absolute;
          bottom: -12px;
          right: 16px;
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          color: var(--white);
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(134, 75, 158, 0.3);
        }
        .about-text h2 {
          font-size: 26px;
          color: var(--purple);
          margin-bottom: 16px;
          font-weight: 700;
        }
        .about-text p {
          font-size: 14px;
          color: var(--gray-700);
          line-height: 1.8;
          margin-bottom: 12px;
        }
        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
        }
        .about-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: var(--purple-bg);
          border-radius: 8px;
        }
        .about-feature-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          flex-shrink: 0;
        }
        .about-feature span {
          font-weight: 600;
          font-size: 13px;
          color: var(--gray-700);
        }

        /* Section Shared */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .section-title {
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 12px;
        }
        .section-subtitle {
          text-align: center;
          color: var(--gray-500);
          font-size: 14px;
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .section-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple), var(--purple-dark));
          border-radius: 2px;
          margin: 12px auto 32px;
        }

        /* Categories Preview */
        .categories-preview {
          padding: 60px 0;
          background: var(--gray-100);
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .category-card {
          background: var(--white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(134, 75, 158, 0.08);
          transition: all 0.3s;
          cursor: pointer;
        }
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(134, 75, 158, 0.15);
        }
        .category-image {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--purple-bg),
            rgba(166, 107, 190, 0.15)
          );
        }
        .category-icon-wrapper {
          width: 56px;
          height: 56px;
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }
        .category-info {
          padding: 12px;
          text-align: center;
        }
        .category-info h3 {
          font-size: 14px;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 4px;
        }
        .category-info p {
          font-size: 12px;
          color: var(--gray-500);
        }

        /* Social Reels */
        .social-section {
          padding: 60px 0;
        }
        .reels-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .reel-card {
          border-radius: 12px;
          overflow: hidden;
          background: var(--white);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          transition: all 0.3s;
        }
        .reel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        .reel-placeholder {
          position: relative;
          aspect-ratio: 9/12;
        }
        .reel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.6) 0%,
            transparent 50%
          );
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .reel-card:hover .reel-overlay {
          opacity: 1;
        }
        .reel-play {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          border: 2px solid rgba(255, 255, 255, 0.4);
        }
        .reel-info {
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          gap: 12px;
          color: var(--white);
          font-size: 12px;
          font-weight: 600;
        }
        .reel-info span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .reel-caption {
          padding: 12px;
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-700);
          line-height: 1.5;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          padding: 60px 24px;
          text-align: center;
          color: var(--white);
        }
        .cta-section h2 {
          font-size: 28px;
          margin-bottom: 12px;
          font-weight: 800;
        }
        .cta-section p {
          opacity: 0.9;
          font-size: 15px;
          margin-bottom: 28px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .btn-cta-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          background: transparent;
          color: var(--white);
          border: 2px solid rgba(255, 255, 255, 0.6);
          transition: all 0.3s;
        }
        .btn-cta-outline:hover {
          background: var(--white);
          color: var(--purple);
          border-color: var(--white);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 24px;
          }
          .hero-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-container {
            grid-template-columns: 1fr;
          }
          .about-features {
            grid-template-columns: 1fr;
          }
          .categories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .reels-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

/* ===== Categories View ===== */

function CategoriesView() {
  const allCategories: {
    id: string;
    name: string;
    icon: string;
    productCount: number;
    subtitle: string;
  }[] = [
    {
      id: "1",
      name: "اكسسوارات",
      icon: "accessories",
      productCount: 250,
      subtitle: "تشكيلة واسعة",
    },
    {
      id: "2",
      name: "أدوات منزلية",
      icon: "home",
      productCount: 180,
      subtitle: "كل احتياجات البيت",
    },
    {
      id: "3",
      name: "ديكور",
      icon: "decor",
      productCount: 120,
      subtitle: "لمسات جمالية",
    },
    {
      id: "4",
      name: "ميكب",
      icon: "makeup",
      productCount: 95,
      subtitle: "أفضل الماركات",
    },
    {
      id: "5",
      name: "عطور",
      icon: "perfume",
      productCount: 85,
      subtitle: "روائح مميزة",
    },
    {
      id: "6",
      name: "ألعاب",
      icon: "toys",
      productCount: 140,
      subtitle: "متعة للأطفال",
    },
    {
      id: "7",
      name: "رفايع",
      icon: "tools",
      productCount: 110,
      subtitle: "كل ما يلزمك",
    },
    {
      id: "8",
      name: "أعياد ميلاد",
      icon: "birthday",
      productCount: 75,
      subtitle: "مستلزمات الحفلات",
    },
    {
      id: "9",
      name: "أدوات مكتبية",
      icon: "stationery",
      productCount: 90,
      subtitle: "للدراسة والعمل",
    },
    {
      id: "10",
      name: "زجاج",
      icon: "glass",
      productCount: 65,
      subtitle: "أطقم وأكواب",
    },
    {
      id: "11",
      name: "بلاستك",
      icon: "plastic",
      productCount: 80,
      subtitle: "حافظات ومنظمات",
    },
    {
      id: "12",
      name: "إلكترونيات",
      icon: "electronics",
      productCount: 60,
      subtitle: "إكسسوارات موبايل",
    },
    {
      id: "13",
      name: "شنط",
      icon: "bags",
      productCount: 70,
      subtitle: "تشكيلة متنوعة",
    },
  ];

  const colorPalette = [
    "linear-gradient(135deg, #864b9e, #5e2d78)",
    "linear-gradient(135deg, #e94560, #c23152)",
    "linear-gradient(135deg, #d4a853, #b8922e)",
    "linear-gradient(135deg, #a66bbe, #864b9e)",
    "linear-gradient(135deg, #5e2d78, #3d1a52)",
    "linear-gradient(135deg, #1a1a2e, #3d3d50)",
    "linear-gradient(135deg, #28a745, #1e7e34)",
    "linear-gradient(135deg, #e94560, #864b9e)",
    "linear-gradient(135deg, #3d3d50, #1a1a2e)",
    "linear-gradient(135deg, #d4a853, #e94560)",
    "linear-gradient(135deg, #864b9e, #e94560)",
    "linear-gradient(135deg, #1a1a2e, #864b9e)",
    "linear-gradient(135deg, #5e2d78, #d4a853)",
  ];

  return (
    <div className="categories-view">
      <div className="page-header">
        <h1>أقسام بازار هب</h1>
        <p>أكتر من 13 قسم يضم أكبر تشكيلة منتجات في مصر بأقل الأسعار</p>
      </div>
      <div className="categories-container">
        <div className="categories-grid">
          {allCategories.map((cat, i) => (
            <div key={cat.id} className="category-card">
              <div
                className="category-image"
                style={{ background: colorPalette[i % colorPalette.length] }}
              >
                <div className="category-icon-area">
                  <CategoryIcon type={cat.icon} />
                </div>
              </div>
              <div className="category-body">
                <h3>{cat.name}</h3>
                <p className="category-subtitle">{cat.subtitle}</p>
                <span className="category-count">{cat.productCount} منتج</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .categories-view {
          display: flex;
          flex-direction: column;
        }
        .page-header {
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          padding: 48px 24px 36px;
          text-align: center;
          color: var(--white);
        }
        .page-header h1 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .page-header p {
          font-size: 14px;
          opacity: 0.9;
        }
        .categories-container {
          padding: 32px 24px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .category-card {
          background: var(--white);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(134, 75, 158, 0.08);
          border: 1px solid var(--gray-200);
          transition: all 0.3s;
          cursor: pointer;
        }
        .category-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(134, 75, 158, 0.18);
          border-color: var(--purple-light);
        }
        .category-image {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .category-icon-area {
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .category-body {
          padding: 14px;
          text-align: center;
        }
        .category-body h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 4px;
        }
        .category-subtitle {
          font-size: 12px;
          color: var(--gray-500);
          margin-bottom: 8px;
        }
        .category-count {
          display: inline-block;
          background: var(--purple-bg);
          color: var(--purple);
          padding: 3px 12px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

/* ===== Products View ===== */

function ProductsView() {
  const allProducts: {
    id: string;
    name: string;
    price: number;
    badge?: string;
    category: string;
  }[] = [
    {
      id: "1",
      name: "طقم اكسسوارات ذهبي",
      price: 85,
      badge: "الأكثر مبيعاً",
      category: "اكسسوارات",
    },
    { id: "2", name: "سلسلة ستانلس ستيل", price: 45, category: "اكسسوارات" },
    {
      id: "3",
      name: "طقم أدوات مطبخ",
      price: 180,
      badge: "جديد",
      category: "أدوات منزلية",
    },
    { id: "4", name: "منظم أدراج متعدد", price: 65, category: "أدوات منزلية" },
    { id: "5", name: "فازة ديكور مودرن", price: 120, category: "ديكور" },
    {
      id: "6",
      name: "شمعدان ذهبي",
      price: 85,
      badge: "خصم",
      category: "ديكور",
    },
    {
      id: "7",
      name: "باليت ظلال عيون",
      price: 95,
      badge: "جديد",
      category: "ميكب",
    },
    {
      id: "8",
      name: "طقم فرش مكياج",
      price: 120,
      badge: "الأكثر مبيعاً",
      category: "ميكب",
    },
    { id: "9", name: "عطر رجالي فاخر", price: 150, category: "عطور" },
    {
      id: "10",
      name: "لعبة تعليمية للأطفال",
      price: 75,
      badge: "جديد",
      category: "ألعاب",
    },
    { id: "11", name: "طقم كاسات كريستال", price: 120, category: "زجاج" },
    {
      id: "12",
      name: "طقم حافظات طعام",
      price: 75,
      badge: "خصم",
      category: "بلاستك",
    },
  ];

  const filterTabs = [
    "الكل",
    "اكسسوارات",
    "أدوات منزلية",
    "ديكور",
    "ميكب",
    "عطور",
    "ألعاب",
  ];

  const productGradients = [
    "linear-gradient(135deg, #f8f0fc, #a66bbe)",
    "linear-gradient(135deg, #e8e8ed, #864b9e)",
    "linear-gradient(135deg, #d4a853, #f8f0fc)",
    "linear-gradient(135deg, #f7f7f9, #5e2d78)",
    "linear-gradient(135deg, #a66bbe, #f8f0fc)",
    "linear-gradient(135deg, #f8f0fc, #d4a853)",
    "linear-gradient(135deg, #5e2d78, #a66bbe)",
    "linear-gradient(135deg, #d4a853, #864b9e)",
    "linear-gradient(135deg, #f8f0fc, #e94560)",
    "linear-gradient(135deg, #864b9e, #f8f0fc)",
    "linear-gradient(135deg, #e8e8ed, #d4a853)",
    "linear-gradient(135deg, #a66bbe, #e94560)",
  ];

  const badgeColors: Record<string, string> = {
    جديد: "var(--purple)",
    خصم: "var(--accent-red)",
    "الأكثر مبيعاً": "var(--gold)",
  };

  return (
    <div className="products-view">
      <div className="page-header">
        <h1>
          <IconStore /> متجر بازار هب
        </h1>
        <p>اكتشف أكبر تشكيلة من المنتجات بأفضل الأسعار في مصر</p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-tabs">
          {filterTabs.map((tab, i) => (
            <button
              key={tab}
              className={`filter-tab ${i === 0 ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-container">
        <div className="products-grid">
          {allProducts.map((product, i) => (
            <div key={product.id} className="product-card">
              <div
                className="product-image"
                style={{
                  background: productGradients[i % productGradients.length],
                }}
              >
                {product.badge && (
                  <span
                    className="product-badge"
                    style={{
                      background: badgeColors[product.badge] || "var(--purple)",
                    }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price-row">
                  <span className="product-price">
                    {product.price} <small>ج.م</small>
                  </span>
                  <button className="add-to-cart-btn">
                    <IconPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products-view {
          display: flex;
          flex-direction: column;
        }
        .page-header {
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          padding: 48px 24px 36px;
          text-align: center;
          color: var(--white);
        }
        .page-header h1 {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .page-header p {
          font-size: 14px;
          opacity: 0.9;
        }

        /* Filter Bar */
        .filter-bar {
          background: var(--white);
          border-bottom: 1px solid var(--gray-200);
          position: sticky;
          top: 56px;
          z-index: 50;
          box-shadow: 0 2px 8px rgba(134, 75, 158, 0.06);
        }
        .filter-tabs {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding: 12px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .filter-tabs::-webkit-scrollbar {
          display: none;
        }
        .filter-tab {
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          background: var(--gray-100);
          color: var(--gray-700);
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .filter-tab:hover {
          background: var(--purple-bg);
          color: var(--purple);
        }
        .filter-tab.active {
          background: var(--purple);
          color: var(--white);
          border-color: var(--purple);
        }

        /* Products Grid */
        .products-container {
          padding: 24px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .product-card {
          background: var(--white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(134, 75, 158, 0.06);
          border: 1px solid var(--gray-200);
          transition: all 0.3s;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(134, 75, 158, 0.15);
          border-color: var(--purple-light);
        }
        .product-image {
          position: relative;
          aspect-ratio: 4/3;
        }
        .product-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          color: var(--white);
          padding: 3px 12px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 600;
        }
        .product-info {
          padding: 14px;
        }
        .product-category {
          font-size: 11px;
          color: var(--purple);
          font-weight: 600;
          margin-bottom: 4px;
        }
        .product-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .product-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .product-price {
          font-size: 18px;
          font-weight: 800;
          color: var(--purple);
        }
        .product-price small {
          font-size: 12px;
          font-weight: 600;
        }
        .add-to-cart-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(134, 75, 158, 0.3);
          transition: all 0.3s;
        }
        .add-to-cart-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(134, 75, 158, 0.4);
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}

/* ===== Branches View ===== */

function BranchesView() {
  const { branches } = bazaarData;

  const branchDetails: {
    id: string;
    name: string;
    address: string;
    phone: string;
    hours: string;
  }[] = [
    {
      id: "1",
      name: "فرع مصر الجديدة",
      address: "محطة مترو كلية البنات مصر الجديدة — أمام صيدلية العزبي",
      phone: "010 05057567",
      hours: "10 ص - 12 م",
    },
    {
      id: "2",
      name: "فرع المعادي",
      address:
        "المعادي — مقابل البوابة الخلفية لجراند مول — بجانب صيدلية العزبي",
      phone: "010 05057567",
      hours: "10 ص - 12 م",
    },
    {
      id: "3",
      name: "فرع الدقي",
      address: "126 شارع التحرير في الدقي — قريب من محطة مترو الدقي",
      phone: "010 05057567",
      hours: "10 ص - 12 م",
    },
    {
      id: "4",
      name: "فرع المقطم",
      address: "المقطم شارع 9 — بجانب صيدلية شارع 9 و تيفال زهران",
      phone: "010 05057567",
      hours: "10 ص - 12 م",
    },
    {
      id: "5",
      name: "فرع عباس العقاد",
      address: "مدينة نصر — 8 شارع عباس العقاد — مقابل البنك الأهلي",
      phone: "010 05057567",
      hours: "10 ص - 12 م",
    },
  ];

  const mapGradients = [
    "linear-gradient(135deg, #864b9e 0%, #1a1a2e 100%)",
    "linear-gradient(135deg, #5e2d78 0%, #d4a853 100%)",
    "linear-gradient(135deg, #1a1a2e 0%, #a66bbe 100%)",
    "linear-gradient(135deg, #d4a853 0%, #864b9e 100%)",
    "linear-gradient(135deg, #a66bbe 0%, #5e2d78 100%)",
  ];

  return (
    <div className="branches-view">
      <div className="page-header">
        <h1>فروعنا</h1>
        <p>5 فروع منتشرة حول القاهرة لخدمتكم .. وقريبًا المزيد</p>
      </div>

      {/* Branch Photos */}
      <div className="branch-photos">
        <div
          className="branch-photo"
          style={{
            background:
              "linear-gradient(135deg, var(--purple-bg), var(--purple-light))",
          }}
        ></div>
        <div
          className="branch-photo"
          style={{
            background:
              "linear-gradient(135deg, var(--purple), var(--purple-dark))",
          }}
        ></div>
        <div
          className="branch-photo"
          style={{
            background: "linear-gradient(135deg, var(--gold), var(--purple))",
          }}
        ></div>
      </div>

      {/* Branch Cards */}
      <div className="branches-container">
        <div className="branches-grid">
          {branchDetails.map((branch, i) => (
            <div key={branch.id} className="branch-card">
              <div
                className="branch-map"
                style={{ background: mapGradients[i % mapGradients.length] }}
              >
                <div className="map-pin">
                  <IconMapMarker />
                </div>
              </div>
              <div className="branch-info">
                <h3>{branch.name}</h3>
                <p className="branch-address">{branch.address}</p>
                <div className="branch-details">
                  <div className="branch-detail">
                    <IconPhone />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="branch-detail">
                    <IconClock />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .branches-view {
          display: flex;
          flex-direction: column;
        }
        .page-header {
          background: linear-gradient(
            135deg,
            var(--purple) 0%,
            var(--purple-dark) 100%
          );
          padding: 48px 24px 36px;
          text-align: center;
          color: var(--white);
        }
        .page-header h1 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .page-header p {
          font-size: 14px;
          opacity: 0.9;
        }

        /* Branch Photos */
        .branch-photos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding: 24px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .branch-photo {
          height: 160px;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(134, 75, 158, 0.1);
        }

        /* Branch Cards */
        .branches-container {
          padding: 0 24px 32px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .branches-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .branch-card {
          background: var(--white);
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--gray-200);
          box-shadow: 0 2px 12px rgba(134, 75, 158, 0.06);
          transition: all 0.3s;
        }
        .branch-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(134, 75, 158, 0.15);
          border-color: var(--purple-light);
        }
        .branch-map {
          height: 120px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .map-pin {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          border: 2px solid rgba(255, 255, 255, 0.3);
          animation: bounce 3s ease-in-out infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .branch-info {
          padding: 18px;
        }
        .branch-info h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--purple);
          margin-bottom: 8px;
        }
        .branch-address {
          font-size: 13px;
          color: var(--gray-700);
          line-height: 1.7;
          margin-bottom: 14px;
        }
        .branch-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .branch-detail {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--gray-500);
        }
        .branch-detail :global(svg) {
          color: var(--purple-light);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .branch-photos {
            grid-template-columns: 1fr;
          }
          .branches-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

/* ===== Footer ===== */

function BazaarFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>BAZAAR HUB</h3>
          <p>أكبر تشكيلة منتجات في مكان واحد. كل ما تحتاجه بأقل الأسعار.</p>
        </div>
        <div className="footer-links">
          <span>الرئيسية</span>
          <span>الأقسام</span>
          <span>المتجر</span>
          <span>فروعنا</span>
          <span>تواصل معنا</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Bazaar Hub. جميع الحقوق محفوظة.</p>
      </div>
      <style jsx>{`
        .footer {
          background: var(--dark);
          color: var(--white);
          padding: 40px 24px 20px;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .footer-brand h3 {
          font-size: 22px;
          font-weight: 800;
          color: var(--purple-light);
          margin-bottom: 8px;
        }
        .footer-brand p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          max-width: 300px;
          line-height: 1.7;
        }
        .footer-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .footer-links span {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          cursor: pointer;
          transition: color 0.3s;
        }
        .footer-links span:hover {
          color: var(--purple-light);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 16px;
          text-align: center;
        }
        .footer-bottom p {
          font-size: 12px;
          opacity: 0.5;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          .footer-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
