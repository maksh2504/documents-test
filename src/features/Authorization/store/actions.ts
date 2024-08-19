import { Dispatch } from 'redux';
import { isLoggedActions } from './reducer';
import { APNDX_ACCESS_TOKEN, APNDX_IS_PERSONAL } from 'utils/constants/localStorage';

export const loginAction = (isPersonal: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch(isLoggedActions.setIsLogged(true));

    localStorage.setItem(APNDX_ACCESS_TOKEN, APNDX_ACCESS_TOKEN);
    localStorage.setItem(APNDX_IS_PERSONAL, JSON.stringify(isPersonal));
  };
};
