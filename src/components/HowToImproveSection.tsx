import React from 'react';
import { MessageSquare, Shuffle, Star, Trophy, Users, Heart, Sparkles } from 'lucide-react';

export const HowToImproveSection: React.FC = () => {
  const recommendations = [
    {
      title: 'Encourage Open Communication',
      icon: MessageSquare,
      cardBg: 'bg-gradient-to-br from-blue-50/90 via-sky-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-blue-200/80 dark:border-blue-900/60 hover:border-blue-400',
      iconBg: 'bg-gradient-to-tr from-blue-600 to-sky-400 text-white shadow-md shadow-blue-500/25',
      badge: 'Culture',
      badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
      description: 'Create safe spaces for employees to share ideas and concerns.'
    },
    {
      title: 'Use the Right Channels',
      icon: Shuffle,
      cardBg: 'bg-gradient-to-br from-cyan-50/90 via-sky-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-cyan-200/80 dark:border-cyan-900/60 hover:border-cyan-400',
      iconBg: 'bg-gradient-to-tr from-cyan-600 to-sky-400 text-white shadow-md shadow-cyan-500/25',
      badge: 'Channels',
      badgeColor: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
      description: 'Choose the best medium for each message and audience.'
    },
    {
      title: 'Provide Regular Feedback',
      icon: Star,
      cardBg: 'bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-emerald-200/80 dark:border-emerald-900/60 hover:border-emerald-400',
      iconBg: 'bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-md shadow-emerald-500/25',
      badge: 'Coaching',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      description: 'Offer constructive and timely feedback for growth.'
    },
    {
      title: 'Recognize & Appreciate',
      icon: Trophy,
      cardBg: 'bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-amber-200/80 dark:border-amber-900/60 hover:border-amber-400',
      iconBg: 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-md shadow-amber-500/25',
      badge: 'Morale',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
      description: 'Celebrate achievements and contributions.'
    },
    {
      title: 'Invest in Leadership Training',
      icon: Users,
      cardBg: 'bg-gradient-to-br from-indigo-50/90 via-violet-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-indigo-200/80 dark:border-indigo-900/60 hover:border-indigo-400',
      iconBg: 'bg-gradient-to-tr from-indigo-600 to-violet-400 text-white shadow-md shadow-indigo-500/25',
      badge: 'Leadership',
      badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
      description: 'Equip leaders with effective communication skills.'
    },
    {
      title: 'Foster a Positive Culture',
      icon: Heart,
      cardBg: 'bg-gradient-to-br from-pink-50/90 via-rose-50/40 to-white dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900',
      border: 'border-pink-200/80 dark:border-pink-900/60 hover:border-pink-400',
      iconBg: 'bg-gradient-to-tr from-pink-500 to-rose-400 text-white shadow-md shadow-pink-500/25',
      badge: 'Inclusion',
      badgeColor: 'bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300',
      description: 'Build trust, inclusion and teamwork.'
    }
  ];

  return (
    <section id="recommendations" className="py-16 sm:py-20 bg-white dark:bg-[#0A1424] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Best Practices</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            How to Improve Communication
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Implement these strategies to build a more engaged and satisfied workforce.
          </p>
        </div>

        {/* 6 Strategy Cards Grid (3x2) with Vivid Theme Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recommendations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`${item.cardBg} ${item.border} rounded-2xl p-6 border shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
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
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
