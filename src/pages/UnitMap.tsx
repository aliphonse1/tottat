import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useContentStore } from '@/stores/contentStore'
import { PageHeader } from '@/components/layout/PageHeader'
import { Tot } from '@/components/characters/Tot'
import { staggerContainer, slideUp } from '@/theme'

export function UnitMap() {
  const { packId } = useParams<{ packId: string }>()
  const navigate = useNavigate()
  const { currentPack, selectPack } = useContentStore()

  useEffect(() => {
    if (packId) selectPack(packId)
  }, [packId, selectPack])

  if (!currentPack) {
    return <div className="py-20 text-center text-gray-400">Loading...</div>
  }

  return (
    <div>
      <PageHeader title={currentPack.name} showBack />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative py-4"
      >
        {/* Adventure path line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-sky-200 rounded-full" />

        {currentPack.units.map((unit, index) => (
          <motion.div
            key={unit.id}
            variants={slideUp}
            className="relative flex items-start gap-4 mb-6"
          >
            {/* Node on the path */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-white shadow-md border-3 border-sky-300 flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-sky-500">{index + 1}</span>
            </div>

            {/* Unit card */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/lesson/${currentPack.id}/${unit.id}`)}
              className="flex-1 bg-white rounded-2xl p-4 shadow-sm text-left border border-gray-100"
            >
              <h3 className="font-semibold text-gray-800">{unit.title}</h3>
              {unit.theme && (
                <p className="text-xs text-gray-400 mt-0.5">Theme: {unit.theme}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {unit.lessons.length} lesson{unit.lessons.length > 1 ? 's' : ''}
              </p>
              {unit.mascotTip && (
                <p className="text-xs text-sky-500 mt-2 italic">💡 {unit.mascotTip}</p>
              )}
            </motion.button>
          </motion.div>
        ))}

        {/* Tot at the end */}
        <div className="flex justify-center mt-4">
          <Tot mood="cheering" size={60} />
        </div>
      </motion.div>
    </div>
  )
}
