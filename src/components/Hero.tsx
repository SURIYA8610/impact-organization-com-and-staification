import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#0A182C] text-white">
      {/* Full-Bleed Background Image of Team Collaboration */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85"
          alt="Diverse corporate team collaborating happily over a laptop"
          className="w-full h-full object-cover object-[center_28%] brightness-[0.92] contrast-[1.05]"
          loading="eager"
        />
        {/* Deep Navy/Blue Vignette Overlay from Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#0A182C]/90 to-[#0A182C]/35 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/50" />
      </div>

      {/* Floating Neon Outline Icons matching the reference screenshot */}
      {/* 1. Neon Cyan Speech Bubble Outline near Laptop */}
      <div className="absolute left-[54%] bottom-[28%] z-10 hidden md:block pointer-events-none animate-pulse [animation-duration:4s]">
        <svg className="w-9 h-9 text-[#14B8A6]/80 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      {/* 2. Neon Cyan Mail Envelope Outline near Foreground Plant */}
      <div className="absolute right-[11%] bottom-[22%] z-10 hidden lg:block pointer-events-none animate-pulse [animation-duration:5s]">
        <svg className="w-8 h-8 text-[#14B8A6]/85 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </div>

      {/* Floating Glassmorphic Tilted Card: "Good Communication Builds Great Teams" */}
      <div className="absolute top-12 right-6 sm:top-14 sm:right-12 lg:top-16 lg:right-16 z-20 pointer-events-none">
        <div className="bg-slate-900/65 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-4 max-w-[240px] text-left shadow-2xl transform rotate-[4deg]">
          <p className="text-white/95 text-base sm:text-lg font-medium italic leading-snug tracking-tight font-sans drop-shadow-sm">
            “Good Communication Builds Great Teams”
          </p>
        </div>
      </div>

      {/* Main Left Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div className="max-w-2xl text-left">
          {/* Top Tagline */}
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#14B8A6] mb-4 sm:mb-6">
            Better Communication &nbsp;|&nbsp; Happier Employees &nbsp;|&nbsp; Stronger Teams
          </p>

          {/* Headline matching screenshot typography and colors */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            <span className="block">Impact of</span>
            <span className="block">Organizational</span>
            <span className="block">Communication on</span>
            <span className="block mt-1">
              <span className="text-[#3B82F6]">Employee </span>
              <span className="text-[#A855F7]">Satisfaction</span>
            </span>
          </h1>

          {/* Exact Subtitle Description */}
          <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed mb-8 sm:mb-10 max-w-xl font-normal drop-shadow-xs">
            Effective organizational communication builds trust, improves employee engagement, strengthens workplace relationships, and creates a positive working environment. Discover how communication directly influences employee satisfaction and organizational productivity.
          </p>

          {/* Action Buttons matching screenshot */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* Blue Solid Button: Explore Findings */}
            <button
              onClick={() => scrollTo('impact')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold rounded-xl text-white bg-[#2563EB] hover:bg-blue-600 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Findings</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Deep-Dive Topics Button */}
            <button
              onClick={() => scrollTo('topics')}
              className="inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl text-teal-300 bg-teal-950/60 hover:bg-teal-900/60 border border-teal-500/40 backdrop-blur-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-teal-400" />
              <span>Deep-Dive Topics</span>
            </button>

            {/* Translucent Border Button: Take Survey */}
            <button
              onClick={() => scrollTo('survey')}
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold rounded-xl text-white bg-slate-900/30 hover:bg-white/10 border border-white/40 hover:border-white/60 backdrop-blur-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Take Survey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
