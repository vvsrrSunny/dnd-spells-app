import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface DndResult {
    index: string;
    name: string;
    url: string;
}

export interface DndState {
    count: number;
    result: Array<DndResult>;
}

const initialState: DndState = {
    count: 0,
    result: [
    ],
};

export const dndSlice = createSlice({
    name: 'dnd',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setState: (state, action: PayloadAction<DndState>) => {
            state.count = action.payload.count;
            state.result = action.payload.result;
        },
    },
});

// $$ provide a way to access the store using app selector.

export const { setState } = dndSlice.actions;

export default dndSlice.reducer;
