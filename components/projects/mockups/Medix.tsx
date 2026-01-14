import { MockupFrame } from './shared/MockupFrame'
import { medixData } from './shared/types'

type MedixVariant = 'dashboard' | 'booking' | 'consultation' | 'records'

interface MedixMockupProps {
  variant?: MedixVariant
}

export function MedixMockup({ variant = 'dashboard' }: MedixMockupProps) {
  return (
    <div className="medix-mockup">
      <MockupFrame url="medix.health">
        <div className="medix-app">
          {/* Sidebar */}
          <aside className="medix-sidebar">
            <div className="sidebar-logo">
              <div className="logo-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="logo-text">Medix</span>
            </div>
            <nav className="sidebar-nav">
              <NavItem icon="home" label="Dashboard" active={variant === 'dashboard'} />
              <NavItem icon="calendar" label="Book" active={variant === 'booking'} />
              <NavItem icon="video" label="Consult" active={variant === 'consultation'} />
              <NavItem icon="records" label="Records" active={variant === 'records'} />
            </nav>
            <div className="sidebar-footer">
              <button className="notification-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span className="notification-dot" />
              </button>
              <div className="avatar">AK</div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="medix-main">
            {variant === 'dashboard' && <DashboardView />}
            {variant === 'booking' && <BookingView />}
            {variant === 'consultation' && <ConsultationView />}
            {variant === 'records' && <RecordsView />}
          </div>
        </div>
      </MockupFrame>

      <style jsx>{`
        .medix-mockup {
          width: 100%;
          height: 100%;
        }

        .medix-app {
          display: flex;
          height: 100%;
          background: #f8fafc;
          direction: ltr;
        }

        .medix-sidebar {
          width: 220px;
          background: white;
          border-right: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px;
          border-bottom: 1px solid #f1f5f9;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .logo-text {
          font-weight: 700;
          font-size: 16px;
          color: #0f172a;
        }

        .sidebar-nav {
          flex: 1;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sidebar-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px;
          border-top: 1px solid #f1f5f9;
        }

        .notification-btn {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f1f5f9;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          cursor: pointer;
        }

        .notification-dot {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
          border: 2px solid white;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #94a3b8, #cbd5e1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 11px;
          font-weight: 600;
        }

        .medix-main {
          flex: 1;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .medix-app {
            height: 100%;
          }

          .medix-main {
            overflow: auto;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .medix-sidebar {
            width: 60px;
          }

          .logo-text,
          .nav-label {
            display: none;
          }

          .sidebar-logo {
            padding: 16px 14px;
            justify-content: center;
          }

          .logo-icon {
            width: 28px;
            height: 28px;
          }

          .sidebar-nav {
            padding: 8px;
          }

          .sidebar-footer {
            padding: 12px;
            justify-content: center;
          }

          .avatar {
            width: 32px;
            height: 32px;
            font-size: 10px;
          }

          .notification-btn {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

function NavItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    calendar: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    video: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    records: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  }

  return (
    <div className={`nav-item ${active ? 'active' : ''}`}>
      <span className="nav-icon">{icons[icon]}</span>
      <span className="nav-label">{label}</span>

      <style jsx>{`
        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .nav-item:hover {
          background: #f1f5f9;
        }

        .nav-item.active {
          background: #f0f9ff;
          color: #0ea5e9;
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-label {
          font-size: 13px;
          font-weight: 500;
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
  const { appointments, vitals, providers } = medixData
  const upcomingAppointment = appointments.find((a) => a.status === 'upcoming')

  return (
    <div className="dashboard-view">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Good morning, Alex</h1>
        <p>How are you feeling today?</p>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <div className="action-card primary">
          <span className="action-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" />
            </svg>
          </span>
          <span className="action-label">Video Visit</span>
        </div>
        <div className="action-card">
          <span className="action-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </span>
          <span className="action-label">Book Appt</span>
        </div>
        <div className="action-card">
          <span className="action-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
              <path d="M10.5 20.5 10.5 3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
              <path d="M4.5 18.5v-7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
              <path d="M16.5 14.5v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1z" />
            </svg>
          </span>
          <span className="action-label">Medications</span>
        </div>
        <div className="action-card">
          <span className="action-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </span>
          <span className="action-label">Test Results</span>
        </div>
      </div>

      {/* Upcoming Appointment */}
      {upcomingAppointment && (
        <div className="section">
          <h2>Upcoming Appointment</h2>
          <div className="appointment-card">
            <div className="appointment-info">
              <div className="provider-avatar" />
              <div className="appointment-details">
                <h3>{upcomingAppointment.provider}</h3>
                <p>{upcomingAppointment.type}</p>
                <span className="date">{upcomingAppointment.date}</span>
              </div>
            </div>
            <div className="appointment-actions">
              <button className="action-btn">Join Call</button>
              <button className="action-btn secondary">Reschedule</button>
            </div>
          </div>
        </div>
      )}

      {/* Vitals */}
      <div className="section">
        <h2>Your Vitals</h2>
        <div className="vitals-grid">
          {vitals.map((vital) => (
            <div key={vital.label} className="vital-card">
              <span className="vital-label">{vital.label}</span>
              <div className="vital-value">
                <span className="value">{vital.value}</span>
                <span className="unit">{vital.unit}</span>
              </div>
              <span className={`vital-status ${vital.status}`}>{vital.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Care Team */}
      <div className="section">
        <h2>Your Care Team</h2>
        <div className="providers-list">
          {providers.slice(0, 2).map((provider) => (
            <div key={provider.id} className="provider-item">
              <div className="provider-avatar small" />
              <div className="provider-info">
                <h4>{provider.name}</h4>
                <span>{provider.specialty}</span>
              </div>
              <div className={`availability ${provider.available ? 'available' : ''}`}>
                {provider.available ? 'Available' : 'Unavailable'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dashboard-view {
          padding: 12px;
        }

        .welcome-section {
          margin-bottom: 14px;
        }

        .welcome-section h1 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .welcome-section p {
          font-size: 13px;
          color: #64748b;
        }

        .quick-actions {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-bottom: 16px;
        }

        .action-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 10px 6px;
          background: white;
          border-radius: 10px;
          border: 1px solid #f1f5f9;
          cursor: pointer;
        }

        .action-card.primary {
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          border: none;
        }

        .action-card.primary .action-label {
          color: white;
        }

        .action-icon {
          font-size: 20px;
        }

        .action-label {
          font-size: 10px;
          font-weight: 500;
          color: #64748b;
          text-align: center;
        }

        .section {
          margin-bottom: 14px;
        }

        .section h2 {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .appointment-card {
          background: white;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
        }

        .appointment-info {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }

        .provider-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          flex-shrink: 0;
        }

        .provider-avatar.small {
          width: 36px;
          height: 36px;
        }

        .appointment-details h3 {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .appointment-details p {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 4px;
        }

        .date {
          font-size: 11px;
          color: #0ea5e9;
          font-weight: 500;
        }

        .appointment-actions {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          background: #0ea5e9;
          border: none;
          color: white;
        }

        .action-btn.secondary {
          background: white;
          border: 1px solid #e2e8f0;
          color: #64748b;
        }

        .vitals-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .vital-card {
          background: white;
          border-radius: 10px;
          padding: 10px;
          border: 1px solid #f1f5f9;
        }

        .vital-label {
          display: block;
          font-size: 10px;
          color: #64748b;
          margin-bottom: 4px;
        }

        .vital-value {
          margin-bottom: 4px;
        }

        .vital-value .value {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
        }

        .vital-value .unit {
          font-size: 11px;
          color: #94a3b8;
          margin-left: 2px;
        }

        .vital-status {
          font-size: 10px;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 10px;
          background: #f0fdf4;
          color: #22c55e;
        }

        .vital-status.warning {
          background: #fef9c3;
          color: #ca8a04;
        }

        .vital-status.alert {
          background: #fef2f2;
          color: #ef4444;
        }

        .providers-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .provider-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: white;
          border-radius: 10px;
          border: 1px solid #f1f5f9;
        }

        .provider-info {
          flex: 1;
        }

        .provider-info h4 {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .provider-info span {
          font-size: 11px;
          color: #64748b;
        }

        .availability {
          font-size: 10px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 10px;
          background: #f1f5f9;
          color: #94a3b8;
        }

        .availability.available {
          background: #f0fdf4;
          color: #22c55e;
        }

        @media (max-width: 768px) {
          .dashboard-view {
            padding: 14px;
          }

          .welcome-section h1 {
            font-size: 18px;
          }

          .quick-actions {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .action-card {
            padding: 12px 10px;
          }

          .section h2 {
            font-size: 13px;
          }

          .appointment-card {
            padding: 14px;
          }

          .appointment-actions {
            flex-direction: column;
          }

          .vitals-grid {
            grid-template-columns: 1fr;
          }

          .vital-card {
            padding: 12px;
          }

          .provider-item {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  )
}

function BookingView() {
  const { providers } = medixData
  const timeSlots = ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:30 PM']
  const dates = [
    { day: 'Mon', date: '20', available: true },
    { day: 'Tue', date: '21', available: true },
    { day: 'Wed', date: '22', available: false },
    { day: 'Thu', date: '23', available: true },
    { day: 'Fri', date: '24', available: true },
  ]

  return (
    <div className="booking-view">
      <div className="booking-header">
        <h1>Book Appointment</h1>
        <p>Select a provider and time slot</p>
      </div>

      {/* Appointment Type */}
      <div className="section">
        <h2>Appointment Type</h2>
        <div className="type-options">
          <div className="type-option active">
            <span className="type-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
              </svg>
            </span>
            <span className="type-label">Video Visit</span>
          </div>
          <div className="type-option">
            <span className="type-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            <span className="type-label">In-Person</span>
          </div>
        </div>
      </div>

      {/* Select Provider */}
      <div className="section">
        <h2>Select Provider</h2>
        <div className="providers-list">
          {providers.map((provider, i) => (
            <div key={provider.id} className={`provider-option ${i === 0 ? 'selected' : ''}`}>
              <div className="provider-avatar" />
              <div className="provider-info">
                <h4>{provider.name}</h4>
                <span>{provider.specialty}</span>
                <div className="rating">★ {provider.rating}</div>
              </div>
              <div className={`select-indicator ${i === 0 ? 'selected' : ''}`}>
                {i === 0 && '✓'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Select Date */}
      <div className="section">
        <h2>Select Date</h2>
        <div className="date-picker">
          {dates.map((d, i) => (
            <div key={i} className={`date-option ${i === 1 ? 'selected' : ''} ${!d.available ? 'unavailable' : ''}`}>
              <span className="day">{d.day}</span>
              <span className="date">{d.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Select Time */}
      <div className="section">
        <h2>Available Times</h2>
        <div className="time-slots">
          {timeSlots.map((slot, i) => (
            <div key={slot} className={`time-slot ${i === 2 ? 'selected' : ''}`}>
              {slot}
            </div>
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      <button className="confirm-btn">Confirm Booking</button>

      <style jsx>{`
        .booking-view {
          padding: 12px;
        }

        .booking-header {
          margin-bottom: 14px;
        }

        .booking-header h1 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .booking-header p {
          font-size: 12px;
          color: #64748b;
        }

        .section {
          margin-bottom: 14px;
        }

        .section h2 {
          font-size: 12px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .type-options {
          display: flex;
          gap: 8px;
        }

        .type-option {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 10px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          cursor: pointer;
        }

        .type-option.active {
          border-color: #0ea5e9;
          background: #f0f9ff;
        }

        .type-icon {
          font-size: 20px;
        }

        .type-label {
          font-size: 12px;
          font-weight: 500;
          color: #475569;
        }

        .type-option.active .type-label {
          color: #0ea5e9;
        }

        .providers-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .provider-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          cursor: pointer;
        }

        .provider-option.selected {
          border-color: #0ea5e9;
          background: #f0f9ff;
        }

        .provider-avatar {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          flex-shrink: 0;
        }

        .provider-info {
          flex: 1;
        }

        .provider-info h4 {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .provider-info span {
          font-size: 11px;
          color: #64748b;
        }

        .rating {
          font-size: 10px;
          color: #f59e0b;
          margin-top: 2px;
        }

        .select-indicator {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .select-indicator.selected {
          background: #0ea5e9;
          border-color: #0ea5e9;
          color: white;
        }

        .date-picker {
          display: flex;
          gap: 6px;
        }

        .date-option {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 8px 6px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          cursor: pointer;
        }

        .date-option.selected {
          background: #0ea5e9;
          border-color: #0ea5e9;
        }

        .date-option.unavailable {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .date-option .day {
          font-size: 10px;
          color: #64748b;
        }

        .date-option.selected .day {
          color: rgba(255, 255, 255, 0.8);
        }

        .date-option .date {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
        }

        .date-option.selected .date {
          color: white;
        }

        .time-slots {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .time-slot {
          padding: 8px 12px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 11px;
          color: #475569;
          cursor: pointer;
        }

        .time-slot.selected {
          background: #0ea5e9;
          border-color: #0ea5e9;
          color: white;
        }

        .confirm-btn {
          width: 100%;
          padding: 12px;
          background: #0ea5e9;
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .booking-view {
            padding: 14px;
          }

          .booking-header h1 {
            font-size: 18px;
          }

          .section h2 {
            font-size: 12px;
          }

          .type-options {
            gap: 8px;
          }

          .type-option {
            padding: 12px;
          }

          .provider-option {
            padding: 10px;
          }

          .date-picker {
            gap: 6px;
          }

          .date-option {
            padding: 10px 6px;
          }

          .date-option .date {
            font-size: 14px;
          }

          .time-slot {
            padding: 8px 12px;
            font-size: 11px;
          }

          .confirm-btn {
            padding: 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  )
}

function ConsultationView() {
  return (
    <div className="consultation-view">
      {/* Video Area */}
      <div className="video-area">
        <div className="remote-video">
          <div className="provider-placeholder">
            <div className="provider-avatar large" />
            <span className="connecting">Connecting...</span>
          </div>
        </div>
        <div className="local-video">
          <span className="you-label">You</span>
        </div>
      </div>

      {/* Call Info */}
      <div className="call-info">
        <div className="provider-details">
          <h2>Dr. James Wilson</h2>
          <span>Follow-up Consultation</span>
        </div>
        <div className="call-timer">00:00</div>
      </div>

      {/* Call Controls */}
      <div className="call-controls">
        <button className="control-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </button>
        <button className="control-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
        </button>
        <button className="control-btn end-call">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>
        <button className="control-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
        <button className="control-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>

      {/* Notes Section */}
      <div className="notes-section">
        <h3>Session Notes</h3>
        <div className="notes-content">
          <p>Tap to add notes during your consultation...</p>
        </div>
      </div>

      <style jsx>{`
        .consultation-view {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #0f172a;
        }

        .video-area {
          flex: 1;
          position: relative;
          min-height: 200px;
        }

        .remote-video {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .provider-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .provider-avatar.large {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
        }

        .connecting {
          font-size: 12px;
          color: #94a3b8;
        }

        .local-video {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 80px;
          height: 110px;
          background: linear-gradient(135deg, #334155 0%, #1e293b 100%);
          border-radius: 10px;
          border: 2px solid #475569;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 6px;
        }

        .you-label {
          font-size: 10px;
          color: white;
          background: rgba(0, 0, 0, 0.5);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .call-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          background: #1e293b;
        }

        .provider-details h2 {
          font-size: 13px;
          font-weight: 600;
          color: white;
          margin-bottom: 2px;
        }

        .provider-details span {
          font-size: 10px;
          color: #94a3b8;
        }

        .call-timer {
          font-size: 13px;
          font-weight: 600;
          color: #22c55e;
          font-family: monospace;
        }

        .call-controls {
          display: flex;
          justify-content: center;
          gap: 14px;
          padding: 12px;
          background: #1e293b;
        }

        .control-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #334155;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .control-btn.end-call {
          background: #ef4444;
        }

        .notes-section {
          padding: 12px;
          background: white;
          border-radius: 12px 12px 0 0;
        }

        .notes-section h3 {
          font-size: 12px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .notes-content {
          padding: 10px;
          background: #f8fafc;
          border-radius: 8px;
          min-height: 50px;
        }

        .notes-content p {
          font-size: 11px;
          color: #94a3b8;
        }

        @media (max-width: 768px) {
          .video-area {
            min-height: 160px;
          }

          .provider-avatar.large {
            width: 56px;
            height: 56px;
          }

          .connecting {
            font-size: 11px;
          }

          .local-video {
            width: 70px;
            height: 100px;
            bottom: 10px;
            right: 10px;
          }

          .you-label {
            font-size: 9px;
          }

          .provider-details h2 {
            font-size: 12px;
          }

          .call-controls {
            gap: 10px;
            padding: 10px;
          }

          .control-btn {
            width: 40px;
            height: 40px;
          }

          .control-btn svg {
            width: 16px;
            height: 16px;
          }

          .notes-section {
            padding: 10px;
          }

          .notes-content {
            min-height: 40px;
          }
        }
      `}</style>
    </div>
  )
}

function RecordsView() {
  const { appointments, vitals } = medixData
  const recordIcons: Record<string, React.ReactNode> = {
    'Lab Results': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18v-6M9 15h6" />
      </svg>
    ),
    'Prescription': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <path d="M10.5 20.5 10.5 3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v17" />
        <path d="M4.5 18.5v-7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7" />
      </svg>
    ),
    'Visit Summary': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    'Imaging Report': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  }
  const records = [
    { type: 'Lab Results', date: 'Jan 10, 2025', status: 'New' },
    { type: 'Prescription', date: 'Jan 8, 2025', status: 'Active' },
    { type: 'Visit Summary', date: 'Jan 5, 2025', status: 'Viewed' },
    { type: 'Imaging Report', date: 'Dec 20, 2024', status: 'Viewed' },
  ]

  return (
    <div className="records-view">
      <div className="records-header">
        <h1>Health Records</h1>
        <button className="search-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-item">
          <span className="stat-value">{appointments.length}</span>
          <span className="stat-label">Visits</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">3</span>
          <span className="stat-label">Medications</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">2</span>
          <span className="stat-label">Allergies</span>
        </div>
      </div>

      {/* Latest Vitals */}
      <div className="section">
        <div className="section-header">
          <h2>Latest Vitals</h2>
          <span className="view-all">View All</span>
        </div>
        <div className="vitals-row">
          {vitals.slice(0, 3).map((vital) => (
            <div key={vital.label} className="vital-chip">
              <span className="vital-name">{vital.label}</span>
              <span className="vital-value">{vital.value} {vital.unit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="section">
        <div className="section-header">
          <h2>Documents</h2>
          <span className="view-all">View All</span>
        </div>
        <div className="documents-list">
          {records.map((record, i) => (
            <div key={i} className="document-item">
              <span className="document-icon">{recordIcons[record.type]}</span>
              <div className="document-info">
                <h4>{record.type}</h4>
                <span>{record.date}</span>
              </div>
              <span className={`document-status ${record.status.toLowerCase()}`}>
                {record.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Medications */}
      <div className="section">
        <div className="section-header">
          <h2>Active Medications</h2>
          <span className="view-all">View All</span>
        </div>
        <div className="medications-list">
          <div className="medication-item">
            <div className="medication-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M10.5 20.5 10.5 3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
                <path d="M4.5 18.5v-7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
              </svg>
            </div>
            <div className="medication-info">
              <h4>Lisinopril 10mg</h4>
              <span>Once daily · Morning</span>
            </div>
            <button className="refill-btn">Refill</button>
          </div>
          <div className="medication-item">
            <div className="medication-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a7 7 0 0 0-7 7c0 3.86 3.14 7 7 7s7-3.14 7-7a7 7 0 0 0-7-7z" />
              </svg>
            </div>
            <div className="medication-info">
              <h4>Vitamin D3 2000IU</h4>
              <span>Once daily · With food</span>
            </div>
            <button className="refill-btn">Refill</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .records-view {
          padding: 12px;
        }

        .records-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .records-header h1 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
        }

        .search-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: white;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
        }

        .quick-stats {
          display: flex;
          justify-content: space-around;
          padding: 12px;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          border-radius: 12px;
          margin-bottom: 14px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: white;
        }

        .stat-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.8);
        }

        .section {
          margin-bottom: 14px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .section-header h2 {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
        }

        .view-all {
          font-size: 12px;
          color: #0ea5e9;
          cursor: pointer;
        }

        .vitals-row {
          display: flex;
          gap: 6px;
          overflow-x: auto;
        }

        .vital-chip {
          display: flex;
          flex-direction: column;
          padding: 8px 10px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .vital-name {
          font-size: 9px;
          color: #64748b;
          margin-bottom: 2px;
        }

        .vital-value {
          font-size: 12px;
          font-weight: 600;
          color: #0f172a;
        }

        .documents-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .document-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: white;
          border: 1px solid #f1f5f9;
          border-radius: 10px;
        }

        .document-icon {
          font-size: 20px;
        }

        .document-info {
          flex: 1;
        }

        .document-info h4 {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .document-info span {
          font-size: 11px;
          color: #64748b;
        }

        .document-status {
          font-size: 10px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 10px;
          background: #f1f5f9;
          color: #64748b;
        }

        .document-status.new {
          background: #fef2f2;
          color: #ef4444;
        }

        .document-status.active {
          background: #f0fdf4;
          color: #22c55e;
        }

        .medications-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .medication-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: white;
          border: 1px solid #f1f5f9;
          border-radius: 10px;
        }

        .medication-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #f0fdf4;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .medication-info {
          flex: 1;
        }

        .medication-info h4 {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .medication-info span {
          font-size: 11px;
          color: #64748b;
        }

        .refill-btn {
          padding: 6px 12px;
          background: #f0f9ff;
          border: 1px solid #0ea5e9;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #0ea5e9;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .records-view {
            padding: 14px;
          }

          .records-header h1 {
            font-size: 18px;
          }

          .quick-stats {
            padding: 14px;
          }

          .stat-value {
            font-size: 18px;
          }

          .section h2 {
            font-size: 13px;
          }

          .view-all {
            font-size: 11px;
          }

          .vital-chip {
            padding: 8px 12px;
          }

          .vital-value {
            font-size: 12px;
          }

          .document-item,
          .medication-item {
            padding: 10px;
          }

          .document-info h4,
          .medication-info h4 {
            font-size: 12px;
          }

          .document-info span,
          .medication-info span {
            font-size: 10px;
          }

          .medication-icon {
            width: 36px;
            height: 36px;
          }

          .refill-btn {
            padding: 5px 10px;
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  )
}
