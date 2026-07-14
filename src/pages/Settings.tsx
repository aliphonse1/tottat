import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSettingsStore } from '@/stores/settingsStore'
import { PageHeader } from '@/components/layout/PageHeader'
import { Card } from '@/components/shared/Card'
import { Button } from '@/components/shared/Button'
import { slideUp } from '@/theme'

export function Settings() {
  const navigate = useNavigate()
  const { language, studentName, soundEnabled, ttsSpeed, setLanguage, setStudentName, toggleSound, setTtsSpeed } = useSettingsStore()

  return (
    <div>
      <PageHeader title="⚙️ Settings" />

      <motion.div initial="hidden" animate="visible" className="space-y-4">
        {/* Profile */}
        <motion.div variants={slideUp}>
          <Card className="p-4" interactive={false}>
            <h3 className="font-semibold text-gray-800 mb-3">👤 Profile</h3>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Your name"
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:outline-none"
            />
          </Card>
        </motion.div>

        {/* Language */}
        <motion.div variants={slideUp}>
          <Card className="p-4" interactive={false}>
            <h3 className="font-semibold text-gray-800 mb-3">🌐 Language</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-2 rounded-xl font-medium transition-all ${language === 'en' ? 'bg-sky-400 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`flex-1 py-2 rounded-xl font-medium transition-all ${language === 'zh' ? 'bg-sky-400 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                繁體中文
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Sound settings */}
        <motion.div variants={slideUp}>
          <Card className="p-4" interactive={false}>
            <h3 className="font-semibold text-gray-800 mb-3">🔊 Sound</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Sound Effects</span>
                <button
                  onClick={toggleSound}
                  className={`w-12 h-7 rounded-full transition-all ${soundEnabled ? 'bg-sky-400' : 'bg-gray-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${soundEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Speech Speed</span>
                  <span className="text-xs text-gray-400">{ttsSpeed}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.1"
                  value={ttsSpeed}
                  onChange={(e) => setTtsSpeed(parseFloat(e.target.value))}
                  className="w-full accent-sky-400"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Content management */}
        <motion.div variants={slideUp}>
          <Button
            onClick={() => navigate('/content-manager')}
            variant="secondary"
            className="w-full"
            icon={<span>📦</span>}
          >
            Manage Content Packs
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
