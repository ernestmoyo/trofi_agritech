'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FileText,
  BarChart3,
  Leaf,
  GitBranch,
  Cpu,
  Target,
  Eye,
  AlertCircle,
  Quote,
  Handshake,
  Globe2,
  Award,
  Users,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Heart,
  BookOpen,
  Shield,
  TrendingUp,
  Building2,
  Search,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    icon: FileText,
    title: 'Policy Tracker',
    description:
      'Real-time monitoring and analysis of agricultural policies across 55 African nations, tracking implementation status, budget allocation, and cross-border policy harmonization.',
    color: 'trofi',
  },
  {
    icon: BarChart3,
    title: 'Trade Statistics',
    description:
      'Comprehensive analysis of intra-African and global agricultural trade flows, tariff impacts, and market access opportunities under AfCFTA.',
    color: 'earth',
  },
  {
    icon: Leaf,
    title: 'Post-Harvest Loss',
    description:
      'Data-driven insights into post-harvest losses across crop types and regions, with actionable intervention recommendations to reduce food waste.',
    color: 'sage',
  },
  {
    icon: GitBranch,
    title: 'Value Chain Analytics',
    description:
      'End-to-end mapping and optimization of agricultural value chains, from smallholder production through processing, logistics, and market delivery.',
    color: 'trofi',
  },
  {
    icon: Cpu,
    title: 'AI Adoption',
    description:
      'Tracking the adoption and impact of artificial intelligence and digital technologies in African agriculture, from precision farming to market intelligence.',
    color: 'earth',
  },
  {
    icon: GraduationCap,
    title: 'Training & Capacity Building',
    description:
      'Delivering world-class training programs, workshops, and capacity building initiatives that equip agricultural professionals, policymakers, and women leaders with the skills to drive data-informed transformation.',
    color: 'orange',
  },
]

const pillarColorMap: Record<string, { bg: string; icon: string; border: string }> = {
  trofi:  { bg: 'bg-trofi-100',   icon: 'text-trofi-600',   border: 'border-trofi-200' },
  earth:  { bg: 'bg-earth-100',   icon: 'text-earth-600',   border: 'border-earth-200' },
  sage:   { bg: 'bg-sage-100',    icon: 'text-sage-600',    border: 'border-sage-200' },
  orange: { bg: 'bg-orange-100',  icon: 'text-orange-600',  border: 'border-orange-200' },
}

const consultingServices = [
  {
    icon: Globe2,
    title: 'Policy Advisory',
    description:
      'Expert guidance on agricultural policy formulation, review, and harmonization aligned with continental frameworks like CAADP and AfCFTA.',
  },
  {
    icon: Search,
    title: 'Market Intelligence',
    description:
      'In-depth market research and trade analysis to identify opportunities, mitigate risks, and inform strategic positioning across African markets.',
  },
  {
    icon: TrendingUp,
    title: 'Strategic Planning',
    description:
      'Tailored strategic planning services for agribusinesses, development organizations, and government agencies seeking to optimize their agricultural impact.',
  },
  {
    icon: BarChart3,
    title: 'Impact Assessment',
    description:
      'Rigorous monitoring, evaluation, and impact assessment of agricultural programs and investments using data-driven methodologies.',
  },
  {
    icon: Cpu,
    title: 'Technology Advisory',
    description:
      'Guidance on adopting digital agriculture solutions, AI integration, and data infrastructure development for organizations across the value chain.',
  },
  {
    icon: Building2,
    title: 'Institutional Capacity Building',
    description:
      'Comprehensive capacity building programs for institutions, including data management systems, analytical frameworks, and organizational development.',
  },
]

const womenPrograms = [
  {
    icon: Award,
    title: 'Women in AgriLeadership',
    description:
      'A flagship program cultivating the next generation of women leaders in African agriculture through mentorship, executive coaching, and leadership development.',
  },
  {
    icon: Cpu,
    title: 'Digital Literacy for Women Farmers',
    description:
      'Hands-on digital skills training empowering women smallholder farmers to leverage technology for improved productivity, market access, and financial inclusion.',
  },
  {
    icon: BookOpen,
    title: 'Access to Finance Training',
    description:
      'Specialized training programs helping women in agriculture navigate financial systems, access credit, manage agribusiness finances, and build bankable proposals.',
  },
  {
    icon: Shield,
    title: 'Land Rights Advocacy',
    description:
      'Advocacy and legal literacy programs supporting women in understanding and exercising their land rights, a critical foundation for agricultural empowerment.',
  },
]

const policyAlignments = [
  {
    title: 'Kampala CAADP Declaration (2026-2035)',
    description:
      'Aligned with the next decade of the Comprehensive Africa Agriculture Development Programme, driving data-informed agricultural transformation.',
    icon: Globe2,
  },
  {
    title: 'AU Digital Agriculture Strategy',
    description:
      'Supporting the African Union\'s vision for digital transformation in agriculture through integrated data infrastructure and AI-powered insights.',
    icon: Cpu,
  },
  {
    title: 'AfCFTA Agriculture Protocols',
    description:
      'Facilitating the agricultural trade protocols under the African Continental Free Trade Area with transparent, real-time trade analytics.',
    icon: Handshake,
  },
  {
    title: 'Malabo Declaration Commitments',
    description:
      'Contributing to accountability and progress tracking for the Malabo Declaration goals on agricultural growth and transformation.',
    icon: Award,
  },
]

const partners = [
  { name: 'FAO / FAOSTAT', abbr: 'FAO' },
  { name: 'UN Comtrade', abbr: 'UNC' },
  { name: 'World Bank', abbr: 'WB' },
  { name: 'APHLIS', abbr: 'APH' },
  { name: 'African Development Bank', abbr: 'AfDB' },
  { name: 'African Union', abbr: 'AU' },
]

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
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
            <Sparkles className="w-4 h-4" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            About Trofi AgriTech
          </h1>
          <p className="text-lg md:text-xl text-trofi-100 max-w-2xl mx-auto font-medium">
            Agriculture Redefined
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  MISSION & VISION                                                */}
      {/* ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-trofi-500 rounded-r-full" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-trofi-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-trofi-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To bridge Africa&rsquo;s agricultural data silos, empower women in agriculture, and
              deliver world-class consulting and training services that drive evidence-based
              decision-making across the continent&rsquo;s food systems.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-earth-500 rounded-r-full" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-earth-100 flex items-center justify-center">
                <Eye className="w-6 h-6 text-earth-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              A data-connected African agriculture ecosystem where every policy, trade flow, and
              farming decision is informed by intelligence &mdash; and where women lead the
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  THE PROBLEM WE SOLVE                                            */}
      {/* ================================================================ */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-5">
              <AlertCircle className="w-4 h-4" />
              The Challenge
            </div>
            <h2 className="section-title mb-6">The Problem We Solve</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Robust but siloed vertical systems
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Africa&rsquo;s agricultural data landscape is characterized by robust but siloed
                vertical systems. Platforms like ReSAKSS for policy, UN Comtrade for trade, APHLIS
                for post-harvest loss data, and various private platforms all operate in isolation
                &mdash; creating blind spots for decision-makers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Mature systems that lack interoperability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each vertical has mature, well-developed data systems. Policy trackers are
                comprehensive. Trade databases are detailed. Post-harvest loss assessments are
                scientifically rigorous. Yet none of these systems talk to each other, leaving
                stakeholders without the cross-cutting insights they need.
              </p>
            </div>

            <div className="bg-trofi-50 rounded-2xl p-6 md:p-8 border border-trofi-200">
              <h3 className="text-lg font-semibold text-trofi-800 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-trofi-600" />
                The integration gap is our opportunity
              </h3>
              <p className="text-trofi-700 leading-relaxed">
                Trofi AgriTech sits at this critical integration layer. We don&rsquo;t replace existing
                platforms &mdash; we connect them. By building the interoperability infrastructure that
                Africa&rsquo;s agricultural data ecosystem needs, we unlock insights that no single
                vertical system can provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  SIX PILLARS                                                     */}
      {/* ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">Our Approach &mdash; Six Pillars</h2>
          <p className="section-subtitle">
            Six interconnected modules that together form a comprehensive agricultural intelligence
            and capacity building ecosystem for the continent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            const colors = pillarColorMap[pillar.color]
            return (
              <div
                key={pillar.title}
                className={`bg-white rounded-2xl p-7 shadow-md border ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================================================================ */}
      {/*  CONSULTING & ADVISORY SERVICES                                  */}
      {/* ================================================================ */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trofi-50 text-trofi-700 text-sm font-medium mb-5">
              <Briefcase className="w-4 h-4" />
              Expert Services
            </div>
            <h2 className="section-title mb-4">Consulting &amp; Advisory Services</h2>
            <p className="section-subtitle">
              We provide expert consulting and advisory services that help governments, development
              organizations, and agribusinesses make smarter, data-driven decisions for
              Africa&rsquo;s agricultural transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {consultingServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 shadow-md border border-gray-200 hover:shadow-xl hover:border-trofi-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-trofi-100 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-trofi-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  WOMEN EMPOWERMENT                                               */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-5">
              <Heart className="w-4 h-4" />
              Gender Equity
            </div>
            <h2 className="section-title mb-4">Championing Women in African Agriculture</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Trofi AgriTech is dedicated to closing the gender gap in African agriculture. Through
              targeted training, mentorship, and advocacy, we empower women to lead the continent&rsquo;s
              agricultural transformation &mdash; from smallholder farms to boardrooms.
            </p>
          </div>

          {/* Intro card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-orange-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 rounded-r-full" />
              <p className="text-gray-700 leading-relaxed text-lg">
                Women produce up to 80% of food in sub-Saharan Africa, yet they face systemic
                barriers to land ownership, financial access, digital tools, and leadership roles.
                At Trofi AgriTech, we believe that empowering women is not just a matter of equity
                &mdash; it is the single most effective strategy for transforming Africa&rsquo;s food
                systems. Our programs are designed to unlock the full potential of women across every
                node of the agricultural value chain.
              </p>
            </div>
          </div>

          {/* Program cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {womenPrograms.map((program) => {
              const Icon = program.icon
              return (
                <div
                  key={program.title}
                  className="bg-white rounded-2xl p-7 shadow-md border border-orange-200 hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  LEADERSHIP - ISABEL MOYO                                        */}
      {/* ================================================================ */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trofi-50 text-trofi-700 text-sm font-medium mb-5">
              <Users className="w-4 h-4" />
              Women-Led Innovation
            </div>
            <h2 className="section-title mb-4">Leadership</h2>
            <p className="section-subtitle">
              Trofi AgriTech is proudly women-led, driving transformative change in African agricultural
              consulting, training, and technology.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-trofi-50 via-white to-sage-50 rounded-3xl p-6 md:p-10 lg:p-14 shadow-xl border border-trofi-100">
              <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
                {/* Photo */}
                <div className="md:col-span-2 flex flex-col items-center">
                  <div className="relative w-56 h-56 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/isabel.jpeg"
                      alt="Isabel Moyo - Founder & CEO, Trofi AgriTech"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 224px, 300px"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-xl font-bold text-gray-900">Isabel Moyo</h3>
                    <p className="text-sm text-trofi-600 font-medium">
                      Founder &amp; CEO, Trofi AgriTech
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="md:col-span-3">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Isabel is a visionary consultant, trainer, and leader driving the transformation
                    of agricultural intelligence in Africa. With deep expertise in agribusiness
                    consulting, capacity building, and technology, she founded Trofi AgriTech to
                    deliver world-class advisory and training services that bridge the critical gap
                    in integrated agricultural intelligence across the continent.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    As a passionate advocate for women&rsquo;s empowerment, Isabel is dedicated to
                    ensuring that women are at the forefront of Africa&rsquo;s agricultural
                    transformation. Through Trofi AgriTech&rsquo;s consulting and training programs,
                    she empowers women across Africa with the skills, knowledge, and networks needed
                    to lead. Under her leadership, the company is positioned at the intersection of
                    the Kampala CAADP Declaration and the AU Digital Agriculture Strategy, delivering
                    the advisory services and capacity building that Africa&rsquo;s food systems need.
                  </p>

                  {/* Quote */}
                  <div className="bg-white rounded-xl p-6 border border-trofi-200 relative">
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-trofi-300" />
                    <p className="text-trofi-800 italic leading-relaxed font-medium">
                      &ldquo;Africa&rsquo;s agricultural future depends on our ability to connect
                      data with action, and to ensure women are at the forefront of that
                      transformation. That&rsquo;s exactly what Trofi AgriTech does.&rdquo;
                    </p>
                    <p className="mt-3 text-sm text-trofi-600 font-semibold">
                      &mdash; Isabel Moyo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  POLICY ALIGNMENT                                                */}
      {/* ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">Policy Alignment</h2>
          <p className="section-subtitle">
            Our work is firmly rooted in Africa&rsquo;s continental frameworks for agricultural
            transformation and digital innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {policyAlignments.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="w-11 h-11 rounded-lg bg-sage-100 flex items-center justify-center mb-4 group-hover:bg-trofi-100 transition-colors">
                  <Icon className="w-5 h-5 text-sage-600 group-hover:text-trofi-600 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================================================================ */}
      {/*  PARTNERS & DATA SOURCES                                         */}
      {/* ================================================================ */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Partners &amp; Data Sources</h2>
            <p className="section-subtitle">
              We aggregate and harmonize data from the world&rsquo;s most trusted agricultural
              intelligence platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 hover:border-trofi-200 hover:bg-trofi-50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-3 group-hover:border-trofi-300 transition-colors">
                  <span className="text-lg font-bold text-gray-400 group-hover:text-trofi-600 transition-colors">
                    {p.abbr}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-600 group-hover:text-trofi-700 transition-colors leading-tight">
                  {p.name}
                </p>
              </div>
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
            Ready to Transform Agricultural Intelligence?
          </h2>
          <p className="text-trofi-100 text-lg mb-8 max-w-2xl mx-auto">
            Join us in building the data infrastructure Africa&rsquo;s food systems need.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-trofi-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-trofi-50 transition-all duration-200"
          >
            Get In Touch
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
