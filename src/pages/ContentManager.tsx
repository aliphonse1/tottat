import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useContentStore } from '@/stores/contentStore'
import { contentRepo } from '@/db/contentRepo'
import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/shared/Button'
import { Card } from '@/components/shared/Card'
import { slideUp } from '@/theme'

export function ContentManager() {
  const { packs, loadPacks, importPack } = useContentStore()
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setError(null)
      const text = await file.text()
      await importPack(text)
      setSuccess(`Successfully imported: ${file.name}`)
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to import pack')
    }

    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleExport = async (packId: string) => {
    try {
      const json = await contentRepo.exportPackToJson(packId)
      const blob = new Blob([json], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${packId}.json`
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Export failed')
    }
  }

  const handleDelete = async (packId: string) => {
    if (!confirm('Delete this content pack?')) return
    await contentRepo.deletePack(packId)
    await loadPacks()
  }

  return (
    <div>
      <PageHeader title="📦 Content Manager" showBack />

      {/* Import section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileImport}
          className="hidden"
        />
        <Button
          onClick={() => fileInputRef.current?.click()}
          size="lg"
          className="w-full"
          icon={<span>📥</span>}
        >
          Import Content Pack (.json)
        </Button>

        {error && (
          <p className="mt-2 text-sm text-red-500 bg-red-50 rounded-xl p-3">❌ {error}</p>
        )}
        {success && (
          <p className="mt-2 text-sm text-emerald-600 bg-emerald-50 rounded-xl p-3">✅ {success}</p>
        )}
      </motion.div>

      {/* Installed packs */}
      <h2 className="font-bold text-gray-800 mb-3">Installed Packs ({packs.length})</h2>

      {packs.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-2">📭</p>
          <p className="text-sm">No content packs installed</p>
          <p className="text-xs mt-1">Import a JSON file to get started</p>
        </div>
      ) : (
        <div className="space-y-3">
          {packs.map((pack) => (
            <motion.div key={pack.id} variants={slideUp} initial="hidden" animate="visible">
              <Card className="p-4" interactive={false}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">{pack.name}</h3>
                    <p className="text-xs text-gray-500">
                      {pack.publisher} · {pack.grade} · v{pack.version}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {pack.units.length} units · {pack.units.reduce((sum, u) => sum + u.lessons.length, 0)} lessons
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button onClick={() => handleExport(pack.id)} variant="ghost" size="sm">
                    📤 Export
                  </Button>
                  <Button onClick={() => handleDelete(pack.id)} variant="ghost" size="sm">
                    🗑️ Delete
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
