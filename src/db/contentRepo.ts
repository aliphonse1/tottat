import { db } from './database'
import type { TextbookPack, Grade } from '@/types/content'

export const contentRepo = {
  async getAllPacks(): Promise<TextbookPack[]> {
    return db.packs.toArray()
  },

  async getPackById(id: string): Promise<TextbookPack | undefined> {
    return db.packs.get(id)
  },

  async getPacksByGrade(grade: Grade): Promise<TextbookPack[]> {
    return db.packs.where('grade').equals(grade).toArray()
  },

  async savePack(pack: TextbookPack): Promise<void> {
    await db.packs.put(pack)
  },

  async deletePack(id: string): Promise<void> {
    await db.packs.delete(id)
  },

  async importPackFromJson(json: string): Promise<TextbookPack> {
    const pack = JSON.parse(json) as TextbookPack
    if (!pack.id || !pack.name || !pack.grade || !pack.units) {
      throw new Error('Invalid pack format: missing required fields')
    }
    await db.packs.put(pack)
    return pack
  },

  async exportPackToJson(id: string): Promise<string> {
    const pack = await db.packs.get(id)
    if (!pack) throw new Error(`Pack not found: ${id}`)
    return JSON.stringify(pack, null, 2)
  },
}
