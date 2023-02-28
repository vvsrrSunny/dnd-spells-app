import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface DndSpellResult {
    index: string
    name: string
    url?: string
    desc?: string[]
    higher_level?: string[]
    range?: string
    components?: string[]
    material?: string
    area_of_effect?: {
        size?: number
        type?: string
    }
    ritual?: boolean
    duration?: string
    concentration?: boolean
    casting_time?: string
    level?: number
    attack_type?: string
    damage?: {
        damage_type?: {
            index: string
            name: string
            url: string
        }
        damage_at_character_level?: {
            [key: string]: any;
        }
        damage_at_slot_level?: {
            [key: string]: any;
        }

    }
    school?: {
        index: string
        name: string
        url?: string
    }
    classes?: {
        index: string
        name: string
        url?: string
    }[]
    subclasses?: Array<{
        index: string
        name: string
        url?: string
    }>
}

export interface DndSpellState {
    data: DndSpellResult;
}

const initialState: DndSpellState = {
    "data": {
        "index": "index val",
        "name": "name val",
        "url": "url"
    }
};

export const dndSpellSlice = createSlice({
    name: 'dndSpell',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setState: (state, action: PayloadAction<DndSpellResult>) => {
            state.data = action.payload;
        },
    },
});

// provide a way to access the store using app selector.
export const selectDndSpellState = (state: RootState) => state.dndSpell;

export const { setState } = dndSpellSlice.actions;

export default dndSpellSlice.reducer;
