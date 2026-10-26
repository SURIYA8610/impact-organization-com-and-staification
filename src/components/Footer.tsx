import React from 'react';
import { ArrowUp, GraduationCap } from 'lucide-react';

interface FooterProps {
  onOpenAcademicModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAcademicModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142B4A] dark:bg-[#081220] text-slate-300 py-6 border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          {/* Left: CommSync Brand */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-white">
              Comm<span className="text-sky-400">Sync</span>
            </span>
          </div>

          {/* Center: Tagline */}
          <p className="text-slate-400 text-center font-medium">
            Building Better Workplaces Through Better Communication
          </p>

          {/* Right: Copyright & Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAcademicModal}
              className="text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>B.Tech Capstone</span>
            </button>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">© 2026 CommSync. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors ml-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
