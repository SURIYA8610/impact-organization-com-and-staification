import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  Search,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Home,
  CheckCircle2,
  FolderOpen
} from 'lucide-react';
import { TOPIC_ORDER, TOPICS, getAllTopicPages } from '../data/topicsData';
import { TopicIcon } from './TopicIcon';
import { getThemeStyles } from '../utils/themeColors';

interface AllPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AllPagesModal: React.FC<AllPagesModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  const allPages = useMemo(() => getAllTopicPages(), []);

  const filteredPages = useMemo(() => {
    return allPages.filter((page) => {
      const matchesSearch =
        page.pageTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.topicTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.route.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTopic = selectedTopic === 'all' || page.topicSlug === selectedTopic;

      return matchesSearch && matchesTopic;
    });
  }, [allPages, searchTerm, selectedTopic]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border-b border-slate-800 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                Comprehensive Curriculum Sitemap
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                57 Complete Pages
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-400" />
              Role of Management Curriculum Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Instant navigation to the Homepage and all 56 interconnected topic pages across the 8 management domains.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Topic Filters */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by chapter title, concept, or URL..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Home Jump */}
          <Link
            to="/"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors whitespace-nowrap shadow-sm"
          >
            <Home className="w-4 h-4" />
            Go to Homepage (Page 1)
          </Link>
        </div>

        {/* Topic Pills */}
        <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto flex items-center gap-2 text-xs scrollbar-thin">
          <button
            onClick={() => setSelectedTopic('all')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedTopic === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Tracks (56 Pages)
          </button>
          {TOPIC_ORDER.map((topicKey, idx) => {
            const topic = TOPICS[topicKey];
            if (!topic) return null;
            const isSelected = selectedTopic === topicKey;
            return (
              <button
                key={topicKey}
                onClick={() => setSelectedTopic(topicKey)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                  {idx + 1}
                </span>
                {topic.title}
              </button>
            );
          })}
        </div>

        {/* Pages Content List */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* Homepage Card */}
          {(selectedTopic === 'all' || selectedTopic === 'homepage') && !searchTerm && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Primary Entrypoint
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                      /
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Homepage: Role of Management in Improving Customer Satisfaction
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    The central command hub displaying the 8 clickable topic tracks, executive summary, diagnostic calculators, and curriculum matrix.
                  </p>
                </div>
              </div>
              <Link
                to="/"
                onClick={onClose}
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                Open Homepage
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Grouped Pages by Topic */}
          {TOPIC_ORDER.filter(t => selectedTopic === 'all' || selectedTopic === t).map((topicKey, topicIdx) => {
            const topic = TOPICS[topicKey];
            if (!topic) return null;
            const topicPages = filteredPages.filter(p => p.topicSlug === topicKey);
            if (topicPages.length === 0) return null;

            const themeStyles = getThemeStyles(topic.themeColor);

            return (
              <div
                key={topicKey}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50"
              >
                {/* Topic Track Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80 gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${themeStyles.gradient} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                      <TopicIcon name={topic.iconName} className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Track {topicIdx + 1} of 8
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {topic.title}
                      </h3>
                    </div>
                  </div>

                  <Link
                    to={`/${topic.slug}/page-1`}
                    onClick={onClose}
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${themeStyles.accentText} hover:underline`}
                  >
                    Start Track (Page 1)
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* 7 Pages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                  {topicPages.map((page) => (
                    <Link
                      key={page.route}
                      to={page.route}
                      onClick={onClose}
                      className="group p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${themeStyles.badgeBg}`}>
                            Chapter {page.pageNumber} of 7
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {page.route}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                          {page.pageTitle}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {page.subtitle}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium">
                        <span>Read Chapter</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredPages.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              <FolderOpen className="w-12 h-12 mx-auto text-slate-400 mb-3" />
              <p className="text-base font-semibold">No pages match your search term</p>
              <p className="text-xs mt-1">Try searching for keywords like "Leadership", "Planning", "Metrics", or "SOP"</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedTopic('all'); }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            <span>All 57 distinct routes active and verified (1 Homepage + 56 Topic Chapters)</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-colors"
          >
            Close Sitemap
          </button>
        </div>
      </div>
    </div>
  );
};
