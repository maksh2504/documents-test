import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider, Spin } from 'antd';
import { store } from 'store';
import Router from 'utils/router/router';
import { theme } from './antd-theme';

export const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <Suspense fallback={<Spin size="large" />}>
          <Router />
        </Suspense>
      </Provider>
    </ConfigProvider>
  );
};
