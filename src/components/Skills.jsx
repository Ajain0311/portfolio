import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaServer, FaDatabase, FaCloud, FaCode } from 'react-icons/fa'

const categories = [
  {
    icon: FaServer,
    label: 'Backend',
    accent: 'blue',
    borderHover: 'glow-card',
    items: ['.NET Core / .NET 8', 'Spring Boot', 'JWT / OAuth2', 'RBAC', 'SignalR', 'REST APIs', 'Serilog'],
  },
  {
    icon: FaCode,
    label: 'Frontend',
    accent: 'cyan',
    borderHover: 'glow-card-cyan',
    items: ['React.js', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: FaDatabase,
    label: 'Databases',
    accent: 'purple',
    borderHover: 'glow-card-purple',
    items: ['MySQL', 'SQL Server', 'OracleDB', 'Redis'],
  },
  {
    icon: FaCloud,
    label: 'Cloud & DevOps',
    accent: 'amber',
    borderHover: 'glow-card-amber',
    items: ['Azure Blob Storage', 'MinIO', 'Git / GitHub', 'Grafana', 'Loki', 'Postman'],
  },
]

const languages = [
  { name: 'C#', level: 90, color: '#818CF8' },
  { name: 'Java', level: 82, color: '#F89820' },
  { name: 'JavaScript', level: 76, color: '#F7DF1E' },
  { name: 'C++', level: 72, color: '#6EA6D2' },
  { name: 'Python', level: 65, color: '#3776AB' },
]

const accentStyles = {
  blue:   { icon: 'text-[#2563EB]', bg: 'bg-[#2563EB]/10', badge: 'bg-[#2563EB]/10 text-[#93C5FD] border-[#2563EB]/20' },
  cyan:   { icon: 'text-[#06B6D4]', bg: 'bg-[#06B6D4]/10', badge: 'bg-[#06B6D4]/10 text-[#67E8F9] border-[#06B6D4]/20' },
  purple: { icon: 'text-[#A78BFA]', bg: 'bg-[#7C3AED]/10', badge: 'bg-[#7C3AED]/10 text-[#C4B5FD] border-[#7C3AED]/20' },
  amber:  { icon: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10', badge: 'bg-[#F59E0B]/10 text-[#FCD34D] border-[#F59E0B]/20' },
}

function LangBar({ name, level, color, index, inView }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[#E4E4E7]">{name}</span>
        <span className="text-xs text-[#52525B]">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#27272A] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: 0.1 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#18181B]/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-3">What I Work With</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Tech <span className="gradient-text-blue">Stack</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mx-auto mb-4" />
          <p className="text-[#A1A1AA] max-w-md mx-auto text-sm">
            Technologies and tools I work with daily to build production-grade software.
          </p>
        </motion.div>

        {/* Category cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {categories.map(({ icon: Icon, label, accent, borderHover, items }, ci) => {
            const s = accentStyles[accent]
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
                className={`glass ${borderHover} rounded-2xl p-5 transition-all duration-300`}
              >
                <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={s.icon} size={18} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-4">{label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-medium border ${s.badge}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Language proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="font-heading font-semibold text-lg mb-7">
            Language Proficiency
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {languages.map((lang, i) => (
              <LangBar key={lang.name} {...lang} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
