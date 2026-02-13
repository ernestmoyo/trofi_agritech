'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';
import {
  ArrowLeft, ChevronRight, ScrollText, Globe2, Layers, Building2,
  CheckCircle2, Clock, FileEdit, Search, Filter, Download,
} from 'lucide-react';

/* ─── colour palette ─── */
const CHART_GREENS = ['#2d7d32', '#4ea24e', '#7abf7a', '#b3dbb3', '#d9edd9'];
const CHART_EARTH  = ['#b37e3a', '#c1944c', '#cfad73', '#e0cca5', '#f0e6d2'];
const PIE_COLORS   = ['#2d7d32', '#4ea24e', '#b37e3a', '#c1944c', '#9db29e', '#748f76'];

/* ─── seed data ─── */
const categoryData = [
  { name: 'Land Tenure',       count: 67 },
  { name: 'Subsidies',         count: 54 },
  { name: 'Trade Policy',      count: 49 },
  { name: 'Food Safety',       count: 46 },
  { name: 'Irrigation',        count: 41 },
  { name: 'Extension',         count: 38 },
  { name: 'Climate',           count: 52 },
  { name: 'Mechanization',     count: 32 },
  { name: 'Seed Systems',      count: 44 },
  { name: 'Livestock',         count: 37 },
  { name: 'Digital Ag',        count: 28 },
];

const statusData = [
  { name: 'Enacted',  value: 312 },
  { name: 'Draft',    value: 98 },
  { name: 'Amended',  value: 64 },
  { name: 'Under Review', value: 26 },
];

interface Policy {
  id: number;
  name: string;
  country: string;
  category: string;
  status: 'Enacted' | 'Draft' | 'Amended' | 'Under Review';
  year: number;
  framework: string;
}

const policies: Policy[] = [
  { id: 1,  name: 'National Land Policy',                    country: 'Kenya',        category: 'Land Tenure',   status: 'Enacted',      year: 2024, framework: 'Malabo / CAADP' },
  { id: 2,  name: 'Agricultural Promotion Policy',           country: 'Nigeria',      category: 'Subsidies',     status: 'Enacted',      year: 2023, framework: 'CAADP' },
  { id: 3,  name: 'Climate-Smart Agriculture Strategy',      country: 'South Africa', category: 'Climate',       status: 'Amended',      year: 2024, framework: 'Malabo' },
  { id: 4,  name: 'Seed Systems Development Act',            country: 'Ethiopia',     category: 'Seed Systems',  status: 'Draft',        year: 2025, framework: 'CAADP' },
  { id: 5,  name: 'Planting for Food & Jobs Phase III',      country: 'Ghana',        category: 'Extension',     status: 'Enacted',      year: 2023, framework: 'Malabo / CAADP' },
  { id: 6,  name: 'Digital Agriculture Strategy',            country: 'Kenya',        category: 'Digital Ag',    status: 'Draft',        year: 2025, framework: 'AU Digital' },
  { id: 7,  name: 'Livestock Transformation Plan',           country: 'Ethiopia',     category: 'Livestock',     status: 'Enacted',      year: 2022, framework: 'CAADP' },
  { id: 8,  name: 'Irrigation Infrastructure Bill',          country: 'Nigeria',      category: 'Irrigation',    status: 'Under Review', year: 2025, framework: 'Malabo' },
  { id: 9,  name: 'Food Safety & Quality Act',               country: 'Ghana',        category: 'Food Safety',   status: 'Enacted',      year: 2023, framework: 'Malabo / CAADP' },
  { id: 10, name: 'Mechanization Subsidy Program',           country: 'South Africa', category: 'Mechanization', status: 'Amended',      year: 2024, framework: 'CAADP' },
];

const scorecardData = [
  { theme: 'Recommitment to CAADP',        score: 72, target: 100 },
  { theme: 'Agricultural Investment (10%)', score: 58, target: 100 },
  { theme: 'Ending Hunger',                score: 45, target: 100 },
  { theme: 'Halving Poverty',              score: 38, target: 100 },
  { theme: 'Intra-African Trade',           score: 52, target: 100 },
  { theme: 'Resilience to Shocks',         score: 41, target: 100 },
  { theme: 'Mutual Accountability',         score: 64, target: 100 },
];

const statusColor: Record<string, string> = {
  'Enacted':      'bg-trofi-100 text-trofi-800',
  'Draft':        'bg-amber-100 text-amber-800',
  'Amended':      'bg-blue-100 text-blue-800',
  'Under Review': 'bg-sage-100 text-sage-800',
};

export default function PolicyTrackerPage() {
  const [search, setSearch] = useState('');

  const filtered = policies.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.country.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── breadcrumb ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/modules" className="hover:text-trofi-600 transition-colors">Modules</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-trofi-700 font-medium">Policy Tracker</span>
        </div>
      </div>

      {/* ── hero ── */}
      <section className="bg-gradient-to-br from-trofi-700 via-trofi-600 to-sage-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Link href="/modules" className="inline-flex items-center gap-1.5 text-trofi-200 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Modules
          </Link>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <ScrollText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Agriculture Policy Tracker</h1>
              <p className="mt-2 text-trofi-100 max-w-2xl text-lg">
                Comprehensive tracking and analysis of agriculture policies across all 55 African Union member states,
                aligned with Malabo Declaration and CAADP frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── stat cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ScrollText, label: 'Total Policies',            value: '500+',  sub: 'Tracked across Africa' },
            { icon: Globe2,     label: 'Countries',                 value: '55',    sub: 'AU Member States' },
            { icon: Layers,     label: 'Policy Categories',         value: '11',    sub: 'Thematic Areas' },
            { icon: Building2,  label: 'Continental Frameworks',    value: '6',     sub: 'Malabo, CAADP & more' },
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

      {/* ── charts row ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-3 gap-6">
        {/* bar chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Policies by Category</h2>
          <p className="text-sm text-gray-500 mb-5">Distribution of tracked policies across 11 thematic areas</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 5, right: 20, left: 0, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} angle={-40} textAnchor="end" interval={0} />
                <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
                <Tooltip
                  contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }}
                  cursor={{ fill: 'rgba(45,125,50,0.08)' }}
                />
                <Bar dataKey="count" name="Policies" fill="#2d7d32" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* pie chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Status Breakdown</h2>
          <p className="text-sm text-gray-500 mb-5">Current legislative status</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%" cy="50%"
                  innerRadius={55} outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={{ stroke: '#9ca3af' }}
                >
                  {statusData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.875rem' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* ── policy table ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Recent Policies</h2>
              <p className="text-sm text-gray-500 mt-0.5">Latest agriculture policies and legislative updates</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search policies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-trofi-300 focus:border-trofi-400 w-56"
                />
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" /> Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-6 py-3 font-semibold text-gray-600">Policy Name</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Country</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Category</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Year</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Framework Alignment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-trofi-50/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{p.name}</td>
                    <td className="px-6 py-4 text-gray-700">{p.country}</td>
                    <td className="px-6 py-4 text-gray-700">{p.category}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor[p.status]}`}>
                        {p.status === 'Enacted' && <CheckCircle2 className="w-3 h-3" />}
                        {p.status === 'Draft' && <FileEdit className="w-3 h-3" />}
                        {p.status === 'Amended' && <FileEdit className="w-3 h-3" />}
                        {p.status === 'Under Review' && <Clock className="w-3 h-3" />}
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{p.year}</td>
                    <td className="px-6 py-4 text-gray-700">{p.framework}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-gray-400">No policies match your search.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Malabo / CAADP scorecard ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Malabo / CAADP Alignment Scorecard</h2>
          <p className="text-sm text-gray-500 mb-6">Continental-level progress against the seven Malabo commitment themes</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scorecardData.map((item) => (
              <div key={item.theme} className="border border-gray-100 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-700 mb-2">{item.theme}</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-2xl font-bold text-trofi-700">{item.score}%</span>
                  <span className="text-xs text-gray-400 mb-1">/ {item.target}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${item.score}%`,
                      background: item.score >= 60 ? '#2d7d32' : item.score >= 40 ? '#c1944c' : '#dc2626',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
