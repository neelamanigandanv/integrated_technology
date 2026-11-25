import { Link } from 'react-router-dom'

export default function Logo({ light = false, compact = false }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Technova home">
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-navy shadow-[0_8px_18px_-8px_rgba(16,27,53,0.6)]">
        <span className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-accent/25 blur-md transition-transform duration-500 group-hover:scale-150" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6" aria-hidden="true">
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path d="M5 7h22v5.5H18.7V26h-5.4V12.5H5z" fill="url(#logoGradient)" />
          <circle cx="24.5" cy="23" r="3" fill="#06B6D4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-sans text-[19px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
          Technova
        </span>
        {!compact && (
          <span className={`mt-1 text-[8px] font-bold uppercase tracking-[0.28em] ${light ? 'text-slate-400' : 'text-muted'}`}>
            Digital Solutions
          </span>
        )}
      </span>
    </Link>
  )
}
