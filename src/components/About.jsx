import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaMobileAlt, FaTerminal, FaGraduationCap, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa'

const interests = [
  {
    icon: FaCode,
    title: 'Web Development',
    desc: 'Building performant, accessible web experiences with modern frameworks and clean architecture.',
  },
  {
    icon: FaMobileAlt,
    title: 'App Development',
    desc: 'Creating cross-platform apps that solve real-world problems with intuitive UX.',
  },
  {
    icon: FaTerminal,
    title: 'Competitive Programming',
    desc: 'Solving complex algorithmic challenges and continuously sharpening problem-solving skills.',
  },
]

const info = [
  { icon: FaBirthdayCake, label: 'Birthday', value: '3 November 2004' },
  { icon: FaGraduationCap, label: 'Degree', value: 'B.Tech (CSE)' },
  { icon: FaPhone, label: 'Phone', value: '+91 6375002348' },
  { icon: FaEnvelope, label: 'Email', value: 'adityajain8875389629@gmail.com' },
  { icon: FaMapMarkerAlt, label: 'City', value: 'Udaipur, Rajasthan' },
  { label: 'Freelance', value: 'Available ✓', highlight: true },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-3">Who I Am</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-[#2563EB]">Me</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#2563EB] mx-auto" />
        </motion.div>

        {/* Bio + info grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading text-2xl font-semibold mb-4">
              B.Tech CSE Graduate & Aspiring Software Engineer
            </h3>
            <p className="text-[#A1A1AA] leading-relaxed mb-4">
              As a recent graduate in Computer Science from{' '}
              <span className="text-white font-medium">Geetanjali Institute of Technical Studies, Udaipur</span>,
              my passion for cutting-edge software development is matched only by my eagerness to make
              meaningful contributions to innovative projects.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed">
              Fueled by a comprehensive education (GPA:{' '}
              <span className="text-[#2563EB] font-bold">8.91/10</span>) and hands-on internship experience,
              I possess a solid foundation in programming and problem-solving. I'm seeking opportunities to
              apply and expand this knowledge as a dedicated software engineer.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-3"
          >
            {info.map(({ icon: Icon, label, value, highlight }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="glass rounded-xl p-4 hover:bg-white/[0.06] transition-colors group"
              >
                <div className="flex items-center gap-2 mb-1">
                  {Icon && <Icon className="text-[#2563EB] text-xs" />}
                  <span className="text-[#71717A] text-[11px] uppercase tracking-wider">{label}</span>
                </div>
                <div className={`text-sm font-medium truncate ${highlight ? 'text-green-400' : 'text-white'}`}>
                  {value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-heading text-2xl font-semibold text-center mb-10">
            What I'm Interested In
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 group-hover:bg-[#2563EB]/20 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="text-[#2563EB]" size={22} />
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
