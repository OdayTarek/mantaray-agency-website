import { MockupFrame } from './shared/MockupFrame'
import { atlasData } from './shared/types'

type AtlasVariant = 'dashboard' | 'contacts' | 'pipeline' | 'reports'

interface AtlasMockupProps {
  variant?: AtlasVariant
}

export function AtlasMockup({ variant = 'dashboard' }: AtlasMockupProps) {
  return (
    <div className="atlas-mockup">
      <MockupFrame url="atlas.crm">
        <div className="atlas-app">
          {/* Sidebar */}
          <div className="atlas-sidebar">
            <div className="sidebar-logo">
              <div className="logo-icon">A</div>
            </div>
            <nav className="sidebar-nav">
              <NavItem icon="dashboard" label="Dashboard" active={variant === 'dashboard'} />
              <NavItem icon="contacts" label="Contacts" active={variant === 'contacts'} />
              <NavItem icon="pipeline" label="Pipeline" active={variant === 'pipeline'} />
              <NavItem icon="reports" label="Reports" active={variant === 'reports'} />
              <NavItem icon="tasks" label="Tasks" />
              <NavItem icon="settings" label="Settings" />
            </nav>
          </div>

          {/* Main Content */}
          <div className="atlas-main">
            {variant === 'dashboard' && <DashboardView />}
            {variant === 'contacts' && <ContactsView />}
            {variant === 'pipeline' && <PipelineView />}
            {variant === 'reports' && <ReportsView />}
          </div>
        </div>
      </MockupFrame>

      <style jsx>{`
        .atlas-mockup {
          width: 100%;
          height: 100%;
        }

        .atlas-app {
          display: flex;
          height: 100%;
          background: #f8fafc;
          direction: ltr;
        }

        .atlas-sidebar {
          width: 220px;
          background: white;
          border-right: 1px solid #e2e8f0;
          padding: 16px 0;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .sidebar-logo {
          padding: 0 16px 20px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 16px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0 12px;
        }

        .atlas-main {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .atlas-app {
            height: 100%;
          }

          .atlas-main {
            overflow: auto;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .atlas-sidebar {
            width: 56px;
          }

          .sidebar-logo {
            padding: 0 8px 12px;
            justify-content: center;
          }

          .logo-icon {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }

          .sidebar-nav {
            padding: 0 8px;
          }

          .nav-item span {
            display: none;
          }

          .nav-item {
            padding: 10px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}

function NavItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  const icons: Record<string, React.ReactNode> = {
    dashboard: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    contacts: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    pipeline: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    reports: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    tasks: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    settings: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  }

  return (
    <div className={`nav-item ${active ? 'active' : ''}`}>
      {icons[icon]}
      <span>{label}</span>
      <style jsx>{`
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          color: #64748b;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .nav-item:hover {
          background: #f1f5f9;
        }
        .nav-item.active {
          background: linear-gradient(135deg, #3b82f615, #8b5cf615);
          color: #3b82f6;
        }

        @media (max-width: 768px) {
          .nav-item {
            padding: 10px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}

function DashboardView() {
  return (
    <div className="dashboard-view">
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-left">
          <h1>Dashboard</h1>
          <span className="date">Tuesday, January 14</span>
        </div>
        <div className="topbar-right">
          <div className="search-box">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <span>Search...</span>
          </div>
          <div className="ai-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 10 10" />
            </svg>
            AI Insights
          </div>
          <div className="user-avatar">JD</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {atlasData.stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className={`stat-icon ${stat.trend}`} />
            <div className="stat-content">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
            {stat.change && (
              <span className={`stat-change ${stat.trend}`}>{stat.change}</span>
            )}
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {/* Recent Contacts */}
        <div className="card">
          <div className="card-header">
            <h3>Recent Contacts</h3>
            <button className="view-all">View All</button>
          </div>
          <div className="contacts-list">
            {atlasData.contacts.slice(0, 4).map((contact) => (
              <div key={contact.id} className="contact-row">
                <div className="contact-avatar">{contact.name.split(' ').map(n => n[0]).join('')}</div>
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-company">{contact.company}</span>
                </div>
                <span className={`status-badge ${contact.status}`}>
                  {contact.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Deals */}
        <div className="card">
          <div className="card-header">
            <h3>Active Deals</h3>
            <button className="add-btn">+ Add Deal</button>
          </div>
          <div className="deals-list">
            {atlasData.deals.slice(0, 3).map((deal) => (
              <div key={deal.id} className="deal-row">
                <div className="deal-info">
                  <span className="deal-name">{deal.name}</span>
                  <span className="deal-contact">{deal.contact}</span>
                </div>
                <div className="deal-right">
                  <span className="deal-value">{deal.value}</span>
                  <div className="deal-prob">
                    <div className="prob-bar">
                      <div className="prob-fill" style={{ width: `${deal.probability}%` }} />
                    </div>
                    <span>{deal.probability}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-view {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topbar-left h1 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .date {
          font-size: 13px;
          color: #64748b;
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #94a3b8;
          font-size: 13px;
        }

        .ai-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: linear-gradient(135deg, #3b82f615, #8b5cf615);
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #3b82f6;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: 600;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: white;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .stat-icon.up { background: #dcfce7; }
        .stat-icon.down { background: #fef3c7; }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          display: block;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
        }

        .stat-label {
          font-size: 12px;
          color: #64748b;
        }

        .stat-change {
          font-size: 12px;
          font-weight: 600;
        }

        .stat-change.up { color: #22c55e; }
        .stat-change.down { color: #f59e0b; }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .card {
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }

        .card-header h3 {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
        }

        .view-all {
          padding: 6px 12px;
          background: #f8fafc;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          color: #64748b;
          cursor: pointer;
        }

        .add-btn {
          padding: 6px 12px;
          background: #3b82f6;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          color: white;
          cursor: pointer;
        }

        .contacts-list {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: #f8fafc;
          border-radius: 8px;
        }

        .contact-avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: 600;
        }

        .contact-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .contact-name {
          font-size: 13px;
          font-weight: 500;
          color: #0f172a;
        }

        .contact-company {
          font-size: 11px;
          color: #64748b;
        }

        .status-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 600;
          text-transform: capitalize;
        }

        .status-badge.active {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.lead {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-badge.inactive {
          background: #f1f5f9;
          color: #64748b;
        }

        .deals-list {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .deal-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f8fafc;
          border-radius: 8px;
        }

        .deal-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .deal-name {
          font-size: 13px;
          font-weight: 500;
          color: #0f172a;
        }

        .deal-contact {
          font-size: 11px;
          color: #64748b;
        }

        .deal-right {
          text-align: right;
        }

        .deal-value {
          font-size: 14px;
          font-weight: 700;
          color: #22c55e;
          display: block;
        }

        .deal-prob {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
        }

        .prob-bar {
          width: 60px;
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          overflow: hidden;
        }

        .prob-fill {
          height: 100%;
          background: #3b82f6;
          border-radius: 2px;
        }

        .deal-prob span {
          font-size: 11px;
          color: #64748b;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .dashboard-view {
            padding: 16px;
            gap: 16px;
          }

          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .topbar-left h1 {
            font-size: 18px;
          }

          .topbar-right {
            width: 100%;
            justify-content: space-between;
          }

          .search-box {
            flex: 1;
            min-width: 0;
          }

          .search-box span {
            display: none;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .stat-card {
            padding: 12px;
          }

          .stat-icon {
            width: 36px;
            height: 36px;
          }

          .stat-value {
            font-size: 18px;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }

          .card-header {
            padding: 12px;
          }

          .deal-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .deal-right {
            text-align: left;
            width: 100%;
          }

          .deal-prob {
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

function ContactsView() {
  return (
    <div className="contacts-view">
      <div className="topbar">
        <h1>Contacts</h1>
        <div className="topbar-actions">
          <button className="filter-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filter
          </button>
          <button className="add-btn">+ Add Contact</button>
        </div>
      </div>

      <div className="search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <span>Search contacts...</span>
      </div>

      <div className="contacts-table">
        <div className="table-header">
          <span className="col-name">Name</span>
          <span className="col-company">Company</span>
          <span className="col-email">Email</span>
          <span className="col-status">Status</span>
          <span className="col-last">Last Contact</span>
        </div>
        {atlasData.contacts.map((contact) => (
          <div key={contact.id} className="table-row">
            <div className="col-name">
              <div className="contact-avatar">{contact.name.split(' ').map(n => n[0]).join('')}</div>
              <span>{contact.name}</span>
            </div>
            <span className="col-company">{contact.company}</span>
            <span className="col-email">{contact.email}</span>
            <span className={`col-status status-${contact.status}`}>{contact.status}</span>
            <span className="col-last">{contact.lastContact}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .contacts-view {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topbar h1 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .topbar-actions {
          display: flex;
          gap: 8px;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 13px;
          color: #64748b;
          cursor: pointer;
        }

        .add-btn {
          padding: 8px 16px;
          background: #3b82f6;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: white;
          cursor: pointer;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          color: #94a3b8;
          font-size: 14px;
        }

        .contacts-table {
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1.5fr 2fr 1fr 1fr;
          padding: 14px 20px;
          background: #f8fafc;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1.5fr 2fr 1fr 1fr;
          padding: 14px 20px;
          border-top: 1px solid #f1f5f9;
          align-items: center;
        }

        .col-name {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          font-weight: 500;
          color: #0f172a;
        }

        .contact-avatar {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 10px;
          font-weight: 600;
        }

        .col-company, .col-email, .col-last {
          font-size: 13px;
          color: #64748b;
        }

        .col-status {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          text-transform: capitalize;
          width: fit-content;
        }

        .status-active {
          background: #dcfce7;
          color: #166534;
        }

        .status-lead {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-inactive {
          background: #f1f5f9;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .contacts-view {
            padding: 16px;
            gap: 16px;
          }

          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .topbar h1 {
            font-size: 18px;
          }

          .topbar-actions {
            width: 100%;
            justify-content: space-between;
          }

          .search-bar {
            padding: 10px 12px;
            font-size: 13px;
          }

          .search-bar span {
            display: none;
          }

          .contacts-table {
            overflow-x: auto;
          }

          .table-header,
          .table-row {
            min-width: 500px;
          }

          .table-header {
            padding: 12px 16px;
          }

          .table-row {
            padding: 12px 16px;
          }
        }
      `}</style>
    </div>
  )
}

function PipelineView() {
  const stages = ['lead', 'qualified', 'proposal', 'negotiation', 'closed'] as const
  const stageLabels: Record<string, string> = {
    lead: 'Lead',
    qualified: 'Qualified',
    proposal: 'Proposal',
    negotiation: 'Negotiation',
    closed: 'Closed Won'
  }

  const dealsByStage = stages.reduce((acc, stage) => {
    acc[stage] = atlasData.deals.filter(d => d.stage === stage)
    return acc
  }, {} as Record<string, typeof atlasData.deals>)

  return (
    <div className="pipeline-view">
      <div className="topbar">
        <h1>Deal Pipeline</h1>
        <div className="topbar-actions">
          <span className="total-value">Total: $150,500</span>
          <button className="add-btn">+ Add Deal</button>
        </div>
      </div>

      <div className="pipeline-board">
        {stages.map((stage) => (
          <div key={stage} className="pipeline-column">
            <div className="column-header">
              <span className="stage-name">{stageLabels[stage]}</span>
              <span className="stage-count">{dealsByStage[stage].length}</span>
            </div>
            <div className="column-deals">
              {dealsByStage[stage].map((deal) => (
                <div key={deal.id} className="deal-card">
                  <div className="deal-header">
                    <span className="deal-value">{deal.value}</span>
                    <span className="deal-prob">{deal.probability}%</span>
                  </div>
                  <span className="deal-name">{deal.name}</span>
                  <span className="deal-contact">{deal.contact}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pipeline-view {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100%;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topbar h1 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .topbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .total-value {
          font-size: 14px;
          font-weight: 600;
          color: #22c55e;
        }

        .add-btn {
          padding: 8px 16px;
          background: #3b82f6;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: white;
          cursor: pointer;
        }

        .pipeline-board {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          flex: 1;
        }

        .pipeline-column {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px;
          display: flex;
          flex-direction: column;
        }

        .column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }

        .stage-name {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
        }

        .stage-count {
          width: 20px;
          height: 20px;
          background: #3b82f6;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 600;
        }

        .column-deals {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .deal-card {
          background: white;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .deal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .deal-value {
          font-size: 14px;
          font-weight: 700;
          color: #22c55e;
        }

        .deal-prob {
          font-size: 11px;
          color: #64748b;
          background: #f1f5f9;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .deal-name {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .deal-contact {
          font-size: 11px;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .pipeline-view {
            padding: 16px;
            gap: 16px;
          }

          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .topbar h1 {
            font-size: 18px;
          }

          .topbar-actions {
            width: 100%;
            justify-content: space-between;
          }

          .pipeline-board {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .pipeline-column {
            padding: 10px;
          }

          .column-header {
            padding-bottom: 10px;
            margin-bottom: 10px;
          }
        }

        @media (max-width: 480px) {
          .pipeline-board {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

function ReportsView() {
  const monthlyData = [
    { month: 'Jul', deals: 12, value: 45000 },
    { month: 'Aug', deals: 18, value: 62000 },
    { month: 'Sep', deals: 15, value: 54000 },
    { month: 'Oct', deals: 22, value: 78000 },
    { month: 'Nov', deals: 19, value: 68000 },
    { month: 'Dec', deals: 25, value: 92000 },
  ]

  return (
    <div className="reports-view">
      <div className="topbar">
        <h1>Reports</h1>
        <div className="period-select">
          <span className="active">6 Months</span>
          <span>1 Year</span>
          <span>All Time</span>
        </div>
      </div>

      <div className="reports-grid">
        {/* Revenue Chart */}
        <div className="chart-card wide">
          <div className="card-header">
            <h3>Revenue Overview</h3>
            <div className="legend">
              <span className="legend-item"><span className="dot deals" />Deals Closed</span>
              <span className="legend-item"><span className="dot value" />Revenue</span>
            </div>
          </div>
          <div className="bar-chart">
            {monthlyData.map((d) => (
              <div key={d.month} className="bar-group">
                <div className="bars">
                  <div className="bar deals" style={{ height: `${(d.deals / 30) * 100}%` }} />
                  <div className="bar value" style={{ height: `${(d.value / 100000) * 100}%` }} />
                </div>
                <span className="bar-label">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Stats */}
        <div className="chart-card">
          <div className="card-header">
            <h3>Conversion Funnel</h3>
          </div>
          <div className="funnel">
            {[
              { stage: 'Leads', count: 847, percent: 100 },
              { stage: 'Qualified', count: 423, percent: 50 },
              { stage: 'Proposal', count: 211, percent: 25 },
              { stage: 'Closed', count: 84, percent: 10 },
            ].map((item) => (
              <div key={item.stage} className="funnel-row">
                <span className="funnel-label">{item.stage}</span>
                <div className="funnel-bar">
                  <div className="funnel-fill" style={{ width: `${item.percent}%` }} />
                </div>
                <span className="funnel-count">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="chart-card">
          <div className="card-header">
            <h3>Top Performers</h3>
          </div>
          <div className="performers-list">
            {[
              { name: 'Sarah Chen', deals: 24, revenue: '$128,000' },
              { name: 'Michael Rodriguez', deals: 18, revenue: '$96,500' },
              { name: 'Emma Thompson', deals: 15, revenue: '$82,000' },
            ].map((p, i) => (
              <div key={p.name} className="performer-row">
                <span className="rank">#{i + 1}</span>
                <div className="performer-avatar">{p.name.split(' ').map(n => n[0]).join('')}</div>
                <div className="performer-info">
                  <span className="performer-name">{p.name}</span>
                  <span className="performer-deals">{p.deals} deals</span>
                </div>
                <span className="performer-revenue">{p.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .reports-view {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topbar h1 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .period-select {
          display: flex;
          gap: 4px;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 8px;
        }

        .period-select span {
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          border-radius: 6px;
          cursor: pointer;
        }

        .period-select span.active {
          background: white;
          color: #0f172a;
        }

        .reports-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .chart-card {
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 20px;
        }

        .chart-card.wide {
          grid-column: 1;
          grid-row: 1 / 3;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-header h3 {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
        }

        .legend {
          display: flex;
          gap: 16px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #64748b;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.deals { background: #3b82f6; }
        .dot.value { background: #22c55e; }

        .bar-chart {
          display: flex;
          justify-content: space-between;
          height: 200px;
          align-items: flex-end;
          padding-top: 20px;
        }

        .bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        .bars {
          display: flex;
          gap: 4px;
          height: 180px;
          align-items: flex-end;
        }

        .bar {
          width: 20px;
          border-radius: 4px 4px 0 0;
        }

        .bar.deals { background: #3b82f6; }
        .bar.value { background: #22c55e; }

        .bar-label {
          font-size: 11px;
          color: #64748b;
        }

        .funnel {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .funnel-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .funnel-label {
          width: 70px;
          font-size: 12px;
          color: #64748b;
        }

        .funnel-bar {
          flex: 1;
          height: 24px;
          background: #f1f5f9;
          border-radius: 4px;
          overflow: hidden;
        }

        .funnel-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        .funnel-count {
          width: 40px;
          text-align: right;
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
        }

        .performers-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .performer-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 8px;
        }

        .rank {
          font-size: 12px;
          font-weight: 700;
          color: #3b82f6;
        }

        .performer-avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 11px;
          font-weight: 600;
        }

        .performer-info {
          flex: 1;
        }

        .performer-name {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #0f172a;
        }

        .performer-deals {
          font-size: 11px;
          color: #64748b;
        }

        .performer-revenue {
          font-size: 14px;
          font-weight: 700;
          color: #22c55e;
        }

        @media (max-width: 900px) {
          .reports-grid {
            grid-template-columns: 1fr;
          }
          .chart-card.wide {
            grid-row: auto;
          }
        }

        @media (max-width: 768px) {
          .reports-view {
            padding: 16px;
            gap: 16px;
          }

          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .topbar h1 {
            font-size: 18px;
          }

          .period-select {
            width: 100%;
          }

          .period-select span {
            flex: 1;
            text-align: center;
            padding: 8px 10px;
          }

          .reports-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .chart-card {
            padding: 16px;
          }

          .bar-chart {
            height: 160px;
          }

          .bars {
            height: 140px;
          }

          .bar {
            width: 16px;
          }

          .funnel-label {
            width: 55px;
            font-size: 11px;
          }

          .funnel-bar {
            height: 20px;
          }
        }
      `}</style>
    </div>
  )
}
