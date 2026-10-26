import React, { useState } from 'react';
import { ArrowDown, ArrowUp, ArrowRightLeft, Shuffle, CheckCircle2, Layers, Cpu, Radio, ShieldCheck } from 'lucide-react';
import { COMMUNICATION_TYPES } from '../data/mockData';

export const CommunicationTypes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('downward');

  const activeType = COMMUNICATION_TYPES.find((t) => t.id === activeTab) || COMMUNICATION_TYPES[0];

  const getTabIcon = (direction: string) => {
    switch (direction) {
      case 'downward':
        return ArrowDown;
      case 'upward':
        return ArrowUp;
      case 'horizontal':
        return ArrowRightLeft;
      case 'diagonal':
        return Shuffle;
      default:
        return ArrowDown;
    }
  };

  return (
    <section id="communication-types" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Information Architecture & Flows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The 4 Types of Organizational Communication
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Information flows through structured vectors within modern enterprises. Explore how vertical, lateral, and matrix channels shape employee engagement and organizational alignment.
          </p>
        </div>

        {/* Interactive Tabs Header */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-4xl mx-auto">
          {COMMUNICATION_TYPES.map((type) => {
            const Icon = getTabIcon(type.direction);
            const isSelected = activeTab === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2.5 p-3.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-center sm:text-left">{type.name.replace(' Communication', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Type Detail Showcase */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 uppercase tracking-wider">
                    Vector: {activeType.flow}
                  </span>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                    Cadence: {activeType.frequency}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  {activeType.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {activeType.description}
                </p>

                {/* Impact Callout */}
                <div className="mb-6 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Impact on Employee Satisfaction:
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeType.impact}
                  </p>
                </div>

                {/* Practical Examples */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Everyday Workplace Examples:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeType.examples.map((example, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 dark:text-slate-300 leading-snug">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended Channels */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  Recommended Primary Channels:
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeType.recommendedChannels.map((ch, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Diagram Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-100 to-blue-50/50 dark:from-slate-950 dark:to-slate-900 p-8 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800">
              <div className="text-center mb-4">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Directional Flow Schematic
                </span>
              </div>

              {/* Interactive Direction Diagram Visual */}
              <div className="w-full max-w-xs h-72 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-inner flex flex-col justify-between relative overflow-hidden">
                {/* Visual Header / Grid */}
                <div className="absolute inset-0 bg-radial from-blue-500/5 to-transparent pointer-events-none" />

                {/* Diagrams tailored to active type */}
                {activeTab === 'downward' && (
                  <div className="flex flex-col items-center justify-between h-full py-4 text-center">
                    <div className="px-4 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md">
                      Senior Leadership & Management
                    </div>
                    <div className="flex flex-col items-center animate-pulse">
                      <div className="w-0.5 h-12 bg-blue-500"></div>
                      <ArrowDown className="w-6 h-6 text-blue-600 -mt-1" />
                      <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        Policies, Directives & Goals
                      </span>
                    </div>
                    <div className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-300 dark:border-slate-700">
                      Frontline Teams & Employees
                    </div>
                  </div>
                )}

                {activeTab === 'upward' && (
                  <div className="flex flex-col items-center justify-between h-full py-4 text-center">
                    <div className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-300 dark:border-slate-700">
                      Executive & Management Tier
                    </div>
                    <div className="flex flex-col items-center animate-pulse">
                      <ArrowUp className="w-6 h-6 text-teal-600 -mb-1" />
                      <div className="w-0.5 h-12 bg-teal-500"></div>
                      <span className="text-[10px] font-semibold text-teal-600 dark:text-teal-400 mt-1">
                        Feedback, Ideas & Voice
                      </span>
                    </div>
                    <div className="px-4 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-md">
                      Individual Contributors & Teams
                    </div>
                  </div>
                )}

                {activeTab === 'horizontal' && (
                  <div className="flex flex-col items-center justify-center h-full py-4 text-center">
                    <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mb-4">
                      Peer-Level Lateral Synchronization
                    </div>
                    <div className="flex items-center justify-between w-full px-2">
                      <div className="p-3 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-sm">
                        Department A<br />(e.g., Tech)
                      </div>
                      <div className="flex flex-col items-center px-2">
                        <ArrowRightLeft className="w-6 h-6 text-indigo-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                          Sprint Sync
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-sm">
                        Department B<br />(e.g., Design)
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-6">
                      Zero vertical delays; direct inter-team agility
                    </p>
                  </div>
                )}

                {activeTab === 'diagonal' && (
                  <div className="flex flex-col items-center justify-between h-full py-3 text-center">
                    <div className="flex justify-between w-full px-3">
                      <div className="p-2 rounded-lg bg-purple-700 text-white text-[10px] font-bold">
                        Executive VP (Finance)
                      </div>
                      <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300">
                        Engineering Lead
                      </div>
                    </div>
                    <div className="relative w-full h-24 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 200 80">
                        <line x1="40" y1="10" x2="160" y2="70" stroke="#8B5CF6" strokeWidth="2.5" strokeDasharray="4 2" />
                        <polygon points="160,70 152,62 165,60" fill="#8B5CF6" />
                      </svg>
                      <div className="absolute px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-[9px] font-bold">
                        Bypasses Hierarchy Silos
                      </div>
                    </div>
                    <div className="flex justify-between w-full px-3">
                      <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300">
                        Junior Finance Analyst
                      </div>
                      <div className="p-2 rounded-lg bg-purple-700 text-white text-[10px] font-bold">
                        Software Engineer
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Switch tabs above to inspect directional dynamics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
