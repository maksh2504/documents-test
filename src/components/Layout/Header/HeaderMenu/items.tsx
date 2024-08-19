import React from 'react';
import { ReactComponent as Logout } from 'assets/svg/logout.svg';
import { logout } from 'service/auth.service';
import { MenuProps } from 'antd';

export const headerDropdownMenu: MenuProps = {
  items: [
    {
      key: 'logout',
      label: 'Log out',
      icon: <Logout />,
      className: 'header__dropdown-content__menu-logout',
      onClick: logout,
    },
  ],
};
