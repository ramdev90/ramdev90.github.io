import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const rootReducer = {};

export const appReducer: ActionReducerMap<AppState, any> = { 
  shoppingList: fromShoppingList.shoppingListReducers,
  auth: fromAuth.authReducer
};