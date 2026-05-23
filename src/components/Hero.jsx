import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowDown, FaDownload } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'

const roles = ['Full Stack Developer', '.NET Core Engineer', 'React.js Developer', 'Spring Boot Dev', 'AI Integration Dev']

const socials = [
  { icon: FaGithub,    href: 'https://github.com/Ajain0311',                            label: 'GitHub' },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/aditya-jain-0311ajain/',      label: 'LinkedIn' },
  { icon: SiHackerrank,href: 'https://www.hackerrank.com/adityajain887531',             label: 'HackerRank' },
  { icon: FaInstagram, href: 'https://www.instagram.com/ad_jain311/',                   label: 'Instagram' },
  { icon: FaEnvelope,  href: 'mailto:adityajain8875389629@gmail.com',                   label: 'Email' },
]

const coreTech = ['.NET Core', 'React.js', 'Spring Boot', 'SignalR', 'Azure', 'OracleDB']

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2400)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <span className="text-[#2563EB] font-heading">
      {displayed}
      <span className="animate-pulse text-[#60A5FA]">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-[#2563EB] rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#7C3AED] rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#06B6D4] rounded-full blur-[100px]"
        />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[#A1A1AA]">Full-Time @ </span>
              <span className="text-white font-semibold">E-Connect Solutions</span>
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-5">
              Hi, I'm
              <br />
              <span className="gradient-text">Aditya Dhing</span>
            </h1>

            <div className="font-heading text-xl sm:text-2xl text-[#71717A] mb-6 h-9">
              <TypewriterText />
            </div>

            <p className="text-[#A1A1AA] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              1+ year building <span className="text-white font-medium">enterprise web applications</span> with
              .NET Core, Spring Boot & React.js — across an internal sales platform and a high-traffic
              government citizen portal.
            </p>

            {/* Core tech pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {coreTech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className="tech-badge text-[#93C5FD]"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#2563EB] hover:bg-[#3B82F6] rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#2563EB]/30"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/13G3wiPROzX_roWNsg1C-QkkUuBtKVHYT/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/[0.08] border border-[#2563EB]/30 hover:border-[#2563EB]/60 text-[#60A5FA] rounded-xl font-medium transition-all duration-200 hover:scale-105"
              >
                <FaDownload size={13} />
                Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 glass hover:bg-white/[0.08] border border-white/10 rounded-xl font-medium text-[#A1A1AA] hover:text-white transition-all duration-200 hover:scale-105"
              >
                Projects
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
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
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: image + code card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative flex-shrink-0 flex flex-col items-center gap-5"
          >
            {/* Profile image */}
            <div className="relative w-60 h-60 sm:w-68 sm:h-68 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563EB]/50 to-[#7C3AED]/30 rotate-6 blur-sm" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#06B6D4]/20 to-transparent -rotate-3" />
              <img
                src="/images/pictu.jpg"
                alt="Aditya Dhing"
                className="relative w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-10 glass rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <div className="text-[#A1A1AA] text-[10px] uppercase tracking-widest">CGPA</div>
                <div className="font-heading font-bold text-xl text-[#2563EB] number-glow">
                  8.94<span className="text-sm text-[#A1A1AA]">/10</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -top-4 -right-10 glass rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <div className="text-[#A1A1AA] text-[10px] uppercase tracking-widest">Exp</div>
                <div className="font-heading font-bold text-sm text-green-400">1+ Year</div>
              </motion.div>
            </div>

            {/* Code terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-xs glass-dark rounded-2xl p-4 font-mono text-xs shadow-xl"
            >
              <div className="flex items-center gap-1.5 mb-3 pb-2.5 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-[#52525B] text-[10px]">developer.config.ts</span>
              </div>
              <div className="space-y-0.5 leading-5">
                <div><span className="text-purple-400">const</span> <span className="text-blue-300">dev</span> <span className="text-white">= {'{'}</span></div>
                <div className="pl-4"><span className="text-orange-300">name</span><span className="text-white">: </span><span className="text-green-300">"Aditya Dhing"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-orange-300">stack</span><span className="text-white">: [</span><span className="text-cyan-300">".NET"</span><span className="text-white">, </span><span className="text-cyan-300">"React"</span><span className="text-white">],</span></div>
                <div className="pl-4"><span className="text-orange-300">repos</span><span className="text-white">: </span><span className="text-yellow-300">20</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-orange-300">open_to</span><span className="text-white">: </span><span className="text-green-300">"opportunities"</span></div>
                <div><span className="text-white">{'}'}</span></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3F3F46]"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaArrowDown size={11} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
