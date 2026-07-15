import { useCallback, useEffect, useRef, useState } from 'react'
import { useSettingsStore } from '@/stores/settingsStore'

const PREFERRED_VOICES = [
  'Samantha',           // iOS high-quality
  'Karen',             // iOS Australian English
  'Daniel',            // iOS British English
  'Google UK English Female',
  'Google UK English Male',
  'Microsoft Libby',   // Edge high-quality
  'Microsoft Ryan',
  'Google US English',
]

function getBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const enVoices = voices.filter(v => v.lang.startsWith('en'))
  for (const name of PREFERRED_VOICES) {
    const match = enVoices.find(v => v.name.includes(name))
    if (match) return match
  }
  const premium = enVoices.find(v => v.name.includes('Premium') || v.name.includes('Enhanced'))
  if (premium) return premium
  const localVoice = enVoices.find(v => v.localService && v.lang.startsWith('en-GB'))
  if (localVoice) return localVoice
  return enVoices[0] || null
}

export function useSpeechSynthesis() {
  const [speaking, setSpeaking] = useState(false)
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const ttsSpeed = useSettingsStore((s) => s.ttsSpeed)

  useEffect(() => {
    if (!window.speechSynthesis) return

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) {
        setVoice(getBestVoice(voices))
      }
    }

    loadVoices()
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
  }, [])

  const speak = useCallback((text: string, options?: { rate?: number; lang?: string; slow?: boolean }) => {
    if (!window.speechSynthesis) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = options?.lang ?? 'en-GB'
    utterance.rate = options?.slow ? 0.7 : (options?.rate ?? ttsSpeed)
    utterance.pitch = 1.0
    utterance.volume = 1.0

    if (voice) {
      utterance.voice = voice
      utterance.lang = voice.lang
    }

    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [ttsSpeed, voice])

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [])

  return { speak, stop, speaking, voiceName: voice?.name ?? 'Default' }
}
