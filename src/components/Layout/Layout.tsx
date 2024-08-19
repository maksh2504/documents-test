import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { SideMenu } from './SideMenu';

import './Layout.scss';

export const Layout = () => {
  return (
    <div className="layout">
      <SideMenu />
      <div className="layout__content">
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
