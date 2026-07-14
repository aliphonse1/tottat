export type Grade = 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6'

export interface ContentManifest {
  version: string
  lastUpdated: string
  packs: PackMeta[]
}

export interface PackMeta {
  id: string
  name: string
  publisher: string
  grade: Grade
  version: string
  size: number
  remoteUrl?: string
}

export interface TextbookPack {
  id: string
  name: string
  publisher: string
  grade: Grade
  version: string
  units: Unit[]
  assets?: AssetManifest
}

export interface AssetManifest {
  audioBaseUrl?: string
  audioFiles: Record<string, string>
  images: Record<string, string>
}

export interface Unit {
  id: string
  title: string
  theme?: string
  mascotTip?: string
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  objectives: string[]
  vocabulary: VocabItem[]
  listening: ListeningExercise[]
  speaking: SpeakingExercise[]
  reading: ReadingExercise[]
  writing: WritingExercise[]
}

export interface VocabItem {
  id: string
  word: string
  phonetic?: string
  meaning: string
  meaningZh?: string
  example?: string
  audioId?: string
  imageId?: string
}

export interface ListeningExercise {
  id: string
  type: 'mcq' | 'dictation' | 'fill-blank' | 'ordering'
  instruction: string
  audioId?: string
  ttsText?: string
  question?: string
  options?: string[]
  correctAnswer: string | string[]
  hint?: string
}

export interface SpeakingExercise {
  id: string
  type: 'pronounce-word' | 'pronounce-sentence' | 'read-aloud'
  instruction: string
  targetText: string
  audioId?: string
  phonetic?: string
  hint?: string
}

export interface ReadingExercise {
  id: string
  type: 'mcq' | 'true-false' | 'matching' | 'fill-blank'
  passage?: string
  question: string
  options?: string[]
  correctAnswer: string | string[]
  explanation?: string
}

export interface WritingExercise {
  id: string
  type: 'spelling' | 'sentence-order' | 'fill-blank' | 'word-bank'
  instruction: string
  audioId?: string
  ttsText?: string
  words?: string[]
  correctAnswer: string | string[]
  hint?: string
}
