import { motion } from 'framer-motion'

interface ProgressBarProps {
  value: number
  max: number
  color?: 'sky' | 'mint' | 'coral' | 'sunshine'
  showLabel?: boolean
  className?: string
}

const colorMap = {
  sky: 'bg-sky-400',
  mint: 'bg-emerald-400',
  coral: 'bg-coral-400',
  sunshine: 'bg-amber-400',
}

export function ProgressBar({ value, max, color = 'sky', showLabel = false, className = '' }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>{value}/{max}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full ${colorMap[color]}`}
        />
      </div>
    </div>
  )
}
