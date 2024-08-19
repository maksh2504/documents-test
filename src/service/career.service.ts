import { createApi } from '@reduxjs/toolkit/query/react';
import { TStore } from 'store';
import { baseQuery } from './baseQuery';
import { CareerGoal, CareerGoalsRes, careerGoalsResponseToModel } from 'utils/dto/careerGoal';

export const careerService = createApi({
  reducerPath: 'careerService',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getCareerGoal: build.query<CareerGoal, void>({
      query: () => ({
        url: '/career-goal',
      }),
      transformResponse: (careerGoal: CareerGoalsRes): CareerGoal =>
        careerGoalsResponseToModel(careerGoal),
    }),
  }),
});

export const { useGetCareerGoalQuery, useLazyGetCareerGoalQuery } = careerService;

export const getCachedCareerGoal = (store: TStore) =>
  careerService.endpoints?.getCareerGoal.select()(store);
