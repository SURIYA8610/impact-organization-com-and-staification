import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
  Clock,
  TrendingUp,
  Compass
} from 'lucide-react';
import { TOPIC_ORDER, TOPICS } from '../data/topicsData';
import { TopicIcon } from './TopicIcon';
import { getThemeStyles } from '../utils/themeColors';

export const InteractiveTopicsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'management' | 'cx' | 'strategy'>('all');

  const filteredTopics = useMemo(() => {
    return TOPIC_ORDER.filter((slug) => {
      const topic = TOPICS[slug];
      if (!topic) return false;

      // Category filter
      if (selectedCategory === 'management' && !['management-foundations', 'leadership-performance', 'communication-relationships'].includes(slug)) {
        return false;
      }
      if (selectedCategory === 'cx' && !['customer-satisfaction', 'customer-experience', 'service-quality'].includes(slug)) {
        return false;
      }
      if (selectedCategory === 'strategy' && !['business-case-studies', 'satisfaction-improvement-plan'].includes(slug)) {
        return false;
      }

      // Search term filter
      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase();
      return (
        topic.title.toLowerCase().includes(q) ||
        topic.shortDescription.toLowerCase().includes(q) ||
        slug.toLowerCase().includes(q)
      );
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="topics" className="py-20 bg-slate-100/70 dark:bg-[#070f1e] border-y border-slate-200 dark:border-slate-800 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-3 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Interactive Topic Explorer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Explore Detailed Topic Deep-Dives
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Click any topic below to open its dedicated web page with comprehensive academic explanations, core principles, real-world case studies, and quantitative benchmarks.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Topics (8)
            </button>
            <button
              onClick={() => setSelectedCategory('management')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === 'management'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Management &amp; Leadership
            </button>
            <button
              onClick={() => setSelectedCategory('cx')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === 'cx'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Customer Experience
            </button>
            <button
              onClick={() => setSelectedCategory('strategy')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === 'strategy'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Strategy &amp; Case Studies
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search topic or concept..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
            />
          </div>
        </div>

        {/* 8 Interactive Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTopics.map((slug, idx) => {
            const topic = TOPICS[slug];
            if (!topic) return null;

            const themeStyles = getThemeStyles(topic.themeColor);
            const topicUrl = `/topic/${topic.slug}`;

            return (
              <div
                key={slug}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Colorful top gradient header strip */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${themeStyles.gradient}`} />

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider ${themeStyles.badgeBg}`}>
                        Track 0{idx + 1}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        7 Chapters
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${themeStyles.gradient} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                        <TopicIcon name={topic.iconName} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                          {topic.title}
                        </h3>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {topic.shortDescription}
                    </p>

                    {/* Core Features Preview */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 mb-5">
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Core POLC principles &amp; frameworks</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>Executive case studies &amp; KPI metrics</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Direct Link + Open in New Tab Option */}
                  <div className="space-y-2 pt-2">
                    <Link
                      to={topicUrl}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm ${themeStyles.buttonGradient} shadow-md transition-all group-hover:shadow-lg`}
                    >
                      <span>Read Full In-Depth Topic</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={topicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Open this topic in a separate browser tab"
                    >
                      <span>Open in New Tab</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p className="text-sm font-semibold">No topics found matching "{searchTerm}"</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
