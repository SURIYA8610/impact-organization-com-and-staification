import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Home,
  BookOpen,
  TrendingUp,
  Award,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building2,
  Share2,
  Check,
  ExternalLink,
  Layers,
  Clock,
  Printer,
  RotateCcw
} from 'lucide-react';
import { getTopicBySlug, TOPIC_ORDER, TOPICS } from '../data/topicsData';
import { TopicIcon } from './TopicIcon';
import { getThemeStyles } from '../utils/themeColors';

interface TopicPageViewProps {
  onOpenAllPagesModal: () => void;
  onOpenAcademicModal: () => void;
}

export const TopicPageView: React.FC<TopicPageViewProps> = ({
  onOpenAllPagesModal,
  onOpenAcademicModal
}) => {
  const { topicSlug = '', pageSlug = 'page-1' } = useParams<{ topicSlug: string; pageSlug: string }>();
  const navigate = useNavigate();

  // Extract page number from "page-1", "page-2", etc.
  const pageMatch = pageSlug.match(/^page-(\d+)$/);
  const pageNumber = pageMatch ? parseInt(pageMatch[1], 10) : 1;

  const topic = getTopicBySlug(topicSlug);

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topicSlug, pageSlug]);

  // Page 7 celebratory confetti
  useEffect(() => {
    if (pageNumber === 7 && topic) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback if canvas-confetti is unavailable
      }
    }
  }, [pageNumber, topic]);

  // Update browser document title
  useEffect(() => {
    if (topic && topic.pages[pageNumber]) {
      document.title = `${topic.pages[pageNumber].title} (Page ${pageNumber}/7) · Role of Management`;
    }
  }, [topic, pageNumber]);

  if (!topic || !topic.pages[pageNumber]) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
        <div className="max-w-md p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            The requested topic page ({topicSlug}/{pageSlug}) does not exist. All 8 topics contain exactly 7 pages (page-1 to page-7).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={onOpenAllPagesModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-colors"
            >
              <Layers className="w-4 h-4" />
              Browse All 57 Pages
            </button>
          </div>
        </div>
      </div>
    );
  }

  const pageData = topic.pages[pageNumber];
  const themeStyles = getThemeStyles(topic.themeColor);

  // Find index of current topic in 8 tracks
  const currentTopicIndex = TOPIC_ORDER.indexOf(topic.slug as any);
  const nextTopicSlug = currentTopicIndex !== -1 && currentTopicIndex < TOPIC_ORDER.length - 1
    ? TOPIC_ORDER[currentTopicIndex + 1]
    : null;
  const nextTopic = nextTopicSlug ? TOPICS[nextTopicSlug] : null;

  // Navigate forward by clicking an option
  const handleSelectOption = (focusKey: string) => {
    if (pageNumber < 7) {
      navigate(`/${topic.slug}/page-${pageNumber + 1}?focus=${encodeURIComponent(focusKey)}`);
    } else {
      navigate('/');
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      navigate(`/${topic.slug}/page-${pageNumber - 1}`);
    } else {
      navigate('/');
    }
  };

  const handleNextDirect = () => {
    if (pageNumber < 7) {
      navigate(`/${topic.slug}/page-${pageNumber + 1}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 pb-24">
      {/* Top Reading Sequence Bar */}
      <div className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 overflow-x-auto py-1 scrollbar-none">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 font-medium whitespace-nowrap">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[140px] sm:max-w-[220px]">
              {topic.title}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Page {pageNumber} of 7
            </span>
          </nav>

          {/* Quick actions on right */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenAllPagesModal}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-blue-500" />
              <span className="hidden sm:inline">Directory (57 Pages)</span>
              <span className="sm:hidden">Pages</span>
            </button>
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 text-blue-700 dark:text-blue-300 font-semibold transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
          </div>
        </div>

        {/* 7-Step Progress Horizontal Bar */}
        <div className="border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-none">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                const isCurrent = num === pageNumber;
                const isPast = num < pageNumber;
                const pageTitle = topic.pages[num]?.title || `Chapter ${num}`;

                return (
                  <Link
                    key={num}
                    to={`/${topic.slug}/page-${num}`}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all shrink-0 ${
                      isCurrent
                        ? `${themeStyles.badgeBg} font-bold ring-2 ring-blue-500/40 shadow-xs`
                        : isPast
                        ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100'
                        : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                    }`}
                    title={`Go to Page ${num}: ${pageTitle}`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isCurrent
                          ? 'bg-blue-600 text-white'
                          : isPast
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {isPast ? <Check className="w-2.5 h-2.5" /> : num}
                    </span>
                    <span className="hidden md:inline truncate max-w-[110px]">
                      {pageTitle}
                    </span>
                    <span className="md:hidden">
                      P{num}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chapter Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Track Header Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${themeStyles.gradient} text-white flex items-center justify-center shadow-sm`}>
              <TopicIcon name={topic.iconName} className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Track {currentTopicIndex + 1} of 8: {topic.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Route: /{topic.slug}/page-{pageNumber}
            </span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${themeStyles.badgeBg}`}>
              Step {pageNumber} of 7 ({Math.round((pageNumber / 7) * 100)}%)
            </span>
          </div>
        </div>

        {/* Chapter Title & Subtitle Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg mb-8">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/5 dark:bg-blue-400/5 blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Chapter {pageNumber} · Formal Research Module
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
              {pageData.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6">
              {pageData.subtitle}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
              <div className="font-semibold text-blue-900 dark:text-blue-300 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Executive Chapter Overview
              </div>
              {pageData.overview}
            </div>
          </div>
        </div>

        {/* Core Principles Grid */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Core Management Principles
            </h2>
            <span className="text-xs text-slate-500">3 Key Pillars</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pageData.corePrinciples.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.explanation}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Actionable Managerial Insight
                  </div>
                  <div className="text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg">
                    "{item.actionableInsight}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business Case Study Section */}
        {pageData.businessCase && (
          <section className="mb-10">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
              <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                      Applied Industry Evidence
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Real-World Business Case Study
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Documented Enterprise Outcome
                </span>
              </div>

              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/70 dark:border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    The Challenge / Scenario
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {pageData.businessCase.scenario}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/70 dark:border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Management Action
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {pageData.businessCase.managementAction}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Measurable Result
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                    {pageData.businessCase.result}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Metrics and Indicators Grid */}
        {pageData.metricsAndIndicators && pageData.metricsAndIndicators.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Strategic KPIs & Benchmark Indicators
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pageData.metricsAndIndicators.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                >
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 my-1 font-mono">
                    {metric.value}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Takeaways Box */}
        {pageData.keyTakeaways && pageData.keyTakeaways.length > 0 && (
          <section className="mb-10">
            <div className="p-6 rounded-2xl bg-slate-100/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Essential Chapter Takeaways
              </h3>
              <ul className="space-y-2">
                {pageData.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* =========================================================================
            PAGES 1 TO 6: THE EXACT INTERACTIVE NEXT PAGE OPTIONS
            User MUST click an option to proceed to the genuinely separate next page!
           ========================================================================= */}
        {pageNumber < 7 && pageData.nextOptions && pageData.nextOptions.length > 0 && (
          <section className="mb-14 pt-4 border-t-2 border-dashed border-slate-200 dark:border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Sequential Navigation
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Choose an Option to Advance to Page {pageNumber + 1}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Select any of the 3 strategic focus paths below. Clicking your chosen option immediately navigates to Page {pageNumber + 1} with a distinct URL.
              </p>
            </div>

            {/* 3 Clickable Options Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {pageData.nextOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.focusKey)}
                  className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                        Advance to Page {pageNumber + 1} →
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {opt.label}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {opt.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                    <span>Select & Continue</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>

            {/* Secondary Direct Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
              {pageNumber > 1 ? (
                <button
                  onClick={handlePrevPage}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  ← Previous Chapter (Page {pageNumber - 1})
                </button>
              ) : (
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  ← Back to Home
                </Link>
              )}

              <button
                onClick={handleNextDirect}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md hover:shadow-blue-500/25 cursor-pointer"
              >
                <span>Proceed to Page {pageNumber + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        )}

        {/* =========================================================================
            PAGE 7: FINAL SYNTHESIS & BACK TO HOME EXPERIENCE
            Prompt: "Page 7: Click 'Back to Home' -> Homepage"
           ========================================================================= */}
        {pageNumber === 7 && (
          <section className="mb-14 pt-4 border-t-2 border-dashed border-emerald-500/40">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-900 via-slate-900 to-blue-950 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce [animation-duration:2.5s]">
                  <Award className="w-9 h-9" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Track Sequence Completed! (7 of 7 Pages)
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                  Congratulations! You Completed {topic.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8">
                  You have completed the full 7-chapter sequential curriculum for this strategic management domain. All core principles, case outcomes, and executive KPIs have been synthesized.
                </p>

                {/* Prominent Action Buttons matching Prompt requirements */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {/* Primary "← Back to Home" Button */}
                  <button
                    onClick={handleBackToHome}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-extrabold bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                  >
                    <Home className="w-5 h-5 text-blue-600" />
                    ← Back to Home
                  </button>

                  {/* Previous Chapter (Page 6) */}
                  <button
                    onClick={handlePrevPage}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    ← Review Page 6
                  </button>

                  {/* Next Track Option if available */}
                  {nextTopic && (
                    <Link
                      to={`/${nextTopic.slug}/page-1`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                      <span>Start Next Track: {nextTopic.title}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  )}

                  {/* Browse all 57 pages */}
                  <button
                    onClick={onOpenAllPagesModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
                  >
                    <Layers className="w-4 h-4 text-emerald-300" />
                    View All 57 Pages Directory
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
