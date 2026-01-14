import { MockupFrame } from './shared/MockupFrame'

type BloomVariant = 'home' | 'products' | 'detail' | 'ar-view'

interface BloomMockupProps {
  variant?: BloomVariant
}

export function BloomMockup({ variant = 'home' }: BloomMockupProps) {
  return (
    <div className="bloom-mockup">
      <MockupFrame url="bloom.market">
        <div className="bloom-app">
          {/* Header */}
          <BloomHeader variant={variant} />

          {/* Main Content */}
          <div className="bloom-main">
            {variant === 'home' && <HomeView />}
            {variant === 'products' && <ProductsView />}
            {variant === 'detail' && <DetailView />}
            {variant === 'ar-view' && <ARView />}
          </div>
        </div>
      </MockupFrame>

      <style jsx>{`
        .bloom-mockup {
          width: 100%;
          height: 100%;
        }

        .bloom-app {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #fafafa;
          direction: ltr;
        }

        .bloom-main {
          flex: 1;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .bloom-app {
            height: 100%;
          }

          .bloom-main {
            overflow: auto;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  )
}

function BloomHeader({ variant }: { variant: BloomVariant }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
  ]

  return (
    <header className="bloom-header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
              <path d="M12 12l9-4.5M12 12v9M12 12l-9-4.5" />
            </svg>
          </div>
          <span className="logo-text">Bloom AR</span>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <span
              key={item.id}
              className={`nav-item ${variant === item.id || (variant === 'detail' && item.id === 'products') ? 'active' : ''}`}
            >
              {item.label}
            </span>
          ))}
        </nav>
      </div>

      <div className="header-search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <span>Search products...</span>
      </div>

      <div className="header-right">
        <div className="ar-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 12h20M12 2v20" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <span>AR Ready</span>
        </div>
        <div className="cart-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="cart-count">3</span>
        </div>
        <div className="user-avatar">SA</div>
      </div>

      <style jsx>{`
        .bloom-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          background: white;
          border-bottom: 1px solid #f0f0f0;
          flex-shrink: 0;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .logo-text {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
        }

        .nav {
          display: flex;
          gap: 8px;
        }

        .nav-item {
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 500;
          color: #64748b;
          border-radius: 8px;
          cursor: pointer;
        }

        .nav-item.active {
          color: #ec4899;
          background: #fdf2f8;
        }

        .header-search {
          flex: 1;
          max-width: 360px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 16px;
          background: #f8fafc;
          border-radius: 12px;
          color: #94a3b8;
          font-size: 13px;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        @media (max-width: 768px) {
          .bloom-header {
            padding: 10px 16px;
            flex-wrap: wrap;
            gap: 8px;
          }

          .header-left {
            gap: 16px;
          }

          .logo-text {
            font-size: 14px;
          }

          .nav {
            display: none;
          }

          .header-search {
            display: none;
          }

          .ar-badge span {
            display: none;
          }

          .user-avatar {
            width: 32px;
            height: 32px;
            font-size: 11px;
          }
        }

        .ar-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: linear-gradient(135deg, #fdf2f8, #faf5ff);
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #8b5cf6;
        }

        .cart-btn {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          position: relative;
          cursor: pointer;
        }

        .cart-count {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 18px;
          height: 18px;
          background: #ec4899;
          color: white;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 11px;
          font-weight: 600;
        }
      `}</style>
    </header>
  )
}

function HomeView() {
  return (
    <div className="home-view">
      {/* Hero Section with AR Feature */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
            <span>WebAR Powered</span>
          </div>
          <h1 className="hero-title">Experience Products in AR Before You Buy</h1>
          <p className="hero-subtitle">Visualize furniture, electronics, and more in your actual space using our WebAR technology</p>
          <div className="hero-actions">
            <button className="hero-btn primary">Try AR Demo</button>
            <button className="hero-btn secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Video
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="ar-preview">
            <div className="ar-product-3d">
              <div className="product-mesh">
                <div className="mesh-face front" />
                <div className="mesh-face back" />
                <div className="mesh-face left" />
                <div className="mesh-face right" />
                <div className="mesh-face top" />
                <div className="mesh-face bottom" />
              </div>
            </div>
            <div className="ar-controls">
              <span className="ar-status">● Live AR Preview</span>
              <div className="ar-actions">
                <button className="ar-btn">Rotate</button>
                <button className="ar-btn">Scale</button>
                <button className="ar-btn">Place</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="section-header-center">
          <h2>Why Shop with Bloom AR?</h2>
          <p>Revolutionary shopping experience powered by augmented reality</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon ar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3>3D Visualization</h3>
            <p>View products from every angle in stunning 3D detail before purchasing</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon room-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <h3>Room Placement</h3>
            <p>See exactly how furniture fits in your space using your camera</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon ai-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
              </svg>
            </div>
            <h3>AI Recommendations</h3>
            <p>Smart suggestions based on your style preferences and space</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon share-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </div>
            <h3>Share Experience</h3>
            <p>Share AR previews with friends and family for instant feedback</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-section">
        <div className="section-header">
          <div>
            <h2>Featured Products</h2>
            <p>All available in AR preview</p>
          </div>
          <button className="view-all">View All Products</button>
        </div>
        <div className="products-grid">
          {[
            { name: 'Modern Lounge Chair', price: '$599', category: 'Furniture', ar: true, color: '#ec4899' },
            { name: 'Ceramic Vase Set', price: '$89', category: 'Decor', ar: true, color: '#8b5cf6' },
            { name: 'Table Lamp Pro', price: '$149', category: 'Lighting', ar: true, color: '#3b82f6' },
            { name: 'Wooden Side Table', price: '$249', category: 'Furniture', ar: true, color: '#22c55e' },
          ].map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .home-view {
          display: flex;
          flex-direction: column;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding: 48px;
          background: linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #f0f9ff 100%);
          min-height: 420px;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: white;
          border-radius: 24px;
          font-size: 12px;
          font-weight: 600;
          color: #8b5cf6;
          margin-bottom: 20px;
          width: fit-content;
        }

        .hero-title {
          font-size: 38px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 15px;
          color: #64748b;
          margin-bottom: 28px;
          line-height: 1.6;
          max-width: 420px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
        }

        .hero-btn {
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero-btn.primary {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          color: white;
          border: none;
        }

        .hero-btn.secondary {
          background: white;
          color: #0f172a;
          border: 1px solid #e2e8f0;
        }

        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ar-preview {
          width: 100%;
          max-width: 420px;
          background: white;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 20px 60px -12px rgba(0, 0, 0, 0.1);
        }

        .ar-product-3d {
          height: 240px;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .ar-product-3d::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .product-mesh {
          width: 120px;
          height: 120px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate3d 8s linear infinite;
        }

        @keyframes rotate3d {
          0% { transform: rotateX(-20deg) rotateY(0deg); }
          100% { transform: rotateX(-20deg) rotateY(360deg); }
        }

        .mesh-face {
          position: absolute;
          width: 120px;
          height: 120px;
          border: 2px solid rgba(139, 92, 246, 0.5);
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2));
        }

        .mesh-face.front { transform: translateZ(60px); }
        .mesh-face.back { transform: translateZ(-60px) rotateY(180deg); }
        .mesh-face.left { transform: translateX(-60px) rotateY(-90deg); }
        .mesh-face.right { transform: translateX(60px) rotateY(90deg); }
        .mesh-face.top { transform: translateY(-60px) rotateX(90deg); }
        .mesh-face.bottom { transform: translateY(60px) rotateX(-90deg); }

        .ar-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }

        .ar-status {
          font-size: 12px;
          color: #22c55e;
          font-weight: 500;
        }

        .ar-actions {
          display: flex;
          gap: 8px;
        }

        .ar-btn {
          padding: 8px 14px;
          background: #f8fafc;
          border: none;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          color: #475569;
          cursor: pointer;
        }

        .features-section {
          padding: 48px;
          background: white;
        }

        .section-header-center {
          text-align: center;
          margin-bottom: 36px;
        }

        .section-header-center h2 {
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .section-header-center p {
          font-size: 14px;
          color: #64748b;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .feature-card {
          padding: 24px;
          background: #fafafa;
          border-radius: 16px;
          text-align: center;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .feature-icon.ar-icon { background: linear-gradient(135deg, #ec4899, #8b5cf6); }
        .feature-icon.room-icon { background: linear-gradient(135deg, #3b82f6, #06b6d4); }
        .feature-icon.ai-icon { background: linear-gradient(135deg, #8b5cf6, #6366f1); }
        .feature-icon.share-icon { background: linear-gradient(135deg, #22c55e, #10b981); }

        .feature-card h3 {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .feature-card p {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
        }

        .featured-section {
          padding: 48px;
          background: #fafafa;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
        }

        .section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .section-header p {
          font-size: 13px;
          color: #64748b;
        }

        .view-all {
          padding: 10px 20px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          color: #0f172a;
          cursor: pointer;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding: 24px;
            gap: 24px;
            min-height: auto;
          }

          .hero-title {
            font-size: 24px;
          }

          .hero-subtitle {
            font-size: 13px;
            margin-bottom: 20px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-btn {
            padding: 12px 20px;
            font-size: 13px;
          }

          .ar-preview {
            padding: 16px;
          }

          .ar-product-3d {
            height: 180px;
          }

          .product-mesh {
            width: 80px;
            height: 80px;
          }

          .mesh-face {
            width: 80px;
            height: 80px;
          }

          .mesh-face.front { transform: translateZ(40px); }
          .mesh-face.back { transform: translateZ(-40px) rotateY(180deg); }
          .mesh-face.left { transform: translateX(-40px) rotateY(-90deg); }
          .mesh-face.right { transform: translateX(40px) rotateY(90deg); }
          .mesh-face.top { transform: translateY(-40px) rotateX(90deg); }
          .mesh-face.bottom { transform: translateY(40px) rotateX(-90deg); }

          .ar-btn {
            padding: 6px 10px;
            font-size: 11px;
          }

          .features-section,
          .featured-section {
            padding: 24px;
          }

          .section-header-center h2 {
            font-size: 20px;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .feature-card {
            padding: 16px;
          }

          .feature-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 12px;
          }

          .feature-icon svg {
            width: 18px;
            height: 18px;
          }

          .feature-card h3 {
            font-size: 13px;
          }

          .feature-card p {
            font-size: 11px;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .view-all {
            padding: 8px 16px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

function ProductsView() {
  const products = [
    { name: 'Modern Sofa', price: '$1,299', category: 'Furniture', ar: true, rating: 4.8 },
    { name: 'Floor Lamp', price: '$299', category: 'Lighting', ar: true, rating: 4.9 },
    { name: 'Coffee Table', price: '$549', category: 'Furniture', ar: true, rating: 4.7 },
    { name: 'Bookshelf', price: '$799', category: 'Furniture', ar: true, rating: 4.6 },
    { name: 'Accent Chair', price: '$649', category: 'Furniture', ar: true, rating: 4.8 },
    { name: 'Plant Stand', price: '$129', category: 'Decor', ar: true, rating: 4.9 },
    { name: 'Wall Art Set', price: '$189', category: 'Decor', ar: true, rating: 4.5 },
    { name: 'Rug Premium', price: '$399', category: 'Decor', ar: true, rating: 4.7 },
  ]

  return (
    <div className="products-view">
      <div className="products-header">
        <h1>All Products</h1>
        <div className="header-actions">
          <div className="filter-group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            <span>Filter</span>
          </div>
          <div className="sort-group">
            <span>Sort by: Recommended</span>
          </div>
        </div>
      </div>

      <div className="products-grid-large">
        {products.map((product, i) => (
          <div key={i} className="product-card-large">
            <div className="product-image-large">
              <div className="ar-overlay">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <span>View in AR</span>
              </div>
              <div className="image-placeholder" style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? '#fdf2f8' : '#faf5ff'}, ${i % 2 === 0 ? '#faf5ff' : '#f0f9ff'})` }}>
                <div className="product-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-meta">
                <div className="rating">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>{product.rating}</span>
                </div>
                <span className="product-price">{product.price}</span>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .products-view {
          padding: 32px;
        }

        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .products-header h1 {
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .filter-group, .sort-group {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: white;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          font-size: 13px;
          color: #475569;
        }

        .products-grid-large {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .product-card-large {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #f0f0f0;
        }

        .product-image-large {
          position: relative;
          aspect-ratio: 1;
        }

        .ar-overlay {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(139, 92, 246, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          color: white;
          font-size: 11px;
          font-weight: 600;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-icon {
          color: #8b5cf6;
          opacity: 0.5;
        }

        .product-info {
          padding: 16px;
        }

        .product-category {
          font-size: 11px;
          color: #8b5cf6;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .product-name {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          margin: 6px 0 10px;
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #475569;
        }

        .product-price {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
        }

        .add-to-cart {
          width: 100%;
          padding: 10px;
          background: #0f172a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .products-view {
            padding: 20px;
          }

          .products-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .products-header h1 {
            font-size: 20px;
          }

          .header-actions {
            width: 100%;
            justify-content: space-between;
          }

          .sort-group {
            display: none;
          }

          .products-grid-large {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .ar-overlay {
            padding: 6px 10px;
            font-size: 10px;
          }

          .product-info {
            padding: 12px;
          }

          .product-name {
            font-size: 13px;
          }

          .product-price {
            font-size: 14px;
          }

          .add-to-cart {
            padding: 8px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .products-grid-large {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

function DetailView() {
  return (
    <div className="detail-view">
      <div className="breadcrumb">
        <span>Home</span>
        <span className="sep">/</span>
        <span>Furniture</span>
        <span className="sep">/</span>
        <span className="current">Modern Lounge Chair</span>
      </div>

      <div className="detail-layout">
        <div className="detail-gallery">
          <div className="main-view">
            <div className="product-showcase">
              <div className="showcase-3d">
                <div className="product-mesh-large">
                  <div className="mesh-face front" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(139, 92, 246, 0.3))' }} />
                  <div className="mesh-face back" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(139, 92, 246, 0.3))' }} />
                  <div className="mesh-face left" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))' }} />
                  <div className="mesh-face right" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))' }} />
                  <div className="mesh-face top" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(139, 92, 246, 0.4))' }} />
                  <div className="mesh-face bottom" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="view-toggles">
            <button className="toggle-btn active">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              3D View
            </button>
            <button className="toggle-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              Photos
            </button>
            <button className="toggle-btn ar-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              AR Preview
            </button>
          </div>
        </div>

        <div className="detail-info">
          <div className="detail-badges">
            <span className="badge ar-badge">AR Enabled</span>
            <span className="badge stock-badge">In Stock</span>
          </div>

          <h1>Modern Lounge Chair</h1>

          <div className="detail-rating">
            <div className="stars">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="rating-value">4.9</span>
            <span className="review-count">(247 reviews)</span>
          </div>

          <div className="detail-price">
            <span className="current">$599.00</span>
            <span className="original">$799.00</span>
            <span className="savings">Save 25%</span>
          </div>

          <p className="detail-description">
            Premium lounge chair with ergonomic design and sustainable materials. Experience it in your space before buying with our AR visualization technology.
          </p>

          <div className="ar-features">
            <div className="ar-feature">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <div>
                <strong>3D Model Available</strong>
                <span>Rotate and inspect from all angles</span>
              </div>
            </div>
            <div className="ar-feature">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <div>
                <strong>Room Placement</strong>
                <span>See how it fits in your space</span>
              </div>
            </div>
          </div>

          <div className="color-options">
            <span>Color: <strong>Rose Pink</strong></span>
            <div className="colors">
              <div className="color active" style={{ background: '#ec4899' }} />
              <div className="color" style={{ background: '#8b5cf6' }} />
              <div className="color" style={{ background: '#3b82f6' }} />
              <div className="color" style={{ background: '#22c55e' }} />
              <div className="color" style={{ background: '#0f172a' }} />
            </div>
          </div>

          <div className="detail-actions">
            <button className="btn-ar primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              View in Your Space
            </button>
            <button className="btn-ar secondary">Add to Cart</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .detail-view {
          padding: 32px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748b;
          margin-bottom: 24px;
        }

        .breadcrumb .sep { color: #cbd5e1; }
        .breadcrumb .current { color: #0f172a; }

        .detail-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 48px;
        }

        .detail-gallery {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .main-view {
          background: white;
          border-radius: 20px;
          overflow: hidden;
        }

        .product-showcase {
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #fdf2f8, #faf5ff, #f0f9ff);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .showcase-3d {
          position: relative;
        }

        .product-mesh-large {
          width: 180px;
          height: 180px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate3d 12s linear infinite;
        }

        .mesh-face {
          position: absolute;
          width: 180px;
          height: 180px;
          border: 2px solid rgba(139, 92, 246, 0.6);
        }

        .mesh-face.front { transform: translateZ(90px); }
        .mesh-face.back { transform: translateZ(-90px) rotateY(180deg); }
        .mesh-face.left { transform: translateX(-90px) rotateY(-90deg); }
        .mesh-face.right { transform: translateX(90px) rotateY(90deg); }
        .mesh-face.top { transform: translateY(-90px) rotateX(90deg); }
        .mesh-face.bottom { transform: translateY(90px) rotateX(-90deg); }

        .view-toggles {
          display: flex;
          gap: 12px;
          justify-content: center;
          padding: 16px;
          background: white;
          border-radius: 12px;
        }

        .toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #f8fafc;
          border: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          color: #64748b;
          cursor: pointer;
        }

        .toggle-btn.active {
          background: #0f172a;
          color: white;
        }

        .toggle-btn.ar-primary {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          color: white;
        }

        .detail-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .detail-badges {
          display: flex;
          gap: 10px;
        }

        .badge {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .badge.ar-badge {
          background: linear-gradient(135deg, #fdf2f8, #faf5ff);
          color: #8b5cf6;
        }

        .badge.stock-badge {
          background: #dcfce7;
          color: #16a34a;
        }

        .detail-info h1 {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
        }

        .detail-rating {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .rating-value {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
        }

        .review-count {
          font-size: 13px;
          color: #64748b;
        }

        .detail-price {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .detail-price .current {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
        }

        .detail-price .original {
          font-size: 18px;
          color: #94a3b8;
          text-decoration: line-through;
        }

        .detail-price .savings {
          padding: 4px 10px;
          background: #dcfce7;
          color: #16a34a;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .detail-description {
          font-size: 14px;
          line-height: 1.7;
          color: #64748b;
        }

        .ar-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
          background: linear-gradient(135deg, #fdf2f8, #faf5ff);
          border-radius: 12px;
        }

        .ar-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .ar-feature svg {
          color: #8b5cf6;
          flex-shrink: 0;
        }

        .ar-feature strong {
          display: block;
          font-size: 13px;
          color: #0f172a;
        }

        .ar-feature span {
          font-size: 12px;
          color: #64748b;
        }

        .color-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .color-options > span {
          font-size: 13px;
          color: #475569;
        }

        .colors {
          display: flex;
          gap: 10px;
        }

        .color {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          border: 3px solid transparent;
        }

        .color.active {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 2px white, 0 0 0 4px #8b5cf6;
        }

        .detail-actions {
          display: flex;
          gap: 12px;
        }

        .btn-ar {
          flex: 1;
          padding: 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }

        .btn-ar.primary {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          color: white;
          border: none;
        }

        .btn-ar.secondary {
          background: #0f172a;
          color: white;
          border: none;
        }

        @media (max-width: 768px) {
          .detail-view {
            padding: 20px;
          }

          .breadcrumb {
            font-size: 11px;
            margin-bottom: 16px;
          }

          .detail-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .product-mesh-large {
            width: 120px;
            height: 120px;
          }

          .mesh-face {
            width: 120px;
            height: 120px;
          }

          .mesh-face.front { transform: translateZ(60px); }
          .mesh-face.back { transform: translateZ(-60px) rotateY(180deg); }
          .mesh-face.left { transform: translateX(-60px) rotateY(-90deg); }
          .mesh-face.right { transform: translateX(60px) rotateY(90deg); }
          .mesh-face.top { transform: translateY(-60px) rotateX(90deg); }
          .mesh-face.bottom { transform: translateY(60px) rotateX(-90deg); }

          .detail-info h1 {
            font-size: 22px;
          }

          .detail-price .current {
            font-size: 24px;
          }

          .detail-price .original {
            font-size: 14px;
          }

          .detail-description {
            font-size: 13px;
          }

          .ar-features {
            flex-direction: column;
            gap: 12px;
          }

          .ar-feature {
            padding: 12px;
          }

          .detail-actions {
            flex-direction: column;
          }

          .btn-ar {
            padding: 12px;
            font-size: 13px;
          }

          .view-toggles {
            flex-wrap: wrap;
            gap: 8px;
          }

          .toggle-btn {
            padding: 10px 14px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}

function ARView() {
  return (
    <div className="ar-view">
      <div className="ar-camera-view">
        {/* Simulated camera feed */}
        <div className="camera-feed">
          <div className="room-outline">
            <div className="room-floor" />
            <div className="room-wall back" />
            <div className="room-wall left" />
            <div className="room-window" />
          </div>

          {/* 3D Product Overlay */}
          <div className="ar-product-overlay">
            <div className="placed-product">
              <div className="product-shadow" />
              <div className="product-3d-model">
                <div className="chair-base" />
                <div className="chair-back" />
                <div className="chair-seat" />
              </div>
            </div>
            <div className="ar-measurement">
              <span>Width: 32" • Depth: 34" • Height: 36"</span>
            </div>
          </div>

          {/* AR UI Controls */}
          <div className="ar-ui">
            <div className="ar-top-bar">
              <div className="ar-status-indicator">
                <span className="dot active" />
                <span>AR Active</span>
              </div>
              <div className="ar-timer">00:15</div>
            </div>

            <div className="ar-bottom-controls">
              <div className="control-group">
                <button className="control-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 4v6h-6M1 20v-6h6" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                </button>
                <button className="control-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </button>
                <button className="control-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </button>
              </div>

              <div className="ar-action-buttons">
                <button className="ar-action-btn secondary">Cancel</button>
                <button className="ar-action-btn primary">Confirm Placement</button>
              </div>
            </div>
          </div>

          {/* Scan effect */}
          <div className="scan-line" />
        </div>
      </div>

      {/* Side Panel */}
      <div className="ar-side-panel">
        <div className="panel-header">
          <h3>Product Details</h3>
          <button className="close-btn">×</button>
        </div>
        <div className="panel-content">
          <div className="product-summary">
            <h4>Modern Lounge Chair</h4>
            <p className="price">$599.00</p>
          </div>
          <div className="placement-info">
            <div className="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <span>Drag to reposition</span>
            </div>
            <div className="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              <span>Two-finger pinch to scale</span>
            </div>
          </div>
          <div className="ar-tips">
            <h5>Tips for best results:</h5>
            <ul>
              <li>Move to a well-lit area</li>
              <li>Point at a flat surface</li>
              <li>Keep phone steady</li>
            </ul>
          </div>
        </div>
        <button className="checkout-btn">Add to Cart - $599</button>
      </div>

      <style jsx>{`
        .ar-view {
          display: flex;
          height: 100%;
        }

        .ar-camera-view {
          flex: 1;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .camera-feed {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 100%);
          overflow: hidden;
        }

        .room-outline {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .room-floor {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(180deg, #71717a, #52525b);
          transform: perspective(500px) rotateX(45deg);
          transform-origin: bottom;
        }

        .room-wall {
          position: absolute;
          top: 0;
          width: 100%;
          height: 60%;
        }

        .room-wall.back {
          background: linear-gradient(180deg, #e4e4e7, #d4d4d8);
        }

        .room-wall.left {
          width: 30%;
          background: linear-gradient(90deg, #a1a1aa, #d4d4d8);
        }

        .room-window {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 120px;
          background: linear-gradient(180deg, #93c5fd, #60a5fa);
          border-radius: 8px;
          box-shadow: 0 0 40px rgba(147, 197, 253, 0.5);
        }

        .ar-product-overlay {
          position: absolute;
          bottom: 25%;
          left: 50%;
          transform: translateX(-50%);
        }

        .placed-product {
          position: relative;
          width: 140px;
          height: 140px;
        }

        .product-shadow {
          position: absolute;
          bottom: -10px;
          left: 10%;
          width: 80%;
          height: 20px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          filter: blur(8px);
        }

        .product-3d-model {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .chair-base {
          position: absolute;
          bottom: 0;
          left: 20%;
          width: 60%;
          height: 20px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          border-radius: 4px;
        }

        .chair-seat {
          position: absolute;
          bottom: 20px;
          left: 15%;
          width: 70%;
          height: 50px;
          background: linear-gradient(135deg, #f472b6, #a78bfa);
          border-radius: 8px 8px 0 0;
        }

        .chair-back {
          position: absolute;
          bottom: 70px;
          left: 10%;
          width: 80%;
          height: 50px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          border-radius: 8px 8px 0 0;
        }

        .ar-measurement {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          padding: 6px 12px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 6px;
          font-size: 11px;
        }

        .ar-ui {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .ar-ui > * {
          pointer-events: auto;
        }

        .ar-top-bar {
          position: absolute;
          top: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ar-status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          color: white;
          font-size: 12px;
          font-weight: 500;
        }

        .ar-status-indicator .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #64748b;
        }

        .ar-status-indicator .dot.active {
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }

        .ar-timer {
          padding: 8px 14px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          color: white;
          font-size: 12px;
          font-weight: 500;
        }

        .ar-bottom-controls {
          position: absolute;
          bottom: 20px;
          left: 16px;
          right: 16px;
        }

        .control-group {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .control-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .ar-action-buttons {
          display: flex;
          gap: 12px;
        }

        .ar-action-btn {
          flex: 1;
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .ar-action-btn.secondary {
          background: rgba(255, 255, 255, 0.9);
          color: #0f172a;
          border: none;
        }

        .ar-action-btn.primary {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          color: white;
          border: none;
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
          animation: scan 3s linear infinite;
        }

        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .ar-side-panel {
          width: 320px;
          background: white;
          border-left: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #f1f5f9;
        }

        .panel-header h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
        }

        .close-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          border: none;
          font-size: 20px;
          color: #64748b;
          cursor: pointer;
        }

        .panel-content {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }

        .product-summary {
          margin-bottom: 20px;
        }

        .product-summary h4 {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
        }

        .product-summary .price {
          font-size: 20px;
          font-weight: 700;
          color: #ec4899;
          margin-top: 4px;
        }

        .placement-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #475569;
        }

        .info-item svg {
          color: #8b5cf6;
        }

        .ar-tips {
          padding: 16px;
          background: linear-gradient(135deg, #fdf2f8, #faf5ff);
          border-radius: 12px;
        }

        .ar-tips h5 {
          font-size: 12px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .ar-tips ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ar-tips li {
          font-size: 12px;
          color: #64748b;
          padding-left: 16px;
          position: relative;
          margin-bottom: 6px;
        }

        .ar-tips li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #8b5cf6;
        }

        .checkout-btn {
          padding: 18px 20px;
          background: #0f172a;
          color: white;
          border: none;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .ar-view {
            flex-direction: column;
          }

          .ar-side-panel {
            width: 100%;
            max-height: 40%;
            border-left: none;
            border-top: 1px solid #e2e8f0;
          }

          .panel-header {
            padding: 16px;
          }

          .panel-header h3 {
            font-size: 14px;
          }

          .panel-content {
            padding: 16px;
          }

          .product-summary h4 {
            font-size: 14px;
          }

          .product-summary .price {
            font-size: 18px;
          }

          .placement-info {
            padding: 12px;
            margin-bottom: 16px;
          }

          .info-item {
            font-size: 12px;
          }

          .ar-tips {
            padding: 12px;
          }

          .ar-tips h5 {
            font-size: 11px;
          }

          .ar-tips li {
            font-size: 11px;
          }

          .checkout-btn {
            padding: 14px 16px;
            font-size: 13px;
          }

          .placed-product {
            width: 100px;
            height: 100px;
          }

          .room-window {
            width: 120px;
            height: 80px;
          }

          .ar-measurement {
            font-size: 10px;
          }

          .ar-status-indicator {
            font-size: 11px;
          }

          .ar-timer {
            font-size: 11px;
            padding: 6px 12px;
          }

          .control-btn {
            width: 44px;
            height: 44px;
          }

          .control-btn svg {
            width: 16px;
            height: 16px;
          }

          .ar-action-btn {
            padding: 12px 16px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  )
}

function ProductCard({ product }: { product: { name: string; price: string; category: string; ar: boolean; color: string } }) {
  return (
    <div className="product-card">
      <div className="card-image">
        <div className="ar-badge-small">AR</div>
        <div className="image-placeholder" style={{ background: `linear-gradient(135deg, ${product.color}15, ${product.color}25)` }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: product.color }}>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
        </div>
      </div>
      <div className="card-content">
        <span className="category">{product.category}</span>
        <h3 className="name">{product.name}</h3>
        <div className="card-footer">
          <span className="price">{product.price}</span>
          <button className="view-ar-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            View AR
          </button>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #f0f0f0;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        .card-image {
          position: relative;
          aspect-ratio: 1;
        }

        .ar-badge-small {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 4px 10px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          color: white;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 600;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-content {
          padding: 16px;
        }

        .category {
          font-size: 10px;
          color: #8b5cf6;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .name {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          margin: 8px 0 12px;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
        }

        .view-ar-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: linear-gradient(135deg, #fdf2f8, #faf5ff);
          border: none;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          color: #8b5cf6;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .card-content {
            padding: 12px;
          }

          .name {
            font-size: 13px;
            margin: 6px 0 10px;
          }

          .price {
            font-size: 14px;
          }

          .view-ar-btn {
            padding: 6px 10px;
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  )
}
