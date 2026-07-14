import { motion } from 'framer-motion'

type Mood = 'happy' | 'thinking' | 'cheering' | 'idle'

interface TotProps {
  mood?: Mood
  size?: number
  className?: string
}

export function Tot({ mood = 'idle', size = 80, className = '' }: TotProps) {
  const eyeVariant = mood === 'thinking' ? 'squint' : 'open'
  
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={mood === 'cheering' ? { y: [0, -8, 0] } : undefined}
      transition={mood === 'cheering' ? { repeat: 2, duration: 0.3 } : undefined}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Body */}
        <ellipse cx="50" cy="58" rx="28" ry="30" fill="#8B6914" />
        <ellipse cx="50" cy="58" rx="22" ry="24" fill="#F5E6C8" />
        
        {/* Head */}
        <circle cx="50" cy="35" r="22" fill="#8B6914" />
        <circle cx="50" cy="37" r="16" fill="#F5E6C8" />
        
        {/* Ear tufts */}
        <polygon points="33,18 38,28 28,25" fill="#8B6914" />
        <polygon points="67,18 62,28 72,25" fill="#8B6914" />
        
        {/* Eyes */}
        {eyeVariant === 'open' ? (
          <>
            <circle cx="43" cy="34" r="5" fill="white" />
            <circle cx="57" cy="34" r="5" fill="white" />
            <circle cx="43" cy="35" r="2.5" fill="#2D3436" />
            <circle cx="57" cy="35" r="2.5" fill="#2D3436" />
            <circle cx="44" cy="33" r="1" fill="white" />
            <circle cx="58" cy="33" r="1" fill="white" />
          </>
        ) : (
          <>
            <path d="M39,34 Q43,37 47,34" stroke="#2D3436" strokeWidth="2" fill="none" />
            <path d="M53,34 Q57,37 61,34" stroke="#2D3436" strokeWidth="2" fill="none" />
          </>
        )}
        
        {/* Glasses */}
        <circle cx="43" cy="34" r="7" stroke="#4BA3D4" strokeWidth="1.5" fill="none" />
        <circle cx="57" cy="34" r="7" stroke="#4BA3D4" strokeWidth="1.5" fill="none" />
        <line x1="50" y1="34" x2="50" y2="34" stroke="#4BA3D4" strokeWidth="1.5" />
        
        {/* Beak */}
        <polygon points="47,40 53,40 50,44" fill="#FFB347" />
        
        {/* Mouth expression */}
        {mood === 'happy' || mood === 'cheering' ? (
          <path d="M45,46 Q50,49 55,46" stroke="#8B6914" strokeWidth="1.5" fill="none" />
        ) : null}
        
        {/* Wings */}
        <ellipse cx="25" cy="55" rx="6" ry="12" fill="#8B6914" 
          transform={mood === 'cheering' ? 'rotate(-20, 25, 55)' : ''} />
        <ellipse cx="75" cy="55" rx="6" ry="12" fill="#8B6914"
          transform={mood === 'cheering' ? 'rotate(20, 75, 55)' : ''} />
        
        {/* Feet */}
        <ellipse cx="42" cy="86" rx="6" ry="3" fill="#FFB347" />
        <ellipse cx="58" cy="86" rx="6" ry="3" fill="#FFB347" />
      </svg>
    </motion.div>
  )
}
