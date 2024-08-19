import React from 'react';
import { useAppDispatch } from 'utils/hooks/useAppSelector';
import { Button } from 'antd';
import { loginAction } from './store/actions';

import './Authorization.scss';

export const Authorization = () => {
  const dispatch = useAppDispatch();
  const signIn = (isPersonal?: boolean) => {
    dispatch(loginAction(!!isPersonal));
  };

  return (
    <div className="auth__container" data-testid="AuthPage">
      <div className="auth__section purple">
        <h1 className="auth__main-text">
          Accredify <br />
          documents panel
        </h1>
      </div>
      <div className="auth__section">
        <Button
          type="primary"
          className="auth__button"
          data-testid="SingInAsPersonalUser"
          onClick={() => signIn(true)}
        >
          Personal user
        </Button>
        <Button
          type="primary"
          className="auth__button"
          data-testid="SingInAsManagedUser"
          onClick={() => signIn()}
        >
          Managed user
        </Button>
      </div>
    </div>
  );
};
