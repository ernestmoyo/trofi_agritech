'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Mail,
  Globe2,
  MapPin,
  Phone,
  Send,
  Building2,
  FlaskConical,
  Landmark,
  Wheat,
  Cpu,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Handshake,
  CheckCircle2,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    lines: ['isabel@trofi-agritech.org', 'info@trofi-agritech.org'],
    color: 'trofi' as const,
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+255 767 898 469'],
    color: 'earth' as const,
  },
  {
    icon: MapPin,
    title: 'Office',
    lines: ['1st Floor, Plot 158 Block "K"', 'Kwa Zena, Mbezi Beach', 'Kinondoni, Dar es Salaam, Tanzania'],
    color: 'sage' as const,
  },
  {
    icon: Globe2,
    title: 'Website',
    lines: ['trofi-agritech.org'],
    color: 'trofi' as const,
  },
]

const colorMap = {
  trofi: { bg: 'bg-trofi-100', icon: 'text-trofi-600', ring: 'ring-trofi-200' },
  earth: { bg: 'bg-earth-100', icon: 'text-earth-600', ring: 'ring-earth-200' },
  sage:  { bg: 'bg-sage-100',  icon: 'text-sage-600',  ring: 'ring-sage-200' },
}

const partnerTypes = [
  {
    icon: Landmark,
    title: 'Government Agencies',
    description:
      'Ministries of agriculture, trade, and technology seeking data-driven policy insights across the continent.',
  },
  {
    icon: FlaskConical,
    title: 'Research Institutions',
    description:
      'Universities and research centers advancing agricultural science and food security studies in Africa.',
  },
  {
    icon: Building2,
    title: 'Development Agencies',
    description:
      'International and regional development organizations funding agricultural transformation programs.',
  },
  {
    icon: Wheat,
    title: 'Agribusiness Stakeholders',
    description:
      'Companies across the agricultural value chain looking for market intelligence and trade analytics.',
  },
  {
    icon: Cpu,
    title: 'Technology Partners',
    description:
      'AgriTech firms and AI companies building solutions that benefit from integrated agricultural data.',
  },
]

const faqs = [
  {
    q: 'What data does the Trofi AgriTech platform cover?',
    a: 'Our platform integrates data across five key modules: agricultural policy tracking, trade statistics, post-harvest loss analytics, value chain mapping, and AI adoption metrics. We aggregate data from trusted sources including FAOSTAT, UN Comtrade, APHLIS, the World Bank, and national statistical offices across all 55 African nations.',
  },
  {
    q: 'How is the platform different from existing agricultural databases?',
    a: 'Unlike existing vertical platforms that operate in isolation, Trofi AgriTech is the integration layer. We connect policy data with trade flows, post-harvest losses with value chain analytics, and AI adoption with on-the-ground impact. This cross-cutting approach reveals insights that no single platform can provide.',
  },
  {
    q: 'Who can benefit from using Trofi AgriTech?',
    a: 'Our platform serves a wide range of stakeholders: policymakers crafting evidence-based agricultural policies, researchers studying food systems, development agencies designing interventions, agribusinesses making investment decisions, and technology companies building solutions for African agriculture.',
  },
  {
    q: 'Is the platform available for all African countries?',
    a: 'Yes. Trofi AgriTech provides coverage across all 55 African Union member states. Data depth varies by country, but our goal is comprehensive pan-continental coverage. We are continuously expanding our data partnerships to improve coverage in underrepresented regions.',
  },
  {
    q: 'How can my organization partner with Trofi AgriTech?',
    a: 'We welcome partnerships with government agencies, research institutions, development organizations, agribusinesses, and technology companies. Reach out via the contact form above or email us at info@trofi-agritech.org to discuss collaboration opportunities.',
  },
]

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Item                                                 */
/* ------------------------------------------------------------------ */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm md:text-base font-semibold text-gray-900">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================================================================ */}
      {/*  HERO                                                            */}
      {/* ================================================================ */}
      <section className="gradient-hero pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-trofi-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            Connect With Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-trofi-100 max-w-2xl mx-auto">
            Have questions about Trofi AgriTech? Want to explore partnership opportunities?
            We&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  CONTACT INFO CARDS                                              */}
      {/* ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card) => {
            const Icon = card.icon
            const colors = colorMap[card.color]
            return (
              <div
                key={card.title}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ring-1 ${colors.ring} flex items-start gap-4`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================================================================ */}
      {/*  CONTACT FORM                                                    */}
      {/* ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">Send Us a Message</h2>
            <p className="section-subtitle">
              Fill out the form below and a member of our team will get back to you promptly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-trofi-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@organization.org"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-trofi-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Organization */}
              <div>
                <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Organization
                </label>
                <input
                  id="org"
                  type="text"
                  placeholder="Your organization"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-trofi-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-trofi-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell us more about your inquiry..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-trofi-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-trofi-600 text-white font-semibold rounded-xl shadow-md shadow-trofi-600/25 hover:bg-trofi-700 hover:shadow-lg hover:shadow-trofi-600/30 transition-all duration-200 active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-trofi-600 animate-pulse">
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent successfully!
                </span>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  PARTNER WITH US                                                 */}
      {/* ================================================================ */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trofi-50 text-trofi-700 text-sm font-medium mb-5">
              <Handshake className="w-4 h-4" />
              Collaboration
            </div>
            <h2 className="section-title mb-4">Partner With Us</h2>
            <p className="section-subtitle">
              We work with a broad ecosystem of stakeholders committed to transforming African
              agriculture through data and technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnerTypes.map((pt) => {
              const Icon = pt.icon
              return (
                <div
                  key={pt.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-trofi-200 hover:bg-trofi-50/50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:bg-trofi-100 group-hover:border-trofi-200 transition-colors">
                    <Icon className="w-5 h-5 text-gray-500 group-hover:text-trofi-600 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{pt.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pt.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  FAQ                                                             */}
      {/* ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common questions about the Trofi AgriTech platform and how to work with us.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  CTA                                                             */}
      {/* ================================================================ */}
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&rsquo;s Build the Future of African Agriculture Together
          </h2>
          <p className="text-trofi-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&rsquo;re a policymaker, researcher, or agribusiness leader &mdash; there&rsquo;s
            a place for you in the Trofi AgriTech ecosystem.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-trofi-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-trofi-50 transition-all duration-200"
          >
            Learn About Our Mission
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
