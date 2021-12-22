export type AccountPlan = {
  price: string;
  name: string;
  properties: Record<string, PlanProps>;
  selectedPlan?: string;
};

export type PlanProps = {
  displayName: string;
  properties: Array<{ name: string; isAllowed: boolean }>;
};
