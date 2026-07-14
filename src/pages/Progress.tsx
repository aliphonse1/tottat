import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useProgressStore } from '@/stores/progressStore'
import { PageHeader } from '@/components/layout/PageHeader'
import { Card } from '@/components/shared/Card'
import { Tot } from '@/components/characters/Tot'
import { Tat } from '@/components/characters/Tat'
import { staggerContainer, slideUp } from '@/theme'
import { BADGES } from '@/types/progress'

export function Progress() {
  const { totalStars, currentStreak, loadStats } = useProgressStore()

  useEffect(() => {
    loadStats()
  }, [loadStats])

  return (
    <div>
      <PageHeader title="⭐ My Progress" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {/* Stats overview */}
        <motion.div variants={slideUp} className="grid grid-cols-2 gap-3">
          <Card className="p-4 text-center" interactive={false}>
            <p className="text-3xl font-bold text-amber-500">{totalStars}</p>
            <p className="text-xs text-gray-500 mt-1">Total Stars</p>
          </Card>
          <Card className="p-4 text-center" interactive={false}>
            <p className="text-3xl font-bold text-orange-500">{currentStreak}</p>
            <p className="text-xs text-gray-500 mt-1">Day Streak 🔥</p>
          </Card>
        </motion.div>

        {/* Characters cheering */}
        <motion.div variants={slideUp} className="flex justify-center items-end gap-6 py-4">
          <Tot mood={totalStars > 0 ? 'cheering' : 'happy'} size={70} />
          <Tat mood={currentStreak > 0 ? 'excited' : 'happy'} size={65} />
        </motion.div>

        {/* Badges */}
        <motion.div variants={slideUp}>
          <h2 className="font-bold text-gray-800 mb-3">🏅 Badges</h2>
          <div className="grid grid-cols-3 gap-3">
            {BADGES.map((badge) => (
              <Card
                key={badge.id}
                className={`p-3 text-center ${badge.earnedAt ? '' : 'opacity-40 grayscale'}`}
                interactive={false}
              >
                <p className="text-2xl">{badge.icon}</p>
                <p className="text-[10px] font-medium text-gray-700 mt-1 leading-tight">{badge.name}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Encouragement */}
        <motion.div variants={slideUp} className="text-center py-4">
          <p className="text-sm text-gray-500">
            {totalStars === 0
              ? 'Start your first lesson to earn stars! ✨'
              : `Great job! You've earned ${totalStars} stars so far!`
            }
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
