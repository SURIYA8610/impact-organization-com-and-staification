export interface NextOption {
  label: string;
  description: string;
  focusKey: string;
}

export interface TopicPageData {
  pageNumber: number;
  title: string;
  subtitle: string;
  overview: string;
  corePrinciples: {
    heading: string;
    explanation: string;
    actionableInsight: string;
  }[];
  businessCase: {
    scenario: string;
    managementAction: string;
    result: string;
  };
  metricsAndIndicators: {
    label: string;
    value: string;
    description: string;
  }[];
  keyTakeaways: string[];
  nextOptions?: NextOption[];
}

export interface TopicDefinition {
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  themeColor: string;
  estimatedReadTime: string;
  pages: Record<number, TopicPageData>;
}
