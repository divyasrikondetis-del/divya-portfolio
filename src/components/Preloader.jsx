import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Premium Preloader — Luxury agency style
 * 1. Red fullscreen bg
 * 2. "Divya Sri." dark ghost text as base layer
 * 3. White fill animates bottom→top (water fill, 1.6s)
 * 4. Red screen slides UP like a shutter
 * Logo scales down + fades during exit for extra polish
 */
export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // 0.5s delay + 1.6s fill + 0.6s hold = 2.7s
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onComplete, 800)
    }, 2700)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#E60012' }}
        >
          {/* Logo with water-fill */}
          <motion.div
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative select-none text-center"
          >
            {/* Ghost layer */}
            <span className="preloader-text preloader-text-bg block">
              Divya Sri.
            </span>
            {/* White fill layer */}
            <span
              className="preloader-text preloader-text-fill"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
            >
              Divya Sri.
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-white/40 text-xs tracking-[0.4em] uppercase mt-4"
          >
            SEO · Content Marketing · GA4
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
