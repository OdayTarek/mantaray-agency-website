// Mobile device frame for app mockups

interface MockupPhoneProps {
  time?: string
  children: React.ReactNode
  className?: string
}

export function MockupPhone({ time = '9:41', children, className = '' }: MockupPhoneProps) {
  return (
    <div className={`mockup-phone ${className}`}>
      <div className="phone-frame">
        <div className="phone-notch">
          <div className="notch-shape" />
        </div>
        <div className="phone-status">
          <span className="status-time">{time}</span>
          <div className="status-icons">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" opacity="0.3"/>
              <path d="M1 9l2 2c2.88-2.88 6.79-4 10.5-3.54l1.67-1.67C10.32 4.81 5.18 6.12 1 9z"/>
              <path d="M5 13l2 2c1.88-1.88 4.38-2.54 6.67-2.01l1.67-1.67c-3.1-.9-6.54-.12-8.34 1.68z"/>
              <path d="M9 17l3 3 3-3c-1.65-1.65-4.35-1.65-6 0z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="7" width="20" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="4" y="9" width="14" height="6" rx="1" fill="currentColor"/>
              <rect x="22" y="10" width="2" height="4" rx="0.5" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <div className="phone-content">
          {children}
        </div>
        <div className="phone-home-indicator" />
      </div>

      <style jsx>{`
        .mockup-phone {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .phone-frame {
          width: 100%;
          max-width: 280px;
          height: 100%;
          background: #0f172a;
          border-radius: 32px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .phone-notch {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .notch-shape {
          width: 80px;
          height: 24px;
          background: #0f172a;
          border-radius: 0 0 16px 16px;
        }

        .phone-status {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px 8px;
          background: white;
          border-radius: 24px 24px 0 0;
        }

        .status-time {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        .status-icons {
          display: flex;
          gap: 4px;
          color: #0f172a;
        }

        .phone-content {
          flex: 1;
          background: white;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .phone-home-indicator {
          height: 28px;
          background: white;
          border-radius: 0 0 24px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .phone-home-indicator::after {
          content: '';
          width: 100px;
          height: 4px;
          background: #0f172a;
          border-radius: 2px;
        }
      `}</style>
    </div>
  )
}
