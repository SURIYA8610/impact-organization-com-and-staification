import React from 'react';
import { Target, CheckCircle, ShieldAlert, Sparkles, MessageSquareCode, Ear, Radio, Layers } from 'lucide-react';

export const AboutResearch: React.FC = () => {
  const cards = [
    {
      icon: MessageSquareCode,
      title: 'Clear Communication',
      subtitle: 'Role & Expectation Precision',
      description:
        'Employees understand their specific roles, responsibilities, daily deliverables, and overarching organizational objectives without guesswork.',
      color: 'blue'
    },
    {
      icon: Radio,
      title: 'Transparent Communication',
      subtitle: 'Authentic Information Sharing',
      description:
        'Open, sincere information sharing builds enduring trust between executive management and frontline employees, banishing rumors.',
      color: 'teal'
    },
    {
      icon: Layers,
      title: 'Employee Feedback',
      subtitle: 'Two-Way Dialogue Channels',
      description:
        'Robust two-way communication empowers staff with safe avenues to voice legitimate concerns, offer tactical ideas, and suggest operational improvements.',
      color: 'indigo'
    },
    {
      icon: Ear,
      title: 'Active Listening',
      subtitle: 'Empathetic Leadership Response',
      description:
        'Supervisors and leaders who listen attentively grasp the real friction employees encounter and respond proactively before attrition occurs.',
      color: 'emerald'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Theoretical Framework & Core Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Understanding Organizational Communication
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Organizational communication refers to the systematic exchange of information, ideas, instructions, feedback, and sentiment among individuals and functional departments within an enterprise.
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Effective communication enables employees to clearly grasp corporate objectives, execute responsibilities with pride, solve operational bottlenecks collaboratively, anchor mutual trust, and sustain positive workplace relationships.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-3 tracking-wide">
                    {card.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Key Research Pillar #{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Objective Banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-slate-900 text-white p-8 sm:p-10 shadow-lg border border-blue-800/50 overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-500/20 text-teal-300 text-xs font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Primary Research Objective</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
                Investigating the Direct Correlation Between Communication Quality & Employee Satisfaction
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                “To systematically examine how communication clarity, leadership transparency, active feedback mechanisms, and cross-departmental dialogue directly influence employee satisfaction, psychological safety, and organizational commitment.”
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3.5 border border-white/10 text-center sm:text-left">
                <p className="text-[11px] uppercase tracking-wider text-teal-300 font-semibold">Scope of Inquiry</p>
                <p className="text-xs text-slate-200 mt-0.5">Empirical survey analysis + theoretical workplace models</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3.5 border border-white/10 text-center sm:text-left">
                <p className="text-[11px] uppercase tracking-wider text-blue-300 font-semibold">Academic Application</p>
                <p className="text-xs text-slate-200 mt-0.5">Management, HR Analytics & Information Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
