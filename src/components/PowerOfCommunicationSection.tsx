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
  Cell
} from 'recharts';
import { Sparkles } from 'lucide-react';

export const PowerOfCommunicationSection: React.FC = () => {
  // Chart 1: Communication Quality vs Employee Satisfaction
  const qualityVsSatisfactionData = [
    { rating: 'Poor', satisfaction: 42, fill: '#3B82F6' },
    { rating: 'Fair', satisfaction: 58, fill: '#0EA5E9' },
    { rating: 'Good', satisfaction: 68, fill: '#14B8A6' },
    { rating: 'Very Good', satisfaction: 82, fill: '#2563EB' },
    { rating: 'Excellent', satisfaction: 94, fill: '#6366F1' }
  ];

  // Chart 2: Key Positive Impacts
  const keyImpactsData = [
    { name: 'Higher Engagement', value: 32, color: '#2563EB' },
    { name: 'Better Productivity', value: 28, color: '#06B6D4' },
    { name: 'Stronger Relationships', value: 22, color: '#F59E0B' },
    { name: 'Increased Retention', value: 18, color: '#10B981' }
  ];

  return (
    <section id="impact" className="py-16 sm:py-20 bg-slate-50/80 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Impact Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            The Power of Communication
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Better communication leads to higher satisfaction, engagement, productivity and stronger workplace relationships.
          </p>
        </div>

        {/* 2 Charts Grid with Vivid Shadows & Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Communication Quality vs Employee Satisfaction */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-md shadow-blue-500/5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Communication Quality vs Employee Satisfaction
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-sky-300">
                Direct Correlation
              </span>
            </div>

            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={qualityVsSatisfactionData} margin={{ top: 25, right: 10, left: -20, bottom: 5 }}>
                  <XAxis dataKey="rating" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                  <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 11 }} />
                  <Tooltip
                    formatter={(val: any) => [`${val}% satisfaction`, 'Satisfaction Rate']}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '10px', color: '#fff', fontSize: '12px' }}
                  />
                  <Bar
                    dataKey="satisfaction"
                    radius={[8, 8, 0, 0]}
                    label={{
                      position: 'top',
                      fill: '#2563EB',
                      fontSize: 12,
                      fontWeight: 'bold',
                      formatter: (v: any) => `${v}%`
                    }}
                  >
                    {qualityVsSatisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span>Low Quality: 42%</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">+52% Gain Under Exemplary Communication</span>
              <span>High Quality: 94%</span>
            </div>
          </div>

          {/* Card 2: Key Positive Impacts */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-md shadow-teal-500/5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Key Positive Impacts
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                Weighted Index
              </span>
            </div>

            <div className="h-64 sm:h-72 w-full flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={keyImpactsData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={72}
                    outerRadius={104}
                    paddingAngle={4}
                  >
                    {keyImpactsData.map((entry, index) => (
                      <Cell key={`donut-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '10px', color: '#fff', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Large Centered 87% with Vibrant Gradient */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-teal-500 font-heading">
                  87%
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
                  Positive Impact
                </span>
              </div>
            </div>

            {/* Legend with Color Badges */}
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              {keyImpactsData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80">
                  <span className="w-2.5 h-2.5 rounded-full shadow-2xs" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-700 dark:text-slate-300 font-semibold truncate">
                    {item.name}
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
