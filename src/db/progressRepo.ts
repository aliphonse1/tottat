import { db } from './database'
import type { LessonProgress, VocabProgress } from '@/types/progress'

export const progressRepo = {
  async saveExerciseResult(progress: LessonProgress): Promise<void> {
    const existing = await db.lessonProgress
      .where('[packId+unitId+lessonId+skill+exerciseId]')
      .equals([progress.packId, progress.unitId, progress.lessonId, progress.skill, progress.exerciseId])
      .first()

    if (existing) {
      await db.lessonProgress.update(existing.id, {
        attempts: existing.attempts + 1,
        bestScore: Math.max(existing.bestScore, progress.bestScore),
        stars: Math.max(existing.stars, progress.stars),
        lastAttemptAt: progress.lastAttemptAt,
      })
    } else {
      await db.lessonProgress.put(progress)
    }
  },

  async getLessonProgress(packId: string, unitId: string, lessonId: string): Promise<LessonProgress[]> {
    return db.lessonProgress
      .where('packId').equals(packId)
      .filter(p => p.unitId === unitId && p.lessonId === lessonId)
      .toArray()
  },

  async getPackProgress(packId: string): Promise<LessonProgress[]> {
    return db.lessonProgress.where('packId').equals(packId).toArray()
  },

  async getTotalStars(): Promise<number> {
    const all = await db.lessonProgress.toArray()
    return all.reduce((sum, p) => sum + p.stars, 0)
  },

  async recordDailyActivity(): Promise<void> {
    const today = new Date().toISOString().split('T')[0]
    const existing = await db.dailyStreaks.get(today)
    if (existing) {
      await db.dailyStreaks.update(today, {
        exercisesCompleted: existing.exercisesCompleted + 1,
      })
    } else {
      await db.dailyStreaks.put({
        date: today,
        exercisesCompleted: 1,
        minutesPracticed: 0,
      })
    }
  },

  async getCurrentStreak(): Promise<number> {
    const streaks = await db.dailyStreaks.orderBy('date').reverse().toArray()
    if (streaks.length === 0) return 0

    let count = 0
    const today = new Date()
    for (let i = 0; i < streaks.length; i++) {
      const expected = new Date(today)
      expected.setDate(expected.getDate() - i)
      const expectedStr = expected.toISOString().split('T')[0]
      if (streaks[i].date === expectedStr) {
        count++
      } else {
        break
      }
    }
    return count
  },

  async saveVocabProgress(progress: VocabProgress): Promise<void> {
    await db.vocabProgress.put(progress)
  },

  async getVocabsDueForReview(packId: string): Promise<VocabProgress[]> {
    const now = new Date().toISOString()
    return db.vocabProgress
      .where('nextReviewAt')
      .belowOrEqual(now)
      .filter(v => v.packId === packId)
      .toArray()
  },
}
