import React from 'react';
import { Avatar, Dropdown } from 'antd';
import { headerDropdownMenu, HeaderMenu } from './HeaderMenu';
import { ReactComponent as Arrow } from 'assets/svg/bottomArrow.svg';
import { useGetUserQuery } from 'service';
import { getIsPersonal } from 'utils/constants/localStorage';

import './Header.scss';

const getNameFirstLetters = (name?: string) => {
  const words = name?.split(' ');
  const nameFirstLetters = words
    ?.slice(0, 2)
    .map((word) => word[0])
    .join('');
  return nameFirstLetters;
};

export const Header = () => {
  const { data } = useGetUserQuery(getIsPersonal());

  const nameFirstLetters = getNameFirstLetters(data?.name);

  return (
    <header className="header">
      <Dropdown
        menu={headerDropdownMenu}
        className="header__dropdown"
        trigger={['click']}
        dropdownRender={(menu) => (
          <HeaderMenu
            menu={menu}
            nameFirstLetters={nameFirstLetters}
            name={data?.name}
            organization={data?.current_organisation.name}
          />
        )}
      >
        <div className="header__menu" data-testid="HeaderMenu">
          <div className="header__menu-content">
            <Avatar size={24} className="header__avatar">
              {nameFirstLetters}
            </Avatar>
            <p className="header__name">{data?.name}</p>
            <Arrow />
          </div>
        </div>
      </Dropdown>
    </header>
  );
};
