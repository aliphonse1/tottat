import type { Variants } from 'framer-motion'

export const bounceIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
}

export const slideUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 24 },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

export const wiggle: Variants = {
  idle: { rotate: 0 },
  wiggle: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.5 },
  },
}

export const celebrate: Variants = {
  idle: { scale: 1 },
  pop: {
    scale: [1, 1.3, 1],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export const cardHover = {
  scale: 1.03,
  transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
}
