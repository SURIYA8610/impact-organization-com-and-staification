import React from 'react';
import { Target, Sparkles, CheckCircle2 } from 'lucide-react';

export const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-16 sm:py-20 bg-white dark:bg-[#0A1424] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors relative overflow-hidden">
      {/* Subtle background color aura */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Card */}
          <div className="lg:col-span-7">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800 text-blue-600 dark:text-sky-400 text-xs font-bold mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>About the Study</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Overview
            </h2>

            {/* Main Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              Organizational communication refers to the flow of information, ideas and feedback within an organization. It includes formal and informal communication that connects employees, teams and leadership.
            </p>

            {/* Employee Satisfaction Highlight Card with Pastel Gradient */}
            <div className="bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900 rounded-2xl p-6 border border-blue-100 dark:border-slate-700/80 shadow-md shadow-blue-500/5 max-w-xl premium-card-hover">
              <div className="flex items-start gap-4">
                {/* Concentric Target Icon with Radiant Gradient */}
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-teal-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Employee Satisfaction
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">
                      Core Metric
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Employee satisfaction is the measure of how content, engaged and motivated employees feel about their work, workplace and overall experience in the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Flat Illustration of Team Meeting */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-xl shadow-blue-600/5">
              <svg className="w-full h-auto" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background desk with soft blue tones */}
                <ellipse cx="180" cy="180" rx="140" ry="40" fill="#E2E8F0" className="dark:fill-slate-700" />
                <ellipse cx="180" cy="175" rx="130" ry="34" fill="#F1F5F9" className="dark:fill-slate-600" />

                {/* Manager / Leader Standing Center in Royal Blue */}
                <g transform="translate(180, 70)">
                  <circle cx="0" cy="0" r="16" fill="#1E293B" className="dark:fill-slate-200" />
                  <path d="M-18 42 C-18 20, 18 20, 18 42" fill="#2563EB" />
                  <rect x="-8" y="22" width="16" height="28" fill="#1D4ED8" rx="2" />
                  <rect x="-4" y="32" width="8" height="12" fill="#E2E8F0" rx="1" />
                </g>

                {/* Left Colleague in Vibrant Cyan/Sky */}
                <g transform="translate(90, 120)">
                  <circle cx="0" cy="0" r="14" fill="#0284C7" />
                  <path d="M-14 36 C-14 18, 14 18, 14 36" fill="#0369A1" />
                  <polygon points="-12,42 12,42 10,48 -10,48" fill="#94A3B8" />
                  <rect x="-8" y="32" width="16" height="10" rx="1" fill="#38BDF8" />
                </g>

                {/* Right Colleague in Vibrant Emerald */}
                <g transform="translate(270, 120)">
                  <circle cx="0" cy="0" r="14" fill="#0D9488" />
                  <path d="M-14 36 C-14 18, 14 18, 14 36" fill="#0F766E" />
                  <rect x="-10" y="36" width="18" height="12" rx="2" fill="#F8FAFC" stroke="#CBD5E1" />
                </g>

                {/* Speech Bubble 1 in Royal Blue */}
                <g transform="translate(130, 38)">
                  <rect width="40" height="24" rx="8" fill="#2563EB" className="drop-shadow-md" />
                  <path d="M14 24 L16 30 L22 24 Z" fill="#2563EB" />
                  <line x1="10" y1="9" x2="30" y2="9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="10" y1="15" x2="22" y2="15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Speech Bubble 2 in Vibrant Emerald */}
                <g transform="translate(225, 46)">
                  <rect width="36" height="22" rx="8" fill="#10B981" className="drop-shadow-md" />
                  <path d="M16 22 L18 28 L12 22 Z" fill="#10B981" />
                  <circle cx="11" cy="11" r="2.5" fill="white" />
                  <circle cx="18" cy="11" r="2.5" fill="white" />
                  <circle cx="25" cy="11" r="2.5" fill="white" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
