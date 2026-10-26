export type Theme = 'light' | 'dark';

export interface SurveyResponse {
  id: string;
  timestamp: string;
  department: string;
  isAnonymous: boolean;
  q1_instructionClarity: number; // 1-5 (1: Very Unclear, 5: Very Clear)
  q2_overallSatisfaction: number; // 1-5 (1: Very Dissatisfied, 5: Very Satisfied)
  q3_transparency: string; // 'Always' | 'Often' | 'Sometimes' | 'Rarely' | 'Never'
  q4_feedbackSufficiency: string; // 'Always' | 'Often' | 'Sometimes' | 'Rarely' | 'Never'
  q5_voiceComfort: number; // 1-5 (1: Strongly Disagree, 5: Strongly Agree)
  q6_crossDeptEffectiveness: number; // 1-5 (1: Very Ineffective, 5: Very Effective)
  q7_biggestChallenge: string; // 'Unclear instructions' | 'Delayed information' | 'Lack of feedback' | 'Poor management communication' | 'Departmental communication barriers' | 'Other'
  q8_suggestions?: string;
  calculatedSatisfactionScore: number; // 0-100
}

export interface CommunicationTypeItem {
  id: string;
  name: string;
  direction: 'downward' | 'upward' | 'horizontal' | 'diagonal';
  summary: string;
  description: string;
  flow: string;
  examples: string[];
  impact: string;
  recommendedChannels: string[];
  frequency: string;
}

export interface RecommendationItem {
  id: number;
  title: string;
  category: 'Leadership' | 'Process' | 'Culture' | 'Technology';
  summary: string;
  workplaceExample: string;
  actionItems: string[];
  impactLevel: 'High' | 'Critical' | 'Medium';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
