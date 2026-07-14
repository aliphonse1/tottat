import { motion } from 'framer-motion'

interface StarRatingProps {
  stars: number
  maxStars?: number
  size?: number
  animated?: boolean
  className?: string
}

export function StarRating({ stars, maxStars = 3, size = 24, animated = true, className = '' }: StarRatingProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: maxStars }).map((_, i) => (
        <motion.span
          key={i}
          initial={animated ? { scale: 0, rotate: -180 } : undefined}
          animate={animated ? { scale: 1, rotate: 0 } : undefined}
          transition={animated ? { delay: i * 0.15, type: 'spring', stiffness: 200 } : undefined}
          style={{ fontSize: size }}
          className={i < stars ? 'opacity-100' : 'opacity-25'}
        >
          ⭐
        </motion.span>
      ))}
    </div>
  )
}
