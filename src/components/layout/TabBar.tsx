import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const tabs = [
  { path: '/', icon: '🏠', label: 'Home' },
  { path: '/bookshelf', icon: '📚', label: 'Books' },
  { path: '/progress', icon: '⭐', label: 'Progress' },
  { path: '/settings', icon: '⚙️', label: 'Settings' },
]

export function TabBar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 safe-area-bottom z-40">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center w-16 h-full relative"
            >
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute -top-0.5 w-8 h-1 bg-sky-400 rounded-full"
                />
              )}
              <span className="text-xl">{tab.icon}</span>
              <span className={`text-[10px] mt-0.5 ${isActive ? 'text-sky-500 font-semibold' : 'text-gray-400'}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
