import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: 'https://github.com/Ajain0311', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aditya-jain-0311ajain/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/ad_jain311/', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#1F1F1F] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
          <span className="font-heading font-bold text-white">
            AD<span className="text-[#2563EB]">.</span>
          </span>
          <span className="hidden sm:block text-[#3F3F46]">·</span>
          <span className="text-[#52525B] text-sm">
            © 2025 Aditya Dhing — Crafted with{' '}
            <FaHeart className="inline text-red-500 text-xs mx-0.5" />
            {' '}in Udaipur
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#3F3F46] hover:text-white transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="ml-1 p-2 glass hover:bg-[#2563EB]/20 rounded-lg text-[#3F3F46] hover:text-[#60A5FA] transition-all duration-200"
          >
            <FaArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}
