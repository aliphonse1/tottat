import { useCallback, useRef, useState } from 'react'

interface RecordingResult {
  blob: Blob
  url: string
  duration: number
}

export function useAudioRecorder() {
  const [recording, setRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const startTimeRef = useRef<number>(0)

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []
      startTimeRef.current = Date.now()

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data)
      }

      mediaRecorder.start()
      setRecording(true)
    } catch {
      console.error('Microphone access denied')
    }
  }, [])

  const stopRecording = useCallback((): Promise<RecordingResult | null> => {
    return new Promise((resolve) => {
      const mediaRecorder = mediaRecorderRef.current
      if (!mediaRecorder || mediaRecorder.state === 'inactive') {
        resolve(null)
        return
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        const url = URL.createObjectURL(blob)
        const duration = (Date.now() - startTimeRef.current) / 1000
        setAudioUrl(url)
        setRecording(false)

        mediaRecorder.stream.getTracks().forEach(t => t.stop())
        resolve({ blob, url, duration })
      }

      mediaRecorder.stop()
    })
  }, [])

  const clearRecording = useCallback(() => {
    if (audioUrl) URL.revokeObjectURL(audioUrl)
    setAudioUrl(null)
  }, [audioUrl])

  return { recording, audioUrl, startRecording, stopRecording, clearRecording }
}
