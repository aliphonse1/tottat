import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Language = 'en' | 'zh'

interface SettingsState {
  language: Language
  studentName: string
  soundEnabled: boolean
  ttsSpeed: number

  setLanguage: (lang: Language) => void
  setStudentName: (name: string) => void
  toggleSound: () => void
  setTtsSpeed: (speed: number) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      language: 'zh',
      studentName: '',
      soundEnabled: true,
      ttsSpeed: 0.8,

      setLanguage: (language) => set({ language }),
      setStudentName: (studentName) => set({ studentName }),
      toggleSound: () => set((s) => ({ soundEnabled: !s.soundEnabled })),
      setTtsSpeed: (ttsSpeed) => set({ ttsSpeed }),
    }),
    { name: 'tottat-settings' }
  )
)
