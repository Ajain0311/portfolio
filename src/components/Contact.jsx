import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaPaperPlane, FaTwitter, FaStackOverflow, FaDownload } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'

const contactInfo = [
  { icon: FaEnvelope,     label: 'Email',    value: 'adityajain8875389629@gmail.com', href: 'mailto:adityajain8875389629@gmail.com' },
  { icon: FaPhone,        label: 'Phone',    value: '+91 6375002348',                 href: 'tel:+916375002348' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Udaipur, Rajasthan, India',      href: null },
]

const socials = [
  { icon: FaLinkedin,     href: 'https://www.linkedin.com/in/aditya-jain-0311ajain/',  label: 'LinkedIn',      color: 'hover:text-[#0A66C2]' },
  { icon: FaGithub,       href: 'https://github.com/Ajain0311',                        label: 'GitHub',        color: 'hover:text-white' },
  { icon: SiHackerrank,   href: 'https://www.hackerrank.com/adityajain887531',         label: 'HackerRank',    color: 'hover:text-[#2EC866]' },
  { icon: FaStackOverflow,href: 'https://stackoverflow.com/users/aditya_jain_311',    label: 'StackOverflow', color: 'hover:text-[#F48024]' },
  { icon: FaTwitter,      href: 'https://twitter.com/ajain0311',                       label: 'Twitter/X',     color: 'hover:text-[#1DA1F2]' },
  { icon: FaInstagram,    href: 'https://www.instagram.com/ad_jain311/',               label: 'Instagram',     color: 'hover:text-[#E1306C]' },
]

const inputCls =
  'w-full px-4 py-3 bg-[#18181B] border border-[#3F3F46] rounded-xl text-white text-sm placeholder-[#3F3F46] focus:outline-none focus:border-[#2563EB] focus:bg-[#1D1D20] transition-all duration-200'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-3">Let's Work Together</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="gradient-text-blue">Touch</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mx-auto mb-5" />
          <p className="text-[#A1A1AA] max-w-md mx-auto text-sm">
            Open to new opportunities, collaborations, and interesting problems. Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 glass glow-card rounded-xl p-4 border border-white/7 group transition-all duration-300">
                <div className="p-3 bg-[#2563EB]/10 group-hover:bg-[#2563EB]/20 rounded-xl flex-shrink-0 transition-colors">
                  <Icon className="text-[#2563EB]" size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-[#52525B] text-[10px] uppercase tracking-wider mb-0.5">{label}</div>
                  {href
                    ? <a href={href} className="text-white text-sm hover:text-[#60A5FA] transition-colors truncate block">{value}</a>
                    : <div className="text-white text-sm truncate">{value}</div>}
                </div>
              </div>
            ))}

            {/* Social grid */}
            <div className="glass rounded-xl p-5 border border-white/7">
              <p className="text-[#52525B] text-[10px] uppercase tracking-wider mb-4">Find me on</p>
              <div className="grid grid-cols-3 gap-2">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className={`flex items-center justify-center gap-1.5 py-2.5 glass rounded-xl text-[#52525B] ${color} transition-all duration-200 text-xs font-medium`}
                  >
                    <Icon size={14} />
                    <span className="hidden sm:inline">{label.split('/')[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <a
              href="https://drive.google.com/file/d/13G3wiPROzX_roWNsg1C-QkkUuBtKVHYT/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 glass rounded-xl p-4 border border-[#2563EB]/20 hover:border-[#2563EB]/40 hover:bg-[#2563EB]/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#2563EB]/10 group-hover:bg-[#2563EB]/20 rounded-xl transition-colors">
                  <FaDownload className="text-[#2563EB]" size={14} />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Download Resume</div>
                  <div className="text-[#52525B] text-xs">View full CV on Google Drive</div>
                </div>
              </div>
              <span className="text-[#2563EB] text-sm group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <div className="glass rounded-xl p-4 border-l-2 border-[#2563EB] border border-white/7">
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Currently <span className="text-green-400 font-medium">full-time @ E-Connect Solutions</span> — open
                to freelance, side projects, and future opportunities. Response within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            action="https://formsubmit.co/adityajain8875389629@gmail.com"
            method="POST"
            className="glass rounded-2xl p-6 space-y-4 border border-white/7"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Portfolio Contact — Aditya Dhing" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#71717A] text-[10px] uppercase tracking-wider mb-2">Name</label>
                <input type="text" name="name" required placeholder="John Doe" className={inputCls} />
              </div>
              <div>
                <label className="block text-[#71717A] text-[10px] uppercase tracking-wider mb-2">Email</label>
                <input type="email" name="email" required placeholder="john@example.com" className={inputCls} />
              </div>
            </div>

            <div>
              <label className="block text-[#71717A] text-[10px] uppercase tracking-wider mb-2">Subject</label>
              <input type="text" name="subject" placeholder="Job Opportunity / Freelance / Collaboration" className={inputCls} />
            </div>

            <div>
              <label className="block text-[#71717A] text-[10px] uppercase tracking-wider mb-2">Message</label>
              <textarea name="message" required rows={6} placeholder="Tell me about the role or project…" className={`${inputCls} resize-none`} />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 bg-[#2563EB] hover:bg-[#3B82F6] rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#2563EB]/30"
            >
              <FaPaperPlane size={13} /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
