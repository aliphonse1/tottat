import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { Home } from '@/pages/Home'
import { BookShelf } from '@/pages/BookShelf'
import { UnitMap } from '@/pages/UnitMap'
import { Lesson } from '@/pages/Lesson'
import { Exercise } from '@/pages/Exercise'
import { Progress } from '@/pages/Progress'
import { ContentManager } from '@/pages/ContentManager'
import { Settings } from '@/pages/Settings'
import { initializeDefaultContent } from '@/db/initData'

export default function App() {
  useEffect(() => {
    initializeDefaultContent()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/bookshelf" element={<BookShelf />} />
          <Route path="/units/:packId" element={<UnitMap />} />
          <Route path="/lesson/:packId/:unitId" element={<Lesson />} />
          <Route path="/exercise/:packId/:unitId/:lessonId/:skill/:exerciseId" element={<Exercise />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/content-manager" element={<ContentManager />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
