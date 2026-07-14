import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useContentStore } from '@/stores/contentStore'
import { useProgressStore } from '@/stores/progressStore'
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis'
import { useAudioRecorder } from '@/hooks/useAudioRecorder'
import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/shared/Button'
import { StarRating } from '@/components/shared/StarRating'
import { Confetti } from '@/components/shared/Confetti'
import { Tot } from '@/components/characters/Tot'
import { Tat } from '@/components/characters/Tat'
import { bounceIn } from '@/theme'
import type { Lesson } from '@/types/content'

type Skill = 'listening' | 'speaking' | 'reading' | 'writing'

export function Exercise() {
  const { packId, unitId, lessonId, skill, exerciseId } = useParams<{
    packId: string; unitId: string; lessonId: string; skill: Skill; exerciseId: string
  }>()
  const navigate = useNavigate()
  const { currentPack, selectPack, selectUnit } = useContentStore()
  const { recordResult } = useProgressStore()
  const { speak, speaking } = useSpeechSynthesis()
  const { recording, audioUrl, startRecording, stopRecording, clearRecording } = useAudioRecorder()

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [writingInput, setWritingInput] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [stars, setStars] = useState(0)
  const [attempts, setAttempts] = useState(0)

  useEffect(() => {
    if (packId && !currentPack) selectPack(packId)
  }, [packId, currentPack, selectPack])

  useEffect(() => {
    if (unitId && currentPack) selectUnit(unitId)
  }, [unitId, currentPack, selectUnit])

  const lesson: Lesson | undefined = currentPack?.units
    .find(u => u.id === unitId)?.lessons
    .find(l => l.id === lessonId)

  const exercise = (() => {
    if (!lesson || !skill || !exerciseId) return null
    switch (skill) {
      case 'listening': return lesson.listening.find(e => e.id === exerciseId)
      case 'speaking': return lesson.speaking.find(e => e.id === exerciseId)
      case 'reading': return lesson.reading.find(e => e.id === exerciseId)
      case 'writing': return lesson.writing.find(e => e.id === exerciseId)
      default: return null
    }
  })()

  if (!exercise || !skill) {
    return <div className="py-20 text-center text-gray-400">Exercise not found</div>
  }

  const checkAnswer = (answer: string) => {
    const correctAnswer = 'correctAnswer' in exercise ? exercise.correctAnswer : ''
    const correct = Array.isArray(correctAnswer)
      ? correctAnswer.includes(answer)
      : String(correctAnswer).toLowerCase() === answer.toLowerCase().trim()

    setIsCorrect(correct)
    setShowResult(true)
    setAttempts(prev => prev + 1)

    const earnedStars = correct ? (attempts === 0 ? 3 : attempts === 1 ? 2 : 1) : 0
    setStars(earnedStars)

    if (correct && packId && unitId && lessonId && exerciseId) {
      recordResult({
        id: `${packId}-${unitId}-${lessonId}-${skill}-${exerciseId}`,
        packId,
        unitId,
        lessonId,
        skill,
        exerciseId,
        stars: earnedStars,
        attempts: attempts + 1,
        bestScore: earnedStars * 33,
        lastAttemptAt: new Date().toISOString(),
      })
    }
  }

  const handleTryAgain = () => {
    setSelectedAnswer(null)
    setWritingInput('')
    setShowResult(false)
    clearRecording()
  }

  return (
    <div>
      <PageHeader title={skill === 'listening' ? '👂 Listen' : skill === 'speaking' ? '🎤 Speak' : skill === 'reading' ? '📖 Read' : '✍️ Write'} showBack />

      <Confetti active={showResult && isCorrect} />

      <div className="py-4">
        {/* Instruction */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-4 shadow-sm mb-4"
        >
          <p className="text-gray-700 font-medium">
            {'instruction' in exercise ? exercise.instruction : exercise.question}
          </p>
          {'passage' in exercise && exercise.passage && (
            <p className="mt-3 text-gray-600 text-sm leading-relaxed border-l-3 border-sky-200 pl-3">
              {exercise.passage}
            </p>
          )}
        </motion.div>

        {/* TTS button for listening/speaking */}
        {(skill === 'listening' || skill === 'speaking') && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mb-4">
            <Button
              onClick={() => {
                const text = 'ttsText' in exercise ? exercise.ttsText : 'targetText' in exercise ? exercise.targetText : ''
                if (text) speak(text)
              }}
              variant="secondary"
              disabled={speaking}
              icon={<span>{speaking ? '🔊' : '🔈'}</span>}
            >
              {speaking ? 'Playing...' : 'Listen'}
            </Button>
          </motion.div>
        )}

        {/* Speaking: record */}
        {skill === 'speaking' && (
          <div className="flex flex-col items-center gap-3 mb-4">
            {'targetText' in exercise && (
              <p className="text-lg font-semibold text-gray-800 text-center">"{exercise.targetText}"</p>
            )}
            <Button
              onClick={recording ? () => { stopRecording(); setShowResult(true); setIsCorrect(true); setStars(2) } : startRecording}
              variant={recording ? 'coral' : 'primary'}
              size="lg"
              icon={<span>{recording ? '⏹️' : '🎙️'}</span>}
            >
              {recording ? 'Stop' : 'Record'}
            </Button>
            {audioUrl && (
              <audio controls src={audioUrl} className="w-full max-w-xs mt-2" />
            )}
          </div>
        )}

        {/* MCQ options */}
        {'options' in exercise && exercise.options && !showResult && skill !== 'speaking' && (
          <motion.div className="space-y-2">
            {exercise.options.map((option, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => { setSelectedAnswer(option); checkAnswer(option) }}
                className={`
                  w-full text-left p-4 rounded-2xl border-2 font-medium transition-all
                  ${selectedAnswer === option ? 'border-sky-400 bg-sky-50' : 'border-gray-100 bg-white hover:border-gray-200'}
                `}
              >
                <span className="text-gray-400 mr-2">{String.fromCharCode(65 + i)}.</span>
                {option}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Writing input */}
        {(skill === 'writing' || (skill === 'listening' && 'type' in exercise && exercise.type === 'dictation')) && !showResult && (
          <div className="space-y-3">
            {'words' in exercise && exercise.words && exercise.type === 'sentence-order' ? (
              <div className="flex flex-wrap gap-2">
                {exercise.words.map((word, i) => (
                  <button
                    key={i}
                    onClick={() => setWritingInput(prev => prev ? `${prev} ${word}` : word)}
                    className="px-3 py-2 bg-white rounded-xl border-2 border-gray-200 font-medium text-gray-700 active:bg-sky-50"
                  >
                    {word}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                value={writingInput}
                onChange={(e) => setWritingInput(e.target.value)}
                placeholder="Type your answer..."
                className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-sky-400 focus:outline-none text-gray-800 font-medium"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
              />
            )}
            {writingInput && (
              <div className="flex gap-2">
                <Button onClick={() => setWritingInput('')} variant="ghost" size="sm">Clear</Button>
                <Button onClick={() => checkAnswer(writingInput)} size="sm" className="flex-1">Check ✓</Button>
              </div>
            )}
          </div>
        )}

        {/* Result display */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              variants={bounceIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`mt-6 p-5 rounded-2xl text-center ${isCorrect ? 'bg-emerald-50 border-2 border-emerald-200' : 'bg-amber-50 border-2 border-amber-200'}`}
            >
              <div className="flex justify-center mb-3">
                {isCorrect ? <Tot mood="cheering" size={60} /> : <Tat mood="thinking" size={60} />}
              </div>

              <p className={`font-bold text-lg ${isCorrect ? 'text-emerald-600' : 'text-amber-600'}`}>
                {isCorrect ? 'Excellent! 🎉' : 'Try again! 💪'}
              </p>

              {isCorrect && <StarRating stars={stars} className="justify-center mt-2" />}

              {!isCorrect && 'hint' in exercise && exercise.hint && (
                <p className="text-sm text-amber-600 mt-2">💡 Hint: {exercise.hint}</p>
              )}

              <div className="flex gap-3 justify-center mt-4">
                {!isCorrect && (
                  <Button onClick={handleTryAgain} variant="secondary" size="sm">
                    Try Again
                  </Button>
                )}
                <Button onClick={() => navigate(-1)} variant={isCorrect ? 'success' : 'ghost'} size="sm">
                  {isCorrect ? 'Continue →' : 'Skip'}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
