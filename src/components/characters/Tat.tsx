import { motion } from 'framer-motion'

type Mood = 'happy' | 'excited' | 'thinking' | 'idle'

interface TatProps {
  mood?: Mood
  size?: number
  className?: string
}

export function Tat({ mood = 'idle', size = 80, className = '' }: TatProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={mood === 'excited' ? { rotate: [0, -5, 5, -5, 0] } : undefined}
      transition={mood === 'excited' ? { repeat: 1, duration: 0.4 } : undefined}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Tail */}
        <path d="M75,70 Q90,55 85,40 Q82,48 78,55 Q76,62 75,70" fill="#FF8A6B" />
        
        {/* Body */}
        <ellipse cx="50" cy="65" rx="22" ry="20" fill="#FF8A6B" />
        <ellipse cx="50" cy="68" rx="15" ry="12" fill="#FFF0EB" />
        
        {/* Head */}
        <circle cx="50" cy="38" r="20" fill="#FF8A6B" />
        
        {/* Ears */}
        <polygon points="34,22 38,35 28,30" fill="#FF8A6B" />
        <polygon points="66,22 62,35 72,30" fill="#FF8A6B" />
        <polygon points="36,24 38,33 30,30" fill="#FFB8A8" />
        <polygon points="64,24 62,33 70,30" fill="#FFB8A8" />
        
        {/* Face */}
        <ellipse cx="50" cy="40" rx="14" ry="12" fill="#FFF0EB" />
        
        {/* Eyes */}
        {mood === 'happy' || mood === 'excited' ? (
          <>
            <path d="M42,36 Q44,33 46,36" stroke="#2D3436" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M54,36 Q56,33 58,36" stroke="#2D3436" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="44" cy="36" r="3" fill="#2D3436" />
            <circle cx="56" cy="36" r="3" fill="#2D3436" />
            <circle cx="45" cy="35" r="1" fill="white" />
            <circle cx="57" cy="35" r="1" fill="white" />
          </>
        )}
        
        {/* Nose */}
        <ellipse cx="50" cy="41" rx="2.5" ry="2" fill="#FF6B6B" />
        
        {/* Whiskers */}
        <line x1="30" y1="39" x2="40" y2="40" stroke="#2D3436" strokeWidth="0.8" />
        <line x1="30" y1="43" x2="40" y2="43" stroke="#2D3436" strokeWidth="0.8" />
        <line x1="60" y1="40" x2="70" y2="39" stroke="#2D3436" strokeWidth="0.8" />
        <line x1="60" y1="43" x2="70" y2="43" stroke="#2D3436" strokeWidth="0.8" />
        
        {/* Mouth */}
        {mood === 'happy' || mood === 'excited' ? (
          <path d="M46,44 Q50,48 54,44" stroke="#2D3436" strokeWidth="1.5" fill="none" />
        ) : (
          <path d="M47,44 Q50,46 53,44" stroke="#2D3436" strokeWidth="1" fill="none" />
        )}
        
        {/* Paws */}
        <ellipse cx="38" cy="82" rx="5" ry="4" fill="#FF8A6B" />
        <ellipse cx="62" cy="82" rx="5" ry="4" fill="#FF8A6B" />
        <circle cx="36" cy="81" r="1.5" fill="#FFF0EB" />
        <circle cx="39" cy="83" r="1.5" fill="#FFF0EB" />
        <circle cx="60" cy="81" r="1.5" fill="#FFF0EB" />
        <circle cx="63" cy="83" r="1.5" fill="#FFF0EB" />
        
        {/* Stripes on tail */}
        <path d="M80,48 Q82,46 84,48" stroke="#E5634A" strokeWidth="1.5" fill="none" />
        <path d="M79,54 Q81,52 83,54" stroke="#E5634A" strokeWidth="1.5" fill="none" />
      </svg>
    </motion.div>
  )
}
