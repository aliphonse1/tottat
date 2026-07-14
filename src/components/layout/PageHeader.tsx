import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  showBack?: boolean
  rightElement?: React.ReactNode
}

export function PageHeader({ title, showBack = false, rightElement }: PageHeaderProps) {
  const navigate = useNavigate()

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between py-4"
    >
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600"
          >
            ←
          </button>
        )}
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      </div>
      {rightElement && <div>{rightElement}</div>}
    </motion.header>
  )
}
