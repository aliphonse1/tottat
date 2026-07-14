import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ConfettiProps {
  active: boolean
  duration?: number
}

const COLORS = ['#FF8A6B', '#7CC8F0', '#7DD4A8', '#FFD23F', '#B8A0E8', '#FF6B6B']

interface Particle {
  id: number
  x: number
  color: string
  delay: number
  rotation: number
}

export function Confetti({ active, duration = 2000 }: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (!active) {
      setParticles([])
      return
    }

    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 0.3,
      rotation: Math.random() * 360,
    }))
    setParticles(newParticles)

    const timer = setTimeout(() => setParticles([]), duration)
    return () => clearTimeout(timer)
  }, [active, duration])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}vw`, rotate: 0, opacity: 1 }}
          animate={{ y: '100vh', rotate: p.rotation + 360, opacity: 0 }}
          transition={{ duration: 1.5, delay: p.delay, ease: 'easeIn' }}
          className="absolute w-3 h-3 rounded-sm"
          style={{ backgroundColor: p.color }}
        />
      ))}
    </div>
  )
}
