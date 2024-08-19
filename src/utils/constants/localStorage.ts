export const APNDX_ACCESS_TOKEN = 'APNDX_ACCESS_TOKEN';
export const APNDX_IS_PERSONAL = 'APNDX_IS_PERSONAL';

export const getIsPersonal = () => {
  const data = localStorage.getItem(APNDX_IS_PERSONAL);
  return data ? JSON.parse(data) : false;
};
