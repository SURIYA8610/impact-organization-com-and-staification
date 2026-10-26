import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart
} from 'recharts';
import { Smile, MessageSquare, Users, TrendingUp, ChevronDown, Sparkles } from 'lucide-react';
import { useSurvey } from '../context/SurveyContext';

export const RealTimeInsightsSection: React.FC = () => {
  const { analytics } = useSurvey();
  const [timeRange, setTimeRange] = useState('Last 6 Months');

  // Trend line chart data across Jan - Jun
  const trendData = [
    { month: 'Jan', communication: 56, satisfaction: 62 },
    { month: 'Feb', communication: 64, satisfaction: 69 },
    { month: 'Mar', communication: 68, satisfaction: 74 },
    { month: 'Apr', communication: 72, satisfaction: 78 },
    { month: 'May', communication: 76, satisfaction: 82 },
    { month: 'Jun', communication: 82, satisfaction: 88 }
  ];

  // Overall Satisfaction Donut data
  const overallSatisfactionData = [
    { name: 'Very Satisfied', value: 45, color: '#2563EB' },
    { name: 'Satisfied', value: 37, color: '#10B981' },
    { name: 'Neutral', value: 12, color: '#F59E0B' },
    { name: 'Dissatisfied', value: 6, color: '#EF4444' }
  ];

  return (
    <section id="dashboard" className="py-16 sm:py-20 bg-slate-50/80 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Time Range Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-sky-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Insights Dashboard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1.5">
              Real-Time Insights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Track how communication influences employee satisfaction across key metrics.
            </p>
          </div>

          {/* Dropdown Filter */}
          <div className="relative self-start sm:self-auto">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 pr-9 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs cursor-pointer"
            >
              <option value="Last 6 Months">Last 6 Months</option>
              <option value="Current Quarter">Current Quarter</option>
              <option value="Year to Date">Year to Date</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* 4 Colorful KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* KPI 1: Employee Satisfaction */}
          <div className="bg-gradient-to-b from-emerald-50/80 to-white dark:from-slate-800/90 dark:to-slate-900 rounded-2xl p-5 border border-emerald-200/80 dark:border-emerald-900/60 shadow-md shadow-emerald-500/5 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-500/25">
                <Smile className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                ↑ 12%
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              Employee Satisfaction
            </p>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading">
              82%
            </p>
          </div>

          {/* KPI 2: Communication Effectiveness */}
          <div className="bg-gradient-to-b from-blue-50/80 to-white dark:from-slate-800/90 dark:to-slate-900 rounded-2xl p-5 border border-blue-200/80 dark:border-blue-900/60 shadow-md shadow-blue-500/5 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-md shadow-blue-500/25">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                ↑ 10%
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              Communication Effectiveness
            </p>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading">
              76%
            </p>
          </div>

          {/* KPI 3: Employee Engagement */}
          <div className="bg-gradient-to-b from-cyan-50/80 to-white dark:from-slate-800/90 dark:to-slate-900 rounded-2xl p-5 border border-cyan-200/80 dark:border-cyan-900/60 shadow-md shadow-cyan-500/5 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-sky-400 text-white flex items-center justify-center shadow-md shadow-cyan-500/25">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">
                ↑ 14%
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              Employee Engagement
            </p>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading">
              78%
            </p>
          </div>

          {/* KPI 4: Productivity */}
          <div className="bg-gradient-to-b from-indigo-50/80 to-white dark:from-slate-800/90 dark:to-slate-900 rounded-2xl p-5 border border-indigo-200/80 dark:border-indigo-900/60 shadow-md shadow-indigo-500/5 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-400 text-white flex items-center justify-center shadow-md shadow-indigo-500/25">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                ↑ 11%
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              Productivity
            </p>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading">
              85%
            </p>
          </div>
        </div>

        {/* 2 Lower Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Chart: Communication vs Satisfaction Trend (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-md shadow-blue-500/5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Communication vs Satisfaction Trend
              </h3>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-sky-300">
                Monthly Velocity
              </span>
            </div>

            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData} margin={{ top: 15, right: 20, left: -20, bottom: 5 }}>
                  <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }} />
                  <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '10px', color: '#fff', fontSize: '12px' }}
                  />
                  <Legend
                    verticalAlign="top"
                    align="right"
                    wrapperStyle={{ paddingBottom: '12px', fontSize: '12px' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="communication"
                    name="Communication Quality"
                    stroke="#2563EB"
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#2563EB', stroke: '#fff', strokeWidth: 2 }}
                    activeDot={{ r: 7 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="satisfaction"
                    name="Satisfaction"
                    stroke="#14B8A6"
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#14B8A6', stroke: '#fff', strokeWidth: 2 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Chart: Overall Satisfaction Donut (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-md shadow-teal-500/5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Overall Satisfaction
              </h3>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                Likert Breakdown
              </span>
            </div>

            <div className="h-56 sm:h-64 w-full flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={overallSatisfactionData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={68}
                    outerRadius={100}
                    paddingAngle={4}
                  >
                    {overallSatisfactionData.map((entry, index) => (
                      <Cell key={`donut-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val: any) => [`${val}%`, 'Share']}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '10px', color: '#fff', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Large Centered 82% */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 font-heading">
                  82%
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
                  Satisfied
                </span>
              </div>
            </div>

            {/* Legend with percentages */}
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              {overallSatisfactionData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shadow-2xs" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-700 dark:text-slate-300 font-medium truncate">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
