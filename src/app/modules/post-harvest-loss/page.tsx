'use client';

import Link from 'next/link';
import {
  BarChart, Bar, AreaChart, Area, ComposedChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell,
} from 'recharts';
import {
  ArrowLeft, ChevronRight, PackageX, DollarSign, Layers, Globe2,
  TrendingDown, Target, Wheat, Apple, Carrot, Bean, AlertTriangle,
} from 'lucide-react';

/* ─── loss by stage (waterfall) ─── */
const stageData = [
  { stage: 'Harvesting',  loss: 5,  color: '#7abf7a' },
  { stage: 'Handling',    loss: 8,  color: '#4ea24e' },
  { stage: 'Storage',     loss: 12, color: '#2d7d32' },
  { stage: 'Transport',   loss: 6,  color: '#c1944c' },
  { stage: 'Processing',  loss: 4,  color: '#b37e3a' },
  { stage: 'Market',      loss: 5,  color: '#9a6530' },
];

/* ─── PHL by commodity ─── */
const commodityLoss = [
  { commodity: 'Cereals',      loss: 18, economic: 12.4 },
  { commodity: 'Fruits',       loss: 42, economic: 9.6 },
  { commodity: 'Vegetables',   loss: 38, economic: 8.1 },
  { commodity: 'Roots/Tubers', loss: 34, economic: 7.8 },
  { commodity: 'Legumes',      loss: 22, economic: 5.3 },
];

/* ─── country comparison ─── */
const countryPHL = [
  { country: 'Nigeria',       rate: 38 },
  { country: 'Tanzania',      rate: 36 },
  { country: 'DRC',           rate: 35 },
  { country: 'Mozambique',    rate: 33 },
  { country: 'Kenya',         rate: 30 },
  { country: 'Uganda',        rate: 29 },
  { country: 'Ghana',         rate: 27 },
  { country: 'Ethiopia',      rate: 26 },
  { country: 'Malawi',        rate: 24 },
  { country: 'South Africa',  rate: 18 },
];

/* ─── target tracking trend ─── */
const targetTrend = [
  { year: '2014', actual: 37, target: 37 },
  { year: '2016', actual: 35, target: 33.5 },
  { year: '2018', actual: 33, target: 30 },
  { year: '2020', actual: 31, target: 26.5 },
  { year: '2022', actual: 29, target: 23 },
  { year: '2024', actual: 27, target: 19.5 },
  { year: '2025', actual: 26, target: 18.5 },
];

/* ─── calculator fields (visual only) ─── */
const calcFields = [
  { label: 'Commodity',        placeholder: 'e.g. Maize' },
  { label: 'Production (MT)',   placeholder: 'e.g. 500,000' },
  { label: 'Market Price ($/MT)', placeholder: 'e.g. 280' },
  { label: 'Estimated Loss Rate (%)', placeholder: 'e.g. 25' },
];

export default function PostHarvestLossPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/modules" className="hover:text-trofi-600 transition-colors">Modules</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-trofi-700 font-medium">Post-Harvest Loss</span>
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
              <PackageX className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Post-Harvest Loss Tracker</h1>
              <p className="mt-2 text-trofi-100 max-w-2xl text-lg">
                Monitor, analyze, and combat post-harvest losses across agriculture value chains
                in all 55 African Union member states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* stat cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: TrendingDown,  label: 'Average PHL Rate',  value: '30-40%',  sub: 'Across the continent' },
            { icon: DollarSign,    label: 'Annual Impact',     value: '$48B',    sub: 'Economic losses/year' },
            { icon: Layers,        label: 'Loss Stages',       value: '6',       sub: 'Value chain stages' },
            { icon: Globe2,        label: 'Countries Tracked', value: '55',      sub: 'AU Member States' },
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

      {/* loss by stage bar chart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Loss by Value Chain Stage</h2>
          <p className="text-sm text-gray-500 mb-5">Average percentage of produce lost at each stage, cumulative total ~40%</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stageData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="stage" tick={{ fontSize: 12, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `${v}%`} domain={[0, 15]} />
                <Tooltip
                  contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }}
                  formatter={(v: number) => [`${v}%`, 'Loss Rate']}
                  cursor={{ fill: 'rgba(45,125,50,0.08)' }}
                />
                <Bar dataKey="loss" name="Loss %" radius={[6, 6, 0, 0]}>
                  {stageData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* cumulative indicator */}
          <div className="mt-4 flex items-center gap-6 flex-wrap">
            {stageData.map((s) => (
              <div key={s.stage} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="text-xs text-gray-600">{s.stage}: {s.loss}%</span>
              </div>
            ))}
            <div className="flex items-center gap-2 ml-auto">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-gray-700">Cumulative: ~40%</span>
            </div>
          </div>
        </div>
      </section>

      {/* charts row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-2 gap-6">
        {/* PHL by commodity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">PHL by Commodity</h2>
          <p className="text-sm text-gray-500 mb-5">Loss rate (%) and economic impact ($B) by commodity group</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={commodityLoss} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="commodity" tick={{ fontSize: 11, fill: '#6b7280' }} />
                <YAxis yAxisId="left" tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `${v}%`} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `$${v}B`} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Bar yAxisId="left" dataKey="loss" name="Loss Rate (%)" fill="#2d7d32" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="economic" name="Economic Impact ($B)" stroke="#b37e3a" strokeWidth={2.5} dot={{ r: 5, fill: '#b37e3a' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* country comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Country Comparison</h2>
          <p className="text-sm text-gray-500 mb-5">Top 10 countries by average post-harvest loss rate (%)</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={countryPHL} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `${v}%`} domain={[0, 45]} />
                <YAxis type="category" dataKey="country" width={100} tick={{ fontSize: 11, fill: '#6b7280' }} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} formatter={(v: number) => [`${v}%`, 'PHL Rate']} />
                <Bar dataKey="rate" name="PHL Rate" radius={[0, 4, 4, 0]}>
                  {countryPHL.map((entry, index) => (
                    <Cell key={index} fill={entry.rate >= 30 ? '#dc2626' : entry.rate >= 25 ? '#c1944c' : '#2d7d32'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* PHL reduction target tracking */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-1">
            <Target className="w-5 h-5 text-trofi-600" />
            <h2 className="text-lg font-semibold text-gray-900">PHL Reduction Target Tracking</h2>
          </div>
          <p className="text-sm text-gray-500 mb-5">
            Malabo Declaration target: halve post-harvest losses by 2025 (from 37% baseline in 2014 to 18.5%)
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={targetTrend} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="fillActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c1944c" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#c1944c" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `${v}%`} domain={[10, 40]} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} formatter={(v: number) => [`${v}%`]} />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Area type="monotone" dataKey="actual" name="Actual PHL Rate" stroke="#c1944c" fill="url(#fillActual)" strokeWidth={2.5} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="target" name="Malabo Target" stroke="#2d7d32" strokeWidth={2} strokeDasharray="6 3" dot={{ r: 4, fill: '#2d7d32' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-800">Target Gap Alert</p>
              <p className="text-sm text-amber-700 mt-1">
                Current continental PHL rate of 26% is 7.5 percentage points above the 2025 Malabo target of 18.5%.
                Accelerated investment in cold-chain infrastructure, storage, and processing is critical to close this gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* economic impact calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-1">
            <DollarSign className="w-5 h-5 text-trofi-600" />
            <h2 className="text-lg font-semibold text-gray-900">Economic Impact Calculator</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Estimate the economic impact of post-harvest losses for any commodity and production volume
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {calcFields.map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                <input
                  type="text"
                  placeholder={f.placeholder}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-trofi-300 focus:border-trofi-400"
                  readOnly
                />
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-trofi-50 rounded-lg p-5 text-center">
              <p className="text-xs text-trofi-600 font-medium uppercase tracking-wide mb-1">Production Lost</p>
              <p className="text-2xl font-bold text-trofi-800">125,000 MT</p>
              <p className="text-xs text-trofi-600 mt-1">25% of total production</p>
            </div>
            <div className="bg-earth-50 rounded-lg p-5 text-center">
              <p className="text-xs text-earth-600 font-medium uppercase tracking-wide mb-1">Economic Loss</p>
              <p className="text-2xl font-bold text-earth-800">$35M</p>
              <p className="text-xs text-earth-600 mt-1">At current market prices</p>
            </div>
            <div className="bg-sage-50 rounded-lg p-5 text-center">
              <p className="text-xs text-sage-600 font-medium uppercase tracking-wide mb-1">Food Security Impact</p>
              <p className="text-2xl font-bold text-sage-800">312K</p>
              <p className="text-xs text-sage-600 mt-1">People could be fed/year</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
