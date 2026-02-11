import { MockupFrame } from "./shared/MockupFrame";
import { baristaData } from "./shared/types";

type BaristaVariant = "home" | "products" | "services" | "gallery";

interface BaristaMockupProps {
  variant?: BaristaVariant;
}

export function BaristaMockup({ variant = "home" }: BaristaMockupProps) {
  return (
    <div className="barista-mockup">
      <MockupFrame url="amara.coffee">
        <div className="barista-app">
          <BaristaHeader variant={variant} />
          <div className="barista-main">
            {variant === "home" && <HomeView />}
            {variant === "products" && <ProductsView />}
            {variant === "services" && <ServicesView />}
            {variant === "gallery" && <GalleryView />}
            <BaristaFooter />
          </div>
        </div>
      </MockupFrame>

      <style jsx>{`
        .barista-mockup {
          width: 100%;
          height: 100%;
          font-family: "Inter", sans-serif;
        }

        .barista-app {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #faf8f5; /* Cream */
          color: #333;
          direction: ltr;
        }

        .barista-main {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
        }

        /* Scrollbar styling */
        .barista-main::-webkit-scrollbar {
          width: 6px;
        }
        .barista-main::-webkit-scrollbar-track {
          background: #faf8f5;
        }
        .barista-main::-webkit-scrollbar-thumb {
          background: #c49a6c;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

function BaristaHeader({ variant }: { variant: BaristaVariant }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Shop" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
  ];

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-info">
            <span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +20 109 366 7189
            </span>
            <span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Sat - Thu: 9AM - 9PM
            </span>
          </div>
          <div className="top-social">
            <span>EN</span>
            <span>AR</span>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            <div className="logo-icon">
              <img
                src="/mockups/barista/logo.jpg"
                alt="Amara Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="logo-text">
              <h1>Amara</h1>
              <span>Coffee Machines</span>
            </div>
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

          <div className="nav-icons">
            <div className="icon-btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="icon-btn">
              <span className="badge">3</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="icon-btn">
              <span className="badge">5</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
          position: sticky;
          top: 0;
          z-index: 100;
          background: white;
        }

        .container {
          padding: 0 24px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .top-bar {
          background: #0d3b23; /* Primary Dark */
          color: white;
          padding: 8px 0;
          font-size: 11px;
        }

        .top-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-info {
          display: flex;
          gap: 20px;
        }

        .top-info span {
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.9;
        }

        .top-social {
          display: flex;
          gap: 12px;
          font-weight: 600;
          color: #c49a6c; /* Gold */
        }

        .navbar {
          padding: 16px 0;
          background: white;
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #c49a6c;
          overflow: hidden;
          flex-shrink: 0;
        }

        .logo-text h1 {
          font-family: serif;
          font-size: 22px;
          color: #0d3b23;
          line-height: 1;
          margin: 0;
        }

        .logo-text span {
          font-size: 10px;
          color: #c49a6c;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          display: block;
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-item {
          font-size: 13px;
          font-weight: 500;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          position: relative;
          padding-bottom: 4px;
        }

        .nav-item.active,
        .nav-item:hover {
          color: #1a5632;
        }

        .nav-item.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #c49a6c;
        }

        .nav-icons {
          display: flex;
          gap: 16px;
        }

        .icon-btn {
          position: relative;
          cursor: pointer;
          color: #333;
        }

        .icon-btn:hover {
          color: #1a5632;
        }

        .badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #c49a6c;
          color: white;
          font-size: 9px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .top-bar {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

function HomeView() {
  return (
    <div className="home-view">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            #1 Trusted Equipment Supplier
          </div>
          <h2>
            Premium <span className="highlight">Coffee Machines</span> for Your
            Business
          </h2>
          <p>
            Equip your cafe, hotel, or restaurant with world-class espresso
            machines. Professional sales, installation & maintenance.
          </p>

          <div className="hero-btns">
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-outline">Get Quote</button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>500+</strong>
              <span>Sold</span>
            </div>
            <div className="stat">
              <strong>15+</strong>
              <span>Brands</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="machine-placeholder">
            <img
              src="/mockups/barista/machine.jpg"
              alt="Amara Professional Coffee Machine"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <div className="floating-card c1">
              <div className="icon">🛡️</div>
              <div className="text">
                <strong>Warranty</strong>
                <span>2 Years</span>
              </div>
            </div>
            <div className="floating-card c2">
              <div className="icon">🚚</div>
              <div className="text">
                <strong>Delivery</strong>
                <span>Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="label">Categories</span>
            <h3>What We Offer</h3>
          </div>
          <div className="categories-grid">
            {[
              { name: "Coffee Machines", count: "25+ Products", icon: "☕" },
              { name: "Coffee Grinders", count: "18+ Products", icon: "⚙️" },
              { name: "Blenders", count: "15+ Products", icon: "🌪️" },
              { name: "Ice Makers", count: "12+ Products", icon: "❄️" },
            ].map((cat, i) => (
              <div key={i} className="cat-card">
                <div className="cat-icon">{cat.icon}</div>
                <h4>{cat.name}</h4>
                <span>{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section banner-section">
        <div className="container">
          <div className="banner">
            <div className="banner-content">
              <span className="sale-tag">Limited Offer</span>
              <h3>Complete Cafe Setup</h3>
              <p>
                Espresso machine + grinder + blender bundle. Save 25% today.
              </p>
              <button className="btn btn-primary">Enquire Now</button>
            </div>
            <div className="banner-visual">
              <img
                src="/mockups/barista/post4.jpg"
                alt="Complete Cafe Setup Package"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </div>
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

        .hero {
          background: linear-gradient(135deg, #0d3b23 0%, #1a5632 100%);
          color: white;
          padding: 60px 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: -50px;
          right: -50px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(196, 154, 108, 0.1); /* Gold low opacity */
        }

        .hero-content {
          z-index: 2;
          max-width: 500px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(196, 154, 108, 0.2);
          border: 1px solid rgba(196, 154, 108, 0.4);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          color: #e8b84b;
          margin-bottom: 20px;
        }

        .hero h2 {
          font-family: serif;
          font-size: 42px;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .hero .highlight {
          color: #e8b84b;
        }

        .hero p {
          font-size: 15px;
          opacity: 0.9;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .hero-btns {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: #c49a6c;
          color: white;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
        }

        .hero-stats {
          display: flex;
          gap: 30px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat strong {
          display: block;
          font-family: serif;
          font-size: 24px;
          color: #e8b84b;
        }

        .stat span {
          font-size: 11px;
          opacity: 0.7;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
        }

        .machine-placeholder {
          width: 300px;
          height: 240px;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .floating-card {
          position: absolute;
          background: white;
          padding: 10px 14px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          width: 140px;
        }

        .c1 {
          top: 20px;
          right: -40px;
        }
        .c2 {
          bottom: 40px;
          left: -40px;
        }

        .floating-card .icon {
          width: 30px;
          height: 30px;
          background: #faf8f5;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .floating-card .text strong {
          display: block;
          color: #0d3b23;
          font-size: 11px;
        }

        .floating-card .text span {
          font-size: 10px;
          color: #666;
        }

        .section {
          padding: 60px 0;
        }
        .bg-white {
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-header .label {
          color: #c49a6c;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          display: block;
          margin-bottom: 8px;
        }

        .section-header h3 {
          font-family: serif;
          font-size: 32px;
          color: #0d3b23;
          margin: 0;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .cat-card {
          background: #faf8f5;
          padding: 30px 20px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .cat-card:hover {
          border-color: #c49a6c;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .cat-icon {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 16px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .cat-card h4 {
          color: #0d3b23;
          margin-bottom: 6px;
          font-size: 15px;
        }

        .cat-card span {
          font-size: 11px;
          color: #c49a6c;
          background: rgba(196, 154, 108, 0.1);
          padding: 4px 10px;
          border-radius: 20px;
          font-weight: 600;
        }

        .banner-section {
          padding-top: 0;
        }

        .banner {
          background: linear-gradient(135deg, #0d3b23, #1a5632);
          border-radius: 20px;
          padding: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .banner-content {
          z-index: 2;
          max-width: 50%;
        }

        .sale-tag {
          background: #c49a6c;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 16px;
        }

        .banner h3 {
          font-family: serif;
          font-size: 32px;
          margin-bottom: 12px;
        }

        .banner p {
          font-size: 14px;
          opacity: 0.9;
          margin-bottom: 24px;
        }

        .banner-visual {
          width: 200px;
          height: 150px;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            margin: 0 auto;
          }
          .hero-btns {
            justify-content: center;
          }
          .hero-stats {
            justify-content: center;
          }
          .categories-grid {
            grid-template-columns: 1fr 1fr;
          }
          .banner {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
          .banner-content {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

function ProductsView() {
  const tabs = ["All Products", "Espresso Machines", "Grinders", "Blenders"];

  return (
    <div className="products-view">
      <div className="container">
        <div className="header-row">
          <div className="header-text">
            <h2>Best Selling Equipment</h2>
            <p>Explore our premium selection of commercial-grade equipment</p>
          </div>
        </div>

        <div className="tabs">
          {tabs.map((tab, i) => (
            <button key={i} className={`tab-btn ${i === 0 ? "active" : ""}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {baristaData.equipment.map((item, i) => (
            <div key={item.id} className="product-card">
              {item.badge && (
                <span
                  className={`badge ${item.badge === "Sale" ? "sale" : item.badge === "New" ? "new" : "hot"}`}
                >
                  {item.badge}
                </span>
              )}
              <div className="product-img">
                <img
                  src="/mockups/barista/machine.jpg"
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="product-info">
                <span className="brand">{item.brand}</span>
                <h4>{item.name}</h4>
                <div className="rating">
                  {"★".repeat(Math.floor(item.rating))}
                  <span className="count">
                    ({Math.floor(Math.random() * 50) + 10})
                  </span>
                </div>
                <div className="price-row">
                  <span className="price">{item.price}</span>
                  <button className="add-btn">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products-view {
          padding: 40px 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .header-row {
          text-align: center;
          margin-bottom: 30px;
        }

        .header-row h2 {
          font-family: serif;
          font-size: 32px;
          color: #0d3b23;
          margin-bottom: 8px;
        }

        .header-row p {
          color: #666;
          font-size: 14px;
        }

        .tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 8px 20px;
          border: 1px solid #e0e0e0;
          background: white;
          border-radius: 50px;
          font-size: 13px;
          cursor: pointer;
          color: #666;
        }

        .tab-btn.active {
          background: #1a5632;
          color: white;
          border-color: #1a5632;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 24px;
        }

        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
          position: relative;
          transition: transform 0.2s;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        }

        .badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          color: white;
          z-index: 2;
        }

        .badge.hot {
          background: #c49a6c;
        }
        .badge.new {
          background: #1a5632;
        }
        .badge.sale {
          background: #d32f2f;
        }

        .product-img {
          height: 200px;
          background: #f5f5f5;
          overflow: hidden;
        }

        .product-info {
          padding: 16px;
        }

        .brand {
          font-size: 10px;
          color: #c49a6c;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .product-info h4 {
          font-size: 14px;
          color: #0d3b23;
          margin: 4px 0 8px;
          line-height: 1.4;
        }

        .rating {
          font-size: 11px;
          color: #e8b84b;
          margin-bottom: 12px;
        }

        .rating .count {
          color: #999;
          margin-left: 4px;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-weight: 700;
          color: #1a5632;
        }

        .add-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #f5f5f5;
          border: none;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .add-btn:hover {
          background: #1a5632;
          color: white;
        }
      `}</style>
    </div>
  );
}

function ServicesView() {
  return (
    <div className="services-view">
      <div className="services-header">
        <div className="container">
          <h2>Complete Business Solutions</h2>
          <p>From purchase to maintenance, we've got you covered</p>
        </div>
      </div>

      <div className="container" style={{ marginTop: "-40px" }}>
        <div className="services-grid">
          {baristaData.services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-icon-box">
                {service.icon === "store" && "🏪"}
                {service.icon === "tools" && "🛠️"}
                {service.icon === "graduation-cap" && "🎓"}
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="learn-more">Learn more →</span>
            </div>
          ))}
          <div className="service-card">
            <div className="service-icon-box">📐</div>
            <h3>Cafe Design</h3>
            <p>Layout optimization and workflow planning</p>
            <span className="learn-more">Learn more →</span>
          </div>
          <div className="service-card highlight">
            <div className="service-icon-box">💎</div>
            <h3>Premium Care</h3>
            <p>Priority support and extended warranty</p>
            <span className="learn-more">Learn more →</span>
          </div>
          <div className="service-card">
            <div className="service-icon-box">🔄</div>
            <h3>Trade-In</h3>
            <p>Upgrade your old equipment for value</p>
            <span className="learn-more">Learn more →</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-view {
          padding-bottom: 60px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .services-header {
          background: #0d3b23;
          color: white;
          padding: 60px 0 100px;
          text-align: center;
        }

        .services-header h2 {
          font-family: serif;
          font-size: 36px;
          margin-bottom: 12px;
        }

        .services-header p {
          opacity: 0.8;
          font-size: 15px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .service-card {
          background: white;
          padding: 32px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: transform 0.2s;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-card.highlight {
          border: 2px solid #c49a6c;
          position: relative;
        }

        .service-card.highlight::before {
          content: "Recommended";
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #c49a6c;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 600;
        }

        .service-icon-box {
          width: 64px;
          height: 64px;
          background: #faf8f5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin: 0 auto 20px;
          color: #1a5632;
        }

        .service-card h3 {
          font-size: 18px;
          color: #0d3b23;
          margin-bottom: 12px;
        }

        .service-card p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .learn-more {
          font-size: 12px;
          font-weight: 600;
          color: #c49a6c;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

function GalleryView() {
  return (
    <div className="gallery-view">
      <div className="container">
        <div className="gallery-intro">
          <h2>Our Community</h2>
          <p>
            See how our partners transform their spaces with Amara equipment.
          </p>
        </div>

        <div className="gallery-grid">
          {[
            { src: "/mockups/barista/post1.jpg", alt: "Coffee setup showcase" },
            {
              src: "/mockups/barista/post2.jpg",
              alt: "Espresso machine in action",
            },
            { src: "/mockups/barista/post3.jpg", alt: "Cafe interior design" },
            { src: "/mockups/barista/post4.jpg", alt: "Latte art preparation" },
            {
              src: "/mockups/barista/post5.jpg",
              alt: "Coffee equipment display",
            },
            {
              src: "/mockups/barista/machine.jpg",
              alt: "Professional coffee grinder",
            },
          ].map((photo, i) => (
            <div key={i} className="gallery-item">
              <img
                src={photo.src}
                alt={photo.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="gallery-overlay">
                <span>@cafename_{i + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials">
          <h3>Client Success Stories</h3>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="quote">
                "The installation was seamless and the training provided to our
                staff was top-notch."
              </div>
              <div className="author">
                <div className="avatar">A</div>
                <div>
                  <strong>Ahmed K.</strong>
                  <span>Owner, Brew Lab</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="quote">
                "Amara's maintenance service has saved us multiple times during
                peak hours. Highly recommended."
              </div>
              <div className="author">
                <div className="avatar">S</div>
                <div>
                  <strong>Sarah M.</strong>
                  <span>Manager, Daily Roast</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-box">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest updates on equipment and barista tips.</p>
          <div className="input-group">
            <input type="text" placeholder="Enter your email" disabled />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-view {
          padding: 40px 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .gallery-intro {
          text-align: center;
          margin-bottom: 40px;
        }

        .gallery-intro h2 {
          font-family: serif;
          font-size: 32px;
          color: #0d3b23;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 60px;
        }

        .gallery-item {
          aspect-ratio: 1;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay span {
          color: white;
          font-weight: 600;
          font-size: 13px;
        }

        .testimonials {
          margin-bottom: 60px;
        }

        .testimonials h3 {
          font-family: serif;
          font-size: 28px;
          color: #0d3b23;
          margin-bottom: 24px;
          text-align: center;
        }

        .testi-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .testi-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
        }

        .quote {
          font-style: italic;
          color: #555;
          margin-bottom: 20px;
          line-height: 1.6;
          font-size: 14px;
        }

        .author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 40px;
          height: 40px;
          background: #c49a6c;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .author strong {
          display: block;
          font-size: 14px;
          color: #333;
        }
        .author span {
          font-size: 12px;
          color: #888;
        }

        .newsletter-box {
          background: #0d3b23;
          color: white;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
        }

        .newsletter-box h3 {
          font-family: serif;
          font-size: 24px;
          margin-bottom: 8px;
        }
        .newsletter-box p {
          opacity: 0.8;
          margin-bottom: 24px;
        }

        .input-group {
          display: flex;
          max-width: 400px;
          margin: 0 auto;
          gap: 8px;
        }

        .input-group input {
          flex: 1;
          padding: 12px 20px;
          border-radius: 50px;
          border: none;
          font-size: 14px;
        }

        .input-group button {
          padding: 12px 24px;
          border-radius: 50px;
          border: none;
          background: #c49a6c;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr;
          }
          .testi-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

function BaristaFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Amara</h2>
            <p>Premium Coffee Equipment</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li>Machines</li>
              <li>Grinders</li>
              <li>Blenders</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>support@amara.coffee</li>
              <li>+20 109 366 7189</li>
              <li>Cairo, Egypt</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Amara Coffee Machines. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1a1a1a;
          color: #aaa;
          padding: 60px 0 20px;
          margin-top: auto;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-brand h2 {
          color: white;
          font-family: serif;
          font-size: 28px;
          margin-bottom: 8px;
        }

        .footer-col h4 {
          color: white;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
        }

        .footer-col ul li {
          font-size: 13px;
          margin-bottom: 8px;
          cursor: pointer;
        }

        .footer-col ul li:hover {
          color: #c49a6c;
        }

        .footer-bottom {
          padding-top: 20px;
          font-size: 12px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </footer>
  );
}
