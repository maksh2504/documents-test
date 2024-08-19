import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const { reducer: isLogged, actions: isLoggedActions } = createSlice({
  name: 'authorization/isLogged',
  initialState: null as boolean | null,
  reducers: {
    setIsLogged: (_, action: PayloadAction<boolean>) => action.payload,
  },
});

export const authorization = combineReducers({
  isLogged,
});

export const authorizationActions = {
  ...isLoggedActions,
};
