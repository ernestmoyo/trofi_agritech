'use client';

import Link from 'next/link';
import {
  BarChart, Bar, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  ArrowLeft, ChevronRight, Brain, Globe2, DollarSign, Users,
  Eye, MessageSquare, LineChart as LineChartIcon, Satellite, Cpu, Bot, Sparkles,
  Sprout, Droplets, Leaf, TrendingUp, Wifi, WifiOff,
  Rocket, ArrowRight, CheckCircle2, Zap, Target,
} from 'lucide-react';

/* ─── AI readiness index (top 10) ─── */
const readinessData = [
  { country: 'South Africa', infrastructure: 78, talent: 72, policy: 68, investment: 82, data: 75 },
  { country: 'Kenya',        infrastructure: 70, talent: 68, policy: 72, investment: 74, data: 70 },
  { country: 'Nigeria',      infrastructure: 62, talent: 65, policy: 55, investment: 68, data: 58 },
  { country: 'Egypt',        infrastructure: 72, talent: 70, policy: 60, investment: 65, data: 62 },
  { country: 'Rwanda',       infrastructure: 65, talent: 58, policy: 82, investment: 60, data: 68 },
  { country: 'Ghana',        infrastructure: 55, talent: 52, policy: 58, investment: 50, data: 48 },
  { country: 'Ethiopia',     infrastructure: 45, talent: 48, policy: 52, investment: 55, data: 42 },
  { country: 'Morocco',      infrastructure: 68, talent: 62, policy: 58, investment: 58, data: 55 },
  { country: 'Tunisia',      infrastructure: 64, talent: 60, policy: 55, investment: 52, data: 50 },
  { country: 'Tanzania',     infrastructure: 42, talent: 45, policy: 48, investment: 45, data: 40 },
];

const readinessBar = readinessData.map((d) => ({
  country: d.country,
  score: Math.round((d.infrastructure + d.talent + d.policy + d.investment + d.data) / 5),
})).sort((a, b) => b.score - a.score);

/* ─── radar for top 3 countries ─── */
const radarDimensions = [
  { dimension: 'Infrastructure', 'South Africa': 78, 'Kenya': 70, 'Nigeria': 62 },
  { dimension: 'Talent',         'South Africa': 72, 'Kenya': 68, 'Nigeria': 65 },
  { dimension: 'Policy',         'South Africa': 68, 'Kenya': 72, 'Nigeria': 55 },
  { dimension: 'Investment',     'South Africa': 82, 'Kenya': 74, 'Nigeria': 68 },
  { dimension: 'Data Access',    'South Africa': 75, 'Kenya': 70, 'Nigeria': 58 },
];

/* ─── technology breakdown ─── */
const techBreakdown = [
  { name: 'Computer Vision',       solutions: 48, icon: Eye },
  { name: 'NLP / Chatbots',        solutions: 32, icon: MessageSquare },
  { name: 'Predictive Analytics',   solutions: 42, icon: LineChartIcon },
  { name: 'Remote Sensing',        solutions: 38, icon: Satellite },
  { name: 'IoT + ML',              solutions: 28, icon: Cpu },
  { name: 'Robotics',              solutions: 12, icon: Bot },
  { name: 'LLM Advisory',          solutions: 18, icon: Sparkles },
];

/* ─── use-case pie ─── */
const useCases = [
  { name: 'Crop Disease Detection',   value: 28 },
  { name: 'Yield Prediction',         value: 22 },
  { name: 'Precision Irrigation',     value: 15 },
  { name: 'Soil Health Analysis',     value: 12 },
  { name: 'Market Price Prediction',  value: 13 },
  { name: 'Supply Chain Optimization', value: 10 },
];

const PIE_COLORS = ['#2d7d32', '#4ea24e', '#7abf7a', '#b37e3a', '#c1944c', '#748f76'];

/* ─── investment tracker ─── */
const investmentData = [
  { year: '2019', amount: 0.28 },
  { year: '2020', amount: 0.41 },
  { year: '2021', amount: 0.68 },
  { year: '2022', amount: 0.95 },
  { year: '2023', amount: 1.32 },
  { year: '2024', amount: 1.78 },
  { year: '2025', amount: 2.10 },
];

/* ─── innovation pipeline ─── */
const pipeline = [
  {
    stage: 'Pilot',
    count: 85,
    color: 'bg-trofi-100 text-trofi-800 border-trofi-200',
    desc: 'Early-stage testing with select farming communities',
    examples: ['AI soil sensors in Mali', 'Drone mapping in Rwanda', 'Voice-based advisory in Tanzania'],
  },
  {
    stage: 'Scaling',
    count: 52,
    color: 'bg-earth-100 text-earth-800 border-earth-200',
    desc: 'Expanding to multiple regions and partnerships',
    examples: ['Crop disease app in Kenya (2M users)', 'Weather AI in Ethiopia', 'Market platform in Nigeria'],
  },
  {
    stage: 'National Rollout',
    count: 24,
    color: 'bg-sage-100 text-sage-800 border-sage-200',
    desc: 'Government-endorsed, integrated into extension systems',
    examples: ['e-Extension platform in Ghana', 'Digital subsidy in Rwanda', 'Precision irrigation in Egypt'],
  },
];

/* ─── digital divide ─── */
const connectivityStats = [
  { label: 'Mobile Penetration',        value: 83,  icon: Wifi },
  { label: 'Internet Access (Rural)',    value: 28,  icon: WifiOff },
  { label: 'Smartphone Ownership',      value: 51,  icon: Cpu },
  { label: '3G/4G Coverage (Rural)',     value: 36,  icon: Satellite },
];

export default function AIAdoptionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/modules" className="hover:text-trofi-600 transition-colors">Modules</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-trofi-700 font-medium">AI Adoption Tracker</span>
        </div>
      </div>

      {/* hero — extra impressive for differentiator module */}
      <section className="relative overflow-hidden bg-gradient-to-br from-trofi-800 via-trofi-700 to-sage-800 text-white">
        {/* decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-trofi-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-sage-400 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-earth-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/modules" className="inline-flex items-center gap-1.5 text-trofi-200 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Modules
          </Link>
          <div className="flex items-start gap-4">
            <div className="p-3.5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
              <Brain className="w-9 h-9" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-trofi-500/30 backdrop-blur-sm rounded-full text-xs font-medium text-trofi-100 border border-trofi-400/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Platform Differentiator
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">AI Adoption in Agriculture</h1>
              <p className="mt-3 text-trofi-100 max-w-2xl text-lg leading-relaxed">
                The first comprehensive tracker of artificial intelligence solutions transforming
                African agriculture. Monitor AI readiness, investment flows, and innovation
                pipelines across the continent.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Computer Vision', 'Predictive Analytics', 'Remote Sensing', 'LLM Advisory', 'IoT + ML'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-trofi-100 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stat cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Brain,      label: 'AI Solutions',        value: '200+',   sub: 'Across 7 technology areas', accent: 'bg-trofi-50 text-trofi-600' },
            { icon: Globe2,     label: 'Countries Active',    value: '35',     sub: 'With deployed AI agri-tech', accent: 'bg-sage-50 text-sage-600' },
            { icon: DollarSign, label: 'AgTech Investment',    value: '$2.1B',  sub: 'Cumulative funding (2019-2025)', accent: 'bg-earth-50 text-earth-600' },
            { icon: Users,      label: 'Farmers Reached',     value: '15M+',   sub: 'Benefiting from AI solutions', accent: 'bg-trofi-50 text-trofi-600' },
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

      {/* AI readiness: bar + radar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-2 gap-6">
        {/* composite bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">AI Readiness Index</h2>
          <p className="text-sm text-gray-500 mb-5">Composite score (0-100) across infrastructure, talent, policy, investment, and data</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={readinessBar} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12, fill: '#6b7280' }} />
                <YAxis type="category" dataKey="country" width={100} tick={{ fontSize: 11, fill: '#6b7280' }} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} formatter={(v: number) => [`${v}/100`, 'Readiness']} />
                <Bar dataKey="score" name="Readiness Score" radius={[0, 6, 6, 0]}>
                  {readinessBar.map((entry, index) => (
                    <Cell key={index} fill={entry.score >= 65 ? '#2d7d32' : entry.score >= 50 ? '#c1944c' : '#9db29e'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* radar comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Top 3 Comparison</h2>
          <p className="text-sm text-gray-500 mb-5">Dimensional analysis of South Africa, Kenya, and Nigeria</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarDimensions}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 11, fill: '#6b7280' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10, fill: '#9ca3af' }} />
                <Radar name="South Africa" dataKey="South Africa" stroke="#2d7d32" fill="#2d7d32" fillOpacity={0.2} strokeWidth={2} />
                <Radar name="Kenya" dataKey="Kenya" stroke="#b37e3a" fill="#b37e3a" fillOpacity={0.15} strokeWidth={2} />
                <Radar name="Nigeria" dataKey="Nigeria" stroke="#748f76" fill="#748f76" fillOpacity={0.1} strokeWidth={2} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* technology breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Technology Breakdown</h2>
          <p className="text-sm text-gray-500 mb-6">Number of active AI solutions by technology type</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {techBreakdown.map((tech) => (
              <div key={tech.name} className="border border-gray-100 rounded-xl p-4 text-center hover:shadow-md hover:border-trofi-200 transition-all group">
                <div className="w-12 h-12 mx-auto bg-trofi-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-trofi-100 transition-colors">
                  <tech.icon className="w-6 h-6 text-trofi-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{tech.solutions}</p>
                <p className="text-xs text-gray-500 mt-1 leading-tight">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* use-case pie + investment bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-2 gap-6">
        {/* use-case distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Use Case Distribution</h2>
          <p className="text-sm text-gray-500 mb-5">How AI solutions are distributed across agriculture use cases</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={useCases}
                  cx="50%" cy="50%"
                  innerRadius={60} outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={{ stroke: '#9ca3af' }}
                >
                  {useCases.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* investment tracker */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">AgTech Investment Tracker</h2>
          <p className="text-sm text-gray-500 mb-5">Cumulative AI agriculture funding by year (USD billions)</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={investmentData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="fillInvestment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2d7d32" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2d7d32" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `$${v}B`} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} formatter={(v: number) => [`$${v}B`]} />
                <Area type="monotone" dataKey="amount" name="Investment" stroke="#2d7d32" fillOpacity={1} fill="url(#fillInvestment)" strokeWidth={2.5} dot={{ r: 5, fill: '#2d7d32', stroke: '#fff', strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-trofi-700 font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>650% growth from 2019 to 2025</span>
          </div>
        </div>
      </section>

      {/* innovation pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-1">
            <Rocket className="w-5 h-5 text-trofi-600" />
            <h2 className="text-lg font-semibold text-gray-900">Innovation Pipeline</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">Tracking AI solutions from pilot to national rollout</p>

          <div className="grid lg:grid-cols-3 gap-6">
            {pipeline.map((p, idx) => (
              <div key={p.stage} className="relative">
                <div className={`border rounded-xl p-5 ${p.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold uppercase tracking-wide">{p.stage}</span>
                    <span className="text-2xl font-bold">{p.count}</span>
                  </div>
                  <p className="text-xs mb-4 opacity-80">{p.desc}</p>
                  <div className="space-y-2">
                    {p.examples.map((ex) => (
                      <div key={ex} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 opacity-70" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {idx < pipeline.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* pipeline summary bar */}
          <div className="mt-6 flex rounded-full overflow-hidden h-4 bg-gray-100">
            <div className="bg-trofi-400 h-full transition-all" style={{ width: `${(85 / 161) * 100}%` }} title="Pilot" />
            <div className="bg-earth-400 h-full transition-all" style={{ width: `${(52 / 161) * 100}%` }} title="Scaling" />
            <div className="bg-sage-400 h-full transition-all" style={{ width: `${(24 / 161) * 100}%` }} title="National Rollout" />
          </div>
          <div className="mt-2 flex items-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-trofi-400" /> Pilot (85)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-earth-400" /> Scaling (52)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sage-400" /> National Rollout (24)</span>
          </div>
        </div>
      </section>

      {/* digital divide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-1">
            <Wifi className="w-5 h-5 text-trofi-600" />
            <h2 className="text-lg font-semibold text-gray-900">Digital Divide Indicators</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Key connectivity and access metrics shaping AI adoption potential across African agriculture
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {connectivityStats.map((stat) => (
              <div key={stat.label} className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.value >= 50 ? 'bg-trofi-50' : 'bg-amber-50'}`}>
                    <stat.icon className={`w-5 h-5 ${stat.value >= 50 ? 'text-trofi-600' : 'text-amber-600'}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                </div>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  <span className="text-lg text-gray-400 mb-0.5">%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${stat.value}%`,
                      background: stat.value >= 50 ? '#2d7d32' : stat.value >= 30 ? '#c1944c' : '#dc2626',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-trofi-50 border border-trofi-200 rounded-lg flex items-start gap-3">
            <Target className="w-5 h-5 text-trofi-700 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-trofi-800">Bridging the Divide</p>
              <p className="text-sm text-trofi-700 mt-1">
                While mobile penetration is high at 83%, rural internet access remains a critical bottleneck at just 28%.
                Offline-first AI solutions, USSD-based advisory services, and satellite connectivity initiatives
                are key strategies being deployed to reach the last mile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
