import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from 'components/Routes';
import { Layout } from 'components/Layout';
import { PageInDevelopment } from 'components/PageInDevelopment';

import {
  URL_DOCUMENTS,
  URL_HOME,
  URL_IDEAS,
  URL_LOGIN,
  URL_SECURITY,
  URL_SETTINGS,
} from '../constants/clientUrl';

const Authorization = lazy(() => import('features/Authorization'));
const Home = lazy(() => import('features/Home'));

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: '*',
        element: <Navigate to={URL_LOGIN.route} />,
      },
      {
        path: URL_LOGIN.route,
        element: <Authorization />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '*',
        element: <Navigate to={URL_HOME.route} />,
      },
      {
        element: <Layout />,
        children: [
          {
            path: URL_HOME.route,
            element: <Home />,
          },
          {
            path: URL_DOCUMENTS.route,
            element: <PageInDevelopment />,
          },
          {
            path: URL_IDEAS.route,
            element: <PageInDevelopment />,
          },
          {
            path: URL_SECURITY.route,
            element: <PageInDevelopment />,
          },
          {
            path: URL_SETTINGS.route,
            element: <PageInDevelopment />,
          },
        ],
      },
    ],
  },
]);
