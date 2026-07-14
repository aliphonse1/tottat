import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tot } from '@/components/characters/Tot'
import { Tat } from '@/components/characters/Tat'
import { SpeechBubble } from '@/components/characters/SpeechBubble'
import { Button } from '@/components/shared/Button'
import { useProgressStore } from '@/stores/progressStore'
import { useSettingsStore } from '@/stores/settingsStore'
import { staggerContainer, slideUp } from '@/theme'

export function Home() {
  const navigate = useNavigate()
  const { totalStars, currentStreak, loadStats } = useProgressStore()
  const studentName = useSettingsStore((s) => s.studentName)

  useEffect(() => {
    loadStats()
  }, [loadStats])

  const greeting = studentName ? `Hi, ${studentName}!` : 'Welcome!'

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="pt-8 flex flex-col items-center"
    >
      {/* Logo area */}
      <motion.div variants={slideUp} className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Tot <span className="text-sky-400">&</span> Tat
        </h1>
        <p className="text-sm text-gray-500 mt-1">English Learning Adventure</p>
      </motion.div>

      {/* Characters */}
      <motion.div variants={slideUp} className="flex items-end gap-4 mb-6">
        <div className="flex flex-col items-center">
          <SpeechBubble text={greeting} direction="right" className="mb-2" />
          <Tot mood="happy" size={90} />
        </div>
        <div className="flex flex-col items-center">
          <SpeechBubble text="Let's learn!" direction="left" className="mb-2" />
          <Tat mood="excited" size={85} />
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div variants={slideUp} className="flex gap-4 mb-8">
        <div className="bg-white rounded-2xl px-5 py-3 shadow-sm text-center">
          <p className="text-2xl font-bold text-amber-500">⭐ {totalStars}</p>
          <p className="text-xs text-gray-500">Stars</p>
        </div>
        <div className="bg-white rounded-2xl px-5 py-3 shadow-sm text-center">
          <p className="text-2xl font-bold text-coral-500">🔥 {currentStreak}</p>
          <p className="text-xs text-gray-500">Day Streak</p>
        </div>
      </motion.div>

      {/* Quick actions */}
      <motion.div variants={slideUp} className="w-full space-y-3">
        <Button
          onClick={() => navigate('/bookshelf')}
          size="lg"
          className="w-full"
          icon={<span>📖</span>}
        >
          Start Learning
        </Button>
        <Button
          onClick={() => navigate('/progress')}
          variant="secondary"
          size="lg"
          className="w-full"
          icon={<span>📊</span>}
        >
          My Progress
        </Button>
      </motion.div>
    </motion.div>
  )
}
