import {
  URL_DOCUMENTS,
  URL_HOME,
  URL_IDEAS,
  URL_SECURITY,
  URL_SETTINGS,
} from 'utils/constants/clientUrl';
import { ReactComponent as Home } from 'assets/svg/sideMenu/home.svg';
import { ReactComponent as Documents } from 'assets/svg/sideMenu/documents.svg';
import { ReactComponent as Ideas } from 'assets/svg/sideMenu/ideas.svg';
import { ReactComponent as Security } from 'assets/svg/sideMenu/security.svg';
import { ReactComponent as Settings } from 'assets/svg/sideMenu/settings.svg';

export const sideMenuItems = [
  {
    key: 'home',
    link: URL_HOME.path(),
    icon: <Home />,
  },
  {
    key: 'documents',
    link: URL_DOCUMENTS.path(),
    icon: <Documents />,
  },
  {
    key: 'ideas',
    link: URL_IDEAS.path(),
    icon: <Ideas />,
  },
  {
    key: 'security',
    link: URL_SECURITY.path(),
    icon: <Security />,
  },
  {
    key: 'settings',
    link: URL_SETTINGS.path(),
    icon: <Settings />,
  },
];
