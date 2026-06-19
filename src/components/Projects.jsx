import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaJava, FaCopy, FaCheck, FaKey } from 'react-icons/fa'
import { SiRedis, SiSpringboot, SiGooglegemini, SiStreamlit } from 'react-icons/si'
import { MdDashboard } from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'

/* =============================================
   DATA
   ============================================= */

const featured = [
  {
    name: 'Cachers',
    tagline: 'Redis-Inspired Caching & Key-Value Platform',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    gradient: 'from-red-500/20 via-red-500/5 to-transparent',
    accent: '#EF4444',
    accentBg: 'bg-red-500/10',
    accentText: 'text-red-400',
    icon: SiRedis,
    tech: ['JavaScript', 'HTML', 'CSS', 'Redis', 'REST'],
    desc: 'A Redis-inspired caching and key-value storage platform with a clean interface for managing and visualizing cached data efficiently.',
    bullets: [
      'Clean dashboard for visualizing key-value pairs with TTL configuration and expiry management.',
      'Real-time cache inspection, search/filter, and bulk delete without any CLI dependency.',
      'Fills the key-management gap in native Redis tooling with a developer-friendly browser UI.',
    ],
    github: null,
    live: 'https://cachers.netlify.app',
  },
  {
    name: 'AttendTrack',
    tagline: 'Role-Based Attendance Management System',
    status: 'Live',
    statusColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    gradient: 'from-violet-500/20 via-violet-500/5 to-transparent',
    accent: '#8B5CF6',
    accentBg: 'bg-violet-500/10',
    accentText: 'text-violet-400',
    icon: HiUsers,
    tech: ['React', 'Node.js', 'JWT', 'RBAC', 'MySQL'],
    desc: 'A role-based attendance management system with dedicated dashboards for admins, managers, and employees — including tracking, reporting, and workforce insights.',
    bullets: [
      'Four-tier role system: Super Admin, Admin, Manager, and User dashboards with scoped access.',
      'Real-time attendance tracking with analytics, custom date ranges, and reporting.',
      'Intuitive attendance visualization, bulk mark operations, and CSV export.',
    ],
    github: null,
    live: 'https://untracked.netlify.app',
    credentials: {
      'super admin': { email: 'superadmin@trackme.com', password: 'SuperAdmin@123' },
      admin:         { email: 'admin@trackme.com',      password: 'Admin@123'      },
      manager:       { email: 'manager@trackme.com',    password: 'Manager@123'    },
      user:          { email: 'user@trackme.com',       password: 'User@123'       },
    },
  },
  {
    name: 'YTXpert',
    tagline: 'AI-Powered YouTube Content Generation',
    status: 'Live',
    statusColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    gradient: 'from-rose-500/20 via-rose-500/5 to-transparent',
    accent: '#F43F5E',
    accentBg: 'bg-rose-500/10',
    accentText: 'text-rose-400',
    icon: SiGooglegemini,
    tech: ['Python', 'Streamlit', 'Gemini AI', 'YouTube API'],
    desc: 'AI-powered YouTube content generation platform that creates scripts, voiceovers, and video-ready content to dramatically accelerate the content creation workflow.',
    bullets: [
      'Generates complete YouTube scripts, optimized titles, descriptions, and SEO tags with AI.',
      'Streamlit-based interface designed for rapid content iteration and one-click export.',
      'Accelerates creator workflow from ideation to publication-ready output in minutes.',
    ],
    github: null,
    live: 'https://ytxpert.streamlit.app',
  },
]

const more = [
  {
    name: 'RedisCache-UI',
    desc: 'Standalone browser-based Redis key management tool — inspect, search, filter, and delete cache entries without any CLI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Redis'],
    icon: SiRedis,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
    github: 'https://github.com/Ajain0311/RedisCache-UI',
    lang: 'JavaScript',
    date: 'Mar 2025',
  },
  {
    name: 'Gemini Spring Boot API',
    desc: 'JWT-secured Spring Boot REST API backend with Google Gemini AI integration — token auth, clean architecture, and AI endpoints.',
    tech: ['Java', 'Spring Boot', 'JWT', 'Gemini AI'],
    icon: SiSpringboot,
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10',
    github: 'https://github.com/Ajain0311/Gemini_Springboot_backend',
    lang: 'Java',
    date: 'Feb 2025',
  },
  {
    name: 'Daily GitHub Pusher',
    desc: 'Scheduled Render.com service — Gemini API generates production-quality code daily and auto-pushes across Python, Java, JS, and C++ repos.',
    tech: ['Python', 'Gemini API', 'GitHub API', 'Render'],
    icon: SiGooglegemini,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    github: 'https://github.com/Ajain0311/daily-github-pusher',
    lang: 'Python',
    date: 'Ongoing',
  },
  {
    name: 'Employee Management',
    desc: 'Full-stack Java internship project — employee CRUD with Spring Boot REST API backend and a web UI frontend.',
    tech: ['Java', 'Spring Boot', 'HTML', 'CSS'],
    icon: MdDashboard,
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    github: 'https://github.com/Ajain0311/emp-mgmt-system',
    lang: 'Java',
    date: 'Nov 2024',
  },
]

/* =============================================
   CREDENTIAL PANEL (AttendTrack)
   ============================================= */

function CredentialPanel({ credentials }) {
  const [active, setActive]   = useState('admin')
  const [copied, setCopied]   = useState(null)

  const roles = Object.keys(credentials)
  const cred  = credentials[active]

  const copy = (text, field) => {
    navigator.clipboard.writeText(text).catch(() => {})
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.22 }}
      className="overflow-hidden"
    >
      <div className="pt-4 mt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="flex items-center gap-2 mb-3">
          <FaKey size={10} className="text-violet-400 flex-shrink-0" />
          <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: 'var(--text-dimmer)' }}>
            Demo Credentials
          </span>
        </div>

        {/* Role tabs */}
        <div className="flex gap-1 mb-3">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => setActive(r)}
              className={`px-2.5 py-1 rounded-md text-[10px] font-semibold capitalize transition-all duration-150 ${
                active === r
                  ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                  : 'border border-transparent hover:border-white/10'
              }`}
              style={active !== r ? { color: 'var(--text-dimmer)' } : {}}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Fields */}
        <div className="space-y-1.5">
          {([['email', cred.email], ['password', cred.password]]).map(([key, val]) => (
            <div
              key={key}
              className="flex items-center justify-between gap-3 rounded-lg px-3 py-2"
              style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)' }}
            >
              <div className="min-w-0">
                <div className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-dimmer)' }}>
                  {key}
                </div>
                <div className="font-mono text-xs font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                  {val}
                </div>
              </div>
              <button
                onClick={() => copy(val, `${active}-${key}`)}
                title={`Copy ${key}`}
                className="flex-shrink-0 p-1.5 rounded-md transition-all duration-150 hover:bg-violet-500/10"
                style={{ color: copied === `${active}-${key}` ? '#34D399' : 'var(--text-dimmer)' }}
              >
                {copied === `${active}-${key}` ? <FaCheck size={9} /> : <FaCopy size={9} />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* =============================================
   FEATURED CARD
   ============================================= */

function FeaturedCard({ project, index, inView }) {
  const {
    name, tagline, status, statusColor, gradient,
    accent, accentBg, accentText, icon: Icon,
    tech, desc, bullets, github, live, credentials,
  } = project

  const [showCreds, setShowCreds] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.12 }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl overflow-hidden transition-all duration-300 group hover:shadow-2xl"
      style={{ border: '1px solid var(--border-subtle)' }}
    >
      {/* Card header gradient band */}
      <div className={`bg-gradient-to-br ${gradient} p-6 pb-4 relative overflow-hidden`}>
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 75% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)' }}
        />
        <div className="flex items-start justify-between gap-3 relative">
          <div className={`p-3 ${accentBg} rounded-xl`} style={{ border: '1px solid var(--border-medium)' }}>
            <Icon className={accentText} size={22} />
          </div>
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border uppercase tracking-wider ${statusColor}`}>
            {status}
          </span>
        </div>
        <h3 className="font-heading font-bold text-xl mt-4" style={{ color: 'var(--text-primary)' }}>
          {name}
        </h3>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{tagline}</p>
      </div>

      <div className="p-6 pt-5 flex flex-col gap-4">
        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium"
              style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <span className={`${accentText} flex-shrink-0 mt-[3px] text-[10px]`}>▹</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Credentials (AttendTrack only) */}
        {credentials && (
          <AnimatePresence>
            {showCreds && <CredentialPanel credentials={credentials} />}
          </AnimatePresence>
        )}

        {/* Actions */}
        <div
          className="flex items-center gap-2 pt-4 flex-wrap"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: `${accent}18`,
                color: accent,
                border: `1px solid ${accent}30`,
              }}
            >
              <FaExternalLinkAlt size={11} /> Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm transition-all duration-200"
              style={{ color: 'var(--text-secondary)' }}
            >
              <FaGithub size={14} /> GitHub
            </a>
          )}
          {credentials && (
            <button
              onClick={() => setShowCreds((v) => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ml-auto"
              style={{
                background: showCreds ? 'rgba(139,92,246,0.15)' : 'var(--bg-card-hover)',
                color: showCreds ? '#A78BFA' : 'var(--text-dimmer)',
                border: `1px solid ${showCreds ? 'rgba(139,92,246,0.3)' : 'var(--border-subtle)'}`,
              }}
            >
              <FaKey size={10} />
              {showCreds ? 'Hide Credentials' : 'Demo Access'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* =============================================
   MORE CARD
   ============================================= */

function MoreCard({ project, index, inView }) {
  const { name, desc, tech, icon: Icon, iconColor, iconBg, github, lang, date } = project
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.5 + index * 0.09 }}
      whileHover={{ y: -3 }}
      className="glass glow-card rounded-xl p-5 flex flex-col transition-all duration-300"
      style={{ border: '1px solid var(--border-subtle)' }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className={`p-2.5 ${iconBg} rounded-xl`}>
          <Icon className={iconColor} size={16} />
        </div>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 glass rounded-lg transition-all duration-200 hover:scale-105"
          style={{ color: 'var(--text-dimmer)' }}
          aria-label="GitHub"
        >
          <FaGithub size={14} />
        </a>
      </div>
      <h4 className="font-heading font-semibold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
        {name}
      </h4>
      <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md text-[10px]"
            style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', background: 'var(--bg-card-hover)' }}
          >
            {t}
          </span>
        ))}
        {tech.length > 3 && (
          <span
            className="px-2 py-0.5 rounded-md text-[10px]"
            style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-dimmest)' }}
          >
            +{tech.length - 3}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between text-[10px]" style={{ color: 'var(--text-dimmest)' }}>
        <span>{lang}</span>
        <span>{date}</span>
      </div>
    </motion.div>
  )
}

/* =============================================
   SECTION
   ============================================= */

export default function Projects() {
  const ref    = useRef(null)
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
          <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Side projects built to solve real developer problems, explore AI integrations, and practice full-stack skills end-to-end.
          </p>
        </motion.div>

        {/* Featured — 3 full cards */}
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
          <span
            className="text-xs uppercase tracking-widest font-medium"
            style={{ color: 'var(--text-dimmer)' }}
          >
            More Projects
          </span>
          <div className="flex-1 section-divider" />
        </motion.div>

        {/* More — 4 compact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {more.map((p, i) => (
            <MoreCard key={p.name} project={p} index={i} inView={inView} />
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          <div
            className="glass rounded-xl p-4 flex items-center justify-between gap-3"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <div>
              <div className="font-heading font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                This Portfolio
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-dimmer)' }}>
                Vite · React · Tailwind · Framer Motion
              </div>
            </div>
            <a
              href="https://github.com/Ajain0311/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 glass rounded-lg text-xs transition-all hover:scale-105"
              style={{ color: 'var(--text-secondary)' }}
            >
              <FaGithub size={13} /> Source
            </a>
          </div>
          <a
            href="https://github.com/Ajain0311?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-4 border-[#2563EB]/20 hover:border-[#2563EB]/40 hover:bg-[#2563EB]/5 flex items-center justify-between gap-3 transition-all duration-300 group"
            style={{ border: '1px solid rgba(37,99,235,0.2)' }}
          >
            <div>
              <div className="font-heading font-semibold text-sm text-[#60A5FA]">View All 20+ Repos</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-dimmer)' }}>
                github.com/Ajain0311
              </div>
            </div>
            <FaGithub className="text-[#52525B] group-hover:text-[#60A5FA] transition-colors" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
