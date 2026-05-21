import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaBook } from 'react-icons/fa'

const quickStats = [
  { icon: FaBook,       value: '20',  label: 'Public Repos',  color: 'text-[#2563EB]' },
  { icon: FaUsers,      value: '10',  label: 'Followers',     color: 'text-[#7C3AED]' },
  { icon: FaStar,       value: '20+', label: 'Repos Created', color: 'text-[#F59E0B]' },
  { icon: FaCodeBranch, value: '3+',  label: 'Languages',     color: 'text-[#06B6D4]' },
]

function StatImg({ src, alt, priority }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ minHeight: '150px' }}>
      {!loaded && (
        <div className="absolute inset-0 glass rounded-xl animate-pulse flex items-center justify-center">
          <span className="text-[#3F3F46] text-xs">Loading stats…</span>
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
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const statsBase = 'https://github-readme-stats.vercel.app/api'
  const streakBase = 'https://github-readme-streak-stats.herokuapp.com'
  const activityBase = 'https://github-readme-activity-graph.vercel.app/graph'
  const user = 'Ajain0311'
  const theme = 'github_dark'

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

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
          <p className="text-[#A1A1AA] text-sm max-w-md mx-auto">
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
              className="glass glow-card rounded-2xl p-5 text-center border border-white/7 transition-all duration-300"
            >
              <Icon className={`${color} mx-auto mb-2`} size={18} />
              <div className={`font-heading font-bold text-2xl ${color} number-glow`}>{value}</div>
              <div className="text-[#52525B] text-xs mt-1 uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats widgets */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="glass rounded-2xl p-4 border border-white/7"
          >
            <StatImg
              src={`${statsBase}?username=${user}&show_icons=true&theme=${theme}&hide_border=true&include_all_commits=true&count_private=true&rank_icon=github&bg_color=0d1117&title_color=2563eb&icon_color=3b82f6&text_color=a1a1aa&border_radius=12`}
              alt="GitHub Stats"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="glass rounded-2xl p-4 border border-white/7"
          >
            <StatImg
              src={`${streakBase}/?user=${user}&theme=github-dark-blue&hide_border=true&stroke=1f2937&ring=2563eb&fire=ff6b35&currStreakLabel=60a5fa&background=0d1117&dates=a1a1aa`}
              alt="GitHub Streak"
              priority
            />
          </motion.div>
        </div>

        {/* Top languages + Activity */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-4 border border-white/7"
          >
            <StatImg
              src={`${statsBase}/top-langs/?username=${user}&layout=compact&theme=${theme}&hide_border=true&langs_count=8&bg_color=0d1117&title_color=2563eb&text_color=a1a1aa&border_radius=12`}
              alt="Top Languages"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="md:col-span-2 glass rounded-2xl p-4 border border-white/7"
          >
            <StatImg
              src={`${activityBase}?username=${user}&theme=github-compact&hide_border=true&area=true&color=60a5fa&line=2563eb&point=388bfd&bg_color=0d1117&area_color=2563eb`}
              alt="Activity Graph"
            />
          </motion.div>
        </div>

        {/* GitHub CTA */}
        <motion.a
          href="https://github.com/Ajain0311"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className="flex items-center justify-between gap-4 glass rounded-2xl p-5 border border-[#2563EB]/20 hover:border-[#2563EB]/40 hover:bg-[#2563EB]/5 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#2563EB]/10 group-hover:bg-[#2563EB]/20 rounded-xl transition-colors">
              <FaGithub className="text-[#2563EB]" size={20} />
            </div>
            <div>
              <div className="font-heading font-semibold text-[#60A5FA]">github.com/Ajain0311</div>
              <div className="text-[#52525B] text-xs mt-0.5">20 public repos · Active since Sep 2022</div>
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
