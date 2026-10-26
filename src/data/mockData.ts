import { CommunicationTypeItem, RecommendationItem, FAQItem, SurveyResponse } from '../types';

export const BASELINE_SURVEY_RESPONSES: SurveyResponse[] = [
  {
    id: 'resp-001',
    timestamp: '2026-10-01T10:14:00Z',
    department: 'Engineering',
    isAnonymous: true,
    q1_instructionClarity: 4,
    q2_overallSatisfaction: 4,
    q3_transparency: 'Often',
    q4_feedbackSufficiency: 'Often',
    q5_voiceComfort: 4,
    q6_crossDeptEffectiveness: 3,
    q7_biggestChallenge: 'Departmental communication barriers',
    q8_suggestions: 'Standardize asynchronous communication tools and reduce fragmented Slack channels.',
    calculatedSatisfactionScore: 78
  },
  {
    id: 'resp-002',
    timestamp: '2026-10-02T11:22:00Z',
    department: 'Sales & Marketing',
    isAnonymous: false,
    q1_instructionClarity: 5,
    q2_overallSatisfaction: 5,
    q3_transparency: 'Always',
    q4_feedbackSufficiency: 'Always',
    q5_voiceComfort: 5,
    q6_crossDeptEffectiveness: 4,
    q7_biggestChallenge: 'Delayed information',
    q8_suggestions: 'Product release notes should reach sales before external launches.',
    calculatedSatisfactionScore: 92
  },
  {
    id: 'resp-003',
    timestamp: '2026-10-03T09:40:00Z',
    department: 'Human Resources',
    isAnonymous: true,
    q1_instructionClarity: 4,
    q2_overallSatisfaction: 4,
    q3_transparency: 'Often',
    q4_feedbackSufficiency: 'Often',
    q5_voiceComfort: 4,
    q6_crossDeptEffectiveness: 4,
    q7_biggestChallenge: 'Lack of feedback',
    q8_suggestions: 'Structured 360-degree feedback cycles every quarter.',
    calculatedSatisfactionScore: 82
  },
  {
    id: 'resp-004',
    timestamp: '2026-10-04T14:15:00Z',
    department: 'Operations',
    isAnonymous: true,
    q1_instructionClarity: 2,
    q2_overallSatisfaction: 2,
    q3_transparency: 'Rarely',
    q4_feedbackSufficiency: 'Sometimes',
    q5_voiceComfort: 2,
    q6_crossDeptEffectiveness: 2,
    q7_biggestChallenge: 'Unclear instructions',
    q8_suggestions: 'Clear SOP documentation and weekly team syncs.',
    calculatedSatisfactionScore: 40
  },
  {
    id: 'resp-005',
    timestamp: '2026-10-05T16:30:00Z',
    department: 'Finance',
    isAnonymous: true,
    q1_instructionClarity: 3,
    q2_overallSatisfaction: 3,
    q3_transparency: 'Sometimes',
    q4_feedbackSufficiency: 'Rarely',
    q5_voiceComfort: 3,
    q6_crossDeptEffectiveness: 3,
    q7_biggestChallenge: 'Poor management communication',
    q8_suggestions: 'Leadership town halls with honest Q&A segments.',
    calculatedSatisfactionScore: 56
  },
  {
    id: 'resp-006',
    timestamp: '2026-10-06T08:12:00Z',
    department: 'Engineering',
    isAnonymous: true,
    q1_instructionClarity: 4,
    q2_overallSatisfaction: 4,
    q3_transparency: 'Often',
    q4_feedbackSufficiency: 'Often',
    q5_voiceComfort: 4,
    q6_crossDeptEffectiveness: 3,
    q7_biggestChallenge: 'Departmental communication barriers',
    q8_suggestions: 'Better cross-functional sprint planning with product management.',
    calculatedSatisfactionScore: 76
  },
  {
    id: 'resp-007',
    timestamp: '2026-10-07T12:05:00Z',
    department: 'Customer Success',
    isAnonymous: false,
    q1_instructionClarity: 5,
    q2_overallSatisfaction: 4,
    q3_transparency: 'Often',
    q4_feedbackSufficiency: 'Sometimes',
    q5_voiceComfort: 4,
    q6_crossDeptEffectiveness: 3,
    q7_biggestChallenge: 'Delayed information',
    q8_suggestions: 'Live escalation channel directly into engineering triaging.',
    calculatedSatisfactionScore: 74
  },
  {
    id: 'resp-008',
    timestamp: '2026-10-08T15:50:00Z',
    department: 'Engineering',
    isAnonymous: true,
    q1_instructionClarity: 1,
    q2_overallSatisfaction: 2,
    q3_transparency: 'Never',
    q4_feedbackSufficiency: 'Rarely',
    q5_voiceComfort: 1,
    q6_crossDeptEffectiveness: 2,
    q7_biggestChallenge: 'Poor management communication',
    q8_suggestions: 'Middle management needs active listening training.',
    calculatedSatisfactionScore: 28
  },
  {
    id: 'resp-009',
    timestamp: '2026-10-09T17:11:00Z',
    department: 'Sales & Marketing',
    isAnonymous: true,
    q1_instructionClarity: 4,
    q2_overallSatisfaction: 4,
    q3_transparency: 'Often',
    q4_feedbackSufficiency: 'Often',
    q5_voiceComfort: 4,
    q6_crossDeptEffectiveness: 4,
    q7_biggestChallenge: 'Unclear instructions',
    q8_suggestions: 'Quarterly OKR alignment meetings.',
    calculatedSatisfactionScore: 80
  },
  {
    id: 'resp-010',
    timestamp: '2026-10-10T10:00:00Z',
    department: 'Customer Success',
    isAnonymous: true,
    q1_instructionClarity: 3,
    q2_overallSatisfaction: 3,
    q3_transparency: 'Sometimes',
    q4_feedbackSufficiency: 'Sometimes',
    q5_voiceComfort: 3,
    q6_crossDeptEffectiveness: 2,
    q7_biggestChallenge: 'Departmental communication barriers',
    q8_suggestions: 'Establish regular inter-department retrospectives.',
    calculatedSatisfactionScore: 58
  }
];

export const COMMUNICATION_TYPES: CommunicationTypeItem[] = [
  {
    id: 'downward',
    name: 'Downward Communication',
    direction: 'downward',
    summary: 'Information cascading from executive leaders & managers down to front-line employees.',
    flow: 'Top-down (Executives → Managers → Team Members)',
    description: 'Vital for strategic alignment, establishing priorities, setting clear role boundaries, and transmitting corporate values and compliance policies.',
    examples: [
      'Strategic corporate announcements & vision town halls',
      'Standard Operating Procedures (SOPs) & company handbooks',
      'Job expectations, quarterly KPIs & performance standards',
      'Project briefs and delegation memos'
    ],
    impact: 'Eliminates ambiguity, aligns execution with organizational mission, and anchors accountability.',
    recommendedChannels: ['Executive Townhalls', 'All-Hands Meetings', 'Internal Intranet / Wiki', 'Official Direct Memos'],
    frequency: 'Weekly alignment / Quarterly strategic roadmaps'
  },
  {
    id: 'upward',
    name: 'Upward Communication',
    direction: 'upward',
    summary: 'Insights, status reports, concerns, and innovations flowing from employees to management.',
    flow: 'Bottom-up (Employees → Supervisors → Senior Leadership)',
    description: 'Empowers employees with a voice, surfaces ground-level operational bottlenecks early, and provides executive decision-makers with truthful reality checks.',
    examples: [
      'Structured 1-on-1 biweekly check-ins',
      'Employee satisfaction & pulse feedback surveys',
      'Grievance reporting and psychological safety channels',
      'Continuous improvement suggestions & innovation proposals'
    ],
    impact: 'Fosters deep psychological safety, elevates retention by making staff feel heard, and prevents catastrophic blind spots.',
    recommendedChannels: ['Pulse Surveys', 'Skip-Level Meetings', 'Dedicated Slack #ask-leadership', '1-on-1 Syncs'],
    frequency: 'Biweekly 1-on-1s / Continuous anonymous feedback'
  },
  {
    id: 'horizontal',
    name: 'Horizontal Communication',
    direction: 'horizontal',
    summary: 'Lateral information exchange between peers, colleagues, and team members at equal hierarchy.',
    flow: 'Peer-to-Peer (Same Level across Teams & Squads)',
    description: 'The engine of day-to-day productivity and agile collaboration. Facilitates swift problem-solving, emotional support, and tacit knowledge distribution.',
    examples: [
      'Daily standups and agile sprint syncs',
      'Peer code reviews and collaborative brainstorming sessions',
      'Inter-departmental co-authoring of project documents',
      'Informal team chats and shared technical repositories'
    ],
    impact: 'Accelerates project cycle velocity, strengthens social cohesion, and prevents redundant duplicate work.',
    recommendedChannels: ['Instant Messaging (Slack/Teams)', 'Daily Standups', 'Shared Whiteboards (Miro/Figma)', 'Working Sessions'],
    frequency: 'Daily continuous interactions'
  },
  {
    id: 'diagonal',
    name: 'Diagonal Communication',
    direction: 'diagonal',
    summary: 'Communication crossing traditional departmental boundaries and hierarchy levels simultaneously.',
    flow: 'Cross-functional & Cross-hierarchical (e.g. HR Director ↔ Junior Software Engineer)',
    description: 'Breaks stubborn departmental silos and accelerates high-priority matrixed initiatives without waiting for cumbersome vertical routing.',
    examples: [
      'Cross-functional taskforces (e.g., Security & Compliance audit)',
      'Product Managers coordinating directly with Finance controllers',
      'Junior engineers presenting technical architectures to Steering Committees',
      'HR Business Partners working directly with department squads'
    ],
    impact: 'Dramatically reduces bureaucratic turnaround times, dissolves tribal silos, and democratizes institutional knowledge.',
    recommendedChannels: ['Matrix Project Boards', 'Cross-Functional Taskforce Channels', 'Sprint Demos', 'Open Office Hours'],
    frequency: 'As-needed per initiative milestones'
  }
];

export const SATISFACTION_DIMENSIONS = [
  {
    id: 'job-satisfaction',
    title: 'Job Satisfaction',
    stat: '89%',
    statLabel: 'report higher role clarity with structured instructions',
    shortDesc: 'Clear expectations, unambiguous scopes, and explicit priorities eliminate workplace frustration.',
    extendedDesc: 'When employees understand exactly what is expected of them, ambiguity is replaced by focus. Research demonstrates that role ambiguity is one of the top causes of occupational burnout.',
    iconName: 'Briefcase'
  },
  {
    id: 'employee-motivation',
    title: 'Employee Motivation',
    stat: '4.6x',
    statLabel: 'more likely to be motivated when recognition is frequent',
    shortDesc: 'Authentic recognition, constructive appraisals, and celebration of milestones build intrinsic drive.',
    extendedDesc: 'Motivation flourishes in an environment where contributions do not vanish into a vacuum. Frequent qualitative recognition from both peers and leaders fuels sustained performance.',
    iconName: 'Award'
  },
  {
    id: 'workplace-trust',
    title: 'Workplace Trust',
    stat: '76%',
    statLabel: 'greater trust when leadership shares honest strategic updates',
    shortDesc: 'Transparent information sharing during both successes and setbacks establishes mutual reliability.',
    extendedDesc: 'Trust cannot survive in an information void. When executives share the "why" behind tough decisions, employees reciprocate with loyalty and discretionary effort.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration',
    stat: '64%',
    statLabel: 'reduction in rework with shared project communication channels',
    shortDesc: 'Frictionless knowledge sharing reduces misunderstandings and cements cohesive team chemistry.',
    extendedDesc: 'High-performing teams communicate continuously using centralized protocols. This eliminates knowledge silos and ensures every team member moves in synchronized alignment.',
    iconName: 'Users'
  },
  {
    id: 'employee-engagement',
    title: 'Employee Engagement',
    stat: '5.2x',
    statLabel: 'higher discretionary commitment when employees feel listened to',
    shortDesc: 'Active avenues for voice and ideas cultivate personal ownership and strategic alignment.',
    extendedDesc: 'Engagement is the emotional commitment an employee has to the organization and its goals. It hinges directly on whether their feedback actively shapes company outcomes.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'reduced-stress',
    title: 'Reduced Workplace Stress',
    stat: '58%',
    statLabel: 'lower anxiety reported when updates arrive in a predictable cadence',
    shortDesc: 'Timely communication minimizes speculation, toxic rumors, and reactive crisis mode.',
    extendedDesc: 'In the absence of factual leadership communications, anxiety rushes in to fill the vacuum with rumors. Consistent, timely communication provides grounding stability.',
    iconName: 'Sparkles'
  }
];

export const COMPARISON_FACTORS = {
  positive: [
    { title: 'Builds Trust & Transparency', desc: 'Leadership communicates open truths; rumors have zero oxygen to spread.' },
    { title: 'Elevates Job Satisfaction', desc: 'Staff know exactly what excellence looks like and how their work creates impact.' },
    { title: 'Encourages Seamless Teamwork', desc: 'Cross-functional dependencies are identified early and resolved cooperatively.' },
    { title: 'Minimizes Costly Misunderstandings', desc: 'Single sources of truth eliminate duplicated effort and erroneous rework.' },
    { title: 'Strengthens Employee Engagement', desc: 'Staff actively contribute creative innovations when psychological safety exists.' },
    { title: 'Accelerates Decisive Action', desc: 'Information reaches frontline problem solvers without bureaucratic bottlenecks.' },
    { title: 'Constructive Conflict Resolution', desc: 'Disagreements are processed professionally with curiosity and mutual respect.' }
  ],
  negative: [
    { title: 'Spawns Role Confusion & Guesswork', desc: 'Unclear objectives force staff into paralysis or conflicting interpretations.' },
    { title: 'Erodes Employee Morale', desc: 'Employees feel ignored, undervalued, and alienated from decision-making.' },
    { title: 'Fertilizes Destructive Rumors', desc: 'Silence from leadership is invariably interpreted as secrecy or bad news.' },
    { title: 'Triggers Frequent Operational Delays', desc: 'Projects halt while teams wait endlessly for missing specifications or sign-offs.' },
    { title: 'Shatters Trust in Management', desc: 'Sudden unexpected top-down mandates spark resentment and cynicism.' },
    { title: 'Departmental Silos & Finger-Pointing', desc: 'Tribal teams hoard knowledge and blame each other for project setbacks.' },
    { title: 'Drives Regretted Employee Turnover', desc: 'Top performers exit organizations where their voice and contributions go unheard.' }
  ]
};

export const RECOMMENDATIONS: RecommendationItem[] = [
  {
    id: 1,
    title: 'Encourage Open & Candid Communication',
    category: 'Culture',
    summary: 'Build a psychologically safe workplace where employees speak candidly without fear of reprisal.',
    workplaceExample: 'Instituting an "Ask Me Anything" (AMA) period during every monthly all-hands meeting, with both live and anonymous digital submissions.',
    actionItems: [
      'Train managers to respond to constructive criticism with gratitude rather than defensiveness',
      'Implement anonymous suggestion boxes paired with public monthly response logs',
      'Celebrate whistleblowers and problem identifiers as proactive organizational assets'
    ],
    impactLevel: 'Critical'
  },
  {
    id: 2,
    title: 'Provide Regular, Actionable Feedback',
    category: 'Process',
    summary: 'Replace outdated annual reviews with continuous 1-on-1 coaching conversations.',
    workplaceExample: 'Biweekly 30-minute 1-on-1 meetings dedicated 50% to employee career goals, 30% to roadblocks, and 20% to tactical updates.',
    actionItems: [
      'Establish structured bi-weekly 1-on-1 calendars that managers cannot arbitrarily cancel',
      'Use the SBI (Situation-Behavior-Impact) feedback model for objective clarity',
      'Pair developmental feedback with clear resources and mentorship support'
    ],
    impactLevel: 'Critical'
  },
  {
    id: 3,
    title: 'Improve Leadership Communication & Authenticity',
    category: 'Leadership',
    summary: 'Equip leadership with transparent, empathetic, and unambiguous storytelling capabilities.',
    workplaceExample: 'CEO publishing a candid monthly video update explaining financial results, strategic pivots, and acknowledging team sacrifices.',
    actionItems: [
      'Provide executive communication training focusing on empathy, clarity, and brevity',
      'Explain the strategic rationale behind company policy shifts rather than issuing edicts',
      'Acknowledge mistakes openly when strategic experiments fail'
    ],
    impactLevel: 'High'
  },
  {
    id: 4,
    title: 'Select Appropriate Communication Channels',
    category: 'Technology',
    summary: 'Define intentional matrices for which medium to use for urgent, asynchronous, and sensitive topics.',
    workplaceExample: 'Adopting a team communication charter: Slack for quick queries (<10 min resolution), Notion/Wiki for permanent documentation, Zoom for nuanced discussions.',
    actionItems: [
      'Create an organizational "Communication Charter" published in every onboarding guide',
      'Reserve direct calls/video for emotionally sensitive or high-complexity topics',
      'Enforce quiet hours and asynchronous communication norms to curb notification fatigue'
    ],
    impactLevel: 'High'
  },
  {
    id: 5,
    title: 'Promote Active Listening Across All Tiers',
    category: 'Leadership',
    summary: 'Train managers to listen to understand rather than simply waiting for their turn to reply.',
    workplaceExample: 'Managers summarizing employee statements ("What I hear you saying is...") before formulating solutions or action items.',
    actionItems: [
      'Conduct role-playing workshops on reflective listening and non-verbal cues',
      'Eliminate laptop/multitasking distractions during team check-ins',
      'Ask open-ended exploratory questions like "What feels like the biggest roadblock right now?"'
    ],
    impactLevel: 'Critical'
  },
  {
    id: 6,
    title: 'Recognize & Celebrate Employee Contributions',
    category: 'Culture',
    summary: 'Create public and private mechanisms to celebrate both everyday assistance and major achievements.',
    workplaceExample: 'A dedicated #kudos channel in the company chat where peer-to-peer shoutouts are highlighted in weekly team meetings.',
    actionItems: [
      'Encourage peer-to-peer recognition programs with small tangible rewards',
      'Highlight specific contributions and behavioral values, not just revenue targets',
      'Ensure recognition is distributed equitably across backend and customer-facing teams'
    ],
    impactLevel: 'Medium'
  },
  {
    id: 7,
    title: 'Dismantle Inter-Departmental Information Silos',
    category: 'Process',
    summary: 'Facilitate transparent cross-functional pipelines and joint retrospectives.',
    workplaceExample: 'Holding joint biweekly demo sessions between Engineering, Sales, and Customer Support to align product capabilities with real customer requests.',
    actionItems: [
      'Establish shared dashboards accessible across all departments without gatekeeping',
      'Implement cross-functional job shadowing programs for frontline teams',
      'Hold joint retrospective meetings following cross-department project rollouts'
    ],
    impactLevel: 'High'
  },
  {
    id: 8,
    title: 'Systematically Measure Communication Effectiveness',
    category: 'Process',
    summary: 'Use periodic pulse surveys, communication health audits, and open office hours to track sentiment.',
    workplaceExample: 'Deploying a 3-minute quarterly communication pulse survey to measure channel satisfaction, clarity, and leadership trust index.',
    actionItems: [
      'Run quarterly anonymous pulse surveys benchmarked against industry standards',
      'Track communication health metrics such as time-to-resolution on cross-dept tickets',
      'Form an internal employee advisory council to review communication survey outputs'
    ],
    impactLevel: 'High'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is organizational communication?',
    category: 'Fundamentals',
    answer: 'Organizational communication refers to the continuous exchange of information, ideas, instructions, feedback, and emotional sentiment within and across an organization. It encompasses formal channels (policies, town halls, performance reviews) and informal interactions (peer conversations, watercooler chats), operating vertically, horizontally, and diagonally.'
  },
  {
    question: 'How does communication affect employee satisfaction?',
    category: 'Impact & Satisfaction',
    answer: 'Communication directly influences employee satisfaction by satisfying fundamental human and occupational needs: role clarity, respect, psychological safety, and recognition. When communication is transparent and consistent, employees experience significantly lower anxiety, feel their contributions are valued, and report higher organizational commitment.'
  },
  {
    question: 'What are the four main types of organizational communication?',
    category: 'Fundamentals',
    answer: 'The four primary types are: 1) Downward Communication (leaders to staff: directives, goals, policies); 2) Upward Communication (staff to leadership: feedback, concerns, reports); 3) Horizontal Communication (peer to peer: collaboration, daily coordination); and 4) Diagonal Communication (cross-level and cross-functional: taskforces, multi-department projects).'
  },
  {
    question: 'Why is upward communication critical for organizational health?',
    category: 'Leadership & Voice',
    answer: 'Upward communication is the primary mechanism through which executives learn about operational reality. Without it, leadership operates in a dangerous echo chamber, unaware of ground-level friction, morale drops, or emerging customer complaints. It also signals to employees that their intellect and lived experiences are respected.'
  },
  {
    question: 'How can managers improve workplace communication?',
    category: 'Best Practices',
    answer: 'Managers can improve communication by: practicing active listening, scheduling dependable bi-weekly 1-on-1s, articulating the "why" behind assignments, delivering constructive feedback using the Situation-Behavior-Impact model, and establishing clear norms for email vs. instant messaging.'
  },
  {
    question: 'What are the primary consequences of poor communication?',
    category: 'Risk & Friction',
    answer: 'Poor communication causes severe operational and psychological damage: chronic misunderstanding, duplicate work, employee cynicism, pervasive toxic rumors, low morale, missed project deadlines, and ultimately higher employee turnover which incurs massive recruitment and retraining costs.'
  },
  {
    question: 'How can employee satisfaction with communication be measured?',
    category: 'Research & Metrics',
    answer: 'It can be quantified through structured employee surveys (such as the 5-point Likert scale instrument featured on this website), 360-degree leadership reviews, net promoter scores (eNPS), skip-level feedback sessions, exit interviews, and cross-departmental project retrospective analyses.'
  },
  {
    question: 'What role does feedback play in employee engagement?',
    category: 'Impact & Satisfaction',
    answer: 'Feedback acts as a vital navigational compass. Timely positive feedback reinforces high-impact behaviors and fuels motivation, while compassionate constructive feedback provides clarity on how to grow. Employees who receive regular, meaningful feedback are over 4 times more engaged than those who feel neglected.'
  }
];
