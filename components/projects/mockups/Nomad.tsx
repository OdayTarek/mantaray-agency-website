import { MockupFrame } from './shared/MockupFrame'
import { nomadData } from './shared/types'

type NomadVariant = 'search' | 'results' | 'detail' | 'booking'

interface NomadMockupProps {
  variant?: NomadVariant
}

export function NomadMockup({ variant = 'search' }: NomadMockupProps) {
  return (
    <div className="nomad-mockup">
      <MockupFrame url="nomad.travel">
        <div className="nomad-app">
          {/* Header */}
          <header className="nomad-header">
            <div className="header-logo">
              <div className="logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="logo-text">Nomad</span>
            </div>
            <nav className="header-nav">
              <span className={variant === 'search' || variant === 'results' ? 'active' : ''}>Explore</span>
              <span className={variant === 'booking' ? 'active' : ''}>Trips</span>
              <span>Wishlists</span>
            </nav>
            <div className="header-actions">
              <div className="avatar">AK</div>
            </div>
          </header>

          {/* Main Content */}
          <div className="nomad-main">
            {variant === 'search' && <SearchView />}
            {variant === 'results' && <ResultsView />}
            {variant === 'detail' && <DetailView />}
            {variant === 'booking' && <BookingView />}
          </div>
        </div>
      </MockupFrame>

      <style jsx>{`
        .nomad-mockup {
          width: 100%;
          height: 100%;
        }

        .nomad-app {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #fafafa;
          direction: ltr;
        }

        .nomad-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: white;
          border-bottom: 1px solid #f0f0f0;
          flex-shrink: 0;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #f43f5e, #fb7185);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .logo-text {
          font-weight: 700;
          font-size: 16px;
          color: #18181b;
        }

        .header-nav {
          display: flex;
          gap: 24px;
          font-size: 13px;
          color: #71717a;
        }

        .header-nav span {
          cursor: pointer;
        }

        .header-nav span.active {
          color: #18181b;
          font-weight: 600;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a1a1aa, #d4d4d8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 10px;
          font-weight: 600;
        }

        .nomad-main {
          flex: 1;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .nomad-app {
            height: 100%;
          }

          .nomad-main {
            overflow: auto;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .nomad-header {
            padding: 10px 16px;
          }

          .logo-text {
            font-size: 14px;
          }

          .header-nav {
            gap: 16px;
            font-size: 12px;
          }

          .header-nav span:not(.active) {
            display: none;
          }

          .avatar {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </div>
  )
}

function SearchView() {
  const { search } = nomadData
  return (
    <div className="search-view">
      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <div className="search-field">
            <label>Location</label>
            <span className="value">{search.location}</span>
          </div>
          <div className="divider" />
          <div className="search-field">
            <label>Check in</label>
            <span className="value">{search.checkIn}</span>
          </div>
          <div className="divider" />
          <div className="search-field">
            <label>Check out</label>
            <span className="value">{search.checkOut}</span>
          </div>
          <div className="divider" />
          <div className="search-field">
            <label>Guests</label>
            <span className="value">{search.guests} guests</span>
          </div>
          <button className="search-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        <div className="category active">
          <span className="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </span>
          <span>All</span>
        </div>
        <div className="category">
          <span className="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 18a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4v14h-4z" />
              <path d="M3 18V4h6l-4 14H3z" />
              <path d="M21 18H3" />
            </svg>
          </span>
          <span>Beach</span>
        </div>
        <div className="category">
          <span className="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
          </span>
          <span>Mountain</span>
        </div>
        <div className="category">
          <span className="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </span>
          <span>City</span>
        </div>
        <div className="category">
          <span className="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 10 10" />
              <path d="M12 12l8-8" />
              <path d="M12 2v10h10" />
            </svg>
          </span>
          <span>Tropical</span>
        </div>
      </div>

      {/* Featured */}
      <div className="featured">
        <h2>Featured Destinations</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <div className="featured-image malibu" />
            <span>California</span>
          </div>
          <div className="featured-card">
            <div className="featured-image aspen" />
            <span>Colorado</span>
          </div>
          <div className="featured-card">
            <div className="featured-image nyc" />
            <span>New York</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .search-view {
          min-height: 100%;
          padding: 20px 0;
        }

        .search-container {
          padding: 0 24px;
        }

        .search-bar {
          background: white;
          border-radius: 48px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          padding: 8px 8px 8px 20px;
        }

        .search-field {
          flex: 1;
          min-width: 0;
        }

        .search-field label {
          display: block;
          font-size: 9px;
          font-weight: 600;
          color: #71717a;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .search-field .value {
          font-size: 12px;
          color: #18181b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        .divider {
          width: 1px;
          height: 28px;
          background: #e4e4e7;
          margin: 0 12px;
          flex-shrink: 0;
        }

        .search-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f43f5e, #fb7185);
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
        }

        .categories {
          display: flex;
          gap: 16px;
          padding: 20px 24px;
          overflow-x: auto;
        }

        .category {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: #71717a;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 12px;
          transition: all 0.2s;
        }

        .category.active {
          background: #fef2f2;
          color: #f43f5e;
        }

        .category .icon {
          font-size: 18px;
        }

        .featured {
          padding: 0 24px 24px;
        }

        .featured h2 {
          font-size: 15px;
          font-weight: 600;
          color: #18181b;
          margin-bottom: 12px;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .featured-card {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .featured-image {
          height: 80px;
          border-radius: 12px;
          background-size: cover;
          background-position: center;
        }

        .featured-image.malibu {
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
        }

        .featured-image.aspen {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }

        .featured-image.nyc {
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
        }

        .featured-card span {
          font-size: 11px;
          font-weight: 500;
          color: #3f3f46;
        }

        @media (max-width: 768px) {
          .search-view {
            padding: 16px 0;
          }

          .search-container {
            padding: 0 16px;
          }

          .search-bar {
            flex-wrap: wrap;
            padding: 12px;
            border-radius: 16px;
          }

          .search-field {
            min-width: calc(50% - 12px);
            margin-bottom: 8px;
          }

          .divider {
            display: none;
          }

          .search-btn {
            width: 100%;
            border-radius: 12px;
            height: 44px;
          }

          .categories {
            padding: 16px;
            gap: 12px;
          }

          .category {
            padding: 6px 10px;
            font-size: 10px;
          }

          .featured {
            padding: 0 16px 20px;
          }

          .featured h2 {
            font-size: 14px;
          }

          .featured-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .featured-image {
            height: 70px;
          }
        }

        @media (max-width: 480px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

function ResultsView() {
  const { listings, search } = nomadData
  return (
    <div className="results-view">
      {/* Results Header */}
      <div className="results-header">
        <div className="results-info">
          <h2>{listings.length}+ stays in {search.location}</h2>
          <p>{search.checkIn} – {search.checkOut} · {search.guests} guests</p>
        </div>
        <div className="results-filters">
          <button className="filter-btn">
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
            Filters
          </button>
          <button className="sort-btn">Price ↓</button>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="listings-grid">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      <style jsx>{`
        .results-view {
          padding: 20px;
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .results-info h2 {
          font-size: 15px;
          font-weight: 600;
          color: #18181b;
          margin-bottom: 4px;
        }

        .results-info p {
          font-size: 12px;
          color: #71717a;
        }

        .results-filters {
          display: flex;
          gap: 8px;
        }

        .filter-btn,
        .sort-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          background: white;
          font-size: 12px;
          color: #3f3f46;
          cursor: pointer;
        }

        .listings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .results-view {
            padding: 16px;
          }

          .results-header {
            flex-direction: column;
            gap: 12px;
          }

          .results-info h2 {
            font-size: 14px;
          }

          .results-info p {
            font-size: 11px;
          }

          .results-filters {
            width: 100%;
            justify-content: space-between;
          }

          .filter-btn,
          .sort-btn {
            padding: 8px 10px;
            font-size: 11px;
          }

          .listings-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  )
}

function ListingCard({ listing }: { listing: typeof nomadData.listings[0] }) {
  return (
    <div className="listing-card">
      <div className="listing-image">
        {listing.badges.length > 0 && (
          <span className="badge">{listing.badges[0]}</span>
        )}
        <button className="wishlist">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className="listing-content">
        <div className="listing-header">
          <span className="location">{listing.location}</span>
          <span className="rating">★ {listing.rating}</span>
        </div>
        <h3 className="title">{listing.title}</h3>
        <div className="amenities">
          {listing.amenities.slice(0, 3).join(' · ')}
        </div>
        <div className="price">
          <span className="amount">{listing.price}</span>
          <span className="unit">/{listing.priceUnit}</span>
        </div>
      </div>

      <style jsx>{`
        .listing-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .listing-image {
          position: relative;
          height: 120px;
          background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
        }

        .badge {
          position: absolute;
          top: 8px;
          left: 8px;
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          color: #18181b;
        }

        .wishlist {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #3f3f46;
        }

        .listing-content {
          padding: 12px;
        }

        .listing-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .location {
          font-size: 11px;
          color: #71717a;
        }

        .rating {
          font-size: 11px;
          color: #18181b;
          font-weight: 500;
        }

        .title {
          font-size: 13px;
          font-weight: 600;
          color: #18181b;
          margin-bottom: 4px;
        }

        .amenities {
          font-size: 10px;
          color: #a1a1aa;
          margin-bottom: 8px;
        }

        .price {
          font-size: 13px;
        }

        .amount {
          font-weight: 600;
          color: #18181b;
        }

        .unit {
          color: #71717a;
        }

        @media (max-width: 768px) {
          .listing-card {
            border-radius: 12px;
          }

          .listing-image {
            height: 140px;
          }

          .listing-content {
            padding: 10px;
          }

          .title {
            font-size: 12px;
          }

          .amenities {
            font-size: 9px;
          }

          .price {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}

function DetailView() {
  const listing = nomadData.listings[0]
  return (
    <div className="detail-view">
      {/* Image Gallery */}
      <div className="gallery">
        <div className="gallery-main" />
        <div className="gallery-grid">
          <div className="gallery-thumb" />
          <div className="gallery-thumb" />
          <div className="gallery-thumb" />
          <div className="gallery-thumb" />
        </div>
      </div>

      {/* Property Info */}
      <div className="property-info">
        <div className="property-header">
          <div>
            <h1>{listing.title}</h1>
            <p className="location">{listing.location}</p>
            <div className="meta">
              <span>★ {listing.rating}</span>
              <span>·</span>
              <span>{listing.reviews} reviews</span>
              <span>·</span>
              {listing.badges.map((badge) => (
                <span key={badge} className="badge">{badge}</span>
              ))}
            </div>
          </div>
          <div className="host">
            <div className="host-avatar" />
            <span>Hosted by Alex</span>
          </div>
        </div>

        <div className="divider" />

        {/* Amenities */}
        <div className="amenities-section">
          <h2>What this place offers</h2>
          <div className="amenities-grid">
            {listing.amenities.map((amenity) => (
              <div key={amenity} className="amenity">
                <span className="amenity-icon">✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Booking Card */}
        <div className="booking-card">
          <div className="booking-price">
            <span className="amount">{listing.price}</span>
            <span className="unit">/{listing.priceUnit}</span>
          </div>
          <div className="booking-dates">
            <div className="date-field">
              <label>CHECK-IN</label>
              <span>{nomadData.search.checkIn}</span>
            </div>
            <div className="date-field">
              <label>CHECK-OUT</label>
              <span>{nomadData.search.checkOut}</span>
            </div>
          </div>
          <button className="reserve-btn">Reserve</button>
          <p className="note">You won&apos;t be charged yet</p>
        </div>
      </div>

      <style jsx>{`
        .detail-view {
          min-height: 100%;
        }

        .gallery {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4px;
          height: 200px;
        }

        .gallery-main {
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          border-radius: 0 0 0 16px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 4px;
        }

        .gallery-thumb {
          background: linear-gradient(135deg, #e0e0e0, #d0d0d0);
        }

        .gallery-thumb:last-child {
          border-radius: 0 0 16px 0;
        }

        .property-info {
          padding: 20px;
        }

        .property-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .property-header h1 {
          font-size: 18px;
          font-weight: 600;
          color: #18181b;
          margin-bottom: 4px;
        }

        .location {
          font-size: 13px;
          color: #71717a;
          margin-bottom: 8px;
        }

        .meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #3f3f46;
        }

        .badge {
          background: #fef2f2;
          color: #f43f5e;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 500;
        }

        .host {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .host-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a1a1aa, #d4d4d8);
        }

        .host span {
          font-size: 11px;
          color: #71717a;
        }

        .divider {
          height: 1px;
          background: #f4f4f5;
          margin: 16px 0;
        }

        .amenities-section h2 {
          font-size: 14px;
          font-weight: 600;
          color: #18181b;
          margin-bottom: 12px;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .amenity {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #3f3f46;
        }

        .amenity-icon {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          background: #f0fdf4;
          color: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .booking-card {
          background: white;
          border: 1px solid #e4e4e7;
          border-radius: 12px;
          padding: 16px;
        }

        .booking-price {
          margin-bottom: 12px;
        }

        .booking-price .amount {
          font-size: 20px;
          font-weight: 600;
          color: #18181b;
        }

        .booking-price .unit {
          font-size: 14px;
          color: #71717a;
        }

        .booking-dates {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: #e4e4e7;
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .date-field {
          background: white;
          padding: 10px;
        }

        .date-field label {
          display: block;
          font-size: 9px;
          font-weight: 600;
          color: #71717a;
          margin-bottom: 2px;
        }

        .date-field span {
          font-size: 12px;
          color: #18181b;
        }

        .reserve-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #f43f5e, #fb7185);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .note {
          text-align: center;
          font-size: 11px;
          color: #71717a;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .gallery {
            height: 160px;
          }

          .gallery-grid {
            display: none;
          }

          .gallery-main {
            border-radius: 0;
          }

          .property-info {
            padding: 16px;
          }

          .property-header {
            flex-direction: column;
            gap: 12px;
          }

          .property-header h1 {
            font-size: 16px;
          }

          .host {
            flex-direction: row;
            justify-content: flex-start;
            gap: 8px;
          }

          .host-avatar {
            width: 40px;
            height: 40px;
          }

          .amenities-grid {
            grid-template-columns: 1fr;
          }

          .booking-card {
            padding: 12px;
          }

          .booking-price .amount {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  )
}

function BookingView() {
  const listing = nomadData.listings[0]
  const { search } = nomadData

  const nights = 5
  const subtotal = 285 * nights
  const serviceFee = Math.round(subtotal * 0.12)
  const total = subtotal + serviceFee

  return (
    <div className="booking-view">
      <div className="booking-header">
        <button className="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1>Confirm and pay</h1>
      </div>

      {/* Trip Details */}
      <div className="section">
        <h2>Your trip</h2>
        <div className="trip-detail">
          <div>
            <strong>Dates</strong>
            <p>{search.checkIn} – {search.checkOut}</p>
          </div>
          <button className="edit-btn">Edit</button>
        </div>
        <div className="trip-detail">
          <div>
            <strong>Guests</strong>
            <p>{search.guests} guests</p>
          </div>
          <button className="edit-btn">Edit</button>
        </div>
      </div>

      <div className="divider" />

      {/* Property Summary */}
      <div className="property-summary">
        <div className="property-image" />
        <div className="property-details">
          <span className="type">Entire villa</span>
          <h3>{listing.title}</h3>
          <p>{listing.location}</p>
          <div className="rating">★ {listing.rating} ({listing.reviews})</div>
        </div>
      </div>

      <div className="divider" />

      {/* Price Breakdown */}
      <div className="section">
        <h2>Price details</h2>
        <div className="price-row">
          <span>{listing.price} × {nights} nights</span>
          <span>${subtotal}</span>
        </div>
        <div className="price-row">
          <span>Service fee</span>
          <span>${serviceFee}</span>
        </div>
        <div className="price-row total">
          <span>Total (USD)</span>
          <span>${total}</span>
        </div>
      </div>

      <div className="divider" />

      {/* Payment Method */}
      <div className="section">
        <h2>Pay with</h2>
        <div className="payment-method">
          <div className="card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>
          <div className="card-details">
            <span className="card-name">•••• •••• •••• 4242</span>
            <span className="card-expiry">Expires 12/26</span>
          </div>
          <span className="check">✓</span>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="confirm-section">
        <button className="confirm-btn">Confirm and pay ${total}</button>
        <p className="terms">By selecting the button, I agree to the Terms, Cancellation Policy, and Guest Refund Policy.</p>
      </div>

      <style jsx>{`
        .booking-view {
          padding: 16px;
        }

        .booking-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .back-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #e4e4e7;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #3f3f46;
        }

        .booking-header h1 {
          font-size: 18px;
          font-weight: 600;
          color: #18181b;
        }

        .section {
          margin-bottom: 16px;
        }

        .section h2 {
          font-size: 14px;
          font-weight: 600;
          color: #18181b;
          margin-bottom: 12px;
        }

        .trip-detail {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .trip-detail strong {
          display: block;
          font-size: 13px;
          color: #18181b;
          margin-bottom: 2px;
        }

        .trip-detail p {
          font-size: 12px;
          color: #71717a;
        }

        .edit-btn {
          background: none;
          border: none;
          font-size: 12px;
          color: #18181b;
          text-decoration: underline;
          cursor: pointer;
        }

        .divider {
          height: 1px;
          background: #f4f4f5;
          margin: 16px 0;
        }

        .property-summary {
          display: flex;
          gap: 12px;
        }

        .property-image {
          width: 100px;
          height: 80px;
          border-radius: 12px;
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          flex-shrink: 0;
        }

        .property-details {
          flex: 1;
          min-width: 0;
        }

        .property-details .type {
          font-size: 10px;
          color: #71717a;
        }

        .property-details h3 {
          font-size: 14px;
          font-weight: 600;
          color: #18181b;
          margin: 4px 0;
        }

        .property-details p {
          font-size: 12px;
          color: #71717a;
          margin-bottom: 4px;
        }

        .rating {
          font-size: 11px;
          color: #3f3f46;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #3f3f46;
          margin-bottom: 8px;
        }

        .price-row.total {
          font-weight: 600;
          color: #18181b;
          padding-top: 8px;
          border-top: 1px solid #f4f4f5;
          margin-top: 8px;
        }

        .payment-method {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #fafafa;
          border-radius: 12px;
        }

        .card-icon {
          width: 40px;
          height: 28px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .card-details {
          flex: 1;
        }

        .card-name {
          display: block;
          font-size: 13px;
          color: #18181b;
          font-weight: 500;
        }

        .card-expiry {
          font-size: 11px;
          color: #71717a;
        }

        .check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #22c55e;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        }

        .confirm-section {
          margin-top: 20px;
        }

        .confirm-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #f43f5e, #fb7185);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .terms {
          font-size: 10px;
          color: #a1a1aa;
          text-align: center;
          margin-top: 12px;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .booking-view {
            padding: 12px;
          }

          .booking-header {
            gap: 8px;
            margin-bottom: 16px;
          }

          .booking-header h1 {
            font-size: 16px;
          }

          .section h2 {
            font-size: 13px;
          }

          .trip-detail {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }

          .edit-btn {
            align-self: flex-end;
          }

          .property-summary {
            flex-direction: column;
          }

          .property-image {
            width: 100%;
            height: 120px;
          }

          .property-details h3 {
            font-size: 13px;
          }

          .confirm-btn {
            padding: 12px;
            font-size: 14px;
          }

          .terms {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  )
}
