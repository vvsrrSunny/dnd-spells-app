import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
        "index": "acid-arrow",
        "name": "Acid Arrow",
        "url": "/api/spells/acid-arrow"
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


export const { setState } = dndSpellSlice.actions;

export default dndSpellSlice.reducer;
