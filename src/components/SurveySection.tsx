import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  MessageSquareHeart,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Send,
  Sparkles,
  Lock,
  RefreshCw,
  Building,
  BarChart,
  HelpCircle
} from 'lucide-react';
import { useSurvey } from '../context/SurveyContext';
import { SurveyResponse } from '../types';

export const SurveySection: React.FC = () => {
  const { addResponse, lastSubmittedResponse } = useSurvey();

  // Form state
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [department, setDepartment] = useState<string>('Engineering');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(true);

  const [q1, setQ1] = useState<number | null>(null);
  const [q2, setQ2] = useState<number | null>(null);
  const [q3, setQ3] = useState<string>('');
  const [q4, setQ4] = useState<string>('');
  const [q5, setQ5] = useState<number | null>(null);
  const [q6, setQ6] = useState<number | null>(null);
  const [q7, setQ7] = useState<string>('');
  const [q7Custom, setQ7Custom] = useState<string>('');
  const [q8, setQ8] = useState<string>('');

  const [submittedResult, setSubmittedResult] = useState<SurveyResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const totalSteps = 3;

  const departmentsList = [
    'Engineering',
    'Sales & Marketing',
    'Human Resources',
    'Operations',
    'Finance',
    'Customer Success',
    'Product Management',
    'Other'
  ];

  const handleNext = () => {
    setErrorMessage('');
    if (currentStep === 1) {
      if (q1 === null || q2 === null || !q3) {
        setErrorMessage('Please answer all required questions on this page before continuing.');
        return;
      }
    } else if (currentStep === 2) {
      if (!q4 || q5 === null || q6 === null) {
        setErrorMessage('Please answer all required questions on this page before continuing.');
        return;
      }
    }
    setCurrentStep((prev) => Math.min(totalSteps, prev + 1));
  };

  const handlePrev = () => {
    setErrorMessage('');
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (q1 === null || q2 === null || !q3 || !q4 || q5 === null || q6 === null) {
      setErrorMessage('Please complete all rating questions before submitting.');
      return;
    }

    const finalChallenge = q7 === 'Other' && q7Custom.trim() ? q7Custom.trim() : q7 || 'Other';

    const newResult = addResponse({
      department,
      isAnonymous,
      q1_instructionClarity: q1,
      q2_overallSatisfaction: q2,
      q3_transparency: q3,
      q4_feedbackSufficiency: q4,
      q5_voiceComfort: q5,
      q6_crossDeptEffectiveness: q6,
      q7_biggestChallenge: finalChallenge,
      q8_suggestions: q8.trim()
    });

    setSubmittedResult(newResult);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleResetForm = () => {
    setSubmittedResult(null);
    setCurrentStep(1);
    setQ1(null);
    setQ2(null);
    setQ3('');
    setQ4('');
    setQ5(null);
    setQ6(null);
    setQ7('');
    setQ7Custom('');
    setQ8('');
    setErrorMessage('');
  };

  const scrollToFindings = () => {
    const el = document.getElementById('findings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="survey" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Empirical Data Instrument</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Share Your Workplace Communication Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Your responses help identify real communication strengths and friction points across organizational hierarchies. Data is persisted securely in your browser and instantly updates the research charts above.
          </p>
        </div>

        {/* Survey Container */}
        <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xl overflow-hidden p-6 sm:p-10 relative">
          {/* Submission Success State */}
          {submittedResult ? (
            <div className="text-center py-8 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Response Successfully Recorded!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-8">
                Thank you for contributing to the study. Your score has been aggregated into the live research sample.
              </p>

              {/* Calculated Score Card */}
              <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Your Workplace Communication Satisfaction Index
                </p>
                <div className="flex items-center justify-center gap-2 my-3">
                  <span className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 font-heading">
                    {submittedResult.calculatedSatisfactionScore}
                  </span>
                  <span className="text-xl font-medium text-slate-400">/ 100</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {submittedResult.calculatedSatisfactionScore >= 75
                    ? '🟢 High Communication Health — Your organization exhibits strong transparency and psychological safety.'
                    : submittedResult.calculatedSatisfactionScore >= 50
                    ? '🟡 Moderate Communication Health — Opportunities exist to refine feedback loops and inter-departmental flow.'
                    : '🔴 Low Communication Health — Sign of information silos, role ambiguity, or managerial disconnect.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToFindings}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  <BarChart className="w-4 h-4" />
                  <span>View Updated Analytics Dashboard</span>
                </button>

                <button
                  onClick={handleResetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Submit Another Response</span>
                </button>
              </div>
            </div>
          ) : (
            /* Active Multi-Step Form */
            <form onSubmit={handleSubmit}>
              {/* Top Progress & Meta Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                  <span>
                    Step {currentStep} of {totalSteps}:{' '}
                    {currentStep === 1
                      ? 'Clarity & Transparency'
                      : currentStep === 2
                      ? 'Feedback & Psychological Safety'
                      : 'Challenges & Improvements'}
                  </span>
                  <span>{Math.round((currentStep / totalSteps) * 100)}% Completed</span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>

                {/* Demographics / Settings Strip */}
                <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-700/60 text-xs">
                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-slate-500" />
                    <label htmlFor="survey-dept" className="text-slate-600 dark:text-slate-300 font-medium">
                      Your Department:
                    </label>
                    <select
                      id="survey-dept"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md px-2 py-1 text-slate-800 dark:text-slate-200 font-medium"
                    >
                      {departmentsList.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="flex items-center gap-2 text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                    />
                    <Lock className="w-3 h-3 text-teal-500" />
                    <span>Submit anonymously (No identity captured)</span>
                  </label>
                </div>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="mb-6 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* STEP 1: Directives & Leadership Transparency */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Q1 */}
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      1. How clear are the instructions and expectations you receive from your direct manager? <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3">
                      {[
                        { label: 'Very clear', val: 5 },
                        { label: 'Clear', val: 4 },
                        { label: 'Neutral', val: 3 },
                        { label: 'Unclear', val: 2 },
                        { label: 'Very unclear', val: 1 }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.val}
                          onClick={() => setQ1(item.val)}
                          className={`p-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            q1 === item.val
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q2 */}
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      2. Overall, how satisfied are you with communication within your organization? <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3">
                      {[
                        { label: 'Very satisfied', val: 5 },
                        { label: 'Satisfied', val: 4 },
                        { label: 'Neutral', val: 3 },
                        { label: 'Dissatisfied', val: 2 },
                        { label: 'Very dissatisfied', val: 1 }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.val}
                          onClick={() => setQ2(item.val)}
                          className={`p-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            q2 === item.val
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q3 */}
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      3. Does senior management communicate important strategic decisions transparently? <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3">
                      {['Always', 'Often', 'Sometimes', 'Rarely', 'Never'].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setQ3(opt)}
                          className={`p-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            q3 === opt
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Feedback & Voice */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Q4 */}
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      4. Do you receive sufficient and actionable feedback about your workplace performance? <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3">
                      {['Always', 'Often', 'Sometimes', 'Rarely', 'Never'].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setQ4(opt)}
                          className={`p-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            q4 === opt
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q5 */}
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      5. Can you comfortably express your opinions, concerns, and suggestions without fear? <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3">
                      {[
                        { label: 'Strongly agree', val: 5 },
                        { label: 'Agree', val: 4 },
                        { label: 'Neutral', val: 3 },
                        { label: 'Disagree', val: 2 },
                        { label: 'Strongly disagree', val: 1 }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.val}
                          onClick={() => setQ5(item.val)}
                          className={`p-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            q5 === item.val
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q6 */}
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      6. How effective is cross-communication and collaboration between different departments? <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3">
                      {[
                        { label: 'Very effective', val: 5 },
                        { label: 'Effective', val: 4 },
                        { label: 'Neutral', val: 3 },
                        { label: 'Ineffective', val: 2 },
                        { label: 'Very ineffective', val: 1 }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.val}
                          onClick={() => setQ6(item.val)}
                          className={`p-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            q6 === item.val
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Challenges & Qualitative Feedback */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Q7 */}
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      7. What is the single biggest communication challenge you face at work? <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                      {[
                        'Unclear instructions',
                        'Delayed information',
                        'Lack of feedback',
                        'Poor management communication',
                        'Departmental communication barriers',
                        'Other'
                      ].map((ch) => (
                        <button
                          type="button"
                          key={ch}
                          onClick={() => setQ7(ch)}
                          className={`p-3 rounded-lg text-xs font-semibold border text-left flex items-center justify-between transition-all cursor-pointer ${
                            q7 === ch
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                          }`}
                        >
                          <span>{ch}</span>
                          {q7 === ch && <CheckCircle className="w-4 h-4 text-white shrink-0" />}
                        </button>
                      ))}
                    </div>

                    {q7 === 'Other' && (
                      <div className="mt-3">
                        <input
                          type="text"
                          placeholder="Please specify your communication challenge..."
                          value={q7Custom}
                          onChange={(e) => setQ7Custom(e.target.value)}
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                        />
                      </div>
                    )}
                  </div>

                  {/* Q8 */}
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-1">
                      8. What improvements would you suggest for organizational communication? <span className="text-slate-400 font-normal text-xs">(Optional)</span>
                    </label>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                      Share concrete recommendations, tooling adjustments, or cultural practices.
                    </p>
                    <textarea
                      rows={3}
                      value={q8}
                      onChange={(e) => setQ8(e.target.value)}
                      placeholder="e.g. Weekly town halls with live AMA, better documentation in Notion, clear SLA for cross-team requests..."
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Controls Bar */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  )}
                </div>

                <div>
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-600/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Survey Response</span>
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
