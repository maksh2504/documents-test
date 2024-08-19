import React from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { URL_HOME } from 'utils/constants/clientUrl';
import Logo from 'assets/img/logo.jpg';
import { sideMenuItems } from './items';
import cn from 'classnames';

import './SideMenu.scss';

export const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="side-menu" data-testid="SideMenu">
      <div className="side-menu__item" onClick={() => navigate(URL_HOME.path())}>
        <img src={Logo} alt="logo" className="side-menu__logo" />
      </div>
      <nav className="side-menu__nav">
        <ul className="side-menu__list">
          {sideMenuItems.map(({ key, link, icon }) => (
            <li
              key={key}
              className={cn('side-menu__item', { active: matchPath(location.pathname, link) })}
              onClick={() => navigate(link)}
            >
              {icon}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
