import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface DndFavouriteState {
    count: number;
    results: Array<string>;
}

const initialState: DndFavouriteState = {
    count: 0,
    results: [
    ],
};

export const dndFavouriteSlice = createSlice({
    name: 'dndFavourite',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addState: (state, action: PayloadAction<string>) => {
            state.results.push(action.payload);
            state.count = ++state.count;
        },
        removeState: (state, action: PayloadAction<string>) => {
            state.results = state.results.filter((result) => result !== action.payload);
            state.count = --state.count;
        },
    },
});

// provide a way to access the store using app selector.
export const selectDndFavouriteState = (state: RootState) => state.dndFavourite;

export const { addState, removeState } = dndFavouriteSlice.actions;

export default dndFavouriteSlice.reducer;
