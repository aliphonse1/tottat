import { motion } from 'framer-motion'
import { bounceIn } from '@/theme'

interface SpeechBubbleProps {
  text: string
  direction?: 'left' | 'right'
  className?: string
}

export function SpeechBubble({ text, direction = 'left', className = '' }: SpeechBubbleProps) {
  return (
    <motion.div
      variants={bounceIn}
      initial="hidden"
      animate="visible"
      className={`relative bg-white rounded-2xl px-4 py-2 shadow-md max-w-[200px] ${className}`}
    >
      <p className="text-sm text-gray-700 font-medium">{text}</p>
      <div
        className={`absolute bottom-[-6px] ${direction === 'left' ? 'left-4' : 'right-4'} w-3 h-3 bg-white rotate-45 shadow-md`}
      />
    </motion.div>
  )
}
