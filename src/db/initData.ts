import { db } from './database'
import sampleP1 from '@/data/packs/p1-english-starter.json'
import englishP3 from '@/data/packs/p3-english-fun.json'
import englishP5 from '@/data/packs/p5-english-explorer.json'
import mathsP3 from '@/data/packs/p3-maths-english.json'
import scienceP3 from '@/data/packs/p3-science-english.json'
import gsP3 from '@/data/packs/p3-gs-english.json'
import dailyP3 from '@/data/packs/p3-daily-scenarios.json'
import type { TextbookPack } from '@/types/content'

const BUNDLED_PACKS = [
  sampleP1,
  englishP3,
  englishP5,
  mathsP3,
  scienceP3,
  gsP3,
  dailyP3,
] as unknown as TextbookPack[]

export async function initializeDefaultContent() {
  for (const pack of BUNDLED_PACKS) {
    const existing = await db.packs.get(pack.id)
    if (!existing || existing.version !== pack.version) {
      await db.packs.put(pack)
    }
  }
}
