import { TStore } from 'store';

export const getIsLogged = (store: TStore) => store.authorization.isLogged;
