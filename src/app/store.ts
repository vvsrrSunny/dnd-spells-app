import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dndReducer from '../features/dnd/dndSlice';
import dndSpellReducer from '../features/dndspell/dndSpellSlice';
import dndFavouriteReducer from '../features/dnd-favourite/dndFavouriteSlice';

export const store = configureStore({
  reducer: {
    dnd: dndReducer,
    dndSpell: dndSpellReducer,
    dndFavourite: dndFavouriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
