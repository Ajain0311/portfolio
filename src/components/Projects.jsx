import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaJava } from 'react-icons/fa'
import { SiRedis, SiSpringboot, SiGooglegemini, SiPython } from 'react-icons/si'
import { MdGpsFixed } from 'react-icons/md'

const featured = [
  {
    name: 'RedisCache-UI',
    tagline: 'Browser-based Redis Cache Management',
    status: 'Completed',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    gradient: 'from-red-500/20 via-red-500/5 to-transparent',
    accent: '#EF4444',
    accentBg: 'bg-red-500/10',
    accentText: 'text-red-400',
    icon: SiRedis,
    tech: ['HTML', 'CSS', 'JavaScript', 'Redis'],
    bullets: [
      'Standalone browser tool — zero framework dependencies.',
      'Key inspection, search/filter, targeted cache deletion without CLI.',
      'Fills a key-management gap in native Redis tooling.',
    ],
    github: 'https://github.com/Ajain0311/RedisCache-UI',
    demo: null,
  },
  {
    name: 'Track__onMe',
    tagline: 'GPS & WiFi Attendance Tracking System',
    status: 'Active Dev',
    statusColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    gradient: 'from-violet-500/20 via-violet-500/5 to-transparent',
    accent: '#8B5CF6',
    accentBg: 'bg-violet-500/10',
    accentText: 'text-violet-400',
    icon: MdGpsFixed,
    tech: ['Node.js', 'Native APIs', 'GPS', 'WiFi', 'LocalStorage'],
    bullets: [
      'GPS & WiFi-based check-in/out built via Vibe Coding.',
      'Offline-first — queues actions, auto-syncs on reconnect.',
      'Includes local To-Do list for task management.',
    ],
    github: 'https://github.com/Ajain0311/Track__onMe',
    demo: null,
  },
  {
    name: 'Daily GitHub Pusher',
    tagline: 'AI-powered Daily Code Automation',
    status: 'Live on Render',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    accent: '#10B981',
    accentBg: 'bg-emerald-500/10',
    accentText: 'text-emerald-400',
    icon: SiGooglegemini,
    tech: ['Python', 'Gemini API', 'GitHub API', 'Render.com'],
    bullets: [
      'Scheduled service — Gemini API generates production-quality code daily.',
      'Auto-pushes across Python, Java, JS, C++ into a daily-code repo.',
      'Deployed on Render.com, runs 24/7 without manual intervention.',
    ],
    github: 'https://github.com/Ajain0311/daily-github-pusher',
    demo: null,
  },
]

const more = [
  {
    name: 'Gemini Spring Boot Backend',
    desc: 'JWT-secured Spring Boot REST API backend integrating Google Gemini AI — token generation, auth, and clean API architecture.',
    tech: ['Java', 'Spring Boot', 'JWT', 'Gemini AI', 'REST API'],
    icon: SiSpringboot,
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10',
    github: 'https://github.com/Ajain0311/Gemini_Springboot_backend',
    lang: 'Java',
    date: 'Feb 2025',
  },
  {
    name: 'Employee Management System',
    desc: 'Full-stack Java internship project — employee CRUD with REST API backend and web frontend, built as a multi-functional management system.',
    tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'REST API'],
    icon: FaJava,
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    github: 'https://github.com/Ajain0311/emp-mgmt-system',
    lang: 'Java',
    date: 'Nov 2024',
  },
  {
    name: 'Expense Tracker',
    desc: 'JavaScript expense tracker to log, categorize, and visualize spending — clean UI with local persistence.',
    tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    icon: FaExternalLinkAlt,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    github: 'https://github.com/Ajain0311/Exp_tracker',
    lang: 'JavaScript',
    date: 'Apr 2025',
  },
  {
    name: 'Netflix Clone',
    desc: 'Responsive Netflix homepage clone — pixel-perfect recreation with HTML/CSS as a frontend practice project.',
    tech: ['HTML', 'CSS'],
    icon: FaExternalLinkAlt,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
    github: 'https://github.com/Ajain0311/Netflix_App',
    lang: 'HTML',
    date: 'Jun 2024',
  },
]

function FeaturedCard({ project, index, inView }) {
  const { name, tagline, status, statusColor, gradient, accent, accentBg, accentText, icon: Icon, tech, bullets, github, demo } = project
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.12 }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl overflow-hidden border border-white/7 transition-all duration-300 group hover:border-white/15 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className={`bg-gradient-to-br ${gradient} p-6 pb-4 relative overflow-hidden`}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 75% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />
        <div className="flex items-start justify-between gap-3 relative">
          <div className={`p-3 ${accentBg} rounded-xl border border-white/10`}>
            <Icon className={accentText} size={22} />
          </div>
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border uppercase tracking-wider ${statusColor}`}>{status}</span>
        </div>
        <h3 className="font-heading font-bold text-xl mt-4">{name}</h3>
        <p className="text-[#A1A1AA] text-sm mt-1">{tagline}</p>
      </div>

      <div className="p-6 pt-5">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md text-[11px] font-medium border text-[#A1A1AA] border-white/8 bg-white/4">
              {t}
            </span>
          ))}
        </div>
        <ul className="space-y-2 mb-6">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-[#A1A1AA] text-sm leading-relaxed">
              <span className={`${accentText} flex-shrink-0 mt-1 text-[10px]`}>▹</span>
              {b}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass hover:bg-white/8 rounded-lg text-sm text-[#A1A1AA] hover:text-white transition-all duration-200 hover:scale-105"
          >
            <FaGithub size={14} /> GitHub
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
              style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
            >
              <FaExternalLinkAlt size={11} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function MoreCard({ project, index, inView }) {
  const { name, desc, tech, icon: Icon, iconColor, iconBg, github, lang, date } = project
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.5 + index * 0.09 }}
      whileHover={{ y: -3 }}
      className="glass glow-card rounded-xl p-5 border border-white/7 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className={`p-2.5 ${iconBg} rounded-xl`}>
          <Icon className={iconColor} size={16} />
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer"
          className="p-2 glass hover:bg-white/8 rounded-lg text-[#52525B] hover:text-white transition-all duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={14} />
        </a>
      </div>
      <h4 className="font-heading font-semibold text-sm mb-2">{name}</h4>
      <p className="text-[#71717A] text-xs leading-relaxed mb-4 flex-1">{desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tech.slice(0, 3).map((t) => (
          <span key={t} className="px-2 py-0.5 rounded-md text-[10px] border text-[#71717A] border-white/8 bg-white/3">{t}</span>
        ))}
        {tech.length > 3 && <span className="px-2 py-0.5 rounded-md text-[10px] border text-[#52525B] border-white/5">+{tech.length - 3}</span>}
      </div>
      <div className="flex items-center justify-between text-[10px] text-[#3F3F46]">
        <span>{lang}</span>
        <span>{date}</span>
      </div>
    </motion.div>
  )
}

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
          <p className="text-[#A1A1AA] max-w-lg mx-auto text-sm">
            Side projects built to solve developer problems, explore AI integrations, and practice full-stack skills.
          </p>
        </motion.div>

        {/* Featured — 3 large cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((p, i) => (
            <FeaturedCard key={p.name} project={p} index={i} inView={inView} />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex-1 section-divider" />
          <span className="text-[#52525B] text-xs uppercase tracking-widest font-medium">More Projects</span>
          <div className="flex-1 section-divider" />
        </motion.div>

        {/* More — 4 compact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {more.map((p, i) => (
            <MoreCard key={p.name} project={p} index={i} inView={inView} />
          ))}
        </div>

        {/* Portfolio + GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          <div className="glass rounded-xl p-4 border border-white/7 flex items-center justify-between gap-3">
            <div>
              <div className="font-heading font-semibold text-sm">This Portfolio</div>
              <div className="text-[#52525B] text-xs mt-0.5">Vite · React · Tailwind · Framer Motion</div>
            </div>
            <a href="https://github.com/Ajain0311/portfolio" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 glass hover:bg-white/8 rounded-lg text-xs text-[#A1A1AA] hover:text-white transition-all"
            >
              <FaGithub size={13} /> Source
            </a>
          </div>
          <a
            href="https://github.com/Ajain0311?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-4 border border-[#2563EB]/20 hover:border-[#2563EB]/40 hover:bg-[#2563EB]/5 flex items-center justify-between gap-3 transition-all duration-300 group"
          >
            <div>
              <div className="font-heading font-semibold text-sm text-[#60A5FA]">View All 20 Repos</div>
              <div className="text-[#52525B] text-xs mt-0.5">github.com/Ajain0311</div>
            </div>
            <FaGithub className="text-[#52525B] group-hover:text-[#60A5FA] transition-colors" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
