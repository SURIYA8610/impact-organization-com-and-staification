import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { SurveyResponse } from '../types';
import { BASELINE_SURVEY_RESPONSES } from '../data/mockData';

interface ChannelPreference {
  channel: string;
  percentage: number;
  count: number;
}

interface AnalyticsData {
  totalResponses: number;
  avgSatisfactionScore: number;
  avgInstructionClarity: number;
  avgVoiceComfort: number;
  avgCrossDeptEffectiveness: number;
  satisfactionDistribution: { name: string; count: number; percentage: number; color: string }[];
  qualityMetrics: { metric: string; score: number; fullMark: number }[];
  challengesDistribution: { challenge: string; count: number; percentage: number }[];
  channelsDistribution: ChannelPreference[];
}

interface SurveyContextType {
  responses: SurveyResponse[];
  filteredResponses: SurveyResponse[];
  selectedDepartment: string;
  setSelectedDepartment: (dept: string) => void;
  availableDepartments: string[];
  addResponse: (data: Omit<SurveyResponse, 'id' | 'timestamp' | 'calculatedSatisfactionScore'>) => SurveyResponse;
  resetToDefault: () => void;
  analytics: AnalyticsData;
  lastSubmittedResponse: SurveyResponse | null;
  isDemoMode: boolean;
}

const STORAGE_KEY = 'org_comm_survey_responses_v1';

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export const SurveyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [responses, setResponses] = useState<SurveyResponse[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return BASELINE_SURVEY_RESPONSES;
  });

  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [lastSubmittedResponse, setLastSubmittedResponse] = useState<SurveyResponse | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }, [responses]);

  const availableDepartments = useMemo(() => {
    const set = new Set<string>();
    BASELINE_SURVEY_RESPONSES.forEach(r => set.add(r.department));
    responses.forEach(r => set.add(r.department));
    return ['All', ...Array.from(set).sort()];
  }, [responses]);

  const filteredResponses = useMemo(() => {
    if (selectedDepartment === 'All') return responses;
    return responses.filter(r => r.department === selectedDepartment);
  }, [responses, selectedDepartment]);

  const addResponse = (data: Omit<SurveyResponse, 'id' | 'timestamp' | 'calculatedSatisfactionScore'>): SurveyResponse => {
    // Calculate a composite 0-100 satisfaction score based on Likert values
    // Questions:
    // q1: 1-5 (20%)
    // q2: 1-5 (30%)
    // q3: Always(5), Often(4), Sometimes(3), Rarely(2), Never(1) (15%)
    // q4: Always(5), Often(4), Sometimes(3), Rarely(2), Never(1) (15%)
    // q5: 1-5 (10%)
    // q6: 1-5 (10%)
    const textToScore = (val: string) => {
      switch (val) {
        case 'Always': return 5;
        case 'Often': return 4;
        case 'Sometimes': return 3;
        case 'Rarely': return 2;
        case 'Never': return 1;
        default: return 3;
      }
    };

    const weightedScore =
      ((data.q1_instructionClarity / 5) * 20) +
      ((data.q2_overallSatisfaction / 5) * 30) +
      ((textToScore(data.q3_transparency) / 5) * 15) +
      ((textToScore(data.q4_feedbackSufficiency) / 5) * 15) +
      ((data.q5_voiceComfort / 5) * 10) +
      ((data.q6_crossDeptEffectiveness / 5) * 10);

    const calculatedScore = Math.round(weightedScore);

    const newEntry: SurveyResponse = {
      ...data,
      id: `resp-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toISOString(),
      calculatedSatisfactionScore: calculatedScore
    };

    setResponses(prev => [newEntry, ...prev]);
    setLastSubmittedResponse(newEntry);
    return newEntry;
  };

  const resetToDefault = () => {
    setResponses(BASELINE_SURVEY_RESPONSES);
    localStorage.removeItem(STORAGE_KEY);
    setLastSubmittedResponse(null);
  };

  const analytics = useMemo((): AnalyticsData => {
    const list = filteredResponses.length > 0 ? filteredResponses : responses;
    const total = list.length;

    if (total === 0) {
      return {
        totalResponses: 0,
        avgSatisfactionScore: 0,
        avgInstructionClarity: 0,
        avgVoiceComfort: 0,
        avgCrossDeptEffectiveness: 0,
        satisfactionDistribution: [],
        qualityMetrics: [],
        challengesDistribution: [],
        channelsDistribution: []
      };
    }

    const avgSat = Math.round(list.reduce((acc, r) => acc + r.calculatedSatisfactionScore, 0) / total);
    const avgClarity = Number((list.reduce((acc, r) => acc + r.q1_instructionClarity, 0) / total).toFixed(1));
    const avgVoice = Number((list.reduce((acc, r) => acc + r.q5_voiceComfort, 0) / total).toFixed(1));
    const avgCrossDept = Number((list.reduce((acc, r) => acc + r.q6_crossDeptEffectiveness, 0) / total).toFixed(1));

    // Satisfaction levels (1: Very Dissatisfied, 2: Dissatisfied, 3: Neutral, 4: Satisfied, 5: Very Satisfied)
    const satCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    list.forEach(r => {
      const q2 = Math.min(5, Math.max(1, Math.round(r.q2_overallSatisfaction))) as 1 | 2 | 3 | 4 | 5;
      satCounts[q2] = (satCounts[q2] || 0) + 1;
    });

    const satisfactionDistribution = [
      { name: 'Very Satisfied', count: satCounts[5], percentage: Math.round((satCounts[5] / total) * 100), color: '#10B981' },
      { name: 'Satisfied', count: satCounts[4], percentage: Math.round((satCounts[4] / total) * 100), color: '#3B82F6' },
      { name: 'Neutral', count: satCounts[3], percentage: Math.round((satCounts[3] / total) * 100), color: '#F59E0B' },
      { name: 'Dissatisfied', count: satCounts[2], percentage: Math.round((satCounts[2] / total) * 100), color: '#F97316' },
      { name: 'Very Dissatisfied', count: satCounts[1], percentage: Math.round((satCounts[1] / total) * 100), color: '#EF4444' }
    ];

    // Radar / Dimension Metrics
    const qualityMetrics = [
      { metric: 'Clarity of Directives', score: Number((avgClarity * 20).toFixed(0)), fullMark: 100 },
      { metric: 'Psychological Safety (Voice)', score: Number((avgVoice * 20).toFixed(0)), fullMark: 100 },
      { metric: 'Cross-Department Flow', score: Number((avgCrossDept * 20).toFixed(0)), fullMark: 100 },
      { metric: 'Overall Satisfaction', score: avgSat, fullMark: 100 },
      {
        metric: 'Leadership Transparency',
        score: Math.round(
          (list.reduce((acc, r) => {
            const v = r.q3_transparency;
            const pts = v === 'Always' ? 100 : v === 'Often' ? 80 : v === 'Sometimes' ? 60 : v === 'Rarely' ? 40 : 20;
            return acc + pts;
          }, 0) / total)
        ),
        fullMark: 100
      }
    ];

    // Challenge counts
    const challengesMap: Record<string, number> = {
      'Unclear instructions': 0,
      'Delayed information': 0,
      'Lack of feedback': 0,
      'Poor management communication': 0,
      'Departmental communication barriers': 0,
      'Other': 0
    };

    list.forEach(r => {
      const challenge = r.q7_biggestChallenge || 'Other';
      challengesMap[challenge] = (challengesMap[challenge] || 0) + 1;
    });

    const challengesDistribution = Object.entries(challengesMap).map(([challenge, count]) => ({
      challenge,
      count,
      percentage: Math.round((count / total) * 100)
    })).sort((a, b) => b.count - a.count);

    // Baseline Channel preferences (from research survey methodology distribution)
    const channelsDistribution: ChannelPreference[] = [
      { channel: 'Face-to-Face & 1-on-1s', count: Math.round(total * 0.42), percentage: 42 },
      { channel: 'Messaging (Slack / Teams)', count: Math.round(total * 0.28), percentage: 28 },
      { channel: 'Video Conferences', count: Math.round(total * 0.16), percentage: 16 },
      { channel: 'Corporate Email', count: Math.round(total * 0.09), percentage: 9 },
      { channel: 'Internal Intranet / Wiki', count: Math.round(total * 0.05), percentage: 5 }
    ];

    return {
      totalResponses: total,
      avgSatisfactionScore: avgSat,
      avgInstructionClarity: avgClarity,
      avgVoiceComfort: avgVoice,
      avgCrossDeptEffectiveness: avgCrossDept,
      satisfactionDistribution,
      qualityMetrics,
      challengesDistribution,
      channelsDistribution
    };
  }, [filteredResponses, responses]);

  return (
    <SurveyContext.Provider
      value={{
        responses,
        filteredResponses,
        selectedDepartment,
        setSelectedDepartment,
        availableDepartments,
        addResponse,
        resetToDefault,
        analytics,
        lastSubmittedResponse,
        isDemoMode: true
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = (): SurveyContextType => {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error('useSurvey must be used within a SurveyProvider');
  }
  return context;
};
