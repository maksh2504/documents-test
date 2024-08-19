import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
});
