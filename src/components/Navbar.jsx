import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsMoonFill, BsSunFill, BsCircleHalf } from 'react-icons/bs'
import { useTheme } from '../contexts/ThemeContext'

const navLinks = [
  { name: 'About',      href: '#about'      },
  { name: 'Skills',     href: '#skills'     },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects',   href: '#projects'   },
  { name: 'Contact',    href: '#contact'    },
]

const themeIcons = {
  dark:        BsMoonFill,
  light:       BsSunFill,
  'soft-light': BsCircleHalf,
}

const themeLabels = {
  dark: 'Dark',
  light: 'Light',
  'soft-light': 'Soft',
}

function ThemeSwitcher({ compact = false }) {
  const { theme, setTheme, themes } = useTheme()

  return (
    <div
      className={`flex items-center gap-0.5 rounded-xl p-1 ${compact ? '' : 'glass'}`}
      style={compact ? {} : { border: '1px solid var(--border-subtle)' }}
    >
      {themes.map(({ key }) => {
        const Icon = themeIcons[key]
        const active = theme === key
        return (
          <button
            key={key}
            onClick={() => setTheme(key)}
            title={themeLabels[key]}
            aria-label={`Switch to ${themeLabels[key]} theme`}
            className={`p-1.5 rounded-lg transition-all duration-200 ${
              active
                ? 'bg-[#2563EB] text-white shadow-sm'
                : 'text-[#52525B] hover:text-[#A1A1AA]'
            }`}
          >
            <Icon size={11} />
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isLight = theme === 'light' || theme === 'soft-light'

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-3 shadow-xl shadow-black/10' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-heading font-bold text-xl tracking-tight">
          <span style={{ color: 'var(--text-primary)' }}>AD</span>
          <span className="text-[#2563EB]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ color: 'var(--text-secondary)' }}
              className="text-sm font-medium hover:text-[#2563EB] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          <ThemeSwitcher />

          <a
            href="mailto:adityajain8875389629@gmail.com"
            className="px-4 py-2 bg-[#2563EB] hover:bg-[#3B82F6] rounded-lg text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#2563EB]/25"
          >
            Hire Me
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            style={{ backgroundColor: 'var(--text-primary)' }}
            className="block w-5 h-0.5"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{ backgroundColor: 'var(--text-primary)' }}
            className="block w-5 h-0.5"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            style={{ backgroundColor: 'var(--text-primary)' }}
            className="block w-5 h-0.5"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--text-secondary)' }}
                  className="block py-2.5 px-3 rounded-lg hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-all"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t flex items-center justify-between gap-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <ThemeSwitcher compact />
                <a
                  href="mailto:adityajain8875389629@gmail.com"
                  className="flex-1 py-2.5 px-3 bg-[#2563EB] rounded-lg text-center text-sm font-medium text-white"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
