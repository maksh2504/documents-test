import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { UserModel, UserRes, userResponseToModel } from 'utils/dto/user';

export const usersService = createApi({
  reducerPath: 'usersService',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getUser: build.query<UserModel, boolean | null>({
      query: (isPersonal) => ({
        url: isPersonal ? '/personal-user' : '/managed-user',
      }),
      transformResponse: (user: UserRes): UserModel => userResponseToModel(user),
    }),
  }),
});

export const { useGetUserQuery, useLazyGetUserQuery } = usersService;
