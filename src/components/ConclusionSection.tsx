import React from 'react';
import { Smile, Users, Briefcase, Award, Sparkles } from 'lucide-react';

export const ConclusionSection: React.FC = () => {
  const takeaways = [
    {
      title: 'Improved Satisfaction',
      icon: Smile,
      bg: 'bg-emerald-50 dark:bg-emerald-950/80',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-200/80 dark:border-emerald-900/60'
    },
    {
      title: 'Higher Engagement',
      icon: Users,
      bg: 'bg-blue-50 dark:bg-blue-950/80',
      text: 'text-blue-600 dark:text-sky-400',
      border: 'border-blue-200/80 dark:border-blue-900/60'
    },
    {
      title: 'Greater Productivity',
      icon: Briefcase,
      bg: 'bg-cyan-50 dark:bg-cyan-950/80',
      text: 'text-cyan-600 dark:text-cyan-400',
      border: 'border-cyan-200/80 dark:border-cyan-900/60'
    },
    {
      title: 'Long-Term Success',
      icon: Award,
      bg: 'bg-amber-50 dark:bg-amber-950/80',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-200/80 dark:border-amber-900/60'
    }
  ];

  return (
    <section id="conclusion" className="py-16 sm:py-20 bg-slate-50/80 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors relative overflow-hidden">
      {/* Background warm glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Takeaways Text & Pills */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-sky-300 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Key Takeaways</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
              Better Communication.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-teal-500">
                Happier Employees. Stronger Organizations.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              The study clearly shows that organizational communication has a significant positive impact on employee satisfaction. When employees feel informed, heard and valued, they are more engaged, motivated and productive.
            </p>

            {/* 4 Icon Badges with Individual Colorful Tints */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {takeaways.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl bg-white dark:bg-slate-900 border ${item.border} flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.text} flex items-center justify-center mb-2`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: City Silhouette Sunrise Visual with Glowing Script Note */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-[0_20px_50px_rgba(245,158,11,0.15)] bg-slate-900 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="City skyline at sunrise symbolizing growth and opportunities"
                  className="w-full h-full object-cover object-center brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Glowing Script Overlay: "Communication creates opportunities" */}
              <div className="absolute top-6 right-6 text-right pointer-events-none">
                <p className="font-script text-3xl sm:text-4xl text-amber-300 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  Communication
                  <br />
                  creates opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
