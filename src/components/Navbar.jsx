import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Home',           href: '#home'           },
  { label: 'About',          href: '#about'          },
  { label: 'Skills',         href: '#certifications' },
  { label: 'Projects',       href: '#work'           },
  { label: 'Contact',        href: '#contact'        },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('#home')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const go = (href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-black/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between h-[70px] px-6 md:px-12 lg:px-24">

          {/* Logo */}
          <button
            onClick={() => go('#home')}
            className={`font-display font-black text-xl tracking-tight flex items-center gap-1 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Divya Sri
            <span className="w-[7px] h-[7px] rounded-full bg-brand mb-2 inline-block" />
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => go(href)}
                  className={`relative font-body text-sm font-medium group pb-0.5 transition-colors duration-200 ${
                    scrolled
                      ? active === href ? 'text-brand' : 'text-gray-600 hover:text-black'
                      : active === href ? 'text-brand' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 h-px bg-brand transition-all duration-300 ${active === href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              </li>
            ))}
          </ul>


          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] z-[200]"
          >
            {[0,1,2].map(i => (
              <motion.span
                key={i}
                animate={{
                  rotate: menuOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                  y: menuOpen ? (i === 0 ? 7 : i === 2 ? -7 : 0) : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  scaleX: menuOpen && i === 1 ? 0 : 1,
                }}
                transition={{ duration: 0.25 }}
                className={`block h-[2px] w-6 rounded-full ${menuOpen ? 'bg-white' : scrolled ? 'bg-black' : 'bg-white'}`}
              />
            ))}
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile menu — full-screen red panel ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 2rem) 2.2rem)' }}
            animate={{ clipPath: 'circle(160% at calc(100% - 2rem) 2.2rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2rem) 2.2rem)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ backgroundColor: '#E60012' }}
          >
            <ul className="flex flex-col items-center gap-7">
              {LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <button
                    onClick={() => go(href)}
                    className="font-display font-black italic text-white text-4xl hover:text-black transition-colors"
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
