import React, { useState } from 'react';
import {
  Lightbulb,
  CheckCircle2,
  Users,
  Compass,
  MessageSquareQuote,
  Layers,
  Award,
  Ear,
  SlidersHorizontal,
  ChevronDown,
  Building,
  Target
} from 'lucide-react';
import { RECOMMENDATIONS } from '../data/mockData';

export const Recommendations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [checkedActions, setCheckedActions] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Leadership', 'Culture', 'Process', 'Technology'];

  const filteredRecommendations =
    activeCategory === 'All'
      ? RECOMMENDATIONS
      : RECOMMENDATIONS.filter((r) => r.category === activeCategory);

  const toggleCheck = (key: string) => {
    setCheckedActions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getImpactBadge = (level: string) => {
    switch (level) {
      case 'Critical':
        return 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 border-rose-200 dark:border-rose-900';
      case 'High':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-900';
      default:
        return 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300 border-teal-200 dark:border-teal-900';
    }
  };

  return (
    <section id="recommendations" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Strategic Interventions & Best Practices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Strategies for Better Organizational Communication
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Eight empirical, actionable recommendations for corporate leaders and HR managers to transform communication channels into catalysts for employee satisfaction and retention.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRecommendations.map((rec) => {
            const isExpanded = expandedId === rec.id;

            return (
              <div
                key={rec.id}
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 shadow-sm flex flex-col justify-between ${
                  isExpanded
                    ? 'border-blue-500 ring-2 ring-blue-500/10 shadow-lg'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
                }`}
              >
                <div className="p-6">
                  {/* Top Bar with Number, Category, and Impact Level */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center">
                        #{rec.id}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {rec.category}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${getImpactBadge(
                        rec.impactLevel
                      )}`}
                    >
                      {rec.impactLevel} Priority
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {rec.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {rec.summary}
                  </p>

                  {/* Practical Workplace Example Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-1 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" />
                      Practical Workplace Example:
                    </p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                      "{rec.workplaceExample}"
                    </p>
                  </div>

                  {/* Implementation Checklist (Expandable) */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-200">
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-200 mb-2">
                        HR Implementation Checklist:
                      </p>
                      <div className="space-y-2">
                        {rec.actionItems.map((action, idx) => {
                          const checkKey = `${rec.id}-${idx}`;
                          const isDone = !!checkedActions[checkKey];
                          return (
                            <label
                              key={idx}
                              onClick={() => toggleCheck(checkKey)}
                              className={`flex items-start gap-2.5 p-2 rounded-lg text-xs cursor-pointer transition-colors border select-none ${
                                isDone
                                  ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 text-slate-500 line-through'
                                  : 'bg-white dark:bg-slate-850 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isDone}
                                onChange={() => {}}
                                className="rounded text-emerald-600 focus:ring-emerald-500 h-3.5 w-3.5 mt-0.5 pointer-events-none"
                              />
                              <span className="leading-snug">{action}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Expand Button */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : rec.id)}
                  className="px-6 py-3 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-b-2xl transition-colors"
                >
                  <span>{isExpanded ? 'Hide Implementation Steps' : 'View Implementation Steps'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
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
