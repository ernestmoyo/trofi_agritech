'use client';

import Link from 'next/link';
import {
  LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  ArrowLeft, ChevronRight, GitBranch, ShoppingBasket, Globe2, BarChart3,
  Wheat, Coffee, Leaf, Truck, Factory, Store, Package, Users,
  ArrowRight, Building, Wifi, Zap,
} from 'lucide-react';

/* ─── price transmission (maize, monthly) ─── */
const priceTrend = [
  { month: 'Jan', farmgate: 160, wholesale: 210, retail: 285, export: 240 },
  { month: 'Feb', farmgate: 155, wholesale: 205, retail: 280, export: 235 },
  { month: 'Mar', farmgate: 165, wholesale: 215, retail: 290, export: 248 },
  { month: 'Apr', farmgate: 175, wholesale: 230, retail: 305, export: 260 },
  { month: 'May', farmgate: 190, wholesale: 248, retail: 320, export: 275 },
  { month: 'Jun', farmgate: 200, wholesale: 260, retail: 335, export: 288 },
  { month: 'Jul', farmgate: 210, wholesale: 275, retail: 350, export: 300 },
  { month: 'Aug', farmgate: 195, wholesale: 255, retail: 330, export: 280 },
  { month: 'Sep', farmgate: 180, wholesale: 235, retail: 310, export: 265 },
  { month: 'Oct', farmgate: 170, wholesale: 220, retail: 295, export: 252 },
  { month: 'Nov', farmgate: 162, wholesale: 212, retail: 288, export: 242 },
  { month: 'Dec', farmgate: 158, wholesale: 208, retail: 282, export: 238 },
];

/* ─── value chain stages ─── */
const stages = [
  { icon: Package,   name: 'Input Supply',   players: '12K+',  desc: 'Seeds, fertilizers, agrochemicals, equipment' },
  { icon: Wheat,     name: 'Production',      players: '45M+',  desc: 'Smallholder & commercial farms' },
  { icon: Truck,     name: 'Aggregation',     players: '8K+',   desc: 'Collection centres, cooperatives, traders' },
  { icon: Factory,   name: 'Processing',      players: '5K+',   desc: 'Milling, refining, packaging, value addition' },
  { icon: Building,  name: 'Distribution',    players: '18K+',  desc: 'Wholesalers, logistics providers' },
  { icon: Store,     name: 'Retail',           players: '120K+', desc: 'Markets, supermarkets, e-commerce' },
];

/* ─── commodity cards ─── */
const commodities = [
  { name: 'Maize',     icon: Wheat,          production: '78M MT',  countries: 32, trend: '+4.2%' },
  { name: 'Rice',      icon: Leaf,           production: '38M MT',  countries: 28, trend: '+6.1%' },
  { name: 'Cassava',   icon: ShoppingBasket, production: '192M MT', countries: 24, trend: '+3.8%' },
  { name: 'Cocoa',     icon: Coffee,         production: '4.8M MT', countries: 12, trend: '+1.9%' },
  { name: 'Coffee',    icon: Coffee,         production: '1.9M MT', countries: 15, trend: '+5.4%' },
  { name: 'Cotton',    icon: Leaf,           production: '6.2M MT', countries: 18, trend: '+2.7%' },
  { name: 'Cashew',    icon: Leaf,           production: '2.1M MT', countries: 10, trend: '+8.3%' },
  { name: 'Livestock', icon: ShoppingBasket, production: '350M head', countries: 45, trend: '+3.1%' },
];

/* ─── gender participation radar ─── */
const genderData = [
  { stage: 'Input Supply',  women: 25, men: 75 },
  { stage: 'Production',    women: 60, men: 70 },
  { stage: 'Aggregation',   women: 35, men: 65 },
  { stage: 'Processing',    women: 55, men: 45 },
  { stage: 'Distribution',  women: 20, men: 80 },
  { stage: 'Retail',         women: 65, men: 50 },
];

/* ─── infrastructure gap data ─── */
const infraData = [
  { metric: 'Cold Storage Capacity',   current: 15, needed: 100, unit: 'M cubic metres' },
  { metric: 'Paved Rural Roads',       current: 34, needed: 100, unit: '% coverage' },
  { metric: 'Processing Facilities',    current: 22, needed: 100, unit: '% utilization' },
  { metric: 'Market Information Systems', current: 28, needed: 100, unit: '% coverage' },
  { metric: 'Irrigation Infrastructure',  current: 6, needed: 100, unit: '% arable land' },
  { metric: 'Electrification (Rural)',    current: 42, needed: 100, unit: '% coverage' },
];

export default function ValueChainPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/modules" className="hover:text-trofi-600 transition-colors">Modules</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-trofi-700 font-medium">Value Chain Analytics</span>
        </div>
      </div>

      {/* hero */}
      <section className="bg-gradient-to-br from-trofi-700 via-trofi-600 to-sage-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Link href="/modules" className="inline-flex items-center gap-1.5 text-trofi-200 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Modules
          </Link>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <GitBranch className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Value Chain Analytics</h1>
              <p className="mt-2 text-trofi-100 max-w-2xl text-lg">
                Map and analyze agriculture value chains across Africa, from input supply
                to retail, with real-time pricing and gender-disaggregated insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* stat cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ShoppingBasket, label: 'Commodities',     value: '14+',       sub: 'Key value chains tracked' },
            { icon: GitBranch,      label: 'Value Chain Stages', value: '6',       sub: 'End-to-end coverage' },
            { icon: Globe2,         label: 'Countries',        value: '55',        sub: 'AU Member States' },
            { icon: BarChart3,      label: 'Pricing',          value: 'Real-time', sub: 'Market price tracking' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <s.icon className="w-5 h-5 text-trofi-500" />
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{s.label}</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">{s.value}</span>
              <span className="text-xs text-gray-500">{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* price transmission chart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Price Transmission Analysis: Maize</h2>
          <p className="text-sm text-gray-500 mb-5">Monthly price points across the value chain (USD/MT, 2025)</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceTrend} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `$${v}`} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} formatter={(v: number) => [`$${v}/MT`]} />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Line type="monotone" dataKey="farmgate" name="Farmgate" stroke="#2d7d32" strokeWidth={2.5} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="wholesale" name="Wholesale" stroke="#4ea24e" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="retail" name="Retail" stroke="#b37e3a" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="export" name="Export" stroke="#748f76" strokeWidth={2} strokeDasharray="5 3" dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* value chain stages visualisation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Value Chain Stages</h2>
          <p className="text-sm text-gray-500 mb-6">End-to-end agriculture value chain with key actors at each stage</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stages.map((stage, idx) => (
              <div key={stage.name} className="relative">
                <div className="border border-gray-100 rounded-xl p-4 text-center hover:shadow-md hover:border-trofi-200 transition-all group">
                  <div className="w-12 h-12 mx-auto bg-trofi-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-trofi-100 transition-colors">
                    <stage.icon className="w-6 h-6 text-trofi-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{stage.name}</p>
                  <p className="text-xs text-trofi-600 font-medium mt-1">{stage.players} actors</p>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{stage.desc}</p>
                </div>
                {idx < stages.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-trofi-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* commodity cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Commodity Overview</h2>
          <p className="text-sm text-gray-500 mb-6">Key commodities tracked across African value chains</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {commodities.map((c) => (
              <div key={c.name} className="border border-gray-100 rounded-lg p-4 hover:shadow-md hover:border-trofi-200 transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-trofi-50 rounded-lg flex items-center justify-center">
                    <c.icon className="w-4 h-4 text-trofi-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{c.name}</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Production</span>
                    <span className="font-medium text-gray-900">{c.production}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Countries</span>
                    <span className="font-medium text-gray-900">{c.countries}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">YoY Trend</span>
                    <span className="font-medium text-trofi-600">{c.trend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* charts row: gender + infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-2 gap-6 pb-16">
        {/* gender participation radar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-5 h-5 text-trofi-600" />
            <h2 className="text-lg font-semibold text-gray-900">Gender Participation</h2>
          </div>
          <p className="text-sm text-gray-500 mb-5">Participation index by value chain stage (% of active participants)</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={genderData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="stage" tick={{ fontSize: 11, fill: '#6b7280' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10, fill: '#9ca3af' }} />
                <Radar name="Women" dataKey="women" stroke="#b37e3a" fill="#b37e3a" fillOpacity={0.25} strokeWidth={2} />
                <Radar name="Men" dataKey="men" stroke="#2d7d32" fill="#2d7d32" fillOpacity={0.15} strokeWidth={2} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* infrastructure gap */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-5 h-5 text-trofi-600" />
            <h2 className="text-lg font-semibold text-gray-900">Infrastructure Gap Analysis</h2>
          </div>
          <p className="text-sm text-gray-500 mb-5">Current capacity vs needed capacity across key infrastructure</p>
          <div className="space-y-5">
            {infraData.map((item) => (
              <div key={item.metric}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-gray-700">{item.metric}</span>
                  <span className="text-sm text-gray-500">{item.current}% <span className="text-gray-400">/ {item.needed}%</span></span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 relative">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${item.current}%`,
                      background: item.current >= 40 ? '#2d7d32' : item.current >= 20 ? '#c1944c' : '#dc2626',
                    }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">{item.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
