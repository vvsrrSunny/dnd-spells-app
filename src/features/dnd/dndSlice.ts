import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface DndResult {
    index: string;
    name: string;
    url: string;
}

// Define the async thunk
export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('http://www.dnd5eapi.co/api/spells');
    return response.data;
});

export interface DndState {
    count: number;
    result: Array<DndResult>;
    status?: string,
    error?: string | null,
}

const initialState: DndState = {
    count: 0,
    result: [
    ],
    status: 'idle',
    error: null,
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

    extraReducers: (builder) => {
        builder
          .addCase(fetchData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.count = action.payload.count;
            state.result = action.payload.result;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.status = 'failed';
            state.count = 0;
            state.result = [];
            state.error = 'failed to get dnd results';
          });
      },
});

export const { setState } = dndSlice.actions;

export default dndSlice.reducer;
