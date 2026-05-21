import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'C++', level: 95, color: '#3B82F6' },
  { name: 'HTML5', level: 90, color: '#E34F26' },
  { name: 'C Language', level: 85, color: '#6EA6D2' },
  { name: 'Java', level: 85, color: '#F89820' },
  { name: 'CSS3', level: 80, color: '#1572B6' },
  { name: 'MySQL', level: 80, color: '#00758F' },
  { name: 'Python', level: 75, color: '#3776AB' },
  { name: 'JavaScript', level: 70, color: '#F7DF1E' },
  { name: 'Flutter', level: 25, color: '#54C5F8' },
]

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Git & GitHub', category: 'DevOps' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Linux', category: 'OS' },
  { name: 'OOP', category: 'Concept' },
  { name: 'DSA', category: 'Concept' },
  { name: 'VS Code', category: 'Tool' },
  { name: 'Figma', category: 'Design' },
]

const stats = [
  { value: '8.91', suffix: '/10', label: 'CGPA' },
  { value: '1', suffix: '', label: 'Internship' },
  { value: '4', suffix: 'yr', label: 'Study' },
  { value: '5+', suffix: '', label: 'Languages' },
]

function SkillBar({ name, level, color, index, inView }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[#E4E4E7]">{name}</span>
        <span className="text-xs text-[#71717A]">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#27272A] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: 0.05 + index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
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
      <div className="absolute inset-0 bg-[#18181B]/40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-[#2563EB]">Skills</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#2563EB] mx-auto mb-4" />
          <p className="text-[#A1A1AA] max-w-md mx-auto text-sm">
            Technologies and tools I've worked with throughout my academic and professional journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <h3 className="font-heading font-semibold text-lg mb-6">Programming Languages</h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} inView={inView} />
            ))}
          </motion.div>

          {/* Tech stack + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Stats bento grid */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">At a Glance</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, suffix, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="glass rounded-2xl p-5 text-center hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="font-heading font-bold text-3xl text-[#2563EB]">
                      {value}
                      <span className="text-lg text-[#3B82F6]">{suffix}</span>
                    </div>
                    <div className="text-[#71717A] text-xs mt-1 uppercase tracking-wider">{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech badges */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-5">Additional Technologies</h3>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map(({ name, category }, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 glass rounded-lg text-sm text-[#A1A1AA] hover:text-white hover:bg-[#2563EB]/15 hover:border-[#2563EB]/30 transition-all duration-200 cursor-default"
                    title={category}
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
