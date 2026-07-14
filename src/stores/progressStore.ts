import { create } from 'zustand'
import { progressRepo } from '@/db/progressRepo'
import type { LessonProgress } from '@/types/progress'

interface ProgressState {
  totalStars: number
  currentStreak: number
  recentResults: LessonProgress[]

  loadStats: () => Promise<void>
  recordResult: (progress: LessonProgress) => Promise<void>
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  totalStars: 0,
  currentStreak: 0,
  recentResults: [],

  async loadStats() {
    const [totalStars, currentStreak] = await Promise.all([
      progressRepo.getTotalStars(),
      progressRepo.getCurrentStreak(),
    ])
    set({ totalStars, currentStreak })
  },

  async recordResult(progress: LessonProgress) {
    await progressRepo.saveExerciseResult(progress)
    await progressRepo.recordDailyActivity()
    await get().loadStats()
  },
}))
