import { MockupFrame } from './shared/MockupFrame'

type PulseVariant = 'dashboard' | 'reports' | 'team' | 'receipts'

interface PulseMockupProps {
  variant?: PulseVariant
}

export function PulseMockup({ variant = 'dashboard' }: PulseMockupProps) {
  return (
    <div className="pulse-mockup">
      <MockupFrame url="app.pulse.expense">
        <div className="pulse-app">
          {/* Sidebar */}
          <aside className="pulse-sidebar">
            <div className="sidebar-header">
              <div className="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span>Pulse</span>
              </div>
            </div>
            <nav className="sidebar-nav">
              <NavItem icon="dashboard" label="Dashboard" active={variant === 'dashboard'} />
              <NavItem icon="reports" label="Reports" active={variant === 'reports'} />
              <NavItem icon="team" label="Team" active={variant === 'team'} />
              <NavItem icon="receipts" label="Receipts" active={variant === 'receipts'} />
              <NavItem icon="cards" label="Cards" />
              <NavItem icon="settings" label="Settings" />
            </nav>
            <div className="sidebar-footer">
              <div className="user-card">
                <div className="user-avatar">JD</div>
                <div className="user-info">
                  <span className="user-name">John Doe</span>
                  <span className="user-role">Admin</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="pulse-main">
            {variant === 'dashboard' && <DashboardView />}
            {variant === 'reports' && <ReportsView />}
            {variant === 'team' && <TeamView />}
            {variant === 'receipts' && <ReceiptsView />}
          </main>
        </div>
      </MockupFrame>

      <style jsx>{`
        .pulse-mockup {
          width: 100%;
          height: 100%;
        }

        .pulse-app {
          display: flex;
          height: 100%;
          background: #f8fafc;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          direction: ltr;
        }

        .pulse-sidebar {
          width: 240px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .sidebar-header {
          padding: 20px;
          border-bottom: 1px solid #f1f5f9;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #0f172a;
        }

        .logo svg {
          color: #6366f1;
        }

        .logo span {
          font-size: 18px;
          font-weight: 700;
        }

        .sidebar-nav {
          flex: 1;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid #f1f5f9;
        }

        .user-card {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 13px;
          font-weight: 600;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
        }

        .user-role {
          font-size: 11px;
          color: #64748b;
        }

        .pulse-main {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .pulse-app {
            height: 100%;
          }

          .pulse-main {
            overflow: auto;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .pulse-sidebar {
            width: 60px;
          }

          .logo span,
          .user-info,
          .nav-item span {
            display: none;
          }

          .sidebar-nav {
            padding: 8px;
          }

          .sidebar-header,
          .sidebar-footer {
            padding: 12px;
            justify-content: center;
          }

          .logo,
          .user-card {
            justify-content: center;
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
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
    reports: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18v-6M9 15h6" />
      </svg>
    ),
    team: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    receipts: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M8 13h8M8 17h8M8 9h2" />
      </svg>
    ),
    cards: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
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
          color: #0f172a;
        }
        .nav-item.active {
          background: #eef2ff;
          color: #6366f1;
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
      {/* Header */}
      <header className="view-header">
        <div>
          <h1>Dashboard</h1>
          <p className="subtitle">Welcome back, John. Here's your expense overview.</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v6M8 2v6M3 10h18" />
            </svg>
            January 2025
          </button>
          <button className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Expense
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="stats-grid">
        <StatCard
          title="Total Expenses"
          value="$48,562.00"
          change="+12.5%"
          positive={false}
          icon="expense"
          color="red"
        />
        <StatCard
          title="Pending Reports"
          value="23"
          change="8 awaiting"
          positive
          icon="pending"
          color="yellow"
        />
        <StatCard
          title="Approved This Month"
          value="$12,450.00"
          change="+8.2%"
          positive
          icon="approved"
          color="green"
        />
        <StatCard
          title="Team Members"
          value="47"
          change="+3 this month"
          positive
          icon="team"
          color="blue"
        />
      </div>

      {/* Main Grid */}
      <div className="main-grid">
        {/* Recent Expenses */}
        <div className="card expenses-card">
          <div className="card-header">
            <h3>Recent Expenses</h3>
            <button className="view-link">View All →</button>
          </div>
          <div className="expense-list">
            {[
              { name: 'AWS Services', category: 'Software', amount: '$2,450.00', date: 'Today', user: 'JD', status: 'pending' },
              { name: 'Office Depot', category: 'Supplies', amount: '$385.42', date: 'Today', user: 'SK', status: 'approved' },
              { name: 'Delta Airlines', category: 'Travel', amount: '$1,284.00', date: 'Yesterday', user: 'MR', status: 'approved' },
              { name: 'Salesforce', category: 'Software', amount: '$890.00', date: 'Jan 12', user: 'JD', status: 'pending' },
              { name: 'Uber Business', category: 'Transport', amount: '$156.30', date: 'Jan 11', user: 'AK', status: 'rejected' },
              { name: 'WeWork', category: 'Office', amount: '$3,200.00', date: 'Jan 10', user: 'SK', status: 'approved' },
            ].map((expense, i) => (
              <div key={i} className="expense-item">
                <div className="expense-avatar">{expense.user}</div>
                <div className="expense-details">
                  <span className="expense-name">{expense.name}</span>
                  <span className="expense-meta">{expense.category} · {expense.date}</span>
                </div>
                <div className="expense-right">
                  <span className="expense-amount">{expense.amount}</span>
                  <span className={`status-badge ${expense.status}`}>{expense.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="card category-card">
          <div className="card-header">
            <h3>By Category</h3>
            <select className="period-select">
              <option>This Month</option>
            </select>
          </div>
          <div className="category-list">
            {[
              { name: 'Software & SaaS', amount: '$18,450', percent: 38, color: '#6366f1' },
              { name: 'Travel', amount: '$12,280', percent: 25, color: '#ec4899' },
              { name: 'Office & Supplies', amount: '$8,920', percent: 18, color: '#f59e0b' },
              { name: 'Transport', amount: '$5,140', percent: 11, color: '#22c55e' },
              { name: 'Meals & Entertainment', amount: '$3,772', percent: 8, color: '#8b5cf6' },
            ].map((cat, i) => (
              <div key={i} className="category-item">
                <div className="category-info">
                  <div className="category-dot" style={{ background: cat.color }} />
                  <div>
                    <span className="category-name">{cat.name}</span>
                    <span className="category-amount">{cat.amount}</span>
                  </div>
                </div>
                <div className="category-bar">
                  <div className="category-fill" style={{ width: `${cat.percent}%`, background: cat.color }} />
                </div>
                <span className="category-percent">{cat.percent}%</span>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <button className="quick-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Scan Receipt
            </button>
            <button className="quick-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v6M8 2v6M3 10h18" />
              </svg>
              Schedule Report
            </button>
          </div>
        </div>
      </div>

      {/* Spending Over Time */}
      <div className="card chart-card">
        <div className="card-header">
          <h3>Spending Trend</h3>
          <div className="chart-tabs">
            <button className="chart-tab">6M</button>
            <button className="chart-tab active">YTD</button>
            <button className="chart-tab">1Y</button>
          </div>
        </div>
        <div className="chart-container">
          <svg className="chart" viewBox="0 0 800 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            {[0, 50, 100, 150].map((y) => (
              <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
            ))}
            {/* Area fill */}
            <path d="M0,150 Q100,130 200,100 T400,80 T600,60 T800,40 L800,200 L0,200 Z" fill="url(#chartGradient)" />
            {/* Line */}
            <path d="M0,150 Q100,130 200,100 T400,80 T600,60 T800,40" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
            {/* Data points */}
            {[0, 200, 400, 600, 800].map((x, i) => {
              const y = [150, 100, 80, 60, 40][i]
              return <circle key={x} cx={x} cy={y} r="6" fill="#6366f1" stroke="white" strokeWidth="3" />
            })}
          </svg>
          <div className="chart-labels">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
            <span>Jan</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-view {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          overflow-y: auto;
          flex: 1;
          min-height: 0;
        }

        .view-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .view-header h1 {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .subtitle {
          font-size: 14px;
          color: #64748b;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn-primary, .btn-secondary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: #6366f1;
          color: white;
        }

        .btn-secondary {
          background: white;
          color: #0f172a;
          border: 1px solid #e2e8f0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          min-height: 0;
        }

        .card {
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          border-bottom: 1px solid #f1f5f9;
          flex-shrink: 0;
        }

        .card-header h3 {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
        }

        .view-link {
          font-size: 13px;
          color: #6366f1;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
        }

        .period-select {
          padding: 6px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 12px;
          color: #0f172a;
          background: white;
        }

        .expense-list {
          padding: 8px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
          overflow-y: auto;
          min-height: 0;
        }

        .expense-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          transition: background 0.15s;
        }

        .expense-item:hover {
          background: #f8fafc;
        }

        .expense-avatar {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 11px;
          font-weight: 600;
          flex-shrink: 0;
        }

        .expense-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .expense-name {
          font-size: 13px;
          font-weight: 500;
          color: #0f172a;
        }

        .expense-meta {
          font-size: 11px;
          color: #64748b;
        }

        .expense-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          flex-shrink: 0;
        }

        .expense-amount {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        .status-badge {
          font-size: 10px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 10px;
          text-transform: capitalize;
        }

        .status-badge.pending { background: #fef3c7; color: #92400e; }
        .status-badge.approved { background: #d1fae5; color: #065f46; }
        .status-badge.rejected { background: #fee2e2; color: #991b1b; }

        .category-list {
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
        }

        .category-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .category-info {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 140px;
          flex-shrink: 0;
        }

        .category-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .category-info > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .category-name {
          font-size: 12px;
          font-weight: 500;
          color: #0f172a;
        }

        .category-amount {
          font-size: 11px;
          color: #64748b;
        }

        .category-bar {
          flex: 1;
          height: 8px;
          background: #f1f5f9;
          border-radius: 4px;
          overflow: hidden;
          min-width: 0;
        }

        .category-fill {
          height: 100%;
          border-radius: 4px;
        }

        .category-percent {
          font-size: 12px;
          font-weight: 600;
          color: #0f172a;
          width: 35px;
          text-align: right;
          flex-shrink: 0;
        }

        .quick-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          padding: 0 20px 20px;
        }

        .quick-action {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: #f8fafc;
          border: 1px dashed #e2e8f0;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          cursor: pointer;
          transition: all 0.15s;
        }

        .quick-action:hover {
          background: #eef2ff;
          border-color: #6366f1;
          color: #6366f1;
        }

        .chart-card {
          padding: 0;
          flex: 1;
          min-height: 0;
        }

        .chart-tabs {
          display: flex;
          gap: 4px;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 8px;
        }

        .chart-tab {
          padding: 6px 12px;
          border: none;
          background: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          cursor: pointer;
        }

        .chart-tab.active {
          background: white;
          color: #0f172a;
        }

        .chart-container {
          padding: 20px;
          position: relative;
          flex: 1;
          min-height: 0;
        }

        .chart {
          width: 100%;
          height: 100%;
          min-height: 140px;
        }

        .chart-labels {
          display: flex;
          justify-content: space-between;
          padding: 0 20px 20px;
          font-size: 12px;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .dashboard-view {
            padding: 20px;
            gap: 16px;
          }

          .view-header {
            flex-direction: column;
            gap: 16px;
          }

          .view-header h1 {
            font-size: 22px;
          }

          .header-actions {
            width: 100%;
            flex-wrap: wrap;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .main-grid {
            grid-template-columns: 1fr;
          }

          .card-header {
            padding: 14px 16px;
          }

          .card-header h3 {
            font-size: 14px;
          }

          .quick-actions {
            padding: 0 16px 16px;
          }

          .chart-container {
            padding: 16px;
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

function StatCard({ title, value, change, positive, icon, color }: {
  title: string
  value: string
  change: string
  positive: boolean
  icon: string
  color: 'red' | 'yellow' | 'green' | 'blue'
}) {
  const colors = {
    red: { bg: '#fef2f2', text: '#ef4444' },
    yellow: { bg: '#fef3c7', text: '#f59e0b' },
    green: { bg: '#d1fae5', text: '#22c55e' },
    blue: { bg: '#dbeafe', text: '#3b82f6' },
  }

  const icons: Record<string, React.ReactNode> = {
    expense: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    pending: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    approved: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    team: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  }

  const c = colors[color]

  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ background: c.bg, color: c.text }}>
        {icons[icon]}
      </div>
      <div className="stat-content">
        <span className="stat-title">{title}</span>
        <span className="stat-value">{value}</span>
        <span className={`stat-change ${positive ? 'positive' : 'negative'}`}>
          {positive ? '↑' : '↓'} {change}
        </span>
      </div>

      <style jsx>{`
        .stat-card {
          background: white;
          padding: 18px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          gap: 14px;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-title {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .stat-value {
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
        }

        .stat-change {
          font-size: 12px;
          font-weight: 600;
        }

        .stat-change.positive { color: #22c55e; }
        .stat-change.negative { color: #ef4444; }

        @media (max-width: 768px) {
          .stat-card {
            padding: 14px;
            gap: 12px;
          }

          .stat-icon {
            width: 40px;
            height: 40px;
          }

          .stat-value {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  )
}

function ReportsView() {
  const reports = [
    { id: 'RPT-2853', name: 'AWS Infrastructure - January', submitter: 'John Doe', date: 'Jan 14, 2025', amount: '$3,240.00', status: 'pending' },
    { id: 'RPT-2852', name: 'Sales Conference - Austin', submitter: 'Mike Ross', date: 'Jan 13, 2025', amount: '$5,680.00', status: 'approved' },
    { id: 'RPT-2851', name: 'Office Equipment', submitter: 'Lisa Wang', date: 'Jan 12, 2025', amount: '$1,890.00', status: 'approved' },
    { id: 'RPT-2850', name: 'Client Dinner - SF', submitter: 'Sarah Kim', date: 'Jan 11, 2025', amount: '$456.00', status: 'approved' },
    { id: 'RPT-2849', name: 'Software Subscriptions', submitter: 'Tom Bradley', date: 'Jan 10, 2025', amount: '$2,100.00', status: 'pending' },
    { id: 'RPT-2848', name: 'Flight to Chicago', submitter: 'Amy Chen', date: 'Jan 9, 2025', amount: '$678.00', status: 'approved' },
    { id: 'RPT-2847', name: 'Q4 2024 Expenses', submitter: 'Sarah Kim', date: 'Jan 8, 2025', amount: '$4,520.00', status: 'approved' },
    { id: 'RPT-2846', name: 'Client Travel - NYC', submitter: 'Mike Ross', date: 'Jan 7, 2025', amount: '$2,840.00', status: 'pending' },
    { id: 'RPT-2845', name: 'Software Licenses', submitter: 'John Doe', date: 'Jan 6, 2025', amount: '$1,200.00', status: 'approved' },
    { id: 'RPT-2844', name: 'Team Offsite', submitter: 'Amy Chen', date: 'Jan 5, 2025', amount: '$8,450.00', status: 'rejected' },
    { id: 'RPT-2843', name: 'Office Supplies', submitter: 'Kate Miller', date: 'Jan 4, 2025', amount: '$385.00', status: 'approved' },
    { id: 'RPT-2842', name: 'Holiday Party', submitter: 'Sarah Kim', date: 'Jan 3, 2025', amount: '$3,200.00', status: 'approved' },
  ]

  return (
    <div className="reports-view">
      <header className="view-header">
        <div>
          <h1>Expense Reports</h1>
          <p className="subtitle">Manage and review team expense submissions</p>
        </div>
        <button className="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Create Report
        </button>
      </header>

      {/* Filters */}
      <div className="filters-bar">
        <div className="filter-group">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input placeholder="Search reports..." />
        </div>
        <div className="filter-tabs">
          <button className="filter-tab active">All Reports</button>
          <button className="filter-tab">Pending (23)</button>
          <button className="filter-tab">Approved</button>
          <button className="filter-tab">Rejected</button>
        </div>
        <div className="filter-actions">
          <select className="filter-select">
            <option>Sort: Date (Newest)</option>
          </select>
          <button className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export
          </button>
        </div>
      </div>

      {/* Reports Table */}
      <div className="table-card">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Report Name</th>
              <th>Submitter</th>
              <th>Date Submitted</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td className="report-id">{report.id}</td>
                <td className="report-name">{report.name}</td>
                <td className="report-submitter">
                  <div className="submitter-avatar">{report.submitter.split(' ').map(n => n[0]).join('')}</div>
                  {report.submitter}
                </td>
                <td className="report-date">{report.date}</td>
                <td className="report-amount">{report.amount}</td>
                <td className="report-status">
                  <span className={`status-badge ${report.status}`}>{report.status}</span>
                </td>
                <td className="report-actions">
                  <button className="action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span className="pagination-info">Showing 1-12 of 147 reports</span>
        <div className="pagination-controls">
          <button className="page-btn" disabled>← Previous</button>
          {[1, 2, 3, 4, 5].map((p) => (
            <button key={p} className={`page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
          ))}
          <button className="page-btn">Next →</button>
        </div>
      </div>

      <style jsx>{`
        .reports-view {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow-y: auto;
          flex: 1;
          min-height: 0;
        }

        .view-header h1 {
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .subtitle {
          font-size: 13px;
          color: #64748b;
        }

        .btn-primary, .btn-secondary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-primary {
          background: #6366f1;
          color: white;
          border: none;
        }

        .btn-secondary {
          background: white;
          color: #0f172a;
          border: 1px solid #e2e8f0;
        }

        .filters-bar {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-shrink: 0;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 14px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          flex: 1;
          max-width: 280px;
        }

        .filter-group svg {
          color: #64748b;
        }

        .filter-group input {
          border: none;
          outline: none;
          font-size: 13px;
          flex: 1;
        }

        .filter-tabs {
          display: flex;
          gap: 4px;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 8px;
        }

        .filter-tab {
          padding: 7px 12px;
          border: none;
          background: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          cursor: pointer;
        }

        .filter-tab.active {
          background: white;
          color: #0f172a;
        }

        .filter-actions {
          display: flex;
          gap: 8px;
        }

        .filter-select {
          padding: 9px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 12px;
          color: #0f172a;
          background: white;
        }

        .table-card {
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
        }

        .reports-table {
          width: 100%;
          border-collapse: collapse;
        }

        .reports-table thead {
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .reports-table th {
          padding: 11px 16px;
          text-align: left;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .reports-table tbody tr {
          border-bottom: 1px solid #f1f5f9;
        }

        .reports-table tbody tr:hover {
          background: #f8fafc;
        }

        .reports-table td {
          padding: 11px 16px;
          font-size: 13px;
          color: #0f172a;
        }

        .report-id {
          font-family: monospace;
          font-weight: 600;
          color: #6366f1;
          font-size: 12px;
        }

        .report-name {
          font-weight: 500;
        }

        .report-submitter {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .submitter-avatar {
          width: 24px;
          height: 24px;
          border-radius: 5px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 9px;
          font-weight: 600;
        }

        .report-amount {
          font-weight: 600;
          text-align: right;
        }

        .status-badge {
          font-size: 10px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 10px;
          text-transform: capitalize;
        }

        .status-badge.pending { background: #fef3c7; color: #92400e; }
        .status-badge.approved { background: #d1fae5; color: #065f46; }
        .status-badge.rejected { background: #fee2e2; color: #991b1b; }

        .report-actions {
          text-align: right;
        }

        .action-btn {
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: #f1f5f9;
          border-radius: 6px;
          color: #64748b;
          cursor: pointer;
        }

        .action-btn:hover {
          background: #e2e8f0;
        }

        .pagination {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
        }

        .pagination-info {
          font-size: 12px;
          color: #64748b;
        }

        .pagination-controls {
          display: flex;
          gap: 4px;
        }

        .page-btn {
          padding: 7px 11px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 6px;
          font-size: 12px;
          color: #0f172a;
          cursor: pointer;
        }

        .page-btn:hover:not(:disabled) {
          background: #f1f5f9;
        }

        .page-btn.active {
          background: #6366f1;
          border-color: #6366f1;
          color: white;
        }

        .page-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .reports-view {
            padding: 20px;
          }

          .view-header {
            flex-direction: column;
            gap: 16px;
          }

          .view-header h1 {
            font-size: 22px;
          }

          .filters-row {
            flex-direction: column;
            gap: 12px;
          }

          .search-box {
            width: 100%;
          }

          .filters {
            width: 100%;
            justify-content: flex-start;
          }

          .reports-table-wrapper {
            overflow-x: auto;
          }

          .reports-table {
            min-width: 600px;
          }

          .report-cell {
            padding: 12px 14px;
            font-size: 13px;
          }

          .report-cell:first-child {
            padding-left: 14px;
          }

          .report-cell:last-child {
            padding-right: 14px;
          }
        }
      `}</style>
    </div>
  )
}

function TeamView() {
  const members = [
    { name: 'Sarah Kim', role: 'Finance Lead', email: 'sarah@company.com', reports: 28, amount: '$24,520', avatar: 'SK', status: 'active' },
    { name: 'Mike Ross', role: 'Sales Manager', email: 'mike@company.com', reports: 42, amount: '$38,450', avatar: 'MR', status: 'active' },
    { name: 'Amy Chen', role: 'Engineering', email: 'amy@company.com', reports: 15, amount: '$12,200', avatar: 'AC', status: 'active' },
    { name: 'John Doe', role: 'Product Manager', email: 'john@company.com', reports: 35, amount: '$28,900', avatar: 'JD', status: 'active' },
    { name: 'Lisa Wang', role: 'Marketing', email: 'lisa@company.com', reports: 19, amount: '$15,600', avatar: 'LW', status: 'pending' },
    { name: 'Tom Bradley', role: 'Operations', email: 'tom@company.com', reports: 22, amount: '$18,300', avatar: 'TB', status: 'active' },
    { name: 'Kate Miller', role: 'HR Manager', email: 'kate@company.com', reports: 8, amount: '$4,200', avatar: 'KM', status: 'active' },
    { name: 'David Lee', role: 'Sales Executive', email: 'david@company.com', reports: 31, amount: '$22,100', avatar: 'DL', status: 'inactive' },
  ]

  return (
    <div className="team-view">
      <header className="view-header">
        <div>
          <h1>Team Members</h1>
          <p className="subtitle">Manage expense permissions and team spending</p>
        </div>
        <button className="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Invite Member
        </button>
      </header>

      {/* Team Stats */}
      <div className="team-stats">
        <div className="team-stat">
          <span className="stat-label">Total Members</span>
          <span className="stat-value">47</span>
        </div>
        <div className="team-stat">
          <span className="stat-label">Active Now</span>
          <span className="stat-value">32</span>
        </div>
        <div className="team-stat">
          <span className="stat-label">Pending Invites</span>
          <span className="stat-value">3</span>
        </div>
        <div className="team-stat">
          <span className="stat-label">Departments</span>
          <span className="stat-value">8</span>
        </div>
      </div>

      {/* Members Grid */}
      <div className="members-grid">
        {members.map((member) => (
          <div key={member.email} className="member-card">
            <div className="member-header">
              <div className={`member-avatar ${member.status === 'inactive' ? 'inactive' : ''}`}>
                {member.avatar}
              </div>
              <span className={`member-status ${member.status}`}>{member.status}</span>
            </div>
            <div className="member-info">
              <span className="member-name">{member.name}</span>
              <span className="member-role">{member.role}</span>
            </div>
            <div className="member-email">{member.email}</div>
            <div className="member-stats">
              <div className="member-stat">
                <span className="ms-value">{member.reports}</span>
                <span className="ms-label">Reports</span>
              </div>
              <div className="member-stat">
                <span className="ms-value">{member.amount}</span>
                <span className="ms-label">YTD Total</span>
              </div>
            </div>
            <div className="member-actions">
              <button className="member-action-btn">View Activity</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .team-view {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          overflow-y: auto;
          flex: 1;
          min-height: 0;
        }

        .view-header h1 {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .subtitle {
          font-size: 14px;
          color: #64748b;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          background: #6366f1;
          color: white;
          border: none;
          cursor: pointer;
        }

        .team-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .team-stat {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .team-stat .stat-label {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .team-stat .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .member-card {
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .member-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .member-avatar {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          font-weight: 600;
        }

        .member-avatar.inactive {
          background: #e2e8f0;
          color: #64748b;
        }

        .member-status {
          font-size: 10px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 12px;
          text-transform: capitalize;
        }

        .member-status.active {
          background: #d1fae5;
          color: #065f46;
        }

        .member-status.pending {
          background: #fef3c7;
          color: #92400e;
        }

        .member-status.inactive {
          background: #f1f5f9;
          color: #64748b;
        }

        .member-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .member-name {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
        }

        .member-role {
          font-size: 12px;
          color: #64748b;
        }

        .member-email {
          font-size: 12px;
          color: #6366f1;
        }

        .member-stats {
          display: flex;
          gap: 16px;
          padding-top: 12px;
          border-top: 1px solid #f1f5f9;
        }

        .member-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ms-value {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
        }

        .ms-label {
          font-size: 11px;
          color: #64748b;
        }

        .member-actions {
          padding-top: 4px;
        }

        .member-action-btn {
          width: 100%;
          padding: 8px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #0f172a;
          cursor: pointer;
        }

        .member-action-btn:hover {
          background: #f8fafc;
        }

        @media (max-width: 768px) {
          .team-view {
            padding: 20px;
          }

          .view-header {
            flex-direction: column;
            gap: 16px;
          }

          .view-header h1 {
            font-size: 22px;
          }

          .team-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }

          .members-grid {
            grid-template-columns: 1fr;
          }

          .member-card {
            padding: 16px;
          }

          .member-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .member-info {
            flex: 1;
          }

          .member-stats {
            flex-wrap: wrap;
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .team-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

function ReceiptsView() {
  const receipts = [
    { id: 1, merchant: 'Starbucks', date: 'Jan 14, 2025', amount: '$24.50', category: 'Meals', status: 'scanned' },
    { id: 2, merchant: 'Uber', date: 'Jan 14, 2025', amount: '$42.30', category: 'Transport', status: 'scanned' },
    { id: 3, merchant: 'Amazon Web Services', date: 'Jan 13, 2025', amount: '$2,450.00', category: 'Software', status: 'attached' },
    { id: 4, merchant: 'Delta Airlines', date: 'Jan 12, 2025', amount: '$528.40', category: 'Travel', status: 'scanned' },
    { id: 5, merchant: 'Office Depot', date: 'Jan 11, 2025', amount: '$385.42', category: 'Supplies', status: 'scanned' },
    { id: 6, merchant: 'Hilton Hotels', date: 'Jan 10, 2025', amount: '$456.00', category: 'Travel', status: 'attached' },
  ]

  return (
    <div className="receipts-view">
      <header className="view-header">
        <div>
          <h1>Receipts</h1>
          <p className="subtitle">Upload and manage expense receipts</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload Files
          </button>
          <button className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            Scan Receipt
          </button>
        </div>
      </header>

      {/* Upload Zone */}
      <div className="upload-zone">
        <div className="upload-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>
        <span className="upload-title">Drop receipt files here</span>
        <span className="upload-subtitle">or click to browse • Supports JPG, PNG, PDF</span>
      </div>

      {/* Receipts Grid */}
      <div className="receipts-header">
        <h3>Recent Receipts</h3>
        <span className="receipts-count">247 receipts</span>
      </div>

      <div className="receipts-grid">
        {receipts.map((receipt) => (
          <div key={receipt.id} className="receipt-card">
            <div className="receipt-preview">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6M9 15h6" />
              </svg>
              <span className={`receipt-status ${receipt.status}`}>{receipt.status}</span>
            </div>
            <div className="receipt-details">
              <span className="receipt-merchant">{receipt.merchant}</span>
              <span className="receipt-date">{receipt.date}</span>
              <span className="receipt-amount">{receipt.amount}</span>
            </div>
            <div className="receipt-category">{receipt.category}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .receipts-view {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          overflow-y: auto;
          flex: 1;
          min-height: 0;
        }

        .view-header h1 {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .subtitle {
          font-size: 14px;
          color: #64748b;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn-primary, .btn-secondary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-primary {
          background: #6366f1;
          color: white;
          border: none;
        }

        .btn-secondary {
          background: white;
          color: #0f172a;
          border: 1px solid #e2e8f0;
        }

        .upload-zone {
          background: white;
          border: 2px dashed #cbd5e1;
          border-radius: 12px;
          padding: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .upload-zone:hover {
          border-color: #6366f1;
          background: #eef2ff;
        }

        .upload-icon {
          color: #94a3b8;
        }

        .upload-title {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
        }

        .upload-subtitle {
          font-size: 13px;
          color: #64748b;
        }

        .receipts-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .receipts-header h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
        }

        .receipts-count {
          font-size: 13px;
          color: #64748b;
        }

        .receipts-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .receipt-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .receipt-card:hover {
          border-color: #6366f1;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
        }

        .receipt-preview {
          width: 100%;
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          position: relative;
        }

        .receipt-status {
          position: absolute;
          top: 8px;
          right: 8px;
          font-size: 9px;
          font-weight: 600;
          padding: 3px 6px;
          border-radius: 8px;
          text-transform: capitalize;
        }

        .receipt-status.scanned {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .receipt-status.attached {
          background: #d1fae5;
          color: #065f46;
        }

        .receipt-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .receipt-merchant {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
        }

        .receipt-date {
          font-size: 11px;
          color: #64748b;
        }

        .receipt-amount {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
        }

        .receipt-category {
          font-size: 11px;
          padding: 4px 8px;
          background: #f1f5f9;
          border-radius: 6px;
          color: #64748b;
          text-align: center;
        }

        @media (max-width: 768px) {
          .receipts-view {
            padding: 20px;
          }

          .view-header {
            flex-direction: column;
            gap: 16px;
          }

          .view-header h1 {
            font-size: 22px;
          }

          .receipts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .receipt-card {
            padding: 12px;
          }

          .receipt-thumbnail {
            width: 60px;
            height: 60px;
          }

          .receipt-preview {
            font-size: 18px;
          }

          .receipt-amount {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .receipts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
