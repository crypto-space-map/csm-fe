import { ReactNode } from 'react';

interface DetailTabProps {
  activeTab: string;
  options: {
    label: string;
    value: string;
  }[];
  targetId: string;
  setActiveTab: (arg0: string) => void;
}

export interface DetailTabSectionProps {
  children: ReactNode;
  detailTabProps: DetailTabProps;
}
