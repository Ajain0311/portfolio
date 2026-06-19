import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaBook, FaExternalLinkAlt } from 'react-icons/fa'
import { SiDotnet, SiSpringboot, SiGooglegemini, SiRedis, SiStreamlit } from 'react-icons/si'
import { MdGpsFixed } from 'react-icons/md'
import { useTheme } from '../contexts/ThemeContext'

const quickStats = [
  { icon: FaBook,        value: '20',  label: 'Public Repos',  color: 'text-[#2563EB]' },
  { icon: FaUsers,       value: '10',  label: 'Followers',     color: 'text-[#7C3AED]' },
  { icon: FaStar,        value: '20+', label: 'Repos Created', color: 'text-[#F59E0B]' },
  { icon: FaCodeBranch,  value: '3+',  label: 'Languages',     color: 'text-[#06B6D4]' },
]

const focus = [
  {
    icon: SiDotnet,
    label: 'Enterprise APIs',
    desc: '.NET Core · Spring Boot · JWT · REST',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: SiGooglegemini,
    label: 'AI Integrations',
    desc: 'Gemini API · Python · AI Automation',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: SiRedis,
    label: 'Data & Caching',
    desc: 'Redis · OracleDB · SQL Server · MySQL',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: MdGpsFixed,
    label: 'Real-time Systems',
    desc: 'SignalR · WebSockets · GPS/WiFi APIs',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
]

const notableRepos = [
  {
    name: 'daily-github-pusher',
    desc: 'Scheduled AI service — Gemini API generates & auto-pushes production code daily across multiple languages.',
    tech: ['Python', 'Gemini API', 'Render'],
    icon: SiGooglegemini,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    url: 'https://github.com/Ajain0311/daily-github-pusher',
    status: 'Live on Render',
    statusColor: 'text-emerald-400 bg-emerald-400/10',
  },
  {
    name: 'RedisCache-UI',
    desc: 'Browser-based Redis management dashboard — inspect, search, filter, and manage cache keys without the CLI.',
    tech: ['JavaScript', 'HTML', 'Redis'],
    icon: SiRedis,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    url: 'https://github.com/Ajain0311/RedisCache-UI',
    status: 'Completed',
    statusColor: 'text-blue-400 bg-blue-400/10',
  },
  {
    name: 'Gemini_Springboot_backend',
    desc: 'JWT-secured Spring Boot REST API with Google Gemini AI — clean architecture, auth middleware, and AI endpoints.',
    tech: ['Java', 'Spring Boot', 'Gemini AI'],
    icon: SiSpringboot,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    url: 'https://github.com/Ajain0311/Gemini_Springboot_backend',
    status: 'Completed',
    statusColor: 'text-blue-400 bg-blue-400/10',
  },
  {
    name: 'Track__onMe',
    desc: 'GPS & WiFi attendance tracking system built with an offline-first approach — queues actions, auto-syncs on reconnect.',
    tech: ['Node.js', 'GPS API', 'LocalStorage'],
    icon: MdGpsFixed,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    url: 'https://github.com/Ajain0311/Track__onMe',
    status: 'Active Dev',
    statusColor: 'text-yellow-400 bg-yellow-400/10',
  },
]

function StatImg({ src, alt, priority }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ minHeight: '150px' }}>
      {!loaded && (
        <div
          className="absolute inset-0 glass rounded-xl animate-pulse flex items-center justify-center"
        >
          <span className="text-xs" style={{ color: 'var(--text-dimmest)' }}>Loading stats…</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto rounded-xl transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default function GitHubStats() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()

  const user    = 'Ajain0311'
  const isDark  = theme === 'dark'
  const imgTheme     = isDark ? 'github_dark'        : 'default'
  const streakTheme  = isDark ? 'github-dark-blue'   : 'github-light-blue'
  const activityTheme = isDark ? 'github-compact'    : 'github-light'
  const bgColor = isDark ? '0d1117' : (theme === 'soft-light' ? 'F5F2ED' : 'F9F9FB')

  const statsBase    = 'https://github-readme-stats.vercel.app/api'
  const streakBase   = 'https://github-readme-streak-stats.herokuapp.com'
  const activityBase = 'https://github-readme-activity-graph.vercel.app/graph'

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-3">Open Source</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            GitHub <span className="gradient-text-blue">Activity</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mx-auto mb-4" />
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Active on GitHub since Sep 2022 — from web basics to AI automation and enterprise systems.
          </p>
        </motion.div>

        {/* Quick stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        >
          {quickStats.map(({ icon: Icon, value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.07 }}
              className="glass glow-card rounded-2xl p-5 text-center transition-all duration-300"
              style={{ border: '1px solid var(--border-subtle)' }}
            >
              <Icon className={`${color} mx-auto mb-2`} size={18} />
              <div className={`font-heading font-bold text-2xl ${color} number-glow`}>{value}</div>
              <div className="text-xs mt-1 uppercase tracking-wider" style={{ color: 'var(--text-dimmer)' }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats widgets */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="glass rounded-2xl p-4"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <StatImg
              src={`${statsBase}?username=${user}&show_icons=true&theme=${imgTheme}&hide_border=true&include_all_commits=true&count_private=true&rank_icon=github&bg_color=${bgColor}&title_color=2563eb&icon_color=3b82f6&text_color=${isDark ? 'a1a1aa' : '52525b'}&border_radius=12`}
              alt="GitHub Stats"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="glass rounded-2xl p-4"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <StatImg
              src={`${streakBase}/?user=${user}&theme=${streakTheme}&hide_border=true&ring=2563eb&fire=ff6b35&currStreakLabel=60a5fa&background=${bgColor}&dates=${isDark ? 'a1a1aa' : '71717a'}`}
              alt="GitHub Streak"
              priority
            />
          </motion.div>
        </div>

        {/* Top languages + Activity */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-4"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <StatImg
              src={`${statsBase}/top-langs/?username=${user}&layout=compact&theme=${imgTheme}&hide_border=true&langs_count=8&bg_color=${bgColor}&title_color=2563eb&text_color=${isDark ? 'a1a1aa' : '52525b'}&border_radius=12`}
              alt="Top Languages"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="md:col-span-2 glass rounded-2xl p-4"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <StatImg
              src={`${activityBase}?username=${user}&theme=${activityTheme}&hide_border=true&area=true&color=60a5fa&line=2563eb&point=388bfd&bg_color=${bgColor}&area_color=2563eb`}
              alt="Activity Graph"
            />
          </motion.div>
        </div>

        {/* Development Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mb-10"
        >
          <h3
            className="font-heading font-semibold text-lg mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Development Focus
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focus.map(({ icon: Icon, label, desc, color, bg, border }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.42 + i * 0.07 }}
                className={`glass rounded-xl p-4 border ${border} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className={color} size={15} />
                </div>
                <div className="font-heading font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                  {label}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Notable Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-8"
        >
          <h3
            className="font-heading font-semibold text-lg mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Notable Repositories
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {notableRepos.map(({ name, desc, tech, icon: Icon, color, bg, url, status, statusColor }, i) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.48 + i * 0.08 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-5 flex gap-4 transition-all duration-300 group hover:shadow-lg"
                style={{ border: '1px solid var(--border-subtle)' }}
              >
                <div className={`p-2.5 ${bg} rounded-xl flex-shrink-0 h-fit`}>
                  <Icon className={color} size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-heading font-semibold text-sm truncate" style={{ color: 'var(--text-primary)' }}>
                      {name}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider ${statusColor}`}>
                      {status}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[10px]"
                        style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-dimmer)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <FaExternalLinkAlt
                  size={10}
                  className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{ color: 'var(--text-secondary)' }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.a
          href="https://github.com/Ajain0311"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="flex items-center justify-between gap-4 glass rounded-2xl p-5 border-[#2563EB]/20 hover:border-[#2563EB]/40 hover:bg-[#2563EB]/5 transition-all duration-300 group"
          style={{ border: '1px solid rgba(37,99,235,0.2)' }}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#2563EB]/10 group-hover:bg-[#2563EB]/20 rounded-xl transition-colors">
              <FaGithub className="text-[#2563EB]" size={20} />
            </div>
            <div>
              <div className="font-heading font-semibold text-[#60A5FA]">github.com/Ajain0311</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-dimmer)' }}>
                20 public repos · Active since Sep 2022 · AI, Enterprise, Web
              </div>
            </div>
          </div>
          <span className="text-[#2563EB] text-sm font-medium group-hover:translate-x-1 transition-transform">
            Visit Profile →
          </span>
        </motion.a>
      </div>
    </section>
  )
}
