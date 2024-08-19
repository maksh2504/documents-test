import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { UserResponse, UserModel, userResponseToModel } from 'utils/dto/user';

export const usersService = createApi({
  reducerPath: 'usersService',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getUser: build.query<UserModel, boolean | null>({
      query: (isPersonal) => ({
        url: isPersonal ? '/user-personal.json' : '/user.json',
      }),
      transformResponse: (user: UserResponse): UserModel => userResponseToModel(user),
    }),
  }),
});

export const { useGetUserQuery, useLazyGetUserQuery } = usersService;
