import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaServer, FaReact, FaCloud, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'
import { SiDotnet } from 'react-icons/si'

const whatIBuild = [
  {
    icon: SiDotnet,
    title: 'Enterprise Web Apps',
    desc: 'Building scalable .NET Core and Spring Boot APIs powering internal tools and government citizen portals.',
    accent: 'blue',
  },
  {
    icon: FaReact,
    title: 'React.js Frontends',
    desc: 'Crafting rich interactive dashboards and management UIs with React.js, real-time data, and smooth UX.',
    accent: 'cyan',
  },
  {
    icon: FaCloud,
    title: 'Cloud & Real-time Systems',
    desc: 'Integrating Azure Blob Storage, MinIO, SignalR, and OAuth2 flows into production-grade applications.',
    accent: 'purple',
  },
]

const accentMap = {
  blue: { bg: 'bg-[#2563EB]/10 group-hover:bg-[#2563EB]/20', icon: 'text-[#2563EB]' },
  cyan: { bg: 'bg-[#06B6D4]/10 group-hover:bg-[#06B6D4]/20', icon: 'text-[#06B6D4]' },
  purple: { bg: 'bg-[#7C3AED]/10 group-hover:bg-[#7C3AED]/20', icon: 'text-[#A78BFA]' },
}

const info = [
  { icon: FaEnvelope, label: 'Email', value: 'adityajain8875389629@gmail.com' },
  { icon: FaPhone, label: 'Phone', value: '+91 6375002348' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Udaipur, Rajasthan' },
  { icon: FaGraduationCap, label: 'Degree', value: 'B.Tech CSE, 8.94 CGPA' },
]

const stats = [
  { value: '1+', label: 'Year Experience', color: 'text-[#2563EB]' },
  { value: '2', label: 'Products Built', color: 'text-[#7C3AED]' },
  { value: '6+', label: 'Major Features', color: 'text-[#06B6D4]' },
  { value: '4', label: 'Certifications', color: 'text-[#F59E0B]' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-3">Who I Am</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text-blue">Me</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mx-auto" />
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {stats.map(({ value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
              className="glass glow-card rounded-2xl p-5 text-center"
            >
              <div className={`font-heading font-bold text-3xl sm:text-4xl ${color} number-glow`}>{value}</div>
              <div className="text-[#71717A] text-xs mt-1.5 uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio + info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Full Stack Developer · Enterprise Focus
            </h3>
            <p className="text-[#A1A1AA] leading-relaxed mb-4">
              Full Stack Developer with <span className="text-white font-medium">1+ year of experience</span> building
              enterprise web applications using .NET Core, Spring Boot, and React.js. Skilled in JWT/OAuth2
              authentication, RBAC, and relational databases.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed mb-4">
              Contributed across <span className="text-[#2563EB] font-medium">two parallel products</span> — an
              internal sales platform (EZSales) and a government citizen portal — delivering features, performance
              optimization, and architectural solutions in production environments.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed">
              B.Tech CSE graduate from Geetanjali Institute of Technical Studies, Udaipur, with a
              CGPA of <span className="text-[#2563EB] font-bold">8.94/10</span> and certifications
              including RHCSA and TCS Digital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/[0.06] transition-colors"
              >
                <div className="p-2.5 bg-[#2563EB]/10 rounded-xl flex-shrink-0">
                  <Icon className="text-[#2563EB]" size={15} />
                </div>
                <div className="min-w-0">
                  <div className="text-[#52525B] text-[10px] uppercase tracking-wider">{label}</div>
                  <div className="text-white text-sm font-medium truncate">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* What I Build */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-heading text-2xl font-semibold text-center mb-10">What I Build</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whatIBuild.map(({ icon: Icon, title, desc, accent }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`glass glow-card${accent === 'cyan' ? '-cyan' : accent === 'purple' ? '-purple' : ''} rounded-2xl p-6 transition-all duration-300 group cursor-default`}
              >
                <div className={`w-12 h-12 ${accentMap[accent].bg} rounded-xl flex items-center justify-center mb-5 transition-colors duration-300`}>
                  <Icon className={accentMap[accent].icon} size={22} />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">{title}</h4>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
