import { createApi } from '@reduxjs/toolkit/query/react';
import { TStore } from 'store';
import { baseQuery } from './baseQuery';
import {
  CareerGoalModel,
  CareerGoalResponse,
  careerGoalsResponseToModel,
} from 'utils/dto/careerGoalModel';

export const careerService = createApi({
  reducerPath: 'careerService',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getCareerGoal: build.query<CareerGoalModel, void>({
      query: () => ({
        url: '/goals.json',
      }),
      transformResponse: (careerGoal: CareerGoalResponse): CareerGoalModel =>
        careerGoalsResponseToModel(careerGoal),
    }),
  }),
});

export const { useGetCareerGoalQuery, useLazyGetCareerGoalQuery } = careerService;

export const getCachedCareerGoal = (store: TStore) =>
  careerService.endpoints?.getCareerGoal.select()(store);
