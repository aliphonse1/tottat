import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useContentStore } from '@/stores/contentStore'
import { Card } from '@/components/shared/Card'
import { PageHeader } from '@/components/layout/PageHeader'
import { staggerContainer, slideUp } from '@/theme'
import type { Grade } from '@/types/content'

const gradeColors: Record<Grade, string> = {
  P1: 'bg-coral-100 border-coral-300',
  P2: 'bg-amber-100 border-amber-300',
  P3: 'bg-emerald-100 border-emerald-300',
  P4: 'bg-sky-100 border-sky-300',
  P5: 'bg-violet-100 border-violet-300',
  P6: 'bg-pink-100 border-pink-300',
}

export function BookShelf() {
  const navigate = useNavigate()
  const { packs, loading, loadPacks } = useContentStore()

  useEffect(() => {
    loadPacks()
  }, [loadPacks])

  const handleSelectPack = (packId: string) => {
    navigate(`/units/${packId}`)
  }

  return (
    <div>
      <PageHeader title="📚 My Bookshelf" />

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="w-8 h-8 border-3 border-sky-400 border-t-transparent rounded-full"
          />
        </div>
      ) : packs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-5xl mb-4">📭</p>
          <p className="text-gray-600 font-medium">No textbooks yet</p>
          <p className="text-gray-400 text-sm mt-1">Import a content pack to get started</p>
          <button
            onClick={() => navigate('/content-manager')}
            className="mt-4 text-sky-500 font-semibold text-sm"
          >
            + Import Content Pack
          </button>
        </motion.div>
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-3"
        >
          {packs.map((pack) => (
            <motion.div key={pack.id} variants={slideUp}>
              <Card
                onClick={() => handleSelectPack(pack.id)}
                className={`p-4 border-2 ${gradeColors[pack.grade] || 'bg-gray-50'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">📗</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">{pack.name}</h3>
                    <p className="text-xs text-gray-500">
                      {pack.publisher} · {pack.grade} · {pack.units.length} units
                    </p>
                  </div>
                  <span className="text-gray-300 text-lg">→</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
