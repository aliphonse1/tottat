export interface StudentProfile {
  id: string
  name: string
  avatar: string
  createdAt: string
}

export interface LessonProgress {
  id: string
  packId: string
  unitId: string
  lessonId: string
  skill: 'listening' | 'speaking' | 'reading' | 'writing'
  exerciseId: string
  stars: number
  attempts: number
  bestScore: number
  lastAttemptAt: string
}

export interface VocabProgress {
  id: string
  packId: string
  word: string
  level: number
  nextReviewAt: string
  correctCount: number
  incorrectCount: number
}

export interface DailyStreak {
  date: string
  exercisesCompleted: number
  minutesPracticed: number
}

export interface Badge {
  id: string
  name: string
  nameZh: string
  description: string
  icon: string
  earnedAt?: string
  condition: string
}

export const BADGES: Badge[] = [
  { id: 'first-lesson', name: 'First Steps', nameZh: '踏出第一步', description: 'Complete your first lesson', icon: '🌟', condition: 'complete_1_lesson' },
  { id: 'word-wizard', name: 'Word Wizard', nameZh: '詞彙大師', description: 'Learn 50 vocabulary words', icon: '📚', condition: 'learn_50_words' },
  { id: 'super-listener', name: 'Super Listener', nameZh: '超級聽力', description: 'Complete 10 listening exercises', icon: '👂', condition: 'complete_10_listening' },
  { id: 'brave-speaker', name: 'Brave Speaker', nameZh: '勇敢發言', description: 'Complete 10 speaking exercises', icon: '🎤', condition: 'complete_10_speaking' },
  { id: 'bookworm', name: 'Bookworm', nameZh: '書蟲', description: 'Read 10 passages', icon: '🐛', condition: 'complete_10_reading' },
  { id: 'writing-star', name: 'Writing Star', nameZh: '寫作之星', description: 'Complete 10 writing exercises', icon: '✍️', condition: 'complete_10_writing' },
  { id: 'streak-3', name: '3-Day Streak', nameZh: '三天連續', description: 'Practice 3 days in a row', icon: '🔥', condition: 'streak_3' },
  { id: 'streak-7', name: 'Week Champion', nameZh: '一週冠軍', description: 'Practice 7 days in a row', icon: '🏆', condition: 'streak_7' },
  { id: 'perfect-score', name: 'Perfect!', nameZh: '滿分', description: 'Get 3 stars on any exercise', icon: '⭐', condition: 'perfect_score' },
]
