import React from 'react';
import { useNavigate } from 'react-router-dom';
import { URL_HOME } from 'utils/constants/clientUrl';
import { Button } from 'antd';

import './PageInDevelopment.scss';

export const PageInDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="page-in-development" data-testid="PageInDevelopment">
      <h1>Page in development</h1>
      <Button type="primary" size="large" onClick={() => navigate(URL_HOME.path())}>
        Go home page
      </Button>
    </div>
  );
};
