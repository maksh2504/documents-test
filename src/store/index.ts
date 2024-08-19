import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { careerService, documentsService, usersService } from 'service';

export type TStore = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(usersService.middleware)
      .concat(careerService.middleware)
      .concat(documentsService.middleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;
