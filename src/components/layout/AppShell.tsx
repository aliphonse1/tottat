import { Outlet } from 'react-router-dom'
import { TabBar } from './TabBar'

export function AppShell() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] pb-20">
      <main className="max-w-lg mx-auto px-4 pt-safe">
        <Outlet />
      </main>
      <TabBar />
    </div>
  )
}
