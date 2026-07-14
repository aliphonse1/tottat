import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cardHover } from '@/theme'

interface CardProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  interactive?: boolean
}

export function Card({ children, onClick, className = '', interactive = true }: CardProps) {
  return (
    <motion.div
      whileHover={interactive ? cardHover : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={`
        bg-white rounded-3xl shadow-sm border border-gray-100
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
