import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Users, MessageSquare, Star, UserCheck, Sparkles, ArrowRight } from 'lucide-react';
import { COMMUNICATION_TYPES } from '../data/mockData';

export const KeyChannelsSection: React.FC = () => {
  const [showDirectionalModal, setShowDirectionalModal] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState<'downward' | 'upward' | 'horizontal' | 'diagonal'>('downward');

  const channels = [
    {
      title: 'Email',
      icon: Mail,
      cardBg: 'bg-gradient-to-b from-blue-50/80 to-white dark:from-slate-800/80 dark:to-slate-900',
      border: 'border-blue-200/80 dark:border-blue-900/60 hover:border-blue-400',
      iconBg: 'bg-gradient-to-tr from-blue-600 to-sky-400 text-white shadow-md shadow-blue-500/25',
      badge: 'Formal',
      badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
      description: 'Formal communication for important updates and documents.'
    },
    {
      title: 'Meetings',
      icon: Users,
      cardBg: 'bg-gradient-to-b from-indigo-50/80 to-white dark:from-slate-800/80 dark:to-slate-900',
      border: 'border-indigo-200/80 dark:border-indigo-900/60 hover:border-indigo-400',
      iconBg: 'bg-gradient-to-tr from-indigo-600 to-violet-400 text-white shadow-md shadow-indigo-500/25',
      badge: 'Real-Time',
      badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
      description: 'Real-time discussions, idea sharing and decision making.'
    },
    {
      title: 'Instant Messaging',
      icon: MessageSquare,
      cardBg: 'bg-gradient-to-b from-emerald-50/80 to-white dark:from-slate-800/80 dark:to-slate-900',
      border: 'border-emerald-200/80 dark:border-emerald-900/60 hover:border-emerald-400',
      iconBg: 'bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-md shadow-emerald-500/25',
      badge: 'Rapid Sync',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      description: 'Quick, informal communication for daily collaboration.'
    },
    {
      title: 'Feedback Systems',
      icon: Star,
      cardBg: 'bg-gradient-to-b from-amber-50/80 to-white dark:from-slate-800/80 dark:to-slate-900',
      border: 'border-amber-200/80 dark:border-amber-900/60 hover:border-amber-400',
      iconBg: 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-md shadow-amber-500/25',
      badge: 'Growth Loop',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
      description: 'Helps in continuous improvement and employee growth.'
    },
    {
      title: 'Face-to-Face',
      icon: UserCheck,
      cardBg: 'bg-gradient-to-b from-purple-50/80 to-white dark:from-slate-800/80 dark:to-slate-900',
      border: 'border-purple-200/80 dark:border-purple-900/60 hover:border-purple-400',
      iconBg: 'bg-gradient-to-tr from-purple-600 to-pink-400 text-white shadow-md shadow-purple-500/25',
      badge: 'High Trust',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
      description: 'Builds stronger relationships and trust among teams.'
    }
  ];

  const currentType = COMMUNICATION_TYPES.find(t => t.direction === selectedDirection) || COMMUNICATION_TYPES[0];

  return (
    <section id="channels" className="py-16 sm:py-20 bg-slate-50/80 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-sky-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Communication Types</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Key Communication Channels
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Organizations use multiple channels to ensure information flows effectively and employees stay connected, informed and engaged.
          </p>
        </div>

        {/* 5 Channels Cards Grid with Colorful Themes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-8">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <Link
                key={idx}
                to="/topic/communication-relationships"
                className={`${ch.cardBg} ${ch.border} rounded-2xl p-6 border shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 cursor-pointer no-underline text-inherit`}
                title={`Click to read in-depth analysis on ${ch.title}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${ch.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ch.badgeColor}`}>
                      {ch.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {ch.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-blue-600 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Topic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Directional Flow Interactive Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Interactive Flow Models:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(['downward', 'upward', 'horizontal', 'diagonal'] as const).map((dir) => (
                <button
                  key={dir}
                  onClick={() => {
                    setSelectedDirection(dir);
                    setShowDirectionalModal(true);
                  }}
                  className="px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-50 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 text-blue-700 dark:text-sky-300 transition-all cursor-pointer capitalize shadow-2xs"
                >
                  {dir} Flow →
                </button>
              ))}
            </div>
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Click any model to inspect corporate hierarchy dynamics
          </span>
        </div>

        {/* Directional Hierarchy Modal */}
        {showDirectionalModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950">
                  {currentType.name}
                </span>
                <button
                  onClick={() => setShowDirectionalModal(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {currentType.flow}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {currentType.description}
              </p>
              <div className="p-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-xl border border-blue-200/80 dark:border-blue-900 mb-4 text-xs text-slate-700 dark:text-slate-300">
                <strong className="text-blue-800 dark:text-sky-300">Impact on Retention & Satisfaction: </strong>
                {currentType.impact}
              </div>
              <div className="text-right">
                <button
                  onClick={() => setShowDirectionalModal(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500 cursor-pointer"
                >
                  Close Model
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
