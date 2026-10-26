import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { BarChart3, Filter, RotateCcw, AlertCircle, Info, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useSurvey } from '../context/SurveyContext';

export const ResearchDashboard: React.FC = () => {
  const {
    analytics,
    selectedDepartment,
    setSelectedDepartment,
    availableDepartments,
    resetToDefault
  } = useSurvey();

  const PIE_COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#F97316', '#EF4444'];

  return (
    <section id="findings" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Interactive Data Analytics Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Research Findings & Analytics
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Cross-sectional visualizations synthesizing communication quality indicators, employee satisfaction distributions, preferred channels, and top structural bottlenecks.
            </p>
          </div>

          {/* Department Filter & Action Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <Filter className="w-4 h-4 text-slate-500" />
              <label htmlFor="dept-filter" className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Department:
              </label>
              <select
                id="dept-filter"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="text-xs font-semibold bg-transparent text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
              >
                {availableDepartments.map((dept) => (
                  <option key={dept} value={dept} className="bg-white dark:bg-slate-900">
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={resetToDefault}
              title="Reset to default baseline sample"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Data</span>
            </button>
          </div>
        </div>

        {/* Mandatory Research Integrity Disclaimer Banner */}
        <div className="mb-8 p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-xs text-blue-900 dark:text-blue-300">
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              <strong>Research Note: </strong>
              Illustrative data only — live responses from the survey below dynamically update into the real-time sample pool ({analytics.totalResponses} active records).
            </span>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-200/60 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            Live Sample: n = {analytics.totalResponses}
          </span>
        </div>

        {/* Top Summary KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Total Analyzed</span>
              <Users className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
              {analytics.totalResponses}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Active survey respondents</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Avg Satisfaction</span>
              <TrendingUp className="w-4 h-4 text-teal-500" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400 font-heading">
              {analytics.avgSatisfactionScore}/100
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Weighted satisfaction index</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Instruction Clarity</span>
              <Sparkles className="w-4 h-4 text-indigo-500" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-heading">
              {analytics.avgInstructionClarity} <span className="text-xs font-normal text-slate-400">/ 5.0</span>
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Manager directive clarity</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Psychological Safety</span>
              <AlertCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-heading">
              {analytics.avgVoiceComfort} <span className="text-xs font-normal text-slate-400">/ 5.0</span>
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Comfort voicing concerns</p>
          </div>
        </div>

        {/* 4 Core Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart 1: Communication Quality Dimensions (Radar / Multidimensional View) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Chart 1: Communication Quality Metrics
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  Radar Metric Index (0–100)
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Holistic evaluation across clarity, psychological voice, cross-functional flow, and transparency.
              </p>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={analytics.qualityMetrics}>
                  <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: '#64748b', fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                  <Radar
                    name="Quality Score"
                    dataKey="score"
                    stroke="#2563EB"
                    fill="#3B82F6"
                    fillOpacity={0.4}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              Higher area coverage reflects balanced organizational communication effectiveness across departments.
            </div>
          </div>

          {/* Chart 2: Employee Satisfaction Distribution (Donut Chart) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Chart 2: Employee Satisfaction Levels
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                  5-Point Likert Distribution
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Proportion of respondents reporting positive vs. ambivalent vs. negative sentiment.
              </p>
            </div>

            <div className="h-72 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analytics.satisfactionDistribution}
                    dataKey="count"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={95}
                    paddingAngle={4}
                  >
                    {analytics.satisfactionDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color || PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any, name: any, item: any) => [
                      `${value} responses (${item.payload.percentage}%)`,
                      name
                    ]}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend with percentages */}
            <div className="mt-2 grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
              {analytics.satisfactionDistribution.map((item, idx) => (
                <div key={idx} className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 truncate">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {item.percentage}%
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              Clear managerial communication correlates strongly with the 'Satisfied' and 'Very Satisfied' clusters.
            </div>
          </div>

          {/* Chart 3: Preferred Communication Channels (Horizontal Bar Chart) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Chart 3: Preferred Communication Channels
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  Channel Utility
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Employee preferences across synchronous, asynchronous, and documentation media.
              </p>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={analytics.channelsDistribution}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <XAxis type="number" unit="%" tick={{ fill: '#64748b', fontSize: 11 }} />
                  <YAxis
                    dataKey="channel"
                    type="category"
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    width={140}
                  />
                  <Tooltip
                    formatter={(value: any) => [`${value}% preference`, 'Share']}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Bar dataKey="percentage" fill="#14B8A6" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              Direct face-to-face and 1-on-1 conversations remain the highest-trust vehicle for career and strategic alignment.
            </div>
          </div>

          {/* Chart 4: Main Communication Challenges (Bar Chart) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Chart 4: Primary Communication Challenges
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
                  Friction Points
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Most frequent bottlenecks reported by employees impacting their day-to-day satisfaction.
              </p>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={analytics.challengesDistribution}
                  margin={{ top: 10, right: 20, left: 0, bottom: 25 }}
                >
                  <XAxis
                    dataKey="challenge"
                    tick={{ fill: '#64748b', fontSize: 9 }}
                    angle={-15}
                    textAnchor="end"
                    interval={0}
                  />
                  <YAxis tick={{ fill: '#64748b', fontSize: 11 }} />
                  <Tooltip
                    formatter={(value: any, name: any, item: any) => [
                      `${value} reports (${item.payload.percentage}%)`,
                      item.payload.challenge
                    ]}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Bar dataKey="count" fill="#EF4444" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              Departmental barriers and delayed updates constitute the two greatest impediments to employee morale.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
