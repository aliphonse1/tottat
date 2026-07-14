import { create } from 'zustand'
import type { TextbookPack, Unit, Lesson } from '@/types/content'
import { contentRepo } from '@/db/contentRepo'

interface ContentState {
  packs: TextbookPack[]
  currentPack: TextbookPack | null
  currentUnit: Unit | null
  currentLesson: Lesson | null
  loading: boolean

  loadPacks: () => Promise<void>
  selectPack: (id: string) => Promise<void>
  selectUnit: (unitId: string) => void
  selectLesson: (lessonId: string) => void
  importPack: (json: string) => Promise<void>
}

export const useContentStore = create<ContentState>((set, get) => ({
  packs: [],
  currentPack: null,
  currentUnit: null,
  currentLesson: null,
  loading: false,

  async loadPacks() {
    set({ loading: true })
    const packs = await contentRepo.getAllPacks()
    set({ packs, loading: false })
  },

  async selectPack(id: string) {
    const pack = await contentRepo.getPackById(id)
    set({ currentPack: pack ?? null, currentUnit: null, currentLesson: null })
  },

  selectUnit(unitId: string) {
    const unit = get().currentPack?.units.find(u => u.id === unitId) ?? null
    set({ currentUnit: unit, currentLesson: null })
  },

  selectLesson(lessonId: string) {
    const lesson = get().currentUnit?.lessons.find(l => l.id === lessonId) ?? null
    set({ currentLesson: lesson })
  },

  async importPack(json: string) {
    await contentRepo.importPackFromJson(json)
    await get().loadPacks()
  },
}))
