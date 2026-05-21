import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: 'https://github.com/Ajain0311', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aditya-jain-0311ajain/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/ad_jain311/', label: 'Instagram' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-[#27272A] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[#71717A] text-sm text-center sm:text-left">
          © 2025{' '}
          <span className="text-white font-medium">Aditya Jain</span>
          {' '}· Crafted with{' '}
          <FaHeart className="inline text-red-500 text-xs mx-0.5" />
          {' '}in Udaipur, Rajasthan
        </div>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#52525B] hover:text-white transition-colors duration-200"
            >
              <Icon size={17} />
            </a>
          ))}

          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="ml-2 p-2 glass hover:bg-[#2563EB]/20 rounded-lg text-[#52525B] hover:text-[#60A5FA] transition-all duration-200"
          >
            <FaArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
