import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'success' | 'coral'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  icon?: ReactNode
}

const variantStyles = {
  primary: 'bg-sky-400 hover:bg-sky-500 text-white shadow-md',
  secondary: 'bg-sunshine-300 hover:bg-sunshine-400 text-gray-800 shadow-md',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
  success: 'bg-emerald-400 hover:bg-emerald-500 text-white shadow-md',
  coral: 'bg-coral-400 hover:bg-coral-500 text-white shadow-md',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm rounded-xl',
  md: 'px-5 py-2.5 text-base rounded-2xl',
  lg: 'px-7 py-3.5 text-lg rounded-2xl',
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon,
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  )
}
