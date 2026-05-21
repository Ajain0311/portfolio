import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaAward } from 'react-icons/fa'

const education = [
  {
    degree: 'Bachelor of Technology — CSE',
    institution: 'Geetanjali Institute of Technical Studies',
    location: 'Udaipur, Rajasthan',
    period: '2021 – 2025',
    gpa: '8.91 / 10',
    desc: 'Coursework: Data Structures & Algorithms, Software Engineering, Database Management Systems, Web Development, OOP, Computer Networks.',
  },
]

const experience = [
  {
    title: 'Software Development Intern',
    company: 'Bharat Intern',
    type: 'Virtual Internship',
    period: 'Summer 2024',
    bullets: [
      'Completed a virtual internship focused on building hands-on development skills.',
      'Gained practical experience with programming languages and modern development tools.',
      'Worked on real-world software development tasks and deliverables.',
    ],
  },
]

function TimelineCard({ children, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.15, ease: 'easeOut' }}
      className="relative pl-10 pb-6 last:pb-0"
    >
      {/* Vertical line */}
      <div className="absolute left-3 top-3 bottom-0 w-px bg-gradient-to-b from-[#2563EB]/60 to-transparent" />
      {/* Dot */}
      <div className="absolute left-[7px] top-3 w-2.5 h-2.5 bg-[#2563EB] rounded-full ring-4 ring-[#09090B] z-10" />

      {children}
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-3">My Journey</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Education &{' '}
            <span className="text-[#2563EB]">Experience</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#2563EB] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 bg-[#2563EB]/10 rounded-xl">
                <FaGraduationCap className="text-[#2563EB]" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-xl">Education</h3>
            </motion.div>

            {education.map((item, i) => (
              <TimelineCard key={i} index={i} inView={inView}>
                <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h4 className="font-heading font-semibold text-base">{item.degree}</h4>
                      <p className="text-[#2563EB] font-medium text-sm mt-0.5">{item.institution}</p>
                      <div className="flex items-center gap-1 text-[#71717A] text-xs mt-1">
                        <FaMapMarkerAlt size={10} />
                        {item.location}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="inline-block px-2.5 py-1 bg-[#2563EB]/10 text-[#60A5FA] rounded-lg text-xs font-medium">
                        {item.period}
                      </span>
                      <div className="flex items-center gap-1 justify-end mt-2">
                        <FaAward className="text-yellow-500" size={10} />
                        <span className="text-white font-semibold text-sm">{item.gpa}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </TimelineCard>
            ))}
          </div>

          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 bg-[#2563EB]/10 rounded-xl">
                <FaBriefcase className="text-[#2563EB]" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-xl">Experience</h3>
            </motion.div>

            {experience.map((item, i) => (
              <TimelineCard key={i} index={i} inView={inView}>
                <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h4 className="font-heading font-semibold text-base">{item.title}</h4>
                      <p className="text-[#2563EB] font-medium text-sm mt-0.5">{item.company}</p>
                      <div className="text-[#71717A] text-xs mt-1">{item.type}</div>
                    </div>
                    <span className="flex-shrink-0 inline-block px-2.5 py-1 bg-[#2563EB]/10 text-[#60A5FA] rounded-lg text-xs font-medium">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-[#A1A1AA] text-sm">
                        <span className="text-[#2563EB] flex-shrink-0 mt-0.5">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </TimelineCard>
            ))}

            {/* Certifications note */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-6 glass rounded-2xl p-5 border-l-2 border-[#2563EB]"
            >
              <p className="text-[#A1A1AA] text-sm">
                <span className="text-white font-medium">Actively learning</span> — currently
                exploring full-stack development, system design, and competitive programming to
                expand my expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
