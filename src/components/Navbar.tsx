'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  BarChart3,
  Leaf,
  GitBranch,
  Cpu,
  GraduationCap,
} from 'lucide-react'

const modules = [
  {
    name: 'Policy Tracker',
    href: '/modules/policy-tracker',
    icon: FileText,
    description: 'Track agricultural policies across Africa',
  },
  {
    name: 'Trade Statistics',
    href: '/modules/trade-statistics',
    icon: BarChart3,
    description: 'Analyze cross-border trade flows and data',
  },
  {
    name: 'Post-Harvest Loss',
    href: '/modules/post-harvest-loss',
    icon: Leaf,
    description: 'Monitor and reduce post-harvest losses',
  },
  {
    name: 'Value Chain Analytics',
    href: '/modules/value-chain',
    icon: GitBranch,
    description: 'Map and optimize agricultural value chains',
  },
  {
    name: 'AI Adoption',
    href: '/modules/ai-adoption',
    icon: Cpu,
    description: 'Track AI technology adoption in agriculture',
  },
  {
    name: 'Training & Capacity Building',
    href: '/modules/training',
    icon: GraduationCap,
    description: 'Empowering women and youth in agriculture',
  },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Country Profiles', href: '/countries' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isModulesOpen, setIsModulesOpen] = useState(false)
  const [isMobileModulesOpen, setIsMobileModulesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsModulesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsModulesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsModulesOpen(false)
    }, 200)
  }

  const closeMobile = () => {
    setIsMobileOpen(false)
    setIsMobileModulesOpen(false)
  }

  const linkColor = isScrolled
    ? 'text-gray-700 hover:text-trofi-600 hover:bg-trofi-50'
    : 'text-white/90 hover:text-white hover:bg-white/10'

  const moduleBtnColor = isScrolled
    ? isModulesOpen ? 'text-trofi-600 bg-trofi-50' : 'text-gray-700 hover:text-trofi-600 hover:bg-trofi-50'
    : isModulesOpen ? 'text-white bg-white/15' : 'text-white/90 hover:text-white hover:bg-white/10'

  const logoTextColor = isScrolled ? 'text-trofi-700' : 'text-white'
  const logoSubColor = isScrolled ? 'text-sage-400' : 'text-white/60'
  const menuBtnColor = isScrolled ? 'text-gray-700 hover:bg-trofi-50' : 'text-white hover:bg-white/10'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Trofi AgriTech"
                width={36}
                height={36}
                className={`h-7 md:h-8 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-90' : 'brightness-0 invert opacity-95'}`}
                priority
              />
              <div className="hidden sm:flex flex-col">
                <span className={`text-base font-semibold leading-tight tracking-tight transition-colors duration-300 ${logoTextColor}`}>
                  Trofi AgriTech
                </span>
                <span className={`text-[9px] uppercase tracking-[0.18em] font-medium leading-none transition-colors duration-300 ${logoSubColor}`}>
                  Agriculture Redefined
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${linkColor}`}
              >
                Home
              </Link>

              {/* Modules Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setIsModulesOpen(!isModulesOpen)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${moduleBtnColor}`}
                >
                  Modules
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isModulesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    isModulesOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="w-[420px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-trofi-900/10 border border-gray-100 overflow-hidden">
                    <div className="p-2">
                      {modules.map((mod) => {
                        const Icon = mod.icon
                        return (
                          <Link
                            key={mod.href}
                            href={mod.href}
                            onClick={() => setIsModulesOpen(false)}
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-trofi-50 transition-all duration-200 group"
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-trofi-100 flex items-center justify-center group-hover:bg-trofi-500 transition-colors duration-200">
                              <Icon className="w-5 h-5 text-trofi-600 group-hover:text-white transition-colors duration-200" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-900 group-hover:text-trofi-700 transition-colors">
                                {mod.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                {mod.description}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${linkColor}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 active:scale-[0.98]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${menuBtnColor}`}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`absolute transition-all duration-200 ${
                  isMobileOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`}
              >
                <Menu className="w-5 h-5" />
              </span>
              <span
                className={`absolute transition-all duration-200 ${
                  isMobileOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                }`}
              >
                <X className="w-5 h-5" />
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm"
          onClick={closeMobile}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
            <Link href="/" onClick={closeMobile} className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Trofi AgriTech"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-trofi-700">Trofi AgriTech</span>
            </Link>
            <button
              onClick={closeMobile}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100%-4rem)] pb-20">
            <div className="px-3 py-4 space-y-1">
              <Link
                href="/"
                onClick={closeMobile}
                className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-trofi-600 hover:bg-trofi-50 rounded-xl transition-colors"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setIsMobileModulesOpen(!isMobileModulesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isMobileModulesOpen
                      ? 'text-trofi-600 bg-trofi-50'
                      : 'text-gray-800 hover:text-trofi-600 hover:bg-trofi-50'
                  }`}
                >
                  Modules
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileModulesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileModulesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 pr-2 py-2 space-y-0.5">
                    {modules.map((mod) => {
                      const Icon = mod.icon
                      return (
                        <Link
                          key={mod.href}
                          href={mod.href}
                          onClick={closeMobile}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-trofi-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-trofi-100 flex items-center justify-center flex-shrink-0 group-hover:bg-trofi-500 transition-colors">
                            <Icon className="w-4 h-4 text-trofi-600 group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 group-hover:text-trofi-700 transition-colors">
                              {mod.name}
                            </p>
                            <p className="text-xs text-gray-400">{mod.description}</p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-trofi-600 hover:bg-trofi-50 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="px-5 pt-4 border-t border-gray-100 mt-4">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-md transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
