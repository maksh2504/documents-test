import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'utils/hooks/useAppSelector';
import { URL_LOGIN } from 'utils/constants/clientUrl';
import { Spin } from 'antd';
import { useLazyGetUserQuery } from 'service';
import { getIsLogged } from 'features/Authorization/store/selectors';
import { APNDX_IS_PERSONAL } from 'utils/constants/localStorage';

export const PrivateRoute = () => {
  const isLogged = useAppSelector(getIsLogged);

  const [getUser, { data: user, isLoading }] = useLazyGetUserQuery();

  useEffect(() => {
    if (isLogged) {
      const data = localStorage.getItem(APNDX_IS_PERSONAL);
      const isPersonalUser = data ? JSON.parse(data) : null;

      getUser(isPersonalUser);
    }
  }, [isLogged, getUser]);

  if (isLogged === null) return null;

  if (!isLogged) return <Navigate to={URL_LOGIN.path()} />;

  return isLoading || !user ? <Spin /> : <Outlet />;
};
