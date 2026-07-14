import Dexie, { type EntityTable } from 'dexie'
import type { TextbookPack } from '@/types/content'
import type { LessonProgress, VocabProgress, DailyStreak, StudentProfile } from '@/types/progress'

class TotTatDatabase extends Dexie {
  packs!: EntityTable<TextbookPack, 'id'>
  lessonProgress!: EntityTable<LessonProgress, 'id'>
  vocabProgress!: EntityTable<VocabProgress, 'id'>
  dailyStreaks!: EntityTable<DailyStreak, 'date'>
  profiles!: EntityTable<StudentProfile, 'id'>

  constructor() {
    super('TotTatDB')

    this.version(1).stores({
      packs: 'id, grade, publisher',
      lessonProgress: 'id, [packId+unitId+lessonId+skill+exerciseId], packId, lastAttemptAt',
      vocabProgress: 'id, [packId+word], nextReviewAt',
      dailyStreaks: 'date',
      profiles: 'id',
    })
  }
}

export const db = new TotTatDatabase()
