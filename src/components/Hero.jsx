import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const roles = ['Software Engineer', 'Web Developer', 'Problem Solver', 'CS Graduate']

const socials = [
  { icon: FaGithub, href: 'https://github.com/Ajain0311', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aditya-jain-0311ajain/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/ad_jain311/', label: 'Instagram' },
  { icon: FaEnvelope, href: 'mailto:adityajain8875389629@gmail.com', label: 'Email' },
]

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <span className="text-[#2563EB]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[120px]"
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[#A1A1AA]">Available for opportunities</span>
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-5">
              Hi, I'm
              <br />
              <span className="gradient-text">Aditya Jain</span>
            </h1>

            <div className="font-heading text-xl sm:text-2xl text-[#71717A] mb-6 h-9">
              <TypewriterText />
            </div>

            <p className="text-[#A1A1AA] text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              B.Tech CSE graduate passionate about building elegant software solutions.
              Based in <span className="text-white font-medium">Udaipur, Rajasthan</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#2563EB] hover:bg-[#3B82F6] rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#2563EB]/30"
              >
                Get in Touch
              </a>
              <a
                href="#skills"
                className="px-6 py-3 glass hover:bg-white/[0.08] border border-white/10 rounded-xl font-medium transition-all duration-200 hover:scale-105"
              >
                View Skills
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="p-2.5 glass hover:bg-[#2563EB]/20 hover:border-[#2563EB]/30 rounded-xl text-[#A1A1AA] hover:text-[#60A5FA] transition-colors duration-200"
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563EB]/40 to-[#7C3AED]/30 rotate-6 blur-sm" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563EB]/20 to-transparent rotate-3" />

              <img
                src="/images/pictu.jpg"
                alt="Aditya Jain"
                className="relative w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl"
              />

              {/* Float badge — GPA */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-8 glass rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <div className="text-[#A1A1AA] text-[10px] font-medium uppercase tracking-widest">CGPA</div>
                <div className="font-heading font-bold text-xl text-[#2563EB]">8.91<span className="text-sm text-[#A1A1AA]">/10</span></div>
              </motion.div>

              {/* Float badge — Available */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -top-5 -right-8 glass rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <div className="text-[#A1A1AA] text-[10px] font-medium uppercase tracking-widest">Status</div>
                <div className="font-heading font-bold text-sm text-green-400">Available ✓</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#52525B]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaArrowDown size={12} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
