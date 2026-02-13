'use client';

import Link from 'next/link';
import {
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell,
} from 'recharts';
import {
  ArrowLeft, ChevronRight, GraduationCap, Users, Globe2, BookOpen, Award,
  TrendingUp, Briefcase, BarChart3, Leaf, Link2, Cpu, Crown,
  Heart, HandCoins, Smartphone, Scale, Users2,
  Search, Palette, Presentation, Activity, Star,
  Handshake, Target, Lightbulb, Building2, Monitor, Layers,
  ArrowRight, CheckCircle2, Sparkles, Phone,
} from 'lucide-react';

/* ================================================================
   DATA
   ================================================================ */

/* ─── Training Impact Metrics (bar chart) ─── */
const impactData = [
  { metric: 'Income Increase',       before: 32, after: 78 },
  { metric: 'Market Access',         before: 25, after: 72 },
  { metric: 'Tech Adoption',         before: 18, after: 65 },
  { metric: 'Post-Harvest Savings',  before: 28, after: 71 },
  { metric: 'Leadership Roles',      before: 12, after: 58 },
  { metric: 'Financial Literacy',    before: 22, after: 69 },
];

/* ─── Training programs ─── */
const programs = [
  {
    icon: BarChart3,
    title: 'Agricultural Policy Analysis',
    desc: 'Training government officials, researchers, and stakeholders in evidence-based agricultural policy formulation and impact assessment across African economies.',
    color: 'bg-trofi-50 text-trofi-600 border-trofi-200',
  },
  {
    icon: TrendingUp,
    title: 'Trade Data Analytics',
    desc: 'Building capacity in trade statistics interpretation, COMTRADE analysis, and regional trade flow modeling to support informed agricultural trade decisions.',
    color: 'bg-sage-50 text-sage-600 border-sage-200',
  },
  {
    icon: Leaf,
    title: 'Post-Harvest Loss Management',
    desc: 'Practical, hands-on training in modern storage techniques, cold chain management, and loss-reduction technologies tailored for African smallholders.',
    color: 'bg-earth-50 text-earth-600 border-earth-200',
  },
  {
    icon: Link2,
    title: 'Value Chain Development',
    desc: 'Equipping agribusiness leaders and cooperatives to build competitive, inclusive, and resilient agricultural value chains from farm to fork.',
    color: 'bg-trofi-50 text-trofi-600 border-trofi-200',
  },
  {
    icon: Cpu,
    title: 'Digital Agriculture & AI',
    desc: 'Preparing Africa\'s agriculture for the digital age through training in precision agriculture, AI-driven advisory tools, and digital market platforms.',
    color: 'bg-sage-50 text-sage-600 border-sage-200',
  },
  {
    icon: Crown,
    title: 'Women in AgriLeadership',
    desc: 'Our flagship program empowering women to lead in agriculture through executive training, mentorship, and strategic networking across the continent.',
    color: 'bg-orange-50 text-orange-600 border-orange-200',
  },
];

/* ─── Women empowerment initiatives ─── */
const womenInitiatives = [
  { icon: Crown,       label: 'Leadership Development',  desc: 'Executive training programs for women in agricultural leadership positions' },
  { icon: HandCoins,   label: 'Access to Finance Training', desc: 'Financial literacy and grant writing skills for women-led agribusinesses' },
  { icon: Smartphone,  label: 'Digital Literacy',         desc: 'Technology skills to leverage digital tools for farming and market access' },
  { icon: Scale,       label: 'Land Rights Advocacy',     desc: 'Legal awareness and advocacy training for women\'s land ownership rights' },
  { icon: Users2,      label: 'Mentorship Networks',      desc: 'Connecting emerging women leaders with established agri-business mentors' },
];

/* ─── Consulting services ─── */
const consultingServices = [
  {
    icon: Briefcase,
    title: 'Policy Advisory',
    desc: 'Expert guidance on agricultural policy design, regulatory frameworks, and trade compliance for governments and international organisations.',
  },
  {
    icon: Search,
    title: 'Market Research & Intelligence',
    desc: 'In-depth market studies, commodity analysis, and competitive intelligence across African agricultural markets.',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    desc: 'Long-term agricultural sector strategies, investment plans, and growth roadmaps for public and private sector clients.',
  },
  {
    icon: Activity,
    title: 'Impact Assessment',
    desc: 'Rigorous evaluation of agricultural programmes, measuring outcomes, sustainability, and return on investment.',
  },
  {
    icon: Monitor,
    title: 'Technology Advisory',
    desc: 'Guidance on adopting digital agriculture solutions, AI integration, and technology-driven transformation for agribusinesses.',
  },
  {
    icon: Building2,
    title: 'Institutional Capacity Building',
    desc: 'Strengthening agricultural institutions, extension services, and research bodies through organizational development.',
  },
];

/* ─── Methodology steps ─── */
const methodology = [
  {
    step: 1,
    title: 'Needs Assessment',
    desc: 'Deep-dive analysis of knowledge gaps, institutional needs, and training objectives',
    icon: Search,
    color: 'bg-trofi-500',
  },
  {
    step: 2,
    title: 'Custom Design',
    desc: 'Tailored curriculum development with culturally relevant case studies and materials',
    icon: Palette,
    color: 'bg-trofi-600',
  },
  {
    step: 3,
    title: 'Delivery',
    desc: 'In-person workshops, virtual sessions, and blended learning experiences',
    icon: Presentation,
    color: 'bg-orange-500',
  },
  {
    step: 4,
    title: 'Monitoring',
    desc: 'Continuous progress tracking, feedback loops, and adaptive programme adjustments',
    icon: Activity,
    color: 'bg-orange-600',
  },
  {
    step: 5,
    title: 'Impact Evaluation',
    desc: 'Comprehensive assessment of outcomes, knowledge retention, and real-world application',
    icon: Star,
    color: 'bg-trofi-700',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ─── Breadcrumb ─── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/modules" className="hover:text-trofi-600 transition-colors">Modules</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-trofi-700 font-medium">Training &amp; Capacity Building</span>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-trofi-800 via-trofi-700 to-sage-800 text-white">
        {/* decorative blurs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-trofi-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-earth-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/modules" className="inline-flex items-center gap-1.5 text-trofi-200 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Modules
          </Link>
          <div className="flex items-start gap-4">
            <div className="p-3.5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
              <GraduationCap className="w-9 h-9" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/30 backdrop-blur-sm rounded-full text-xs font-medium text-orange-100 border border-orange-400/30 mb-3">
                <Heart className="w-3.5 h-3.5" />
                Women Empowerment
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Training &amp; Capacity Building
              </h1>
              <p className="mt-3 text-trofi-100 max-w-2xl text-lg leading-relaxed">
                Empowering women, youth, and agricultural professionals across Africa through
                world-class training programmes, consulting services, and leadership development.
                Founded and led by Isabel Moyo from Dar es Salaam, Tanzania.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Women Empowerment', 'Consulting', 'Leadership', 'Capacity Building', 'Africa-Wide'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-trofi-100 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Users,       label: 'Women Trained',       value: '5,000+',  sub: 'Across the African continent',     accent: 'bg-orange-50 text-orange-600' },
            { icon: Globe2,      label: 'African Countries',   value: '25+',     sub: 'Programmes delivered continent-wide', accent: 'bg-trofi-50 text-trofi-600' },
            { icon: BookOpen,    label: 'Training Programmes',  value: '150+',    sub: 'Custom-designed curricula',         accent: 'bg-sage-50 text-sage-600' },
            { icon: Award,       label: 'Success Rate',        value: '92%',     sub: 'Participants report positive impact', accent: 'bg-earth-50 text-earth-600' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.accent}`}>
                  <s.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{s.label}</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">{s.value}</span>
              <span className="text-xs text-gray-500">{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRAINING PROGRAMMES ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Training Programmes</h2>
          <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
            Comprehensive, Africa-focused training designed to build real-world skills and drive measurable impact in agriculture.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-trofi-200 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${p.color} mb-4 group-hover:scale-105 transition-transform`}>
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WOMEN EMPOWERMENT ─── */}
      <section className="mt-16">
        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 border-y border-orange-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            {/* heading */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs font-semibold mb-4">
                <Heart className="w-3.5 h-3.5" />
                Our Core Mission
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Empowering Women in African Agriculture
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Women are the backbone of African agriculture. Trofi AgriTech is committed to closing the
                gender gap through targeted programmes, advocacy, and leadership development.
              </p>
            </div>

            {/* key stats row */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { value: '70%', label: "of Africa's food is produced by women", color: 'border-orange-400 bg-white' },
                { value: '<20%', label: 'of agricultural land is owned by women', color: 'border-orange-400 bg-white' },
                { value: '10%', label: 'of agricultural credit goes to women', color: 'border-orange-400 bg-white' },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-xl p-6 text-center border-2 ${stat.color} shadow-sm`}>
                  <p className="text-3xl sm:text-4xl font-bold text-orange-600">{stat.value}</p>
                  <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* initiatives */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                Our Women Empowerment Initiatives
              </h3>
              <p className="text-sm text-gray-500 mb-6">Programmes designed by women, for women, driving change across the continent.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {womenInitiatives.map((ini) => (
                  <div key={ini.label} className="flex items-start gap-3 p-4 rounded-xl border border-orange-100 bg-orange-50/50 hover:bg-orange-50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center flex-shrink-0">
                      <ini.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{ini.label}</p>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{ini.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* quote */}
            <div className="mt-8 bg-orange-500 text-white rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-orange-600 rounded-xl flex-shrink-0">
                <Crown className="w-7 h-7" />
              </div>
              <div>
                <blockquote className="text-lg font-medium italic leading-relaxed">
                  &ldquo;When you empower a woman in agriculture, you empower an entire community.
                  Our mission is to ensure every woman across Africa has the skills, resources, and
                  confidence to lead.&rdquo;
                </blockquote>
                <p className="mt-3 text-orange-100 text-sm font-semibold">
                  &mdash; Isabel Moyo, Founder &amp; CEO, Trofi AgriTech
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRAINING IMPACT CHART ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Training Impact Metrics</h2>
          <p className="text-sm text-gray-500 mb-6">
            Before vs. after training scores across key development indicators (% of participants)
          </p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={impactData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="metric" tick={{ fontSize: 11, fill: '#6b7280' }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }}
                  formatter={(v: number, name: string) => [`${v}%`, name === 'before' ? 'Before Training' : 'After Training']}
                />
                <Legend
                  verticalAlign="top"
                  height={36}
                  iconType="circle"
                  formatter={(value) => (value === 'before' ? 'Before Training' : 'After Training')}
                />
                <Bar dataKey="before" name="before" radius={[4, 4, 0, 0]} barSize={20}>
                  {impactData.map((_, index) => (
                    <Cell key={`before-${index}`} fill="#d1d5db" />
                  ))}
                </Bar>
                <Bar dataKey="after" name="after" radius={[4, 4, 0, 0]} barSize={20}>
                  {impactData.map((_, index) => (
                    <Cell key={`after-${index}`} fill={index === 4 ? '#f97316' : '#2d7d32'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-trofi-700 font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>Average 143% improvement across all metrics post-training</span>
          </div>
        </div>
      </section>

      {/* ─── CONSULTING SERVICES ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-trofi-500 text-white rounded-full text-xs font-semibold mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Professional Services
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Consulting Services</h2>
          <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
            Beyond training, Trofi AgriTech provides expert consulting services to governments,
            international organisations, NGOs, and private sector clients across Africa.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultingServices.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-sage-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-600 border border-sage-200 flex items-center justify-center mb-4 group-hover:bg-sage-100 transition-colors">
                <svc.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{svc.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Methodology</h2>
            <p className="mt-2 text-gray-500 max-w-xl mx-auto">
              A proven five-step approach that ensures every training programme delivers lasting, measurable results.
            </p>
          </div>

          {/* pipeline steps */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {methodology.map((m, idx) => (
              <div key={m.title} className="relative flex flex-col items-center text-center">
                {/* connector arrow (visible on sm+) */}
                {idx < methodology.length - 1 && (
                  <div className="hidden sm:flex absolute top-6 -right-3 z-10">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
                {/* step circle */}
                <div className={`w-12 h-12 ${m.color} text-white rounded-full flex items-center justify-center mb-3 shadow-lg`}>
                  <m.icon className="w-5 h-5" />
                </div>
                {/* step number */}
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Step {m.step}</span>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{m.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* progress bar */}
          <div className="mt-10 flex rounded-full overflow-hidden h-3 bg-gray-100">
            <div className="bg-trofi-500 h-full" style={{ width: '20%' }} />
            <div className="bg-trofi-600 h-full" style={{ width: '20%' }} />
            <div className="bg-orange-500 h-full" style={{ width: '20%' }} />
            <div className="bg-orange-600 h-full" style={{ width: '20%' }} />
            <div className="bg-trofi-700 h-full" style={{ width: '20%' }} />
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-400">
            <span>Assess</span>
            <span>Design</span>
            <span>Deliver</span>
            <span>Monitor</span>
            <span>Evaluate</span>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS / CREDIBILITY ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-gradient-to-r from-trofi-50 to-sage-50 border border-trofi-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Handshake className="w-5 h-5 text-trofi-600" />
            <h3 className="text-lg font-semibold text-gray-900">Trusted By</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'African Union Commission',
              'COMESA Secretariat',
              'FAO East Africa',
              'World Bank Group',
              'AGRA',
              'AfDB',
            ].map((partner) => (
              <div key={partner} className="bg-white rounded-lg p-3 text-center border border-gray-100 shadow-sm">
                <p className="text-xs font-medium text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pb-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-trofi-700 via-trofi-600 to-sage-700 rounded-2xl text-white p-8 sm:p-12">
          {/* decorative */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-trofi-300 rounded-full blur-3xl" />
          </div>
          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/30 backdrop-blur-sm rounded-full text-xs font-medium text-orange-200 border border-orange-400/30 mb-4">
                <Lightbulb className="w-3.5 h-3.5" />
                Let&apos;s Work Together
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Partner With Us to Build Agricultural Capacity Across Africa
              </h2>
              <p className="mt-3 text-trofi-100 max-w-xl leading-relaxed">
                Whether you need customised training, strategic consulting, or women empowerment
                programmes, Trofi AgriTech delivers results. Contact our team in Dar es Salaam to
                start a conversation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
              <Link
                href="/modules"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors backdrop-blur-sm border border-white/20"
              >
                <Layers className="w-4 h-4" />
                Explore Modules
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
