import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useContentStore } from '@/stores/contentStore'
import { PageHeader } from '@/components/layout/PageHeader'
import { Card } from '@/components/shared/Card'
import { staggerContainer, slideUp } from '@/theme'

type SkillTab = 'vocabulary' | 'listening' | 'speaking' | 'reading' | 'writing'

const skillTabs: { key: SkillTab; icon: string; label: string; color: string }[] = [
  { key: 'vocabulary', icon: '📝', label: 'Words', color: 'bg-amber-50 border-amber-200' },
  { key: 'listening', icon: '👂', label: 'Listen', color: 'bg-sky-50 border-sky-200' },
  { key: 'speaking', icon: '🎤', label: 'Speak', color: 'bg-coral-50 border-coral-200' },
  { key: 'reading', icon: '📖', label: 'Read', color: 'bg-emerald-50 border-emerald-200' },
  { key: 'writing', icon: '✍️', label: 'Write', color: 'bg-violet-50 border-violet-200' },
]

export function Lesson() {
  const { packId, unitId } = useParams<{ packId: string; unitId: string }>()
  const navigate = useNavigate()
  const { currentPack, currentUnit, selectPack, selectUnit } = useContentStore()
  const [activeTab, setActiveTab] = useState<SkillTab>('vocabulary')

  useEffect(() => {
    if (packId && !currentPack) selectPack(packId)
  }, [packId, currentPack, selectPack])

  useEffect(() => {
    if (unitId && currentPack) selectUnit(unitId)
  }, [unitId, currentPack, selectUnit])

  if (!currentUnit) {
    return <div className="py-20 text-center text-gray-400">Loading...</div>
  }

  const lesson = currentUnit.lessons[0]
  if (!lesson) {
    return <div className="py-20 text-center text-gray-400">No lessons in this unit</div>
  }

  const getExerciseCount = (tab: SkillTab): number => {
    switch (tab) {
      case 'vocabulary': return lesson.vocabulary.length
      case 'listening': return lesson.listening.length
      case 'speaking': return lesson.speaking.length
      case 'reading': return lesson.reading.length
      case 'writing': return lesson.writing.length
    }
  }

  return (
    <div>
      <PageHeader title={currentUnit.title} showBack />

      {/* Skill tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 no-scrollbar">
        {skillTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              flex-shrink-0 px-4 py-2 rounded-2xl border-2 text-sm font-medium transition-all
              ${activeTab === tab.key ? tab.color + ' shadow-sm' : 'bg-white border-gray-100 text-gray-500'}
            `}
          >
            {tab.icon} {tab.label}
            <span className="ml-1 text-xs text-gray-400">({getExerciseCount(tab.key)})</span>
          </button>
        ))}
      </div>

      {/* Exercise list */}
      <motion.div
        key={activeTab}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mt-4 space-y-3"
      >
        {activeTab === 'vocabulary' && lesson.vocabulary.map((vocab) => (
          <motion.div key={vocab.id} variants={slideUp}>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{vocab.word}</p>
                  {vocab.phonetic && <p className="text-xs text-gray-400">{vocab.phonetic}</p>}
                  <p className="text-sm text-gray-600 mt-0.5">{vocab.meaning}</p>
                  {vocab.meaningZh && <p className="text-xs text-gray-400">{vocab.meaningZh}</p>}
                </div>
                <button className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
                  🔊
                </button>
              </div>
              {vocab.example && (
                <p className="text-xs text-gray-500 mt-2 italic">"{vocab.example}"</p>
              )}
            </Card>
          </motion.div>
        ))}

        {activeTab === 'listening' && lesson.listening.map((ex) => (
          <motion.div key={ex.id} variants={slideUp}>
            <Card
              onClick={() => navigate(`/exercise/${packId}/${unitId}/${lesson.id}/listening/${ex.id}`)}
              className="p-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">👂</span>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{ex.instruction}</p>
                  <p className="text-xs text-gray-400 mt-0.5 capitalize">{ex.type.replace('-', ' ')}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {activeTab === 'speaking' && lesson.speaking.map((ex) => (
          <motion.div key={ex.id} variants={slideUp}>
            <Card
              onClick={() => navigate(`/exercise/${packId}/${unitId}/${lesson.id}/speaking/${ex.id}`)}
              className="p-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎤</span>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{ex.instruction}</p>
                  <p className="text-xs text-gray-400 mt-0.5">"{ex.targetText}"</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {activeTab === 'reading' && lesson.reading.map((ex) => (
          <motion.div key={ex.id} variants={slideUp}>
            <Card
              onClick={() => navigate(`/exercise/${packId}/${unitId}/${lesson.id}/reading/${ex.id}`)}
              className="p-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{ex.question}</p>
                  <p className="text-xs text-gray-400 mt-0.5 capitalize">{ex.type.replace('-', ' ')}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {activeTab === 'writing' && lesson.writing.map((ex) => (
          <motion.div key={ex.id} variants={slideUp}>
            <Card
              onClick={() => navigate(`/exercise/${packId}/${unitId}/${lesson.id}/writing/${ex.id}`)}
              className="p-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">✍️</span>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{ex.instruction}</p>
                  <p className="text-xs text-gray-400 mt-0.5 capitalize">{ex.type.replace('-', ' ')}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {getExerciseCount(activeTab) === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-3xl mb-2">🚧</p>
            <p className="text-sm">No exercises yet for this skill</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
