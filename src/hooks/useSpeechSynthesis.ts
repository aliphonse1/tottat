import { useCallback, useRef, useState } from 'react'
import { useSettingsStore } from '@/stores/settingsStore'

export function useSpeechSynthesis() {
  const [speaking, setSpeaking] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const ttsSpeed = useSettingsStore((s) => s.ttsSpeed)

  const speak = useCallback((text: string, options?: { rate?: number; lang?: string }) => {
    if (!window.speechSynthesis) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = options?.lang ?? 'en-GB'
    utterance.rate = options?.rate ?? ttsSpeed
    utterance.pitch = 1.0

    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [ttsSpeed])

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [])

  return { speak, stop, speaking }
}
