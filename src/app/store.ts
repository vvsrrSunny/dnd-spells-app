import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dndReducer from '../features/dnd/dndSlice';
import dndSpellReducer from '../features/dndspell/dndSpellSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dnd: dndReducer,
    dndSpell: dndSpellReducer,
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
