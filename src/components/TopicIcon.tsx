import React from 'react';
import {
  Building2,
  HeartHandshake,
  Award,
  Compass,
  MessageSquareText,
  ShieldCheck,
  FolderGit2,
  FolderKanban,
  ClipboardCheck,
  BookOpen,
  Layers,
  Sparkles,
  LucideProps
} from 'lucide-react';

interface TopicIconProps extends LucideProps {
  name: string;
}

export const TopicIcon: React.FC<TopicIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Building2':
      return <Building2 {...props} />;
    case 'HeartHandshake':
      return <HeartHandshake {...props} />;
    case 'Award':
      return <Award {...props} />;
    case 'Compass':
      return <Compass {...props} />;
    case 'MessageSquareText':
      return <MessageSquareText {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'FolderGit2':
      return <FolderGit2 {...props} />;
    case 'FolderKanban':
      return <FolderKanban {...props} />;
    case 'ClipboardCheck':
      return <ClipboardCheck {...props} />;
    case 'BookOpen':
      return <BookOpen {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};
