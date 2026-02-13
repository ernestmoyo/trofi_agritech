'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  ArrowLeft, ChevronRight, TrendingUp, Package, Globe2, RefreshCcw,
  ArrowUpRight, ArrowDownRight, Search, Download,
} from 'lucide-react';

/* ─── trade trend data 2018-2025 ─── */
const trendData = [
  { year: '2018', exports: 32.4, imports: 38.1 },
  { year: '2019', exports: 34.8, imports: 40.2 },
  { year: '2020', exports: 30.1, imports: 36.7 },
  { year: '2021', exports: 36.5, imports: 42.3 },
  { year: '2022', exports: 41.2, imports: 47.8 },
  { year: '2023', exports: 45.6, imports: 51.4 },
  { year: '2024', exports: 49.3, imports: 54.2 },
  { year: '2025', exports: 52.8, imports: 57.1 },
];

/* ─── top exporters ─── */
const exporterData = [
  { country: 'South Africa', value: 12.3 },
  { country: 'Nigeria',      value: 8.7 },
  { country: 'Egypt',        value: 7.9 },
  { country: 'Kenya',        value: 5.4 },
  { country: "Cote d'Ivoire", value: 5.1 },
  { country: 'Ethiopia',     value: 4.2 },
  { country: 'Ghana',        value: 3.8 },
  { country: 'Morocco',      value: 3.5 },
  { country: 'Tanzania',     value: 2.9 },
  { country: 'Uganda',       value: 2.4 },
];

/* ─── commodity breakdown ─── */
const commodityData = [
  { name: 'Cereals',         exports: 8.4,  imports: 14.2 },
  { name: 'Oilseeds',        exports: 5.1,  imports: 6.8 },
  { name: 'Livestock',       exports: 4.3,  imports: 5.7 },
  { name: 'Horticulture',    exports: 9.2,  imports: 4.1 },
  { name: 'Cash Crops',      exports: 14.6, imports: 3.4 },
  { name: 'Processed Foods', exports: 6.8,  imports: 12.3 },
];

/* ─── trade balance table ─── */
interface TradeRow {
  country: string;
  exports: number;
  imports: number;
  balance: number;
  yoy: number;
}

const tradeTable: TradeRow[] = [
  { country: 'South Africa',   exports: 12.3,  imports: 9.1,   balance: 3.2,   yoy: 8.4 },
  { country: 'Nigeria',        exports: 8.7,   imports: 11.4,  balance: -2.7,  yoy: 5.1 },
  { country: 'Kenya',          exports: 5.4,   imports: 4.8,   balance: 0.6,   yoy: 12.3 },
  { country: 'Ethiopia',       exports: 4.2,   imports: 5.9,   balance: -1.7,  yoy: 9.7 },
  { country: "Cote d'Ivoire",  exports: 5.1,   imports: 3.2,   balance: 1.9,   yoy: 6.8 },
  { country: 'Ghana',          exports: 3.8,   imports: 4.3,   balance: -0.5,  yoy: 7.2 },
  { country: 'Tanzania',       exports: 2.9,   imports: 3.1,   balance: -0.2,  yoy: 14.6 },
  { country: 'Egypt',          exports: 7.9,   imports: 12.6,  balance: -4.7,  yoy: 3.8 },
  { country: 'Morocco',        exports: 3.5,   imports: 4.7,   balance: -1.2,  yoy: 5.9 },
  { country: 'Uganda',         exports: 2.4,   imports: 2.1,   balance: 0.3,   yoy: 18.2 },
];

/* ─── AfCFTA comparison ─── */
const afcftaData = [
  { metric: 'Intra-African Ag Trade', before: 18, after: 33, unit: '% of total' },
  { metric: 'Average Tariff Rate',    before: 12.4, after: 5.2, unit: '%' },
  { metric: 'Non-Tariff Barriers',    before: 47, after: 22, unit: 'barrier count' },
  { metric: 'Trade Processing Time',  before: 14, after: 6, unit: 'days' },
];

export default function TradeStatisticsPage() {
  const [search, setSearch] = useState('');

  const filtered = tradeTable.filter((r) =>
    r.country.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/modules" className="hover:text-trofi-600 transition-colors">Modules</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-trofi-700 font-medium">Trade Statistics</span>
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
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Agriculture Trade Statistics</h1>
              <p className="mt-2 text-trofi-100 max-w-2xl text-lg">
                Track intra-African and global agriculture trade flows across all 55 AU member states,
                with commodity-level breakdowns and AfCFTA impact analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* stat cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: TrendingUp, label: 'Trade Volume',   value: '$78B',   sub: 'Total agriculture trade' },
            { icon: Package,    label: 'Products',       value: '5,300+', sub: 'HS-code level products' },
            { icon: Globe2,     label: 'Countries',      value: '55',     sub: 'AU Member States' },
            { icon: RefreshCcw, label: 'Data Freshness',  value: 'Monthly', sub: 'Regular updates' },
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

      {/* trend chart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Trade Trends (2018 - 2025)</h2>
          <p className="text-sm text-gray-500 mb-5">Agriculture exports and imports in billions USD</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="fillExports" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2d7d32" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2d7d32" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="fillImports" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#b37e3a" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#b37e3a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `$${v}B`} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} formatter={(v: number) => [`$${v}B`]} />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Area type="monotone" dataKey="exports" name="Exports" stroke="#2d7d32" fillOpacity={1} fill="url(#fillExports)" strokeWidth={2} />
                <Area type="monotone" dataKey="imports" name="Imports" stroke="#b37e3a" fillOpacity={1} fill="url(#fillImports)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* charts row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-2 gap-6">
        {/* top exporters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Top 10 Exporters</h2>
          <p className="text-sm text-gray-500 mb-5">Agriculture exports in billions USD (2025)</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={exporterData} layout="vertical" margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `$${v}B`} />
                <YAxis type="category" dataKey="country" width={100} tick={{ fontSize: 11, fill: '#6b7280' }} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} formatter={(v: number) => [`$${v}B`]} />
                <Bar dataKey="value" name="Exports" fill="#2d7d32" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* commodity breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Commodity Breakdown</h2>
          <p className="text-sm text-gray-500 mb-5">Exports vs imports by commodity group ($B)</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={commodityData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(v) => `$${v}B`} />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} formatter={(v: number) => [`$${v}B`]} />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Bar dataKey="exports" name="Exports" fill="#2d7d32" radius={[4, 4, 0, 0]} />
                <Bar dataKey="imports" name="Imports" fill="#c1944c" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* trade balance table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Trade Balance Overview</h2>
              <p className="text-sm text-gray-500 mt-0.5">Agriculture trade balance for top 10 trading nations (USD billions)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search country..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-trofi-300 focus:border-trofi-400 w-52"
                />
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" /> Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-6 py-3 font-semibold text-gray-600">Country</th>
                  <th className="px-6 py-3 font-semibold text-gray-600 text-right">Exports ($B)</th>
                  <th className="px-6 py-3 font-semibold text-gray-600 text-right">Imports ($B)</th>
                  <th className="px-6 py-3 font-semibold text-gray-600 text-right">Balance ($B)</th>
                  <th className="px-6 py-3 font-semibold text-gray-600 text-right">YoY Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((r) => (
                  <tr key={r.country} className="hover:bg-trofi-50/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{r.country}</td>
                    <td className="px-6 py-4 text-right text-gray-700">${r.exports.toFixed(1)}B</td>
                    <td className="px-6 py-4 text-right text-gray-700">${r.imports.toFixed(1)}B</td>
                    <td className={`px-6 py-4 text-right font-medium ${r.balance >= 0 ? 'text-trofi-600' : 'text-red-600'}`}>
                      <span className="inline-flex items-center gap-1">
                        {r.balance >= 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                        ${Math.abs(r.balance).toFixed(1)}B
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-trofi-600 font-medium">+{r.yoy}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AfCFTA impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">AfCFTA Impact Assessment</h2>
          <p className="text-sm text-gray-500 mb-6">Comparing agriculture trade metrics pre- and post-AfCFTA implementation</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {afcftaData.map((item) => (
              <div key={item.metric} className="border border-gray-100 rounded-lg p-5">
                <p className="text-sm font-medium text-gray-700 mb-3">{item.metric}</p>
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Before</p>
                    <p className="text-xl font-bold text-earth-600">{item.before}{item.unit === '%' || item.unit === '% of total' ? '%' : ''}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-trofi-500 flex-shrink-0" />
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">After</p>
                    <p className="text-xl font-bold text-trofi-600">{item.after}{item.unit === '%' || item.unit === '% of total' ? '%' : ''}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">{item.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
