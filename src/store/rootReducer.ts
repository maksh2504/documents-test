import { combineReducers } from 'redux';
import { authorization } from 'features/Authorization/store';
import { careerService, documentsService, usersService } from 'service';

export const rootReducer = combineReducers({
  authorization,
  [usersService.reducerPath]: usersService.reducer,
  [careerService.reducerPath]: careerService.reducer,
  [documentsService.reducerPath]: documentsService.reducer,
});
