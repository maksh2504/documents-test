import React from 'react';
import { useAppSelector } from 'utils/hooks/useAppSelector';
import { Navigate, Outlet } from 'react-router-dom';
import { URL_HOME } from 'utils/constants/clientUrl';
import { getIsLogged } from 'features/Authorization/store/selectors';

export const PublicRoute = () => {
  const isLogged = useAppSelector(getIsLogged);

  if (isLogged) return <Navigate to={URL_HOME.path()} />;

  return <Outlet />;
};
