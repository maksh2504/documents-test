export type CareerGoalType = 'technical' | 'core' | string;

export type CareerGoalModel = {
  id: number;
  name: string;
  description: string;
  category: string;
  type: CareerGoalType;
  progress: number;
};

export type CareerGoalResponse = {
  data: CareerGoalModel[];
};

export const careerGoalsResponseToModel = (data: CareerGoalResponse): CareerGoalModel =>
  data.data?.[0] || {};
