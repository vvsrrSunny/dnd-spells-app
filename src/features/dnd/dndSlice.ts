import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DndResult {
    index: string;
    name: string;
    url: string;
}

export interface DndState {
    count: number;
    results: Array<DndResult>;
}

const initialState: DndState = {
    count: 0,
    results: [
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
            state.results = action.payload.results;
        },
    },
});

// $$ provide a way to access the store using app selector.

export const { setState } = dndSlice.actions;

export default dndSlice.reducer;
