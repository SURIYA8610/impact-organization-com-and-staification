import React from 'react';
import { X, GraduationCap, CheckCircle, Code, Server, BookOpen, Printer, Sparkles, Layers } from 'lucide-react';

interface AcademicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicModal: React.FC<AcademicModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-blue-900 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-300">
                Academic Project Documentation
              </span>
              <h2 className="text-lg sm:text-xl font-bold font-heading">
                B.Tech Information Technology — Final Year Capstone Guide
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print academic summary"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {/* Abstract */}
          <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900">
            <h3 className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Project Abstract & Scope
            </h3>
            <p className="leading-relaxed">
              This project investigates the critical relationship between organizational communication flows (Downward, Upward, Horizontal, Diagonal) and multifaceted Employee Satisfaction indicators (role clarity, trust, engagement, stress reduction). Developed as a full-stack research portal combining modern web engineering with statistical data visualization, it features a psychometric survey instrument and live data analytics engine.
            </p>
          </div>

          {/* Technical Architecture */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-teal-500" />
              Software & Technical Stack Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Frontend Engineering:</p>
                <p className="text-slate-600 dark:text-slate-400">React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Canvas-Confetti</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Analytics & Visualizations:</p>
                <p className="text-slate-600 dark:text-slate-400">Recharts (Radar, Donut, Multi-Axis Bar, Horizontal Flow)</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Data Storage & Persistence:</p>
                <p className="text-slate-600 dark:text-slate-400">Dual-Mode: LocalStorage state engine with optional Supabase PostgreSQL sync</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Design System:</p>
                <p className="text-slate-600 dark:text-slate-400">Corporate SaaS navy/teal palette, dark/light toggle, mobile-responsive</p>
              </div>
            </div>
          </div>

          {/* Mathematical Model */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-500" />
              Mathematical Formula: Employee Communication Satisfaction Index (ECSI)
            </h3>
            <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] sm:text-xs overflow-x-auto">
              <code>
                ECSI = (Q1_Clarity * 0.20) + (Q2_Overall * 0.30) + (Q3_Transparency * 0.15) + (Q4_Feedback * 0.15) + (Q5_Voice * 0.10) + (Q6_CrossDept * 0.10) scaled to [0 - 100]
              </code>
            </div>
          </div>

          {/* Viva Presentation Talking Points */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Viva Voce Defense: Key Presentation Points
            </h3>
            <ul className="space-y-2 list-disc pl-5 text-slate-600 dark:text-slate-300">
              <li>
                <strong>Research Problem:</strong> Why do companies with identical compensation packages experience drastically differing turnover? Communication quality is a statistically proven determinant.
              </li>
              <li>
                <strong>Data Integrity:</strong> How does the system handle demo vs live data? The app provides baseline illustrative data and dynamically merges live respondent input in real time.
              </li>
              <li>
                <strong>Engineering Contribution:</strong> Interactive radar mapping, responsive UX, accessible dark mode, and state-driven Likert psychometrics.
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Suitable for Final Year Project Viva & Project Report Submission
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
