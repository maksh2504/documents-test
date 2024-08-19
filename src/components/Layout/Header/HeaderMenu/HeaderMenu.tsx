import React, { ReactNode } from 'react';
import { Avatar } from 'antd';

import './HeaderMenu.scss';

type Props = {
  menu: ReactNode;
  nameFirstLetters?: string;
  name?: string;
  organization?: string;
};

export const HeaderMenu = ({ menu, nameFirstLetters, name, organization }: Props) => {
  return (
    <div className="dropdown-content">
      <div className="dropdown-content__info">
        <Avatar size={48} className="dropdown-content__avatar large">
          {nameFirstLetters}
        </Avatar>
        <div>
          <p className="dropdown-content__info-name">{name}</p>
          <p className="dropdown-content__info-organisation">{organization}</p>
        </div>
      </div>
      <div className="dropdown-content__separator" />
      {React.cloneElement(menu as React.ReactElement, {
        className: 'dropdown-content__menu',
      })}
    </div>
  );
};
