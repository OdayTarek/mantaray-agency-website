import { MockupFrame } from "./shared/MockupFrame";
import { luxeData, FashionProduct, CartItem } from "./shared/types";

type LuxeVariant = "home" | "products" | "cart" | "checkout";

interface LuxeMockupProps {
  variant?: LuxeVariant;
}

export function LuxeMockup({ variant = "home" }: LuxeMockupProps) {
  return (
    <div className="luxe-mockup">
      <MockupFrame url="luxe-threads.com">
        <div className="luxe-app" dir="rtl">
          <LuxeHeader variant={variant} />
          <div className="luxe-main">
            {variant === "home" && <HomeView />}
            {variant === "products" && <ProductsView />}
            {variant === "cart" && <CartView />}
            {variant === "checkout" && <CheckoutView />}
          </div>
          <LuxeFooter />
        </div>
      </MockupFrame>

      <style jsx>{`
        .luxe-mockup {
          width: 100%;
          height: 100%;
          font-family: "Cairo", sans-serif;
          --brown: #8b6f47;
          --brown-light: #a0522d;
          --cream: #faf5ef;
          --warm-beige: #e8ddd0;
          --pink-accent: #d4a574;
          --dark: #2c2c2c;
          --gold: #c9a96e;
          --white: #ffffff;
          --success: #27ae60;
          --danger: #e74c3c;
        }

        .luxe-app {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--cream);
          color: var(--dark);
          overflow: hidden;
        }

        .luxe-main {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
        }

        /* Scrollbar styling */
        .luxe-main::-webkit-scrollbar {
          width: 6px;
        }
        .luxe-main::-webkit-scrollbar-track {
          background: var(--cream);
        }
        .luxe-main::-webkit-scrollbar-thumb {
          background: var(--brown);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

function LuxeHeader({ variant }: { variant: LuxeVariant }) {
  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "products", label: "المنتجات" },
    { id: "cart", label: "السلة" },
    { id: "checkout", label: "إتمام الطلب" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">L</span>
          <span className="logo-text">Luxe Threads</span>
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
          <div className="action-btn">
            <svg viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <div className="action-btn">
            <svg viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
          <div className="cart-btn-wrapper">
            <div className="action-btn cart-btn">
              <svg viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span className="cart-count">2</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background: rgba(255, 248, 240, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(139, 111, 71, 0.1);
          padding: 12px 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: 24px;
          color: var(--brown);
        }
        .logo-icon {
          width: 36px;
          height: 36px;
          background: var(--brown);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          font-size: 15px;
          font-weight: 600;
          color: var(--dark);
          cursor: pointer;
          position: relative;
          transition: color 0.3s;
        }
        .nav-item:hover,
        .nav-item.active {
          color: var(--brown);
        }
        .nav-item.active::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--brown);
        }
        .nav-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .action-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--warm-beige);
          color: var(--brown);
          cursor: pointer;
          transition: all 0.3s;
        }
        .action-btn:hover {
          background: var(--brown);
          color: var(--white);
        }
        .action-btn svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }
        .cart-btn-wrapper {
          position: relative;
        }
        .cart-count {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--pink-accent);
          color: var(--white);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
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

function HomeView() {
  return (
    <div className="home-view">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Luxe Threads
              <span>قطع مختارة بعناية</span>
            </h1>
            <p>
              بنختارلك قطع من أفضل البراندات، كل قطعة شكلها شيك، خامتها مُتجربة،
              وسعرها مناسب. وصّلهالك لحد بابك في نفس اليوم!
            </p>
            <div className="hero-badges">
              <div className="badge">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                شكل شيك
              </div>
              <div className="badge">
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                خامة مضمونة
              </div>
            </div>
            <div className="hero-cta">
              <button className="btn btn-primary">تصفحي الكوليكشن</button>
              <button className="btn btn-outline">اعرفي أكتر</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="image-overlay"></div>
            </div>
            <div className="hero-float-card">
              <div className="icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3v14h14v-2h3c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 8H5V6h12v10zm4-3h-2v-3h2v3z" />
                </svg>
              </div>
              <div className="text">
                <strong>توصيل سريع</strong>
                <small>خلال 24 ساعة</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-container">
          <div className="section-header">
            <h2>ليه تختارينا؟</h2>
            <div className="section-divider"></div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3v14h14v-2h3c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 8H5V6h12v10zm4-3h-2v-3h2v3z" />
                </svg>
              </div>
              <h3>توصيل في نفس اليوم</h3>
              <p>اطلبي قبل الساعة 2 وهيوصلك الأوردر في نفس اليوم.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3>معاينة قبل الاستلام</h3>
              <p>تقدري تقيسي القطع وتتأكدي منها قبل ما تدفعي.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
              <h3>جودة مضمونة</h3>
              <p>كل قطعة بنختارها بعناية عشان نضمنلك أفضل خامة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Banner */}
      <section className="delivery-banner">
        <div className="delivery-container">
          <div className="delivery-text">
            <h2>خطوات التوصيل</h2>
            <p>بنسهلك عملية الشراء والتوصيل عشان تستمتعي بتجربة تسوق مريحة.</p>
            <div className="delivery-steps">
              <div className="delivery-step">
                <div className="step-num">1</div>
                <div className="step-text">اختاري القطع اللي تعجبك</div>
              </div>
              <div className="delivery-step">
                <div className="step-num">2</div>
                <div className="step-text">سجلي بياناتك والعنوان</div>
              </div>
              <div className="delivery-step">
                <div className="step-num">3</div>
                <div className="step-text">هنوصلك لحد باب البيت</div>
              </div>
            </div>
          </div>
          <div className="delivery-visual">
            <div className="visual-rect"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about">
        <div className="about-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>عميلة سعيدة</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>جودة مضمونة</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>دعم فني</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-view {
          display: flex;
          flex-direction: column;
        }
        .hero {
          padding: 80px 30px;
          background: linear-gradient(
            135deg,
            var(--cream) 0%,
            var(--warm-beige) 50%,
            #f0d5bc 100%
          );
          position: relative;
        }
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-content h1 {
          font-family: "Playfair Display", serif;
          font-size: 48px;
          font-weight: 700;
          color: var(--brown);
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .hero-content h1 span {
          display: block;
          font-family: "Cairo", sans-serif;
          font-size: 28px;
          color: var(--brown-light);
          margin-top: 10px;
        }
        .hero-content p {
          font-size: 18px;
          line-height: 1.8;
          color: #5a4030;
          margin-bottom: 30px;
          max-width: 480px;
        }
        .hero-badges {
          display: flex;
          gap: 15px;
          margin-bottom: 35px;
        }
        .badge {
          background: var(--white);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: var(--brown);
          box-shadow: 0 2px 15px rgba(139, 111, 71, 0.08);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .badge svg {
          width: 18px;
          height: 18px;
          fill: var(--pink-accent);
        }
        .hero-cta {
          display: flex;
          gap: 15px;
        }
        .btn {
          padding: 15px 40px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }
        .btn-primary {
          background: var(--brown);
          color: var(--white);
        }
        .btn-primary:hover {
          background: var(--brown-light);
          transform: translateY(-2px);
        }
        .btn-outline {
          background: transparent;
          color: var(--brown);
          border: 2px solid var(--brown);
        }
        .btn-outline:hover {
          background: var(--brown);
          color: var(--white);
        }
        .image-placeholder {
          width: 100%;
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #e8ddd0, #d4a574);
          border-radius: 20px;
          position: relative;
          box-shadow: 0 20px 60px rgba(139, 111, 71, 0.15);
        }
        .hero-float-card {
          position: absolute;
          bottom: -20px;
          left: -30px;
          background: var(--white);
          padding: 15px 25px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 12px;
          animation: bounce 3s ease-in-out infinite;
        }
        .hero-float-card .icon {
          width: 45px;
          height: 45px;
          background: linear-gradient(
            135deg,
            var(--pink-accent),
            var(--brown-light)
          );
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }
        .hero-float-card .icon svg {
          width: 24px;
          height: 24px;
          fill: currentColor;
        }
        .hero-float-card .text {
          display: flex;
          flex-direction: column;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .features {
          padding: 80px 30px;
          background: var(--white);
        }
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-header h2 {
          font-family: "Playfair Display", serif;
          font-size: 38px;
          color: var(--brown);
          margin-bottom: 10px;
        }
        .section-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--pink-accent), var(--brown));
          margin: 15px auto 0;
          border-radius: 2px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .feature-card {
          text-align: center;
          padding: 40px 30px;
          border-radius: 20px;
          background: var(--cream);
          border: 1px solid rgba(139, 111, 71, 0.05);
          transition: transform 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-8px);
        }
        .feature-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, var(--warm-beige), var(--cream));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-icon svg {
          width: 32px;
          height: 32px;
          fill: var(--brown);
        }
        .delivery-banner {
          padding: 60px 30px;
          background: linear-gradient(
            135deg,
            var(--brown) 0%,
            var(--brown-light) 100%
          );
          color: var(--white);
        }
        .delivery-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .delivery-text h2 {
          font-family: "Playfair Display", serif;
          font-size: 36px;
          margin-bottom: 15px;
        }
        .delivery-steps {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 25px;
        }
        .delivery-step {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .step-num {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .delivery-visual .visual-rect {
          width: 100%;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(5px);
        }
        .about {
          padding: 60px 30px;
          background: var(--white);
        }
        .about-stats {
          display: flex;
          justify-content: center;
          gap: 80px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .stat h3 {
          font-size: 36px;
          font-weight: 700;
          color: var(--brown);
          margin-bottom: 5px;
        }
        .stat p {
          color: #999;
          font-size: 14px;
        }
        @media (max-width: 768px) {
          .hero-container,
          .delivery-container,
          .features-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-badges,
          .hero-cta {
            justify-content: center;
          }
          .hero-float-card {
            display: none;
          }
          .about-stats {
            flex-direction: column;
            gap: 30px;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

function ProductsView() {
  const { products } = luxeData;

  return (
    <div className="products-view">
      <div className="container">
        <div className="section-header">
          <h2>أحدث المنتجات</h2>
          <p>اكتشفي كوليكشن الموسم الجديد</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img">
                <div
                  className="img-placeholder"
                  style={{
                    background: `linear-gradient(135deg, ${
                      product.id === "1"
                        ? "#e8ddd0, #d4a574"
                        : product.id === "2"
                          ? "#f0d5bc, #a0522d"
                          : "#faf5ef, #8b6f47"
                    })`,
                  }}
                />
                {product.badge && (
                  <span className="product-tag">{product.badge}</span>
                )}
                <button className="wishlist-btn">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <span className="brand">{product.brand}</span>
                <h3>{product.name}</h3>
                <div className="price">{product.price}</div>
                <div className="product-bottom">
                  <div className="sizes">
                    {product.sizes.map((size) => (
                      <span key={size} className="size-tag">
                        {size}
                      </span>
                    ))}
                  </div>
                  <button className="add-btn">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .products-view {
          padding: 60px 30px;
          background: var(--cream);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .section-header h2 {
          font-family: "Playfair Display", serif;
          font-size: 32px;
          color: var(--brown);
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .product-card {
          background: var(--white);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s;
          border: 1px solid rgba(139, 111, 71, 0.05);
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(139, 111, 71, 0.12);
        }
        .product-img {
          position: relative;
          aspect-ratio: 3/4;
        }
        .img-placeholder {
          width: 100%;
          height: 100%;
        }
        .product-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--pink-accent);
          color: var(--white);
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .wishlist-btn {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 36px;
          height: 36px;
          background: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
        }
        .wishlist-btn svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: var(--brown);
          stroke-width: 2;
        }
        .product-info {
          padding: 18px;
        }
        .brand {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--gold);
          font-weight: 600;
          display: block;
          margin-bottom: 6px;
        }
        .product-info h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 8px;
        }
        .price {
          font-size: 18px;
          font-weight: 700;
          color: var(--brown);
        }
        .product-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 12px;
        }
        .sizes {
          display: flex;
          gap: 5px;
        }
        .size-tag {
          padding: 2px 8px;
          border: 1px solid #e0d5c8;
          border-radius: 6px;
          font-size: 10px;
          color: #888;
        }
        .add-btn {
          width: 32px;
          height: 32px;
          background: var(--brown);
          color: var(--white);
          border-radius: 8px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .add-btn svg {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

function CartView() {
  const { cart, products } = luxeData;
  const getProduct = (id: string) => products.find((p) => p.id === id);

  return (
    <div className="cart-view">
      <div className="cart-container">
        <div className="cart-header">
          <h3>
            <svg viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            سلة التسوق
          </h3>
        </div>
        <div className="cart-items">
          {cart.map((item) => {
            const product = getProduct(item.productId);
            if (!product) return null;
            return (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(135deg, #e8ddd0, #d4a574)",
                    }}
                  />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-name">{product.name}</div>
                  <div className="cart-item-size">المقاس: {item.size}</div>
                  <div className="cart-item-price">{product.price}</div>
                  <div className="cart-item-qty">
                    <button className="qty-btn">-</button>
                    <span className="qty-num">{item.quantity}</span>
                    <button className="qty-btn">+</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-footer">
          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>المجموع الفرعي</span>
              <span>5,798 EGP</span>
            </div>
            <div className="cart-summary-row">
              <span>التوصيل</span>
              <span style={{ color: "var(--success)" }}>مجاني</span>
            </div>
            <div className="cart-total">
              <span>الإجمالي</span>
              <span>5,798 EGP</span>
            </div>
          </div>
          <button className="btn-checkout">إتمام الطلب</button>
        </div>
      </div>
      <style jsx>{`
        .cart-view {
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: flex-end;
        }
        .cart-container {
          width: 400px;
          height: 100%;
          background: var(--white);
          display: flex;
          flex-direction: column;
        }
        .cart-header {
          padding: 20px 25px;
          border-bottom: 1px solid #f0e8e0;
        }
        .cart-header h3 {
          font-size: 20px;
          color: var(--brown);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cart-header h3 svg {
          width: 24px;
          height: 24px;
          fill: currentColor;
        }
        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 15px 25px;
        }
        .cart-item {
          display: flex;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid #f5f0eb;
        }
        .cart-item-img {
          width: 80px;
          height: 100px;
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .cart-item-details {
          flex: 1;
        }
        .cart-item-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--dark);
        }
        .cart-item-size {
          font-size: 12px;
          color: #999;
          margin-bottom: 5px;
        }
        .cart-item-price {
          font-size: 16px;
          font-weight: 700;
          color: var(--brown);
        }
        .cart-item-qty {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }
        .qty-btn {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          border: 1px solid #e0d5c8;
          background: var(--cream);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .qty-num {
          font-size: 14px;
          font-weight: 600;
        }
        .cart-footer {
          padding: 20px 25px;
          border-top: 1px solid #f0e8e0;
          background: var(--cream);
        }
        .cart-summary {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 15px;
        }
        .cart-summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #888;
        }
        .cart-total {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: 700;
          color: var(--brown);
          padding-top: 10px;
          border-top: 1px solid #e0d5c8;
        }
        .btn-checkout {
          width: 100%;
          padding: 16px;
          background: var(--brown);
          color: var(--white);
          border: none;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }
        @media (max-width: 480px) {
          .cart-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

function CheckoutView() {
  return (
    <div className="checkout-view">
      <div className="checkout-container">
        <div className="checkout-content">
          <h2>إتمام الطلب</h2>
          <p className="checkout-subtitle">
            أدخلي بياناتك وهنتواصل معاكي لتأكيد الأوردر
          </p>

          <form className="checkout-form">
            <div className="form-row">
              <div className="form-group">
                <label>الاسم الكامل</label>
                <input type="text" placeholder="مثال: سارة أحمد" />
              </div>
              <div className="form-group">
                <label>رقم الموبايل</label>
                <input type="tel" placeholder="01xxxxxxxxx" />
              </div>
            </div>
            <div className="form-group">
              <label>المنطقة</label>
              <select>
                <option>القاهرة الجديدة</option>
                <option>6 أكتوبر</option>
                <option>الشيخ زايد</option>
              </select>
            </div>
            <div className="form-group">
              <label>العنوان بالتفصيل</label>
              <textarea placeholder="الكمبوند / الشارع / رقم العمارة / الشقة"></textarea>
            </div>
            <button type="button" className="btn-place-order">
              <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              تأكيد الطلب
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .checkout-view {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
        }
        .checkout-container {
          background: var(--white);
          border-radius: 24px;
          width: 550px;
          max-width: 90%;
          max-height: 90vh;
          overflow-y: auto;
        }
        .checkout-content {
          padding: 35px;
        }
        .checkout-content h2 {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          color: var(--brown);
          margin-bottom: 5px;
        }
        .checkout-subtitle {
          font-size: 14px;
          color: #999;
          margin-bottom: 25px;
        }
        .form-group {
          margin-bottom: 18px;
        }
        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 6px;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #f0e8e0;
          border-radius: 12px;
          font-family: "Cairo", sans-serif;
          font-size: 14px;
          color: var(--dark);
          background: var(--cream);
        }
        .form-group textarea {
          height: 80px;
          resize: vertical;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .btn-place-order {
          width: 100%;
          padding: 16px;
          background: var(--success);
          color: var(--white);
          border: none;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 10px;
        }
        .btn-place-order svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }
        @media (max-width: 480px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

function LuxeFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Luxe Threads</h3>
          <p>موضة عصرية بلمسة أناقة.</p>
        </div>
        <div className="footer-links">
          <span>سياسة الاسترجاع</span>
          <span>الشحن والتوصيل</span>
          <span>تواصل معنا</span>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: var(--dark);
          color: var(--white);
          padding: 40px 30px;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-brand h3 {
          font-family: "Playfair Display", serif;
          font-size: 24px;
          color: var(--gold);
        }
        .footer-brand p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer-links {
          display: flex;
          gap: 20px;
        }
        .footer-links span {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
