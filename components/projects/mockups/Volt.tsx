import { MockupFrame } from './shared/MockupFrame'
import { voltData } from './shared/types'

type VoltVariant = 'home' | 'workout' | 'exercise' | 'progress'

interface VoltMockupProps {
  variant?: VoltVariant
}

export function VoltMockup({ variant = 'home' }: VoltMockupProps) {
  return (
    <div className="volt-mockup">
      <MockupFrame url="volt.fitness">
        <div className="volt-app">
          {/* Sidebar */}
          <aside className="volt-sidebar">
            <div className="sidebar-logo">
              <div className="logo-icon">V</div>
              <span className="logo-text">Volt</span>
            </div>
            <nav className="sidebar-nav">
              <NavItem icon="home" label="Home" active={variant === 'home'} />
              <NavItem icon="workout" label="Workout" active={variant === 'workout' || variant === 'exercise'} />
              <NavItem icon="progress" label="Progress" active={variant === 'progress'} />
              <NavItem icon="profile" label="Profile" />
            </nav>
            <div className="sidebar-footer">
              <div className="user-avatar">A</div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="volt-main">
            {variant === 'home' && <HomeView />}
            {variant === 'workout' && <WorkoutView />}
            {variant === 'exercise' && <ExerciseView />}
            {variant === 'progress' && <ProgressView />}
          </div>
        </div>
      </MockupFrame>

      <style jsx>{`
        .volt-mockup {
          width: 100%;
          height: 100%;
        }

        .volt-app {
          display: flex;
          height: 100%;
          background: #0f0f0f;
          direction: ltr;
        }

        .volt-sidebar {
          width: 220px;
          background: #1a1a1a;
          border-right: 1px solid #262626;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px;
          border-bottom: 1px solid #262626;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
        }

        .logo-text {
          font-size: 16px;
          font-weight: 700;
          color: white;
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
          border-top: 1px solid #262626;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
        }

        .volt-main {
          flex: 1;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .volt-app {
            height: 100%;
          }

          .volt-main {
            overflow: auto;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .volt-sidebar {
            width: 60px;
          }

          .logo-text,
          .nav-label {
            display: none;
          }

          .sidebar-logo {
            padding: 16px 12px;
            justify-content: center;
          }

          .logo-icon {
            width: 28px;
            height: 28px;
            font-size: 14px;
          }

          .sidebar-nav {
            padding: 8px;
          }

          .sidebar-footer {
            padding: 12px;
            display: flex;
            justify-content: center;
          }

          .user-avatar {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}

function NavItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    workout: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6.5 6.5h11v11h-11z" />
        <path d="M3 12h3M18 12h3M12 3v3M12 18v3" />
      </svg>
    ),
    progress: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20V10M6 20v-4M18 20V4" />
      </svg>
    ),
    profile: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
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
          gap: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          color: #737373;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .nav-item:hover {
          background: #262626;
        }

        .nav-item.active {
          background: rgba(34, 197, 94, 0.15);
          color: #22c55e;
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

function HomeView() {
  const { todayWorkout, streak, weeklyProgress } = voltData
  return (
    <div className="home-view">
      {/* Header */}
      <div className="home-header">
        <div className="greeting">
          <span className="label">Good morning</span>
          <h1>Alex</h1>
        </div>
        <div className="streak-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
            <path d="M12 2c1 6-4 8-4 14 0 3.5 2.5 6 4 6s4-2.5 4-6c0-6-5-8-4-14z" />
          </svg>
          <span className="count">{streak}</span>
        </div>
      </div>

      {/* Progress Ring */}
      <div className="progress-section">
        <div className="progress-ring">
          <svg viewBox="0 0 100 100">
            <circle className="bg" cx="50" cy="50" r="42" />
            <circle
              className="progress"
              cx="50"
              cy="50"
              r="42"
              strokeDasharray={`${weeklyProgress * 2.64} 264`}
            />
          </svg>
          <div className="progress-text">
            <span className="value">{weeklyProgress}%</span>
            <span className="label">Weekly Goal</span>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat">
            <span className="value">4</span>
            <span className="label">Workouts</span>
          </div>
          <div className="stat">
            <span className="value">2,840</span>
            <span className="label">Calories</span>
          </div>
          <div className="stat">
            <span className="value">185</span>
            <span className="label">Minutes</span>
          </div>
        </div>
      </div>

      {/* Today's Workout */}
      <div className="today-section">
        <h2>Today&apos;s Workout</h2>
        <div className="workout-card">
          <div className="workout-image">
            <div className="play-btn">▶</div>
          </div>
          <div className="workout-info">
            <h3>{todayWorkout.name}</h3>
            <div className="workout-meta">
              <span>⏱ {todayWorkout.duration}</span>
              <span>·</span>
              <span>{todayWorkout.calories} cal</span>
              <span>·</span>
              <span>{todayWorkout.exercises} exercises</span>
            </div>
            <button className="start-btn">Start Workout</button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <div className="action">
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
          <span className="label">Set Goal</span>
        </div>
        <div className="action">
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
              <path d="M12 20V10M6 20v-4M18 20V4" />
            </svg>
          </span>
          <span className="label">Stats</span>
        </div>
        <div className="action">
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </span>
          <span className="label">Run</span>
        </div>
        <div className="action">
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
              <path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z" />
              <circle cx="12" cy="9" r="2" />
            </svg>
          </span>
          <span className="label">Yoga</span>
        </div>
      </div>

      <style jsx>{`
        .home-view {
          padding: 20px;
        }

        .home-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .greeting .label {
          font-size: 12px;
          color: #737373;
        }

        .greeting h1 {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-top: 2px;
        }

        .streak-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #262626;
          padding: 8px 12px;
          border-radius: 20px;
        }

        .streak-badge .fire {
          font-size: 14px;
        }

        .streak-badge .count {
          font-size: 14px;
          font-weight: 700;
          color: #fbbf24;
        }

        .progress-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #262626 100%);
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .progress-ring {
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 20px;
        }

        .progress-ring svg {
          transform: rotate(-90deg);
        }

        .progress-ring .bg {
          fill: none;
          stroke: #262626;
          stroke-width: 8;
        }

        .progress-ring .progress {
          fill: none;
          stroke: #22c55e;
          stroke-width: 8;
          stroke-linecap: round;
          transition: stroke-dasharray 0.3s;
        }

        .progress-text {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .progress-text .value {
          font-size: 28px;
          font-weight: 700;
          color: white;
        }

        .progress-text .label {
          font-size: 11px;
          color: #737373;
        }

        .stats-row {
          display: flex;
          justify-content: space-around;
        }

        .stat {
          text-align: center;
        }

        .stat .value {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #22c55e;
        }

        .stat .label {
          font-size: 11px;
          color: #22c55e;
        }

        .today-section {
          margin-bottom: 24px;
        }

        .today-section h2 {
          font-size: 16px;
          font-weight: 600;
          color: white;
          margin-bottom: 12px;
        }

        .workout-card {
          background: #1a1a1a;
          border-radius: 16px;
          overflow: hidden;
        }

        .workout-image {
          height: 100px;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }

        .workout-info {
          padding: 16px;
        }

        .workout-info h3 {
          font-size: 15px;
          font-weight: 600;
          color: white;
          margin-bottom: 6px;
        }

        .workout-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          font-size: 11px;
          color: #737373;
          margin-bottom: 12px;
        }

        .start-btn {
          width: 100%;
          padding: 12px;
          background: #22c55e;
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .quick-actions {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .action {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 16px 8px;
          background: #1a1a1a;
          border-radius: 12px;
          cursor: pointer;
        }

        .action .icon {
          font-size: 20px;
        }

        .action .label {
          font-size: 10px;
          color: #a3a3a3;
        }

        @media (max-width: 768px) {
          .home-view {
            padding: 16px;
          }

          .home-header {
            margin-bottom: 20px;
          }

          .greeting h1 {
            font-size: 20px;
          }

          .progress-section {
            padding: 20px 16px;
            margin-bottom: 20px;
          }

          .progress-ring {
            width: 120px;
            height: 120px;
            margin-bottom: 16px;
          }

          .progress-text .value {
            font-size: 24px;
          }

          .stats-row {
            gap: 8px;
          }

          .stat .value {
            font-size: 16px;
          }

          .today-section h2 {
            font-size: 15px;
          }

          .quick-actions {
            gap: 10px;
          }

          .action {
            padding: 12px 8px;
          }
        }

        @media (max-width: 480px) {
          .quick-actions {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

function WorkoutView() {
  const { exercises, todayWorkout } = voltData
  const completed = exercises.filter((e) => e.completed).length

  return (
    <div className="workout-view">
      {/* Header */}
      <div className="workout-header">
        <button className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="workout-title">
          <h1>{todayWorkout.name}</h1>
          <span className="meta">{todayWorkout.duration} · {todayWorkout.exercises} exercises</span>
        </div>
      </div>

      {/* Progress */}
      <div className="workout-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(completed / exercises.length) * 100}%` }} />
        </div>
        <span className="progress-text">{completed}/{exercises.length} completed</span>
      </div>

      {/* Exercises List */}
      <div className="exercises-list">
        {exercises.map((exercise, index) => (
          <div key={exercise.id} className={`exercise-item ${exercise.completed ? 'completed' : ''}`}>
            <div className="exercise-number">{index + 1}</div>
            <div className="exercise-info">
              <h3>{exercise.name}</h3>
              <span className="exercise-detail">
                {exercise.sets} sets × {exercise.reps} reps
                {exercise.weight && ` · ${exercise.weight}`}
              </span>
            </div>
            <div className={`exercise-status ${exercise.completed ? 'done' : ''}`}>
              {exercise.completed ? '✓' : ''}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .workout-view {
          padding: 20px;
        }

        .workout-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }

        .back-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #262626;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          flex-shrink: 0;
        }

        .workout-title h1 {
          font-size: 20px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .workout-title .meta {
          font-size: 12px;
          color: #737373;
        }

        .workout-progress {
          margin-bottom: 24px;
        }

        .progress-bar {
          height: 6px;
          background: #262626;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .progress-fill {
          height: 100%;
          background: #22c55e;
          border-radius: 3px;
          transition: width 0.3s;
        }

        .progress-text {
          font-size: 12px;
          color: #737373;
        }

        .exercises-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exercise-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          background: #1a1a1a;
          border-radius: 14px;
          transition: opacity 0.2s;
        }

        .exercise-item.completed {
          opacity: 0.6;
        }

        .exercise-number {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #262626;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
          color: white;
          flex-shrink: 0;
        }

        .exercise-info {
          flex: 1;
          min-width: 0;
        }

        .exercise-info h3 {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-bottom: 2px;
        }

        .exercise-detail {
          font-size: 12px;
          color: #737373;
        }

        .exercise-status {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid #404040;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .exercise-status.done {
          background: #22c55e;
          border-color: #22c55e;
          color: white;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .workout-view {
            padding: 16px;
          }

          .workout-header {
            gap: 12px;
            margin-bottom: 16px;
          }

          .back-btn {
            width: 36px;
            height: 36px;
          }

          .workout-title h1 {
            font-size: 18px;
          }

          .exercise-item {
            padding: 14px;
            gap: 12px;
          }

          .exercise-number {
            width: 28px;
            height: 28px;
            font-size: 13px;
          }

          .exercise-info h3 {
            font-size: 13px;
          }

          .exercise-detail {
            font-size: 11px;
          }

          .exercise-status {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </div>
  )
}

function ExerciseView() {
  const exercise = voltData.exercises[2]
  const currentSet = 1

  return (
    <div className="exercise-view">
      {/* Header */}
      <div className="exercise-header">
        <button className="close-btn">×</button>
        <span className="exercise-count">Exercise 3 of {voltData.exercises.length}</span>
      </div>

      {/* Video Area */}
      <div className="video-area">
        <div className="video-placeholder">
          <div className="play-icon">▶</div>
        </div>
        <div className="video-controls">
          <span>0:00</span>
          <div className="video-progress">
            <div className="video-progress-fill" />
          </div>
          <span>0:45</span>
        </div>
      </div>

      {/* Exercise Details */}
      <div className="exercise-details">
        <h1>{exercise.name}</h1>
        <div className="exercise-stats">
          <div className="stat">
            <span className="value">{exercise.sets}</span>
            <span className="label">Sets</span>
          </div>
          <div className="stat">
            <span className="value">{exercise.reps}</span>
            <span className="label">Reps</span>
          </div>
          {exercise.weight && (
            <div className="stat">
              <span className="value">{exercise.weight}</span>
              <span className="label">Weight</span>
            </div>
          )}
        </div>

        {/* Set Progress */}
        <div className="set-progress">
          <h2>Set {currentSet} of {exercise.sets}</h2>
          <div className="sets-dots">
            {Array.from({ length: exercise.sets }).map((_, i) => (
              <div key={i} className={`set-dot ${i < currentSet ? 'active' : ''}`} />
            ))}
          </div>
        </div>

        {/* Rest Timer */}
        <div className="rest-timer">
          <div className="timer-ring">
            <span className="timer-value">60s</span>
          </div>
          <span className="timer-label">Rest between sets</span>
        </div>

        {/* Action Button */}
        <button className="complete-set-btn">Complete Set</button>
      </div>

      <style jsx>{`
        .exercise-view {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .exercise-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
        }

        .close-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #262626;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .exercise-count {
          font-size: 12px;
          color: #737373;
        }

        .video-area {
          padding: 0 20px 20px;
        }

        .video-placeholder {
          height: 180px;
          background: linear-gradient(135deg, #262626 0%, #1a1a1a 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.2);
          border: 2px solid #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22c55e;
          font-size: 18px;
        }

        .video-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          font-size: 11px;
          color: #737373;
        }

        .video-progress {
          flex: 1;
          height: 4px;
          background: #262626;
          border-radius: 2px;
          overflow: hidden;
        }

        .video-progress-fill {
          width: 0%;
          height: 100%;
          background: #22c55e;
        }

        .exercise-details {
          flex: 1;
          background: #1a1a1a;
          border-radius: 24px 24px 0 0;
          padding: 24px 20px;
        }

        .exercise-details h1 {
          font-size: 22px;
          font-weight: 700;
          color: white;
          text-align: center;
          margin-bottom: 20px;
        }

        .exercise-stats {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 24px;
        }

        .stat {
          text-align: center;
        }

        .stat .value {
          display: block;
          font-size: 20px;
          font-weight: 700;
          color: white;
        }

        .stat .label {
          font-size: 11px;
          color: #737373;
        }

        .set-progress {
          text-align: center;
          margin-bottom: 20px;
        }

        .set-progress h2 {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-bottom: 10px;
        }

        .sets-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .set-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #404040;
        }

        .set-dot.active {
          background: #22c55e;
        }

        .rest-timer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px;
          background: #262626;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .timer-ring {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 3px solid #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timer-value {
          font-size: 14px;
          font-weight: 700;
          color: white;
        }

        .timer-label {
          font-size: 13px;
          color: #a3a3a3;
        }

        .complete-set-btn {
          width: 100%;
          padding: 16px;
          background: #22c55e;
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .exercise-header {
            padding: 12px 16px;
          }

          .video-area {
            padding: 0 16px 16px;
          }

          .video-placeholder {
            height: 140px;
          }

          .play-icon {
            width: 48px;
            height: 48px;
            font-size: 16px;
          }

          .video-controls {
            font-size: 10px;
          }

          .exercise-details {
            padding: 20px 16px;
          }

          .exercise-details h1 {
            font-size: 18px;
            margin-bottom: 16px;
          }

          .exercise-stats {
            gap: 20px;
            margin-bottom: 20px;
          }

          .stat .value {
            font-size: 18px;
          }

          .set-progress h2 {
            font-size: 13px;
          }

          .rest-timer {
            padding: 14px;
            gap: 10px;
          }

          .timer-ring {
            width: 42px;
            height: 42px;
          }

          .timer-value {
            font-size: 13px;
          }

          .timer-label {
            font-size: 12px;
          }

          .complete-set-btn {
            padding: 14px;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  )
}

function ProgressView() {
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const weekActivity = [true, true, false, true, true, false, false]

  return (
    <div className="progress-view">
      {/* Header */}
      <div className="progress-header">
        <h1>Progress</h1>
        <select className="period-select">
          <option>This Week</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <span className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 2c1 6-4 8-4 14 0 3.5 2.5 6 4 6s4-2.5 4-6c0-6-5-8-4-14z" />
            </svg>
          </span>
          <div className="stat-content">
            <span className="stat-value">{voltData.streak}</span>
            <span className="stat-label">Day Streak</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6.5 6.5h11v11h-11z" />
              <path d="M3 12h3M18 12h3M12 3v3M12 18v3" />
            </svg>
          </span>
          <div className="stat-content">
            <span className="stat-value">4</span>
            <span className="stat-label">Workouts</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          <div className="stat-content">
            <span className="stat-value">185</span>
            <span className="stat-label">Minutes</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </span>
          <div className="stat-content">
            <span className="stat-value">2,840</span>
            <span className="stat-label">Calories</span>
          </div>
        </div>
      </div>

      {/* Week Calendar */}
      <div className="week-calendar">
        <h2>This Week</h2>
        <div className="week-days">
          {weekDays.map((day, i) => (
            <div key={i} className={`day ${weekActivity[i] ? 'active' : ''} ${i === 4 ? 'today' : ''}`}>
              <span className="day-label">{day}</span>
              <div className="day-indicator">
                {weekActivity[i] && '✓'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Chart */}
      <div className="activity-section">
        <h2>Activity</h2>
        <div className="activity-chart">
          {[45, 60, 0, 55, 45, 0, 0].map((value, i) => (
            <div key={i} className="chart-bar">
              <div className="bar-fill" style={{ height: `${value}%` }} />
              <span className="bar-label">{weekDays[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Records */}
      <div className="records-section">
        <h2>Personal Records</h2>
        <div className="record-item">
          <span className="record-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M2 12h3M19 12h3M12 2v3M12 19v3" />
            </svg>
          </span>
          <div className="record-info">
            <span className="record-label">Bench Press</span>
            <span className="record-value">185 lbs</span>
          </div>
          <span className="record-date">Jan 10</span>
        </div>
        <div className="record-item">
          <span className="record-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
              <path d="M12 2c1 6-4 8-4 14 0 3.5 2.5 6 4 6s4-2.5 4-6c0-6-5-8-4-14z" />
            </svg>
          </span>
          <div className="record-info">
            <span className="record-label">Longest Streak</span>
            <span className="record-value">21 days</span>
          </div>
          <span className="record-date">Dec 2024</span>
        </div>
      </div>

      <style jsx>{`
        .progress-view {
          padding: 20px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .progress-header h1 {
          font-size: 22px;
          font-weight: 700;
          color: white;
        }

        .period-select {
          padding: 8px 12px;
          background: #262626;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 12px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #1a1a1a;
          border-radius: 14px;
        }

        .stat-card.primary {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
        }

        .stat-icon {
          font-size: 20px;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 700;
          color: white;
        }

        .stat-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
        }

        .stat-card:not(.primary) .stat-label {
          color: #737373;
        }

        .week-calendar {
          margin-bottom: 24px;
        }

        .week-calendar h2 {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-bottom: 12px;
        }

        .week-days {
          display: flex;
          justify-content: space-between;
          background: #1a1a1a;
          border-radius: 14px;
          padding: 16px;
        }

        .day {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .day-label {
          font-size: 11px;
          color: #737373;
        }

        .day.today .day-label {
          color: #22c55e;
          font-weight: 600;
        }

        .day-indicator {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #262626;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: white;
        }

        .day.active .day-indicator {
          background: #22c55e;
        }

        .activity-section {
          margin-bottom: 24px;
        }

        .activity-section h2 {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-bottom: 12px;
        }

        .activity-chart {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          height: 100px;
          background: #1a1a1a;
          border-radius: 14px;
          padding: 16px;
        }

        .chart-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        .bar-fill {
          width: 20px;
          background: #22c55e;
          border-radius: 4px 4px 0 0;
          min-height: 2px;
        }

        .bar-label {
          font-size: 10px;
          color: #737373;
        }

        .records-section h2 {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-bottom: 12px;
        }

        .record-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          background: #1a1a1a;
          border-radius: 12px;
          margin-bottom: 8px;
        }

        .record-icon {
          font-size: 18px;
        }

        .record-info {
          flex: 1;
        }

        .record-label {
          display: block;
          font-size: 13px;
          color: white;
          font-weight: 500;
        }

        .record-value {
          font-size: 11px;
          color: #22c55e;
        }

        .record-date {
          font-size: 11px;
          color: #737373;
        }

        @media (max-width: 768px) {
          .progress-view {
            padding: 16px;
          }

          .progress-header {
            margin-bottom: 16px;
          }

          .progress-header h1 {
            font-size: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-bottom: 20px;
          }

          .stat-card {
            padding: 14px;
          }

          .stat-value {
            font-size: 16px;
          }

          .week-calendar,
          .activity-section {
            margin-bottom: 20px;
          }

          .week-calendar h2,
          .activity-section h2 {
            font-size: 13px;
            margin-bottom: 10px;
          }

          .week-days {
            padding: 12px;
          }

          .day-label {
            font-size: 10px;
          }

          .day-indicator {
            width: 24px;
            height: 24px;
            font-size: 10px;
          }

          .activity-chart {
            height: 80px;
            padding: 12px;
          }

          .bar-fill {
            width: 16px;
          }

          .bar-label {
            font-size: 9px;
          }

          .record-item {
            padding: 12px;
            gap: 10px;
          }

          .record-icon {
            font-size: 16px;
          }

          .record-label {
            font-size: 12px;
          }

          .record-value {
            font-size: 10px;
          }

          .record-date {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  )
}
