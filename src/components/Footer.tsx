import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  MapPin,
  Globe,
  Phone,
  Twitter,
  Linkedin,
  Github,
  ArrowUpRight,
} from 'lucide-react'

const platformLinks = [
  { name: 'Policy Tracker', href: '/modules/policy-tracker' },
  { name: 'Trade Statistics', href: '/modules/trade-statistics' },
  { name: 'Post-Harvest Loss', href: '/modules/post-harvest-loss' },
  { name: 'Value Chain Analytics', href: '/modules/value-chain' },
  { name: 'AI Adoption', href: '/modules/ai-adoption' },
]

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Country Profiles', href: '/countries' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Subtle gradient overlay at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-trofi-500/40 to-transparent" />

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-trofi-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-16 pb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Trofi AgriTech"
                width={32}
                height={32}
                className="h-7 w-auto opacity-80"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight tracking-tight">
                  Trofi AgriTech
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-trofi-400 font-medium leading-none">
                  Agriculture Redefined
                </span>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-gray-400 max-w-sm">
              Africa&apos;s premier agriculture intelligence platform, delivering
              data-driven insights to transform farming, trade, and food
              security across the continent.
            </p>

            <p className="mt-4 text-xs leading-relaxed text-trofi-400/80 font-medium italic">
              A women-led initiative driving agricultural intelligence across Africa
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-trofi-500/20 text-gray-400 hover:text-trofi-400 transition-all duration-200 border border-white/5 hover:border-trofi-500/30"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-trofi-400 transition-colors duration-200 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-trofi-400 transition-colors duration-200 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="mailto:isabel@trofi-agritech.org"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-trofi-400 transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-trofi-400 transition-colors" />
                  <span>isabel@trofi-agritech.org</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@trofi-agritech.org"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-trofi-400 transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-trofi-400 transition-colors" />
                  <span>info@trofi-agritech.org</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+255767898469"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-trofi-400 transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-trofi-400 transition-colors" />
                  <span>+255 767 898 469</span>
                </a>
              </li>
              <li>
                <a
                  href="https://trofi-agritech.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-trofi-400 transition-colors duration-200 group"
                >
                  <Globe className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-trofi-400 transition-colors" />
                  <span>trofi-agritech.org</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                  <span>Plot 158, Mbezi Beach, Dar es Salaam, Tanzania</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2026 Trofi AgriTech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
