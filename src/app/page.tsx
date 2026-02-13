'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FileText,
  TrendingUp,
  AlertTriangle,
  GitBranch,
  Brain,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  Globe,
  BarChart3,
  Shield,
  Layers,
  Lightbulb,
  Zap,
  ExternalLink,
  Quote,
  Users,
  Leaf,
  Heart,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Animated Counter Hook                                              */
/* ------------------------------------------------------------------ */
function useCountUp(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startOnView])

  useEffect(() => {
    if (!hasStarted) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [hasStarted, end, duration])

  return { count, ref }
}

/* ------------------------------------------------------------------ */
/*  Fade-in on scroll                                                  */
/* ------------------------------------------------------------------ */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

/* ------------------------------------------------------------------ */
/*  Section wrapper with fade-in                                       */
/* ------------------------------------------------------------------ */
function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const { ref, isVisible } = useFadeIn()
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  )
}

/* ================================================================== */
/*  MAIN PAGE COMPONENT                                                */
/* ================================================================== */
export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  /* ---------------------------------------------------------------- */
  /*  Data                                                             */
  /* ---------------------------------------------------------------- */
  const modules = [
    {
      name: 'Agriculture Policy Tracker',
      description:
        'Track, compare, and analyze agriculture policies across all 55 AU member states.',
      icon: FileText,
      color: 'trofi',
      stats: '500+ policies tracked',
      href: '/modules/policy-tracker',
      gradient: 'from-trofi-500 to-trofi-700',
      bgLight: 'bg-trofi-50',
      iconColor: 'text-trofi-600',
    },
    {
      name: 'Agriculture Trade Statistics',
      description:
        'Track intra-African and global agriculture trade flows with real-time analytics.',
      icon: TrendingUp,
      color: 'earth',
      stats: '$78B+ in trade data',
      href: '/modules/trade-statistics',
      gradient: 'from-earth-400 to-earth-600',
      bgLight: 'bg-earth-50',
      iconColor: 'text-earth-600',
    },
    {
      name: 'Post-Harvest Loss Tracker',
      description:
        'Monitor and analyze post-harvest losses across value chains and geographies.',
      icon: AlertTriangle,
      color: 'amber',
      stats: '30-40% loss rates monitored',
      href: '/modules/phl-tracker',
      gradient: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      name: 'Value Chain Analytics',
      description:
        'Map and analyze agriculture value chains across the continent.',
      icon: GitBranch,
      color: 'sage',
      stats: '12+ value chains mapped',
      href: '/modules/value-chain',
      gradient: 'from-sage-500 to-sage-700',
      bgLight: 'bg-sage-50',
      iconColor: 'text-sage-600',
    },
    {
      name: 'AI Adoption Tracker',
      description:
        'Track AI and digital technology adoption and impact in African agriculture.',
      icon: Brain,
      color: 'purple',
      stats: '200+ AI initiatives tracked',
      href: '/modules/ai-tracker',
      gradient: 'from-purple-500 to-indigo-600',
      bgLight: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      name: 'Training & Capacity Building',
      description:
        'Empowering women and youth through agricultural training, consulting, and leadership development programs across Africa.',
      icon: GraduationCap,
      color: 'orange',
      stats: 'Women & Youth Focused',
      href: '/modules/training',
      gradient: 'from-orange-500 to-amber-500',
      bgLight: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ]

  const whyTrofi = [
    {
      icon: Layers,
      title: 'Integration Layer',
      description:
        "Bridging Africa's agri-data silos, connecting policy, trade, PHL, and value chain data into a unified intelligence platform.",
      accent: 'trofi',
    },
    {
      icon: Shield,
      title: 'Evidence-Based Policy',
      description:
        'Supporting the Kampala CAADP Declaration with data-driven insights for the 2026-2035 agricultural transformation agenda.',
      accent: 'earth',
    },
    {
      icon: GraduationCap,
      title: 'Consulting & Capacity Building',
      description:
        'Training programs and advisory services building agricultural expertise across the continent, with a focus on empowering women and youth.',
      accent: 'sage',
    },
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="relative gradient-hero min-h-[100vh] flex items-center overflow-hidden">
        {/* Decorative floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large circle */}
          <div
            className={`absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-white/10 animate-float transition-all duration-1000 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Medium circle */}
          <div
            className={`absolute top-1/3 -left-16 w-[300px] h-[300px] rounded-full bg-white/5 animate-float-delayed transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Small accent circle */}
          <div
            className={`absolute bottom-1/4 right-1/4 w-[150px] h-[150px] rounded-full border-2 border-trofi-300/20 animate-pulse-slow transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Diagonal line */}
          <div
            className={`absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-12 transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Hex grid dots */}
          <div
            className={`absolute top-20 right-20 transition-all duration-1000 delay-700 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/20"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    opacity: Math.random() > 0.4 ? 0.3 : 0.1,
                  }}
                />
              ))}
            </div>
          </div>
          {/* Diamond shape */}
          <div
            className={`absolute bottom-32 left-20 w-16 h-16 border border-white/15 rotate-45 animate-float transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Triangle accent */}
          <div
            className={`absolute top-1/2 right-10 transition-all duration-1000 delay-600 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              className="animate-float-delayed opacity-20"
            >
              <polygon
                points="30,5 55,55 5,55"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-trofi-400/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-4xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-700 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <Leaf className="w-4 h-4 text-trofi-300" />
              <span className="text-sm font-medium text-white/90 tracking-wide">
                Africa Agriculture Intelligence Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-200 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              Transforming Africa&apos;s{' '}
              <span className="relative">
                <span className="relative z-10 text-trofi-200">
                  Agricultural Future
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-trofi-400/30 -rotate-1 rounded" />
              </span>{' '}
              Through Data &amp; Intelligence
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-white/75 leading-relaxed max-w-3xl mb-10 transition-all duration-700 delay-400 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              A women-led consulting firm delivering comprehensive data
              analytics, training, and advisory services across Africa&apos;s
              agricultural sector &mdash; serving policymakers, researchers,
              development agencies, and agribusiness stakeholders across all
              55 AU member states.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-500 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="#modules"
                className="group inline-flex items-center justify-center gap-2 bg-white text-trofi-800 font-semibold px-8 py-4 rounded-xl hover:bg-trofi-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Modules
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-xl border border-orange-400 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Learn More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-700 delay-700 ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              {
                value: '55',
                label: 'AU Member States',
                icon: Globe,
              },
              {
                value: '6',
                label: 'Intelligence Modules',
                icon: BarChart3,
              },
              {
                value: '500+',
                label: 'Policies Tracked',
                icon: FileText,
              },
              {
                value: 'Real-time',
                label: 'Analytics',
                icon: Zap,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-5 text-center hover:bg-white/15 transition-all duration-300"
              >
                <stat.icon className="w-5 h-5 text-trofi-300 mx-auto mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================================ */}
      {/*  MODULES SECTION                                              */}
      {/* ============================================================ */}
      <Section id="modules" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-trofi-50 text-trofi-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <BarChart3 className="w-4 h-4" />
              Platform Modules
            </div>
            <h2 className="section-title mb-4">
              Six Pillars of{' '}
              <span className="text-gradient">Agricultural Intelligence</span>
            </h2>
            <p className="section-subtitle">
              Our integrated modules and consulting services provide
              comprehensive coverage of Africa&apos;s agricultural landscape,
              from policy analysis and trade intelligence to training and
              capacity building.
            </p>
          </div>

          {/* Module Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {modules.map((mod, i) => {
              const Icon = mod.icon
              const isOrange = mod.color === 'orange'
              return (
                <Link
                  key={i}
                  href={mod.href}
                  className={`module-card relative overflow-hidden ${
                    isOrange
                      ? 'ring-2 ring-orange-200 bg-gradient-to-br from-orange-50 to-amber-50'
                      : ''
                  }`}
                >
                  {/* Gradient accent top bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 ${
                      isOrange ? 'h-1.5 opacity-100' : 'h-1 opacity-0'
                    } bg-gradient-to-r ${mod.gradient} group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`${mod.bgLight} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className={`w-7 h-7 ${mod.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                      isOrange
                        ? 'group-hover:text-orange-600'
                        : 'group-hover:text-trofi-700'
                    }`}
                  >
                    {mod.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {mod.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isOrange ? 'bg-orange-400' : 'bg-trofi-400'
                      }`}
                    />
                    {mod.stats}
                  </div>

                  {/* Link */}
                  <div
                    className={`flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300 ${
                      isOrange ? 'text-orange-600' : 'text-trofi-600'
                    }`}
                  >
                    Explore Module
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  KEY STATISTICS SECTION                                       */}
      {/* ============================================================ */}
      <Section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-earth-50 text-earth-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4" />
              Key Figures
            </div>
            <h2 className="section-title mb-4">
              The Scale of Africa&apos;s{' '}
              <span className="text-gradient">Agricultural Opportunity</span>
            </h2>
            <p className="section-subtitle">
              Understanding the numbers that define the continent&apos;s
              agricultural landscape and the transformative opportunity ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <StatCard
              prefix="$"
              end={78}
              suffix="B"
              label="Annual agriculture trade in Africa"
              description="Intra-African and global agricultural trade flows tracked across the continent."
              color="trofi"
            />
            <StatCard
              end={40}
              suffix="%"
              prefix="30-"
              label="Post-harvest losses in Sub-Saharan Africa"
              description="Billions lost annually due to inadequate storage, transport, and processing."
              color="earth"
              isRange
            />
            <StatCard
              end={60}
              suffix="%"
              label="Africa's uncultivated arable land"
              description="The continent holds the majority of the world's remaining arable land."
              color="sage"
            />
            <StatCard
              end={55}
              suffix=""
              label="AU Member States covered"
              description="Complete continental coverage across all African Union member nations."
              color="trofi"
            />
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  WHY TROFI SECTION                                            */}
      {/* ============================================================ */}
      <Section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-sage-50 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Lightbulb className="w-4 h-4" />
              Our Approach
            </div>
            <h2 className="section-title mb-4">
              Why{' '}
              <span className="text-gradient">Trofi AgriTech</span>?
            </h2>
            <p className="section-subtitle">
              We&apos;re building the connective tissue between Africa&apos;s
              agricultural data ecosystems &mdash; turning fragmented
              information into actionable intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyTrofi.map((feature, i) => {
              const Icon = feature.icon
              const borderColors: Record<string, string> = {
                trofi: 'hover:border-trofi-300',
                earth: 'hover:border-earth-300',
                sage: 'hover:border-sage-300',
              }
              const bgColors: Record<string, string> = {
                trofi: 'bg-trofi-50',
                earth: 'bg-earth-50',
                sage: 'bg-sage-50',
              }
              const iconColors: Record<string, string> = {
                trofi: 'text-trofi-600',
                earth: 'text-earth-600',
                sage: 'text-sage-600',
              }
              return (
                <div
                  key={i}
                  className={`relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-100 ${borderColors[feature.accent]} transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group`}
                >
                  {/* Decorative number */}
                  <span className="absolute top-6 right-8 text-7xl font-black text-gray-50 group-hover:text-gray-100 transition-colors duration-500 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div
                    className={`${bgColors[feature.accent]} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon
                      className={`w-8 h-8 ${iconColors[feature.accent]}`}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  WOMEN EMPOWERMENT SECTION                                    */}
      {/* ============================================================ */}
      <Section className="py-24 lg:py-32 bg-gradient-to-r from-orange-500 to-amber-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full bg-white/10 animate-float" />
          <div className="absolute -bottom-12 -left-12 w-[250px] h-[250px] rounded-full bg-white/5 animate-float-delayed" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4" />
              Women Empowerment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Championing Women in{' '}
              <br className="hidden sm:block" />
              African Agriculture
            </h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              Trofi AgriTech is committed to closing the gender gap in
              African agriculture. Through targeted training programs,
              leadership development, and data-driven advocacy, we empower
              women farmers and agri-entrepreneurs to unlock their full
              potential and drive the continent&apos;s food security agenda.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-6 py-8 text-center hover:bg-white/25 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-3">
                70%
              </div>
              <p className="text-white/90 font-medium text-sm uppercase tracking-wider mb-2">
                Women produce 70% of Africa&apos;s food
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Yet they remain underrepresented in policy and leadership roles.
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-6 py-8 text-center hover:bg-white/25 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-3">
                &lt;20%
              </div>
              <p className="text-white/90 font-medium text-sm uppercase tracking-wider mb-2">
                Land ownership by women
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Despite being the backbone of agricultural production across the continent.
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-6 py-8 text-center hover:bg-white/25 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-3">
                10%
              </div>
              <p className="text-white/90 font-medium text-sm uppercase tracking-wider mb-2">
                Agricultural credit to women
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Only a fraction of agricultural financing reaches women farmers.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/modules/training"
              className="group inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Training Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  LEADERSHIP SECTION                                           */}
      {/* ============================================================ */}
      <Section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-trofi-50 text-trofi-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              Leadership
            </div>
            <h2 className="section-title mb-4">
              <span className="text-gradient">Women-Led</span> Innovation
            </h2>
            <p className="section-subtitle">
              Trofi AgriTech is led by a visionary committed to harnessing data
              for Africa&apos;s agricultural transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Photo */}
                <div className="lg:col-span-2 relative">
                  <div className="aspect-[4/5] lg:aspect-auto lg:h-full relative overflow-hidden bg-gradient-to-br from-trofi-100 to-sage-100">
                    <Image
                      src="/isabel.jpeg"
                      alt="Isabel Moyo - Founder & CEO of Trofi AgriTech"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  {/* Name & Title */}
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      Isabel Moyo
                    </h3>
                    <p className="text-trofi-600 font-semibold text-lg">
                      Founder &amp; CEO &middot; Consultant &amp; Trainer
                    </p>
                  </div>

                  {/* Bio text */}
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Isabel Moyo leads Trofi AgriTech&apos;s mission to
                    revolutionize agricultural data and consulting services
                    across the African continent. With deep expertise in
                    agricultural policy, data systems, and capacity building,
                    she combines platform innovation with hands-on training
                    and advisory services &mdash; empowering women, youth,
                    and organizations to make evidence-based decisions from
                    farm-level operations to continental policy frameworks.
                  </p>

                  {/* Quote */}
                  <blockquote className="relative border-l-4 border-trofi-400 pl-6 py-2">
                    <Quote className="absolute -top-2 -left-1 w-8 h-8 text-trofi-200" />
                    <p className="text-gray-700 italic leading-relaxed text-lg font-medium">
                      &ldquo;Data is the bridge between Africa&apos;s
                      agricultural potential and its future
                      prosperity.&rdquo;
                    </p>
                    <cite className="block mt-3 text-sm text-gray-500 not-italic font-medium">
                      &mdash; Isabel Moyo, Founder &amp; CEO, Consultant &amp; Trainer
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  CALL TO ACTION SECTION                                       */}
      {/* ============================================================ */}
      <Section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative gradient-hero rounded-3xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-white/10 animate-float" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5 animate-float-delayed" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-trofi-400/10 rounded-full blur-3xl" />
              {/* Dot pattern */}
              <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-3">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white/15"
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Transform{' '}
                <br className="hidden sm:block" />
                Agricultural Intelligence?
              </h2>
              <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join us in building the data infrastructure that will power
                Africa&apos;s agricultural transformation. Whether you&apos;re
                a policymaker, researcher, or industry leader, Trofi AgriTech
                provides the intelligence you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-trofi-800 font-semibold px-8 py-4 rounded-xl hover:bg-trofi-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#modules"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/25 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore the Platform
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom spacer */}
      <div className="h-16" />
    </main>
  )
}

/* ================================================================== */
/*  STAT CARD SUB-COMPONENT                                            */
/* ================================================================== */
function StatCard({
  prefix = '',
  end,
  suffix,
  label,
  description,
  color,
  isRange = false,
}: {
  prefix?: string
  end: number
  suffix: string
  label: string
  description: string
  color: string
  isRange?: boolean
}) {
  const { count, ref } = useCountUp(end, 2200)

  const borderHover: Record<string, string> = {
    trofi: 'hover:border-trofi-200',
    earth: 'hover:border-earth-200',
    sage: 'hover:border-sage-200',
  }

  const textColor: Record<string, string> = {
    trofi: 'text-trofi-600',
    earth: 'text-earth-600',
    sage: 'text-sage-600',
  }

  const dotColor: Record<string, string> = {
    trofi: 'bg-trofi-400',
    earth: 'bg-earth-400',
    sage: 'bg-sage-400',
  }

  return (
    <div
      ref={ref}
      className={`stat-card text-center ${borderHover[color]}`}
    >
      <div className={`text-4xl lg:text-5xl font-extrabold ${textColor[color]} mb-3`}>
        {isRange ? (
          <>
            {prefix}
            {suffix}
          </>
        ) : (
          <>
            {prefix}
            {count}
            {suffix}
          </>
        )}
      </div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className={`w-1.5 h-1.5 rounded-full ${dotColor[color]}`} />
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
          {label}
        </h3>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}
