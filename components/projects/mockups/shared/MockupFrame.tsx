// Browser chrome wrapper for desktop mockups

interface MockupFrameProps {
  url?: string
  children: React.ReactNode
  className?: string
}

export function MockupFrame({ url = 'app.example', children, className = '' }: MockupFrameProps) {
  return (
    <div className={`mockup-frame ${className}`}>
      <div className="mockup-browser">
        <div className="browser-header">
          <div className="browser-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="browser-url">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>{url}</span>
          </div>
          <div className="browser-actions">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </div>
        </div>
        <div className="browser-content">
          {children}
        </div>
      </div>

      <style jsx>{`
        .mockup-frame {
          width: 100%;
          height: 100%;
        }

        .mockup-browser {
          width: 100%;
          height: 100%;
          background: #f8fafc;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .browser-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
        }

        .browser-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot.red { background: #ef4444; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #22c55e; }

        .browser-url {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #f1f5f9;
          border-radius: 6px;
          max-width: 200px;
          font-size: 11px;
          color: #475569;
        }

        .browser-url svg {
          flex-shrink: 0;
          color: #16a34a;
        }

        .browser-url span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .browser-actions {
          color: #64748b;
        }

        .browser-content {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}
