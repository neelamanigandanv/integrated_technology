import { motion } from 'framer-motion'
import Icon from './Icon'

const nodes = [
  { x: 78, y: 88, delay: 0 },
  { x: 412, y: 72, delay: 0.4 },
  { x: 60, y: 292, delay: 0.8 },
  { x: 430, y: 300, delay: 1.2 },
  { x: 250, y: 44, delay: 1.6 },
  { x: 250, y: 336, delay: 2 },
]

export default function TechVisual({ compact = false }) {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="pointer-events-none absolute -inset-8 rounded-[48px] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />

      <div className="relative rounded-[28px] border border-white/70 bg-white p-3 shadow-[0_45px_90px_-45px_rgba(16,27,53,0.6)] sm:p-4">
        <div className={`relative overflow-hidden rounded-[20px] bg-navy dark-grid ${compact ? 'h-[300px]' : 'h-[340px] sm:h-[390px]'}`}>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[70px]" />

          <svg viewBox="0 0 500 380" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
            {nodes.map((node, index) => (
              <motion.line
                key={`line-${index}`}
                x1="250"
                y1="190"
                x2={node.x}
                y2={node.y}
                stroke="rgba(103,232,249,0.35)"
                strokeWidth="1"
                strokeDasharray="4 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.12 }}
              />
            ))}
            {nodes.map((node, index) => (
              <motion.circle
                key={`node-${index}`}
                cx={node.x}
                cy={node.y}
                r="5"
                fill="#06B6D4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0.5, 1, 0.5], scale: 1 }}
                transition={{ opacity: { duration: 2.4, repeat: Infinity, delay: node.delay }, scale: { duration: 0.4, delay: 0.5 + index * 0.12 } }}
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <span className="absolute inset-0 animate-glow rounded-full border border-cyan-300/30" />
            <span className="absolute -inset-5 rounded-full border border-white/10" />
            <span className="absolute -inset-10 rounded-full border border-white/5" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.55)]">
              <Icon name="BrainCircuit" className="h-9 w-9 text-white" />
            </span>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-4 top-4 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6"
          >
            <p className="text-[9px] font-semibold uppercase tracking-widest text-cyan-200">Model accuracy</p>
            <p className="mt-0.5 font-sans text-xl font-bold text-white">98.4%</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-4 right-4 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:bottom-6 sm:right-6"
          >
            <p className="flex items-center gap-1.5 text-[10px] font-semibold text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Pipeline live
            </p>
            <p className="mt-1 font-sans text-[13px] font-bold text-cyan-200">Deploying to production</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-5 left-5 hidden rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:block"
          >
            <div className="flex items-end gap-1">
              {[10, 18, 14, 26, 20, 32, 28].map((height, index) => (
                <span key={index} className="w-1.5 rounded-full bg-cyan-300/80" style={{ height }} />
              ))}
            </div>
          </motion.div>

          <div className="absolute right-5 top-5 hidden rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-md sm:block">
            <span className="flex items-center gap-1.5">
              <Icon name="LockKeyhole" className="h-3 w-3 text-cyan-300" />
              Secure by design
            </span>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-[0_20px_40px_-20px_rgba(16,27,53,0.35)] sm:flex"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <Icon name="TrendingUp" className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[11px] font-bold text-navy">+42% efficiency</span>
          <span className="block text-[10px] text-muted">across client workflows</span>
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute -right-4 -top-5 hidden items-center gap-2 rounded-xl border border-line bg-white px-3 py-2.5 shadow-[0_20px_40px_-20px_rgba(16,27,53,0.3)] sm:flex"
      >
        <span className="h-2 w-2 rounded-full bg-brand" />
        <span className="text-[11px] font-bold text-navy">AI + Cloud + Data</span>
      </motion.div>
    </div>
  )
}
