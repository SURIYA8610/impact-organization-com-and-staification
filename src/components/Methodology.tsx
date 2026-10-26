import React from 'react';
import { BookOpen, Database, Users, GitBranch, FileSpreadsheet, PieChart, Info, ShieldCheck } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      icon: BookOpen,
      title: 'Research Design',
      badge: 'Quantitative / Descriptive',
      desc: 'Descriptive research design structured to identify, categorize, and quantify cross-sectional patterns between organizational communication variables and workforce satisfaction indexes.'
    },
    {
      icon: Database,
      title: 'Data Collection Strategy',
      badge: 'Dual-Source Protocol',
      desc: 'Primary data captured via digital structured questionnaires; secondary data synthesized from published organizational psychology literature, IEEE / ACM repositories, and verified HR benchmark publications.'
    },
    {
      icon: Users,
      title: 'Target Population',
      badge: 'Cross-Functional Workforce',
      desc: 'Knowledge workers, frontline operators, and mid-level managers operating across diverse sectors (Engineering, Sales, Operations, Finance, Human Resources, Customer Success).'
    },
    {
      icon: GitBranch,
      title: 'Sampling Method',
      badge: 'Stratified / Convenience',
      desc: 'Stratified convenience sampling allowing balanced representation across company departments, seniority levels, and remote/hybrid work distributions.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Research Instrument',
      badge: '5-Point Likert Scale',
      desc: 'Standardized 8-item psychometric questionnaire measuring instruction clarity, managerial transparency, psychological safety, and cross-departmental friction using standardized 1–5 intervals.'
    },
    {
      icon: PieChart,
      title: 'Analytical Techniques',
      badge: 'Statistical & Dashboard',
      desc: 'Frequency distributions, percentage shares, weighted satisfaction indexes (0–100 scale), categorical cross-tabulations, and interactive web dashboard visualization.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Academic Framework & Scientific Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Research Methodology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A structured empirical methodology designed to analyze the quantitative and qualitative relationship between communication workflows and employee satisfaction.
          </p>
        </div>

        {/* Academic Integrity Disclaimer Banner */}
        <div className="mb-12 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
            <span className="font-bold">Academic Project Note: </span>
            This research framework represents a proposed empirical approach. The dashboard below displays an illustrative baseline sample pool that dynamically incorporates your active responses submitted via the interactive survey tool on this platform.
          </div>
        </div>

        {/* Methodology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                  <span>Standardized Scientific Instrument</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
