import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Star, MessageSquare, Network, Megaphone, Sparkles, ArrowRight } from 'lucide-react';

export const SatisfactionFactorsSection: React.FC = () => {
  const factors = [
    {
      title: 'Trust',
      icon: Shield,
      cardBg: 'bg-gradient-to-br from-blue-50/90 via-sky-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-blue-200/80 dark:border-blue-900/60 hover:border-blue-400',
      iconBg: 'bg-gradient-to-tr from-blue-600 to-sky-400 text-white shadow-md shadow-blue-500/25',
      badge: 'Foundation',
      badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
      description: 'Open and honest communication builds trust and confidence across all organizational levels.',
      topicRoute: '/topic/customer-satisfaction'
    },
    {
      title: 'Transparency',
      icon: FileText,
      cardBg: 'bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-emerald-200/80 dark:border-emerald-900/60 hover:border-emerald-400',
      iconBg: 'bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-md shadow-emerald-500/25',
      badge: 'Credibility',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      description: 'Clear information reduces uncertainty, aligns vision, and builds organizational credibility.',
      topicRoute: '/topic/management-foundations'
    },
    {
      title: 'Recognition',
      icon: Star,
      cardBg: 'bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-amber-200/80 dark:border-amber-900/60 hover:border-amber-400',
      iconBg: 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-md shadow-amber-500/25',
      badge: 'Motivation',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
      description: 'Appreciation and recognition boost employee morale, engagement, and retention.',
      topicRoute: '/topic/leadership-performance'
    },
    {
      title: 'Feedback',
      icon: MessageSquare,
      cardBg: 'bg-gradient-to-br from-indigo-50/90 via-violet-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-indigo-200/80 dark:border-indigo-900/60 hover:border-indigo-400',
      iconBg: 'bg-gradient-to-tr from-indigo-600 to-violet-400 text-white shadow-md shadow-indigo-500/25',
      badge: 'Continuous Growth',
      badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
      description: 'Constructive two-way feedback accelerates skills development and problem resolution.',
      topicRoute: '/topic/communication-relationships'
    },
    {
      title: 'Teamwork',
      icon: Network,
      cardBg: 'bg-gradient-to-br from-cyan-50/90 via-sky-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-cyan-200/80 dark:border-cyan-900/60 hover:border-cyan-400',
      iconBg: 'bg-gradient-to-tr from-cyan-600 to-sky-400 text-white shadow-md shadow-cyan-500/25',
      badge: 'Synergy',
      badgeColor: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
      description: 'Effective cross-functional communication eliminates silos and strengthens customer delivery.',
      topicRoute: '/topic/customer-experience'
    },
    {
      title: 'Leadership Communication',
      icon: Megaphone,
      cardBg: 'bg-gradient-to-br from-purple-50/90 via-pink-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-purple-200/80 dark:border-purple-900/60 hover:border-purple-400',
      iconBg: 'bg-gradient-to-tr from-purple-600 to-fuchsia-400 text-white shadow-md shadow-purple-500/25',
      badge: 'Strategic Vision',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
      description: 'Inspirational and transparent leaders empower teams to exceed customer expectations.',
      topicRoute: '/topic/leadership-performance'
    }
  ];

  return (
    <section id="factors" className="py-16 sm:py-20 bg-white dark:bg-[#0A1424] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span>Impact Factors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            What Drives Employee Satisfaction?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Click any factor to open its dedicated research web page and study the detailed management framework.
          </p>
        </div>

        {/* 6 Factors Grid (3x2) with Vivid Pastel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {factors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.topicRoute}
                className={`${item.cardBg} ${item.border} rounded-2xl p-6 border shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer no-underline text-inherit`}
                title={`Click to read in-depth analysis on ${item.title}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Open Detailed Research</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
