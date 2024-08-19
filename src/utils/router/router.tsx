import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './config';
import { isLoggedActions } from 'features/Authorization/store';
import { useAppDispatch } from '../hooks/useAppSelector';
import { APNDX_ACCESS_TOKEN } from '../constants/localStorage';

const Router = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem(APNDX_ACCESS_TOKEN)) {
      dispatch(isLoggedActions.setIsLogged(true));
    } else {
      dispatch(isLoggedActions.setIsLogged(false));
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default Router;
