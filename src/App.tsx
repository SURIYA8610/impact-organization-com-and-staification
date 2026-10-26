/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SurveyProvider } from './context/SurveyContext';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveTopicsSection } from './components/InteractiveTopicsSection';
import { OverviewSection } from './components/OverviewSection';
import { KeyChannelsSection } from './components/KeyChannelsSection';
import { SatisfactionFactorsSection } from './components/SatisfactionFactorsSection';
import { PowerOfCommunicationSection } from './components/PowerOfCommunicationSection';
import { YourVoiceSurveySection } from './components/YourVoiceSurveySection';
import { RealTimeInsightsSection } from './components/RealTimeInsightsSection';
import { HowToImproveSection } from './components/HowToImproveSection';
import { ConclusionSection } from './components/ConclusionSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AcademicModal } from './components/AcademicModal';
import { TopicDetailPage } from './components/TopicDetailPage';
import { resolveTopicSlug } from './data/topicsData';

function TopicRedirect() {
  const { topicSlug = '' } = useParams<{ topicSlug: string }>();
  const canonical = resolveTopicSlug(topicSlug);
  return <Navigate to={`/topic/${canonical}`} replace />;
}

export default function App() {
  const [academicModalOpen, setAcademicModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <SurveyProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors relative selection:bg-blue-600 selection:text-white">
            {/* Top persistent reading progress indicator */}
            <ReadingProgressBar />

            {/* Global Navigation Header */}
            <Navbar
              onOpenAcademicModal={() => setAcademicModalOpen(true)}
            />

            <main className="flex-1">
              <Routes>
                {/* 1. Main Interactive Homepage */}
                <Route
                  path="/"
                  element={
                    <>
                      {/* Hero Section matching exact reference */}
                      <Hero />

                      {/* Interactive Topic Explorer: Click any topic to open dedicated detail page */}
                      <InteractiveTopicsSection />

                      {/* Research Study Overview */}
                      <OverviewSection />

                      {/* Key Channels: Interactive cards linking to topic deep-dives */}
                      <KeyChannelsSection />

                      {/* Drivers of Satisfaction: Interactive cards linking to topic deep-dives */}
                      <SatisfactionFactorsSection />

                      {/* Impact & Comparative Analytics */}
                      <PowerOfCommunicationSection />

                      {/* Interactive Voice Survey */}
                      <YourVoiceSurveySection />

                      {/* Real-Time Analytics Dashboard */}
                      <RealTimeInsightsSection />

                      {/* Strategic Recommendations */}
                      <HowToImproveSection />

                      {/* Conclusion */}
                      <ConclusionSection />

                      {/* FAQs */}
                      <FAQSection />

                      {/* Contact & Inquiries */}
                      <ContactSection />
                    </>
                  }
                />

                {/* 2. Dedicated In-Depth Topic Web Page */}
                <Route path="/topic/:topicSlug" element={<TopicDetailPage />} />
                <Route path="/topics/:topicSlug" element={<TopicDetailPage />} />

                {/* 3. Canonical Chapter & Topic Aliases */}
                <Route path="/:topicSlug/:pageSlug" element={<TopicDetailPage />} />
                <Route path="/:topicSlug" element={<TopicRedirect />} />

                {/* 4. Fallback Catch-all: Redirect to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Global Footer */}
            <Footer
              onOpenAcademicModal={() => setAcademicModalOpen(true)}
            />

            {/* Academic Guide Modal */}
            <AcademicModal
              isOpen={academicModalOpen}
              onClose={() => setAcademicModalOpen(false)}
            />
          </div>
        </BrowserRouter>
      </SurveyProvider>
    </ThemeProvider>
  );
}
