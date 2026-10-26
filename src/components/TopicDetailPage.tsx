import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  Home,
  Clock,
  ExternalLink,
  ChevronRight,
  Share2,
  Check,
  HelpCircle,
  Lightbulb,
  Building2,
  RotateCcw
} from 'lucide-react';
import { getTopicBySlug, TOPIC_ORDER, TOPICS, resolveTopicSlug } from '../data/topicsData';
import { TopicIcon } from './TopicIcon';
import { getThemeStyles } from '../utils/themeColors';

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const TopicDetailPage: React.FC = () => {
  const { topicSlug = '' } = useParams<{ topicSlug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const topic = getTopicBySlug(topicSlug);

  // Chapter selection from query param or default to 1
  const chapterParam = parseInt(searchParams.get('chapter') || '1', 10);
  const initialChapter = isNaN(chapterParam) || chapterParam < 1 || chapterParam > 7 ? 1 : chapterParam;
  const [activeChapter, setActiveChapter] = useState<number>(initialChapter);
  const [viewAllChapters, setViewAllChapters] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Quiz state
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedQuizAnswer(null);
    setQuizSubmitted(false);
  }, [topicSlug, activeChapter]);

  // Sync title
  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} · Detailed Topic Analysis`;
    }
  }, [topic]);

  const themeStyles = topic ? getThemeStyles(topic.themeColor) : getThemeStyles('blue');

  // Topic Quiz Generator based on active topic
  const quizData = useMemo<QuizQuestion | null>(() => {
    if (!topic) return null;
    const page1 = topic.pages[1];
    if (!page1 || !page1.corePrinciples || page1.corePrinciples.length === 0) return null;

    const principle = page1.corePrinciples[0];
    return {
      question: `In strategic management for customer satisfaction, what is the core purpose of "${principle.heading}"?`,
      options: [
        principle.actionableInsight,
        'To maximize short-term quarterly revenue at the expense of customer trust',
        'To eliminate customer feedback loops and standardize internal silos',
        'To shift all service responsibility exclusively to automated chatbots'
      ],
      correctIndex: 0,
      explanation: `Correct! ${principle.explanation}`
    };
  }, [topic]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const currentTopicIndex = topic ? TOPIC_ORDER.indexOf(topic.slug as any) : -1;
  const prevTopicSlug = currentTopicIndex > 0 ? TOPIC_ORDER[currentTopicIndex - 1] : null;
  const nextTopicSlug = currentTopicIndex !== -1 && currentTopicIndex < TOPIC_ORDER.length - 1
    ? TOPIC_ORDER[currentTopicIndex + 1]
    : null;

  const prevTopic = prevTopicSlug ? TOPICS[prevTopicSlug] : null;
  const nextTopic = nextTopicSlug ? TOPICS[nextTopicSlug] : null;

  if (!topic) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-4 flex items-center justify-center">
        <div className="max-w-xl mx-auto p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            Topic Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            The topic slug <code className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-rose-500 font-mono text-xs font-bold">{topicSlug}</code> could not be located. Browse our 8 comprehensive management topics below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
            {TOPIC_ORDER.map((slug) => {
              const item = TOPICS[slug];
              if (!item) return null;
              return (
                <Link
                  key={slug}
                  to={`/topic/${slug}`}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <TopicIcon name={item.iconName} className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="truncate">{item.title}</span>
                </Link>
              );
            })}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const currentPage = topic.pages[activeChapter] || topic.pages[1];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors pb-24">
      {/* =========================================================================
          STICKY SUB-HEADER WITH BREADCRUMBS & TOPIC ACTIONS
         ========================================================================= */}
      <div className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 overflow-x-auto py-0.5 scrollbar-none">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 font-semibold whitespace-nowrap transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-400">Topics</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-bold text-slate-900 dark:text-white truncate max-w-[180px] sm:max-w-none">
              {topic.title}
            </span>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium transition-colors cursor-pointer text-xs"
              title="Copy link to this topic"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied!' : 'Share Topic'}</span>
            </button>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors cursor-pointer text-xs shadow-sm"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO BANNER FOR THE TOPIC
         ========================================================================= */}
      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Atmospheric Glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br ${themeStyles.gradient} text-white flex items-center justify-center shrink-0 shadow-xl shadow-blue-950`}>
              <TopicIcon name={topic.iconName} className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <Sparkles className="w-3 h-3" />
                  Topic Deep Dive
                </span>
                <span className="text-xs text-slate-300 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-teal-300" />
                  {topic.estimatedReadTime}
                </span>
                <span className="text-xs text-teal-300 font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-400/30">
                  7 Comprehensive Chapters
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {topic.title}
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-3xl font-normal mb-8">
            {topic.shortDescription}
          </p>

          {/* Quick Highlight Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-extrabold text-blue-400 font-mono">7</div>
              <div className="text-xs text-slate-300 font-medium">In-Depth Chapters</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-extrabold text-teal-400 font-mono">21+</div>
              <div className="text-xs text-slate-300 font-medium">Core Principles</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-extrabold text-indigo-400 font-mono">7</div>
              <div className="text-xs text-slate-300 font-medium">Real Case Studies</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-extrabold text-purple-400 font-mono">100%</div>
              <div className="text-xs text-slate-300 font-medium">Actionable Insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CHAPTER SELECTOR TABS
         ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xs sticky top-[57px] z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-500" />
              <span>Select Chapter to Explore:</span>
            </span>

            <button
              onClick={() => setViewAllChapters(!viewAllChapters)}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              {viewAllChapters ? 'Show Single Chapter View' : 'View All 7 Chapters Continuously'}
            </button>
          </div>

          {/* 7 Chapter Selector Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => {
              const chapterData = topic.pages[num];
              const isSelected = activeChapter === num && !viewAllChapters;

              return (
                <button
                  key={num}
                  onClick={() => {
                    setActiveChapter(num);
                    setViewAllChapters(false);
                    setSearchParams({ chapter: num.toString() });
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isSelected ? 'bg-white text-blue-600' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {num}
                  </span>
                  <span className="truncate max-w-[140px] sm:max-w-[200px]">
                    {chapterData ? chapterData.title : `Chapter ${num}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN TOPIC CONTENT CONTAINER
         ========================================================================= */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {viewAllChapters ? (
          /* =======================================================================
             VIEW ALL 7 CHAPTERS CONTINUOUSLY
             ======================================================================= */
          <div className="space-y-16">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => {
              const page = topic.pages[num];
              if (!page) return null;
              return (
                <article
                  key={num}
                  id={`chapter-${num}`}
                  className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-8"
                >
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        Chapter 0{num} of 07
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {page.title}
                    </h2>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {page.subtitle}
                    </p>
                  </div>

                  {/* Overview */}
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      {page.overview}
                    </p>
                  </div>

                  {/* Principles */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-500" />
                      Core Principles &amp; Insights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {page.corePrinciples.map((principle, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1 block">
                              Pillar 0{idx + 1}
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                              {principle.heading}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                              {principle.explanation}
                            </p>
                          </div>
                          <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-[11px] text-blue-900 dark:text-blue-200 font-medium">
                            <span className="font-bold">Takeaway: </span>
                            {principle.actionableInsight}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Case Study */}
                  {page.businessCase && (
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-lg">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">
                        <Award className="w-4 h-4 text-teal-400" />
                        Executive Case Study
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
                        <div>
                          <div className="font-bold text-slate-200 mb-1">Business Scenario:</div>
                          <p className="text-slate-300 leading-relaxed">{page.businessCase.scenario}</p>
                        </div>
                        <div>
                          <div className="font-bold text-slate-200 mb-1">Management Intervention:</div>
                          <p className="text-slate-300 leading-relaxed">{page.businessCase.managementAction}</p>
                        </div>
                        <div>
                          <div className="font-bold text-emerald-400 mb-1">Measurable Result:</div>
                          <p className="text-emerald-300 font-semibold leading-relaxed">{page.businessCase.result}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Metrics */}
                  {page.metricsAndIndicators && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {page.metricsAndIndicators.map((metric, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{metric.label}</div>
                          <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono my-0.5">{metric.value}</div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-300">{metric.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          /* =======================================================================
             SINGLE CHAPTER IN-DEPTH VIEW WITH TABBED ACCORDION & CASE STUDIES
             ======================================================================= */
          <div className="space-y-10">
            {/* Active Chapter Card */}
            <article className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
              {/* Chapter Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                    Chapter 0{activeChapter} of 07
                  </span>
                  <span className="text-xs text-slate-400">
                    {topic.title} Curriculum
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {currentPage.title}
                </h2>
                <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 mt-2">
                  {currentPage.subtitle}
                </p>
              </div>

              {/* Comprehensive Overview */}
              <div className="bg-slate-50/80 dark:bg-slate-800/40 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Academic &amp; Operational Overview
                </h3>
                <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                  {currentPage.overview}
                </p>
              </div>

              {/* 3 Core Principles Detailed Breakdown */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Key Strategic Principles &amp; Explanations
                  </h3>
                  <span className="text-xs text-slate-500">3 Core Pillars</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {currentPage.corePrinciples.map((principle, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center">
                            0{idx + 1}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Pillar
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                          {principle.heading}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                          {principle.explanation}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                        <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-950 dark:text-blue-200 font-medium">
                          <span className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1 mb-1">
                            <Lightbulb className="w-3.5 h-3.5" />
                            Actionable Takeaway
                          </span>
                          {principle.actionableInsight}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-World Business Case Study */}
              {currentPage.businessCase && (
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-400/30 mb-4">
                      <Award className="w-4 h-4 text-teal-400" />
                      Executive Business Case Study
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-300 block mb-1">
                          The Challenge
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {currentPage.businessCase.scenario}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-300 block mb-1">
                          Management Action
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {currentPage.businessCase.managementAction}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/30">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                          Verified Results
                        </span>
                        <p className="text-xs sm:text-sm text-emerald-200 font-semibold leading-relaxed">
                          {currentPage.businessCase.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quantitative Metrics & Indicators */}
              {currentPage.metricsAndIndicators && currentPage.metricsAndIndicators.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    Key Quantitative Metrics &amp; Benchmarks
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {currentPage.metricsAndIndicators.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80"
                      >
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {metric.label}
                        </div>
                        <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 my-1 font-mono">
                          {metric.value}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {metric.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Takeaways Box */}
              {currentPage.keyTakeaways && (
                <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Essential Chapter Takeaways
                  </h3>
                  <ul className="space-y-2.5">
                    {currentPage.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Chapter Stepping Controls */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                {activeChapter > 1 ? (
                  <button
                    onClick={() => {
                      setActiveChapter(activeChapter - 1);
                      setSearchParams({ chapter: (activeChapter - 1).toString() });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous Chapter ({activeChapter - 1})
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <Home className="w-4 h-4" />
                    Back to Home
                  </Link>
                )}

                {activeChapter < 7 ? (
                  <button
                    onClick={() => {
                      setActiveChapter(activeChapter + 1);
                      setSearchParams({ chapter: (activeChapter + 1).toString() });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                  >
                    <span>Next Chapter ({activeChapter + 1})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    <span>Complete &amp; Return Home</span>
                  </Link>
                )}
              </div>
            </article>

            {/* =====================================================================
                INTERACTIVE TOPIC KNOWLEDGE CHECK / QUICK QUIZ
               ===================================================================== */}
            {quizData && (
              <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        Interactive Knowledge Check
                      </h3>
                      <p className="text-xs text-slate-500">
                        Test your understanding of {topic.title}
                      </p>
                    </div>
                  </div>
                  {quizSubmitted && (
                    <button
                      onClick={() => {
                        setSelectedQuizAnswer(null);
                        setQuizSubmitted(false);
                      }}
                      className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Retry
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {quizData.question}
                  </p>

                  <div className="space-y-2.5">
                    {quizData.options.map((option, idx) => {
                      const isSelected = selectedQuizAnswer === idx;
                      const isCorrect = idx === quizData.correctIndex;

                      let btnStyle = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500';

                      if (quizSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
                        } else if (isSelected) {
                          btnStyle = 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-200';
                        } else {
                          btnStyle = 'opacity-50 border-slate-200 dark:border-slate-800 text-slate-400';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200 font-semibold';
                      }

                      return (
                        <button
                          key={idx}
                          disabled={quizSubmitted}
                          onClick={() => setSelectedQuizAnswer(idx)}
                          className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1">{option}</span>
                          {quizSubmitted && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {!quizSubmitted ? (
                    <div className="pt-2">
                      <button
                        disabled={selectedQuizAnswer === null}
                        onClick={() => setQuizSubmitted(true)}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        Check Answer
                      </button>
                    </div>
                  ) : (
                    <div className={`p-4 rounded-xl text-xs leading-relaxed ${
                      selectedQuizAnswer === quizData.correctIndex
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800'
                        : 'bg-amber-50 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800'
                    }`}>
                      <p className="font-bold mb-1">
                        {selectedQuizAnswer === quizData.correctIndex ? '🎉 Excellent!' : '💡 Takeaway Note:'}
                      </p>
                      <p>{quizData.explanation}</p>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>
        )}

        {/* =========================================================================
            BOTTOM NAVIGATION: EXPLORE OTHER TOPICS IN THE REPOSITORY
           ========================================================================= */}
        <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Explore Other Management Topics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                Click any topic card to open its dedicated in-depth analysis page.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs sm:text-sm transition-colors shadow-md"
            >
              <Home className="w-4 h-4 text-blue-400" />
              <span>Return to Homepage</span>
            </Link>
          </div>

          {/* Grid of Other Topics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOPIC_ORDER.filter(s => s !== topic.slug).map((slug, idx) => {
              const otherTopic = TOPICS[slug];
              if (!otherTopic) return null;
              const otherStyles = getThemeStyles(otherTopic.themeColor);

              return (
                <Link
                  key={slug}
                  to={`/topic/${slug}`}
                  className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${otherStyles.gradient} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                        <TopicIcon name={otherTopic.iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        7 Chapters
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 leading-snug">
                      {otherTopic.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {otherTopic.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                    <span>Open Topic Deep-Dive</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
