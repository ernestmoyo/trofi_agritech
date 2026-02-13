'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search,
  Globe2,
  TrendingUp,
  Wheat,
  Users,
  MapPin,
  FileText,
  AlertTriangle,
  Cpu,
  ArrowRight,
  BarChart3,
} from 'lucide-react'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type Region = 'East Africa' | 'West Africa' | 'Southern Africa' | 'North Africa' | 'Central Africa'

interface Country {
  name: string
  flag: string
  region: Region
  agGdp: number          // Agricultural GDP contribution %
  tradeVolume: number[]  // 6-quarter mini sparkline data (USD billions)
  policies: number
  phlRate: number        // post-harvest loss rate %
  aiSolutions: number
}

const countries: Country[] = [
  { name: 'Kenya',           flag: '🇰🇪', region: 'East Africa',     agGdp: 22.4, tradeVolume: [2.1, 2.4, 2.8, 3.1, 2.9, 3.3], policies: 34, phlRate: 28, aiSolutions: 18 },
  { name: 'Nigeria',         flag: '🇳🇬', region: 'West Africa',     agGdp: 24.1, tradeVolume: [5.2, 5.8, 6.1, 5.9, 6.4, 6.8], policies: 42, phlRate: 35, aiSolutions: 24 },
  { name: 'South Africa',    flag: '🇿🇦', region: 'Southern Africa', agGdp: 2.5,  tradeVolume: [8.1, 8.5, 9.0, 8.7, 9.3, 9.8], policies: 38, phlRate: 12, aiSolutions: 42 },
  { name: 'Ethiopia',        flag: '🇪🇹', region: 'East Africa',     agGdp: 35.8, tradeVolume: [1.8, 2.0, 2.3, 2.5, 2.4, 2.7], policies: 29, phlRate: 32, aiSolutions: 11 },
  { name: 'Ghana',           flag: '🇬🇭', region: 'West Africa',     agGdp: 19.7, tradeVolume: [2.6, 2.9, 3.1, 3.4, 3.2, 3.6], policies: 31, phlRate: 25, aiSolutions: 16 },
  { name: 'Tanzania',        flag: '🇹🇿', region: 'East Africa',     agGdp: 26.9, tradeVolume: [1.5, 1.7, 1.9, 2.1, 2.0, 2.3], policies: 27, phlRate: 30, aiSolutions: 13 },
  { name: "C\u00f4te d'Ivoire", flag: '🇨🇮', region: 'West Africa',  agGdp: 21.3, tradeVolume: [3.8, 4.1, 4.5, 4.3, 4.7, 5.0], policies: 26, phlRate: 27, aiSolutions: 14 },
  { name: 'Egypt',           flag: '🇪🇬', region: 'North Africa',    agGdp: 11.3, tradeVolume: [6.5, 6.9, 7.2, 7.0, 7.5, 7.8], policies: 45, phlRate: 15, aiSolutions: 35 },
  { name: 'Morocco',         flag: '🇲🇦', region: 'North Africa',    agGdp: 12.8, tradeVolume: [4.2, 4.5, 4.8, 5.0, 4.9, 5.3], policies: 39, phlRate: 18, aiSolutions: 28 },
  { name: 'Uganda',          flag: '🇺🇬', region: 'East Africa',     agGdp: 24.2, tradeVolume: [1.2, 1.4, 1.5, 1.7, 1.6, 1.8], policies: 23, phlRate: 33, aiSolutions: 9 },
  { name: 'Rwanda',          flag: '🇷🇼', region: 'East Africa',     agGdp: 25.1, tradeVolume: [0.6, 0.7, 0.8, 0.9, 0.9, 1.0], policies: 28, phlRate: 22, aiSolutions: 15 },
  { name: 'Senegal',         flag: '🇸🇳', region: 'West Africa',     agGdp: 16.4, tradeVolume: [1.8, 2.0, 2.2, 2.4, 2.3, 2.5], policies: 25, phlRate: 26, aiSolutions: 12 },
  { name: 'Mozambique',      flag: '🇲🇿', region: 'Southern Africa', agGdp: 27.3, tradeVolume: [1.0, 1.1, 1.3, 1.4, 1.3, 1.5], policies: 20, phlRate: 34, aiSolutions: 7 },
  { name: 'Zambia',          flag: '🇿🇲', region: 'Southern Africa', agGdp: 5.3,  tradeVolume: [1.4, 1.6, 1.7, 1.9, 1.8, 2.0], policies: 22, phlRate: 29, aiSolutions: 10 },
  { name: 'Zimbabwe',        flag: '🇿🇼', region: 'Southern Africa', agGdp: 8.1,  tradeVolume: [0.9, 1.0, 1.1, 1.2, 1.1, 1.3], policies: 19, phlRate: 31, aiSolutions: 8 },
]

const regions: (Region | 'All')[] = [
  'All',
  'East Africa',
  'West Africa',
  'Southern Africa',
  'North Africa',
  'Central Africa',
]

const continentStats = [
  { label: 'African Nations',        value: '55',    icon: Globe2 },
  { label: 'Agricultural GDP',       value: '$100B+', icon: TrendingUp },
  { label: "World's Arable Land",    value: '60%',   icon: Wheat },
  { label: 'Smallholder Farmers',    value: '250M+', icon: Users },
]

/* ------------------------------------------------------------------ */
/*  Mini bar chart component                                          */
/* ------------------------------------------------------------------ */

function MiniBar({ data }: { data: number[] }) {
  const chartData = data.map((v, i) => ({ q: `Q${i + 1}`, v }))
  return (
    <ResponsiveContainer width="100%" height={40}>
      <BarChart data={chartData} barCategoryGap="20%">
        <Tooltip
          contentStyle={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '11px',
            padding: '4px 8px',
          }}
          formatter={(value: number) => [`$${value}B`, 'Trade']}
          labelFormatter={(label: string) => label}
        />
        <Bar dataKey="v" fill="#2d7d32" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

/* ------------------------------------------------------------------ */
/*  Region badge colors                                               */
/* ------------------------------------------------------------------ */

function regionColor(region: Region) {
  switch (region) {
    case 'East Africa':     return 'bg-trofi-100 text-trofi-700'
    case 'West Africa':     return 'bg-earth-100 text-earth-700'
    case 'Southern Africa': return 'bg-sage-100 text-sage-700'
    case 'North Africa':    return 'bg-amber-100 text-amber-700'
    case 'Central Africa':  return 'bg-purple-100 text-purple-700'
  }
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function CountriesPage() {
  const [search, setSearch] = useState('')
  const [activeRegion, setActiveRegion] = useState<Region | 'All'>('All')

  const filtered = useMemo(() => {
    return countries.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase())
      const matchRegion = activeRegion === 'All' || c.region === activeRegion
      return matchSearch && matchRegion
    })
  }, [search, activeRegion])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* -------- HERO -------- */}
      <section className="gradient-hero pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-trofi-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <Globe2 className="w-4 h-4" />
            Pan-African Coverage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Country Profiles
          </h1>
          <p className="text-lg md:text-xl text-trofi-100 max-w-3xl mx-auto">
            Comprehensive Agricultural Intelligence by Nation &mdash; aggregating policy, trade,
            post-harvest, value chain, and AI adoption data across the continent.
          </p>
        </div>
      </section>

      {/* -------- CONTINENTAL STATS -------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {continentStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-trofi-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-trofi-600" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* -------- FILTERS -------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Search bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search countries..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-trofi-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Region tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeRegion === r
                  ? 'bg-trofi-600 text-white shadow-md shadow-trofi-600/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-trofi-300 hover:text-trofi-600'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing <span className="font-semibold text-gray-700">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'country' : 'countries'}
        </p>
      </section>

      {/* -------- COUNTRY CARDS -------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No countries match your search.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((country) => (
              <Link
                key={country.name}
                href="#"
                className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Card header */}
                <div className="px-6 pt-6 pb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl leading-none">{country.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-trofi-700 transition-colors">
                        {country.name}
                      </h3>
                      <span
                        className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${regionColor(
                          country.region
                        )}`}
                      >
                        {country.region}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-2xl font-bold text-trofi-600">{country.agGdp}%</p>
                    <p className="text-[10px] uppercase tracking-wide text-gray-400 font-medium">
                      Ag. GDP
                    </p>
                  </div>
                </div>

                {/* Mini bar chart */}
                <div className="px-6">
                  <p className="text-[10px] uppercase tracking-wide text-gray-400 font-medium mb-1 flex items-center gap-1">
                    <BarChart3 className="w-3 h-3" /> Trade Volume (6 Quarters)
                  </p>
                  <MiniBar data={country.tradeVolume} />
                </div>

                {/* Quick stats */}
                <div className="px-6 py-4 mt-2 border-t border-gray-100 grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-0.5">
                      <FileText className="w-3 h-3" />
                    </div>
                    <p className="text-sm font-bold text-gray-800">{country.policies}</p>
                    <p className="text-[10px] text-gray-400">Policies</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-0.5">
                      <AlertTriangle className="w-3 h-3" />
                    </div>
                    <p className="text-sm font-bold text-gray-800">{country.phlRate}%</p>
                    <p className="text-[10px] text-gray-400">PHL Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-0.5">
                      <Cpu className="w-3 h-3" />
                    </div>
                    <p className="text-sm font-bold text-gray-800">{country.aiSolutions}</p>
                    <p className="text-[10px] text-gray-400">AI Solutions</p>
                  </div>
                </div>

                {/* View detail link */}
                <div className="px-6 py-3 bg-gray-50 group-hover:bg-trofi-50 transition-colors flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 group-hover:text-trofi-600 transition-colors">
                    View full profile
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-trofi-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
