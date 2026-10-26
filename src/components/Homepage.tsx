import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  TrendingUp,
  Search,
  ExternalLink,
  ShieldCheck,
  Building2,
  Sliders,
  Users2,
  Share2,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import { TOPIC_ORDER, TOPICS } from '../data/topicsData';
import { TopicIcon } from './TopicIcon';
import { getThemeStyles } from '../utils/themeColors';

interface HomepageProps {
  onOpenAllPagesModal: () => void;
  onOpenAcademicModal: () => void;
}

export const Homepage: React.FC<HomepageProps> = ({
  onOpenAllPagesModal,
  onOpenAcademicModal
}) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [csatRating, setCsatRating] = useState<number>(4.2);
  const [npsScore, setNpsScore] = useState<number>(68);
  const [cesScore, setCesScore] = useState<number>(1.8);

  const filteredTopics = useMemo(() => {
    return TOPIC_ORDER.filter((slug) => {
      const topic = TOPICS[slug];
      if (!topic) return false;
      if (!searchFilter.trim()) return true;
      const q = searchFilter.toLowerCase();
      return (
        topic.title.toLowerCase().includes(q) ||
        topic.shortDescription.toLowerCase().includes(q) ||
        slug.toLowerCase().includes(q)
      );
    });
  }, [searchFilter]);

  const scrollToTracks = () => {
    const el = document.getElementById('topics-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      {/* =========================================================================
          HERO SECTION — COLORFUL & PREMIUM CORPORATE RESEARCH IDENTITY
         ========================================================================= */}
      <section className="relative min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#0A182C] text-white">
        {/* Full-bleed background with atmospheric lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85"
            alt="Corporate leadership team strategizing customer satisfaction"
            className="w-full h-full object-cover object-[center_28%] brightness-[0.88] contrast-[1.08]"
            loading="eager"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#0A182C]/90 to-[#0A182C]/40 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/60" />
        </div>

        {/* Floating Neon Cyber outlines */}
        <div className="absolute left-[52%] bottom-[28%] z-10 hidden md:block pointer-events-none animate-pulse [animation-duration:4s]">
          <svg className="w-10 h-10 text-[#14B8A6]/80 drop-shadow-[0_0_10px_rgba(20,184,166,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        {/* Floating Tilted Glass Card */}
        <div className="absolute top-12 right-6 sm:top-16 sm:right-12 lg:top-20 lg:right-16 z-20 pointer-events-none hidden sm:block">
          <div className="bg-slate-900/70 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 max-w-[260px] text-left shadow-2xl transform rotate-[3deg]">
            <p className="text-white/95 text-sm sm:text-base font-semibold italic leading-snug tracking-tight font-sans drop-shadow-sm">
              “Management Excellence is the True Foundation of Customer Delight”
            </p>
            <div className="mt-2 text-[11px] text-blue-300 font-bold uppercase tracking-wider">
              57-Page Research Portal
            </div>
          </div>
        </div>

        {/* Main Hero Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
          <div className="max-w-3xl text-left">
            {/* Top Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-teal-500/20 text-teal-300 border border-teal-400/30 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Strategic Leadership &amp; Operational Excellence
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              <span className="block">Role of</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                Management in
              </span>
              <span className="block">
                Improving <span className="text-[#38BDF8]">Customer </span>
                <span className="text-[#A855F7]">Satisfaction</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-xs">
              Explore our comprehensive 57-page curriculum covering the 8 strategic pillars of customer success: management foundations, buyer psychology, frontline leadership, omnichannel CX, service quality benchmarks, and the 7-phase improvement blueprint.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={scrollToTracks}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore 8 Main Topics</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAllPagesModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-white/20 font-semibold text-sm transition-colors cursor-pointer"
              >
                <Layers className="w-4 h-4 text-blue-400" />
                <span>All 57 Pages Directory</span>
              </button>

              <button
                onClick={onOpenAcademicModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-sm transition-colors cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>Research Guide &amp; Viva</span>
              </button>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
                <div className="text-2xl font-extrabold text-blue-400 font-mono">57</div>
                <div className="text-[11px] text-slate-300 font-medium">Distinct Pages</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
                <div className="text-2xl font-extrabold text-teal-400 font-mono">8</div>
                <div className="text-[11px] text-slate-300 font-medium">Core Tracks</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
                <div className="text-2xl font-extrabold text-indigo-400 font-mono">168</div>
                <div className="text-[11px] text-slate-300 font-medium">Core Principles</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
                <div className="text-2xl font-extrabold text-purple-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-300 font-medium">Sequence Complete</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE 8 MAIN TOPIC CARDS (HOMEPAGE CORE REQUIREMENT)
         ========================================================================= */}
      <section id="topics-section" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-3">
              <Layers className="w-3.5 h-3.5" />
              Comprehensive Curriculum Tracks
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              8 Core Management Domains
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Each topic contains its own 7-page connected sequence (Page 1 through Page 7). Click any card below to start that topic’s journey at Page 1.
            </p>
          </div>

          {/* Search filter for topics */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter topics..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
            />
          </div>
        </div>

        {/* 8 Clickable Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTopics.map((slug, idx) => {
            const topic = TOPICS[slug];
            if (!topic) return null;

            const themeStyles = getThemeStyles(topic.themeColor);
            const targetRoute = `/${topic.slug}/page-1`;

            return (
              <Link
                key={slug}
                to={targetRoute}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/70 dark:hover:border-blue-500/70 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer no-underline text-inherit"
                title={`Open Track 0${idx + 1}: ${topic.title} (Page 1)`}
              >
                {/* Colorful top gradient header bar */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${themeStyles.gradient}`} />

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top card metadata */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${themeStyles.badgeBg}`}>
                        Track 0{idx + 1}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        7 Pages Sequence
                      </span>
                    </div>

                    {/* Topic Icon & Title */}
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${themeStyles.gradient} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                        <TopicIcon name={topic.iconName} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                          {topic.title}
                        </h3>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                      {topic.shortDescription}
                    </p>

                    {/* 7-Step Sequence Mini Visualizer */}
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 mb-5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center justify-between">
                        <span>Sequence Flow</span>
                        <span>Page 1 → 7</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <div
                            key={num}
                            className={`h-1.5 rounded-full ${
                              num === 1
                                ? 'bg-blue-600 dark:bg-blue-400'
                                : 'bg-slate-200 dark:bg-slate-700'
                            }`}
                            title={`Chapter ${num}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Start Track Button Container */}
                  <div
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm ${themeStyles.buttonGradient} shadow-md transition-all group-hover:shadow-lg`}
                  >
                    <span>Start Track (Page 1)</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredTopics.length === 0 && (
          <div className="py-12 text-center text-slate-500">
            <p className="text-base font-semibold">No topics found matching "{searchFilter}"</p>
            <button
              onClick={() => setSearchFilter('')}
              className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear search filter
            </button>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 3: INTERACTIVE EXECUTIVE CSAT / NPS DIAGNOSTIC SIMULATOR
         ========================================================================= */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 mb-2">
              <Sliders className="w-3.5 h-3.5" />
              Executive Diagnostic Tool
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Interactive Customer Satisfaction &amp; Effort Calculator
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Adjust the core customer metrics to diagnose operational alignment and receive instant management recommendations based on the POLC framework.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Metric Sliders */}
            <div className="lg:col-span-2 p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-6">
              {/* CSAT */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    Customer Satisfaction Score (CSAT)
                  </span>
                  <span className="text-base font-extrabold font-mono text-blue-600 dark:text-blue-400">
                    {csatRating.toFixed(1)} / 5.0
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.1"
                  value={csatRating}
                  onChange={(e) => setCsatRating(parseFloat(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>1.0 Critical Dissatisfaction</span>
                  <span>3.0 Neutral Benchmark</span>
                  <span>5.0 World-Class Delight</span>
                </div>
              </div>

              {/* NPS */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                    Net Promoter Score (NPS)
                  </span>
                  <span className="text-base font-extrabold font-mono text-teal-600 dark:text-teal-400">
                    +{npsScore}
                  </span>
                </div>
                <input
                  type="range"
                  min="-50"
                  max="100"
                  step="1"
                  value={npsScore}
                  onChange={(e) => setNpsScore(parseInt(e.target.value, 10))}
                  className="w-full accent-teal-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>-50 Toxic Attrition</span>
                  <span>+30 Solid Industry Average</span>
                  <span>+100 Brand Evangelism</span>
                </div>
              </div>

              {/* CES */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    Customer Effort Score (CES - Lower is Better)
                  </span>
                  <span className="text-base font-extrabold font-mono text-purple-600 dark:text-purple-400">
                    {cesScore.toFixed(1)} / 7.0
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="0.1"
                  value={cesScore}
                  onChange={(e) => setCesScore(parseFloat(e.target.value))}
                  className="w-full accent-purple-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>1.0 Effortless / Seamless</span>
                  <span>4.0 Average Friction</span>
                  <span>7.0 Extreme Customer Burden</span>
                </div>
              </div>
            </div>

            {/* Diagnostic Recommendation Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 text-white flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1">
                  Diagnostic Diagnosis
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">
                  {csatRating >= 4.0 && npsScore >= 50 && cesScore <= 2.5
                    ? 'Tier-1 Customer Champion'
                    : csatRating >= 3.0 && cesScore <= 4.0
                    ? 'Stable with Optimization Gaps'
                    : 'Critical Service Risk Detected'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {csatRating >= 4.0 && npsScore >= 50 && cesScore <= 2.5
                    ? 'Your operational alignment is high. Focus on institutionalizing standard operating procedures and maintaining frontline empowerment.'
                    : csatRating >= 3.0 && cesScore <= 4.0
                    ? 'Customers are satisfied with baseline offerings but experience friction in hand-offs. Prioritize cross-departmental communication and journey streamlining.'
                    : 'High customer effort is actively driving churn. Executive leadership must trigger a root-cause CAPA intervention and review resource allocation.'}
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Recommended Track: Track 08 (Improvement Plan)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Management Focus: Frontline SOP Clarity</span>
                  </div>
                </div>
              </div>

              <Link
                to="/satisfaction-improvement-plan/page-1"
                className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <span>Deploy 7-Phase Improvement Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: COMPLETE 57-PAGE CURRICULUM SITEMAP BANNER
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/30 text-blue-300 border border-blue-400/30 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Verified 57-Page Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Browse the Complete 57-Page Educational Library
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every chapter has a dedicated URL, deep academic explanations, measurable business cases, real-world KPIs, and interactive forward choices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenAllPagesModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              Open Sitemap Modal (57 Pages)
            </button>
            <button
              onClick={onOpenAcademicModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-colors cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-teal-300" />
              Academic Viva Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
