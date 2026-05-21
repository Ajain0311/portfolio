import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaAward, FaMapMarkerAlt, FaRobot, FaComments, FaCalendarAlt, FaTachometerAlt, FaMemory, FaCloudUploadAlt } from 'react-icons/fa'

const projectFeatures = [
  {
    product: 'EZSales Platform',
    subtitle: 'Internal Sales Management Tool',
    color: 'blue',
    items: [
      {
        icon: FaRobot,
        title: 'AI Tender/RFP PDF Parser',
        desc: 'Gemini 2.5 Flash + .NET Core — auto-extracts title, value, deadline & EMD into structured JSON, eliminating manual data entry.',
      },
      {
        icon: FaComments,
        title: 'Real-time Team Chat',
        desc: 'SignalR-powered chat with multi-format file sharing, @mention email notifications, role-based visibility & encrypted file transfers.',
      },
      {
        icon: FaCalendarAlt,
        title: 'Bid Calendar + Google OAuth2',
        desc: 'React + .NET Core + Oracle — daily/weekly views, color-coded statuses, auto-sync to users\' Google Calendars by role.',
      },
    ],
  },
  {
    product: 'Government Portal',
    subtitle: 'Confidential Citizen Services Platform',
    color: 'purple',
    items: [
      {
        icon: FaTachometerAlt,
        title: 'API Performance Optimization',
        desc: 'Profiled and resolved .NET Core API bottlenecks under high-concurrency government traffic, significantly reducing response times.',
      },
      {
        icon: FaMemory,
        title: 'In-Memory Cache Manager',
        desc: 'Custom web admin dashboard to inspect, filter, and bulk-delete cache keys across distributed services.',
      },
      {
        icon: FaCloudUploadAlt,
        title: 'Azure Blob Storage Migration',
        desc: 'Provider-agnostic storage abstraction — future provider swaps require only a config change, zero code refactoring.',
      },
    ],
  },
]

const certifications = [
  { name: 'RHCSA', full: 'Red Hat Certified Sys. Admin', date: 'Aug 2024', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  { name: 'DBMS NPTEL', full: 'NPTEL Certification', date: 'Feb 2023', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  { name: 'TCS Digital', full: 'Selected via NQT', date: '2024', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { name: 'R-CAT 100%', full: 'State Level Score', date: '2024', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
]

const colorMap = {
  blue: {
    dot: 'bg-[#2563EB]',
    line: 'from-[#2563EB]/60',
    tag: 'bg-[#2563EB]/10 text-[#60A5FA] border-[#2563EB]/20',
    icon: 'text-[#2563EB] bg-[#2563EB]/10',
    badge: 'bg-[#2563EB]/10 text-[#93C5FD] border-[#2563EB]/20',
    bullet: 'text-[#2563EB]',
    glow: 'glow-card',
  },
  purple: {
    dot: 'bg-[#7C3AED]',
    line: 'from-[#7C3AED]/60',
    tag: 'bg-[#7C3AED]/10 text-[#A78BFA] border-[#7C3AED]/20',
    icon: 'text-[#A78BFA] bg-[#7C3AED]/10',
    badge: 'bg-[#7C3AED]/10 text-[#C4B5FD] border-[#7C3AED]/20',
    bullet: 'text-[#A78BFA]',
    glow: 'glow-card-purple',
  },
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-3">My Journey</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Experience &{' '}
            <span className="gradient-text-blue">Education</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mx-auto" />
        </motion.div>

        {/* ── Professional Experience ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-[#2563EB]/10 rounded-xl">
              <FaBriefcase className="text-[#2563EB]" size={18} />
            </div>
            <h3 className="font-heading font-semibold text-xl">Professional Experience</h3>
          </div>

          {/* Company header card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass glow-card rounded-2xl p-6 mb-6 border border-white/7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-heading font-bold text-lg">Intern → Full Stack Developer</h4>
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md text-[10px] font-semibold uppercase tracking-wider">
                    Full-Time
                  </span>
                </div>
                <p className="text-[#2563EB] font-semibold text-base">E-Connect Solutions</p>
                <div className="flex items-center gap-1 text-[#71717A] text-xs mt-1">
                  <FaMapMarkerAlt size={9} /> Udaipur, Rajasthan
                </div>
              </div>
              <span className="px-3 py-1.5 bg-[#2563EB]/10 text-[#60A5FA] border border-[#2563EB]/20 rounded-lg text-xs font-semibold">
                Apr 2025 – Present
              </span>
            </div>
          </motion.div>

          {/* Product sub-cards */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projectFeatures.map(({ product, subtitle, color, items }, pi) => {
              const c = colorMap[color]
              return (
                <motion.div
                  key={product}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + pi * 0.12 }}
                  className={`glass ${c.glow} rounded-2xl p-5 border border-white/7 transition-all duration-300`}
                >
                  <div className="mb-5 pb-4 border-b border-white/5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h5 className="font-heading font-semibold text-sm">{product}</h5>
                      <span className={`px-2 py-0.5 text-[10px] font-semibold border rounded-md ${c.tag}`}>
                        {subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {items.map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="flex gap-3">
                        <div className={`w-8 h-8 ${c.icon} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Icon size={13} />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white mb-0.5">{title}</div>
                          <p className="text-[#A1A1AA] text-xs leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── Education + Certifications row ── */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-[#2563EB]/10 rounded-xl">
                <FaGraduationCap className="text-[#2563EB]" size={18} />
              </div>
              <h3 className="font-heading font-semibold text-xl">Education</h3>
            </div>

            <div className="glass glow-card rounded-2xl p-6 border border-white/7 transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h4 className="font-heading font-semibold text-base">B.Tech — Computer Science</h4>
                  <p className="text-[#2563EB] font-medium text-sm mt-0.5">Geetanjali Institute of Technical Studies</p>
                  <div className="flex items-center gap-1 text-[#71717A] text-xs mt-1">
                    <FaMapMarkerAlt size={9} /> Udaipur, Rajasthan
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 bg-[#2563EB]/10 text-[#60A5FA] border border-[#2563EB]/20 rounded-lg text-xs font-semibold">
                    2021 – 2025
                  </span>
                  <div className="flex items-center gap-1 justify-end mt-2">
                    <FaAward className="text-yellow-400" size={11} />
                    <span className="text-white font-bold text-sm">8.94 / 10</span>
                  </div>
                </div>
              </div>
              <p className="text-[#A1A1AA] text-xs leading-relaxed">
                Coursework: Data Structures & Algorithms, Software Engineering, DBMS, Web Development,
                OOP, Computer Networks
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-[#F59E0B]/10 rounded-xl">
                <FaAward className="text-[#F59E0B]" size={18} />
              </div>
              <h3 className="font-heading font-semibold text-xl">Certifications & Achievements</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {certifications.map(({ name, full, date, color, bg }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                  className={`glass rounded-xl p-4 border ${bg} transition-all duration-200 hover:-translate-y-0.5`}
                >
                  <div className={`font-heading font-bold text-sm ${color}`}>{name}</div>
                  <div className="text-[#A1A1AA] text-xs mt-0.5 leading-tight">{full}</div>
                  <div className="text-[#52525B] text-[10px] mt-1.5 uppercase tracking-wider">{date}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
