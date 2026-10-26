import React from 'react';
import { Briefcase, ArrowRight, CheckCircle2, TrendingUp, AlertTriangle, Calendar, Layers, ShieldCheck } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Applied Organizational Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Case Study: Building a More Connected Workplace
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A hypothetical model examining how systematic communication interventions can resolve friction, reduce turnover, and elevate employee satisfaction within a medium-sized enterprise.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xl overflow-hidden">
          {/* Top Banner with Company Profile & Hypothetical Label */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800 mb-2 inline-block">
                Hypothetical Case Study Model
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                Enterprise Profile: "Apex Global Solutions"
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Mid-sized software & operations firm (350 employees across 4 physical and hybrid hubs)
              </p>
            </div>
            <div className="flex items-center gap-3 self-start md:self-auto bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 text-xs">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>Intervention Duration: 6-Month Roadmap</span>
            </div>
          </div>

          {/* 3 Step Transformation Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Baseline Friction */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-rose-200 dark:border-rose-900/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-rose-600 dark:text-rose-400 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Challenge: Baseline Scenario</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  Siloed Operations & Role Ambiguity
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Widespread employee confusion regarding project priorities and quarterly milestones.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Critical product updates reached customer-facing teams 2 weeks too late.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Frontline staff felt unable to voice suggestions without managerial backlash.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Inter-departmental friction between Tech and Operations was escalating churn.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
                Baseline Satisfaction: 42/100
              </div>
            </div>

            {/* 2. Actions Taken */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-blue-200 dark:border-blue-900/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <Layers className="w-4 h-4" />
                  <span>Intervention: 5 Tactical Actions</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  Modernizing Communication Infrastructure
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Weekly Team Syncs:</strong> 20-min focused operational alignment every Monday.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Biweekly 1-on-1s:</strong> Mandatory manager-employee feedback and growth check-ins.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Centralized Wiki:</strong> Single source of truth for company policies and SOPs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Anonymous Pulse Forms:</strong> Continuous safe channel to surface bottlenecks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Cross-Functional Demos:</strong> Joint sprint reviews uniting Sales, Ops & Tech.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                Implementation Timeline: 120 Days
              </div>
            </div>

            {/* 3. Expected Outcomes */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-emerald-200 dark:border-emerald-900/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>Projected Academic Outcomes</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  Measurable Workforce Dividends
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Greater Role Clarity:</strong> Over 85% of staff report exact understanding of objectives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Voice & Psychological Safety:</strong> 4x increase in proactive process improvement ideas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Inter-Team Coordination:</strong> Cross-department turnaround times reduced by ~38%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Enduring Trust:</strong> Leadership transparency rating surges from 28% to 81%.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                Projected Satisfaction Index: 86/100 (+44 pts)
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="px-6 py-4 bg-slate-100 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-700/80 text-[11px] text-slate-500 dark:text-slate-400 text-center">
            Note: This hypothetical scenario demonstrates expected impacts based on organizational psychology literature. In actual enterprise deployment, results should be calibrated with empirical post-intervention surveys.
          </div>
        </div>
      </div>
    </section>
  );
};
