import { BaseDto } from './baseDto';

export type CareerGoalType = 'technical' | 'core' | string;

export type CareerGoal = {
  id: number;
  name: string;
  description: string;
  category: string;
  type: CareerGoalType;
  progress: number;
};

export type CareerGoals = {
  data: CareerGoal[];
};

export type CareerGoalsRes = BaseDto<CareerGoals>;

export const careerGoalsResponseToModel = (data: CareerGoalsRes): CareerGoal =>
  data.record.data?.[0] || {};
