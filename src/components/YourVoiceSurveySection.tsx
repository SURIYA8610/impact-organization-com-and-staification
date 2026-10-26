import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Star, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useSurvey } from '../context/SurveyContext';

export const YourVoiceSurveySection: React.FC = () => {
  const { addResponse } = useSurvey();

  const [ratingStars, setRatingStars] = useState<number>(4);
  const [voiceHeardRating, setVoiceHeardRating] = useState<number>(4);
  const [environmentRating, setEnvironmentRating] = useState<number>(4);
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const response = addResponse({
      department: 'Engineering',
      isAnonymous: true,
      q1_instructionClarity: ratingStars,
      q2_overallSatisfaction: environmentRating,
      q3_transparency: voiceHeardRating >= 4 ? 'Often' : voiceHeardRating === 3 ? 'Sometimes' : 'Rarely',
      q4_feedbackSufficiency: voiceHeardRating >= 4 ? 'Often' : 'Sometimes',
      q5_voiceComfort: voiceHeardRating,
      q6_crossDeptEffectiveness: environmentRating,
      q7_biggestChallenge: 'Departmental communication barriers',
      q8_suggestions: feedbackText.trim()
    });

    setCalculatedScore(response.calculatedSatisfactionScore);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 85,
        spread: 65,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setCalculatedScore(null);
    setFeedbackText('');
  };

  return (
    <section id="survey" className="py-16 sm:py-20 bg-white dark:bg-[#0A1424] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Header & Questionnaire */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Employee Survey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Your Voice Matters
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
              Share your thoughts about organizational communication and how it affects your satisfaction. This survey is anonymous and will help us improve.
            </p>

            {submitted ? (
              <div className="bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800 text-center animate-in fade-in duration-200 shadow-lg shadow-emerald-500/5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-500/25">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                  Your response has been aggregated into the real-time insights dashboard below.
                </p>
                {calculatedScore !== null && (
                  <div className="inline-block bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 mb-6 shadow-sm">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Your Communication Satisfaction Score
                    </p>
                    <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 font-heading">
                      {calculatedScore}%
                    </p>
                  </div>
                )}
                <div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    Submit Another Response
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 2-Column Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column Questions: 1, 2, 3 */}
                  <div className="space-y-5">
                    {/* Q1: Star Rating */}
                    <div className="bg-slate-50/80 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        1. How would you rate the current communication in your organization?
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setRatingStars(star)}
                            className="p-1 hover:scale-125 transition-transform cursor-pointer"
                          >
                            <Star
                              className={`w-7 h-7 ${
                                star <= ratingStars
                                  ? 'text-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]'
                                  : 'text-slate-300 dark:text-slate-600'
                              }`}
                              fill={star <= ratingStars ? 'currentColor' : 'none'}
                              stroke="currentColor"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Q2: Likert 1-5 */}
                    <div className="bg-slate-50/80 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        2. Do you feel your voice is heard and valued?
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            type="button"
                            key={num}
                            onClick={() => setVoiceHeardRating(num)}
                            className={`w-10 h-10 rounded-full text-xs font-bold transition-all cursor-pointer ${
                              voiceHeardRating === num
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30 scale-110'
                                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Q3: Likert 1-5 */}
                    <div className="bg-slate-50/80 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        3. How satisfied are you with your work environment?
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            type="button"
                            key={num}
                            onClick={() => setEnvironmentRating(num)}
                            className={`w-10 h-10 rounded-full text-xs font-bold transition-all cursor-pointer ${
                              environmentRating === num
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30 scale-110'
                                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column Question: 4 (Suggestions textarea) */}
                  <div className="bg-slate-50/80 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between shadow-2xs">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        4. Any suggestions to improve communication?
                      </label>
                      <textarea
                        rows={7}
                        maxLength={500}
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder="Type your feedback here..."
                        className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none shadow-2xs"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                      <span className="font-semibold text-teal-600 dark:text-teal-400">🔒 100% Anonymous Response</span>
                      <span>{feedbackText.length}/500</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button with Gradient & Shadow */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 text-xs sm:text-sm font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 via-sky-500 to-teal-500 hover:from-blue-500 hover:to-teal-400 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Submit Survey</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Clipboard Checklist Graphic with Colorful Accents */}
          <div className="lg:col-span-4 hidden lg:flex justify-center items-center pt-8">
            <div className="w-64 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl border border-blue-200/60 dark:border-slate-700 shadow-xl shadow-blue-500/10 flex flex-col items-center">
              <svg className="w-44 h-auto" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Clipboard background */}
                <rect x="25" y="30" width="150" height="195" rx="16" fill="#1E3A8A" />
                <rect x="35" y="45" width="130" height="165" rx="8" fill="#FFFFFF" className="dark:fill-slate-900" />
                {/* Clip top */}
                <rect x="75" y="18" width="50" height="24" rx="6" fill="#94A3B8" />
                <circle cx="100" cy="28" r="4" fill="#E2E8F0" />
                {/* Checklist line 1 in Blue */}
                <rect x="50" y="70" width="16" height="16" rx="4" fill="#2563EB" />
                <path d="M54 78 L57 81 L62 74" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="75" y1="78" x2="145" y2="78" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />

                {/* Checklist line 2 in Emerald */}
                <rect x="50" y="105" width="16" height="16" rx="4" fill="#10B981" />
                <path d="M54 113 L57 116 L62 109" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="75" y1="113" x2="135" y2="113" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />

                {/* Checklist line 3 in Violet */}
                <rect x="50" y="140" width="16" height="16" rx="4" fill="#8B5CF6" />
                <path d="M54 148 L57 151 L62 144" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="75" y1="148" x2="150" y2="148" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" />

                {/* Stars below in Gold */}
                <circle cx="70" cy="180" r="4.5" fill="#F59E0B" />
                <circle cx="85" cy="180" r="4.5" fill="#F59E0B" />
                <circle cx="100" cy="180" r="4.5" fill="#F59E0B" />
                <circle cx="115" cy="180" r="4.5" fill="#F59E0B" />
                <circle cx="130" cy="180" r="4.5" fill="#F59E0B" />
              </svg>
              <p className="text-[11px] font-bold text-blue-600 dark:text-sky-400 mt-4 text-center">
                ✨ Instant Psychological Voice Analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
