import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowLeftRight, Sliders, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import { COMPARISON_FACTORS } from '../data/mockData';

export const ImpactComparison: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(75);

  // Dynamic outcomes calculated from slider
  const satisfactionImpact = Math.round(35 + (sliderValue * 0.6));
  const turnoverRisk = Math.max(8, Math.round(78 - (sliderValue * 0.72)));
  const productivityScore = Math.round(40 + (sliderValue * 0.55));
  const trustLevel = Math.round(25 + (sliderValue * 0.72));

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <ArrowLeftRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Dichotomy & Comparative Dynamics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Positive vs. Poor Organizational Communication
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Compare the organizational dividend of high-clarity communication against the compound friction created by silence, ambiguity, and communication barriers.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Positive Communication Column (Green accents) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-emerald-200 dark:border-emerald-900/60 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-100 dark:border-emerald-900/40">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Positive Communication Culture
                </h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  Transparent, empathetic & predictable information flow
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {COMPARISON_FACTORS.positive.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Poor Communication Column (Restrained red accents) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-rose-200 dark:border-rose-900/60 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-100 dark:border-rose-900/40">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Communication Breakdown & Gaps
                </h3>
                <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
                  Ambiguity, siloed teams & top-down disconnect
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {COMPARISON_FACTORS.negative.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30"
                >
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Outcome Simulator: Slider Demonstrating Impact on Team Retention & Outcomes */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sliders className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Interactive Workplace Impact Simulator
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Adjust organizational communication transparency to simulate projected workforce metrics.
              </p>
            </div>
            <div className="flex items-center gap-3 self-start md:self-auto">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Communication Quality Index:
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold text-sm">
                {sliderValue}%
              </span>
            </div>
          </div>

          {/* Slider input */}
          <div className="mb-8">
            <input
              type="range"
              min="10"
              max="95"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              aria-label="Communication Quality Index Slider"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-2">
              <span>Severe Information Void (10%)</span>
              <span>Average Corporate Cadence (50%)</span>
              <span>Exemplary Transparent Culture (95%)</span>
            </div>
          </div>

          {/* Simulated Outcomes Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Employee Satisfaction</p>
              <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-heading">
                {satisfactionImpact}%
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${satisfactionImpact}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Workplace Trust Level</p>
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-heading">
                {trustLevel}%
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-teal-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${trustLevel}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Project Velocity</p>
              <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 font-heading">
                {productivityScore}%
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${productivityScore}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Regretted Turnover Risk</p>
              <p
                className={`text-2xl font-extrabold font-heading ${
                  turnoverRisk > 45 ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'
                }`}
              >
                {turnoverRisk}%
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    turnoverRisk > 45 ? 'bg-rose-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${turnoverRisk}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
