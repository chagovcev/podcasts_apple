import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  // baseUrl: process.env.REACT_APP_DOMAIN_API,
  baseUrl: process.env.REACT_APP_APPLE_PODCAST_API,
});
