import React, { useState } from 'react';
import { Briefcase, Award, ShieldCheck, Users, HeartHandshake, Sparkles, ChevronRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { SATISFACTION_DIMENSIONS } from '../data/mockData';

export const EmployeeSatisfaction: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('job-satisfaction');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return Briefcase;
      case 'Award':
        return Award;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Users':
        return Users;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Sparkles':
        return Sparkles;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="satisfaction" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Human-Centric Workplace Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Communication Shapes Employee Satisfaction
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Employee satisfaction represents the degree to which team members feel positive, secure, and valued in their jobs, workplace environment, management practices, and organizational culture.
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Click any dimension below to explore theoretical insights and empirical workplace data.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SATISFACTION_DIMENSIONS.map((item) => {
            const Icon = getIcon(item.iconName);
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`group relative bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl bg-white dark:bg-slate-800'
                    : 'border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Stat Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isExpanded
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="text-base font-bold text-slate-900 dark:text-white font-heading">
                        {item.stat}
                      </span>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 max-w-[120px] leading-tight text-right">
                        {item.statLabel}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  {/* Expanded Detail Section */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/80 animate-in fade-in duration-200">
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        {item.extendedDesc}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Empirical driver of organizational retention</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Toggle Cue */}
                <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="text-[11px]">
                    {isExpanded ? 'Click to collapse' : 'Click to read analysis'}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-blue-600 dark:text-blue-400 transition-transform ${
                      isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
