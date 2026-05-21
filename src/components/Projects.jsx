import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiRedis } from 'react-icons/si'
import { MdGpsFixed } from 'react-icons/md'

const projects = [
  {
    name: 'RedisCache-UI',
    tagline: 'Browser-based Redis Cache Management Tool',
    status: 'Completed',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    gradient: 'from-red-500/20 via-orange-500/10 to-transparent',
    accentColor: '#EF4444',
    accentBg: 'bg-red-500/10',
    accentText: 'text-red-400',
    icon: SiRedis,
    tech: ['HTML', 'CSS', 'JavaScript', 'Redis'],
    bullets: [
      'Standalone browser tool — zero framework dependencies, works out of the box.',
      'Key inspection, search/filter, and targeted cache deletion from the UI.',
      'Fills a key-management gap in native Redis tooling — no CLI access needed.',
    ],
    github: 'https://github.com/Ajain0311',
    demo: null,
  },
  {
    name: 'Track__onMe',
    tagline: 'GPS & WiFi-based Attendance Tracking System',
    status: 'In Development',
    statusColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    accentColor: '#8B5CF6',
    accentBg: 'bg-violet-500/10',
    accentText: 'text-violet-400',
    icon: MdGpsFixed,
    tech: ['Node.js', 'Native APIs', 'GPS', 'WiFi', 'LocalStorage'],
    bullets: [
      'Built via Vibe Coding — GPS & WiFi-based check-in/check-out, actively in development.',
      'Offline-first architecture — actions queue during disconnection, auto-sync on reconnect.',
      'Includes To-Do list feature with local storage for task management alongside attendance.',
    ],
    github: 'https://github.com/Ajain0311',
    demo: null,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#18181B]/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-3">What I've Built</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Personal <span className="gradient-text-blue">Projects</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mx-auto mb-4" />
          <p className="text-[#A1A1AA] max-w-md mx-auto text-sm">
            Side projects I've built to solve real developer problems and explore new tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map(({ name, tagline, status, statusColor, gradient, accentColor, accentBg, accentText, icon: Icon, tech, bullets, github, demo }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden border border-white/7 transition-all duration-300 group hover:border-white/15 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${gradient} p-6 pb-4 relative overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)',
                  }}
                />
                <div className="flex items-start justify-between gap-3 relative">
                  <div className={`p-3 ${accentBg} rounded-xl border border-white/10`}>
                    <Icon className={accentText} size={22} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border uppercase tracking-wider ${statusColor}`}>
                    {status}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl mt-4">{name}</h3>
                <p className="text-[#A1A1AA] text-sm mt-1">{tagline}</p>
              </div>

              {/* Body */}
              <div className="p-6 pt-5">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium border text-[#A1A1AA] border-white/8 bg-white/4 hover:border-white/20 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-[#A1A1AA] text-sm leading-relaxed">
                      <span className={`${accentText} flex-shrink-0 mt-1 text-[10px]`}>▹</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass hover:bg-white/8 rounded-lg text-sm text-[#A1A1AA] hover:text-white transition-all duration-200 hover:scale-105"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                      style={{ background: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}30` }}
                    >
                      <FaExternalLinkAlt size={11} />
                      Live Demo
                    </a>
                  )}
                  <span className="ml-auto text-[#3F3F46] text-xs">Personal Project</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio itself */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 glass rounded-2xl p-5 border border-white/7 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#2563EB]/10 rounded-xl">
              <FaExternalLinkAlt className="text-[#2563EB]" size={14} />
            </div>
            <div>
              <div className="font-heading font-semibold text-sm">This Portfolio</div>
              <div className="text-[#71717A] text-xs">Vite · React · Tailwind CSS · Framer Motion</div>
            </div>
          </div>
          <a
            href="https://github.com/Ajain0311/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass hover:bg-white/8 rounded-lg text-sm text-[#A1A1AA] hover:text-white transition-all duration-200"
          >
            <FaGithub size={14} />
            View Source
          </a>
        </motion.div>
      </div>
    </section>
  )
}
