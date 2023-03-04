import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ClassList {
    index: string
    name: string
    url?: string
};

export interface School {
    index: string
    name: string
    url?: string
}

export interface Damage {
    damage_type?: DamageType,
    damage_at_character_level?: DamageChildLevel,
    damage_at_slot_level?: DamageChildLevel,
}

export interface DamageType {
    index: string
    name: string
    url: string
}

export interface DamageChildLevel {
    [key: string]: string;
}

export type AttackTypeResult = [
    AttackType.V?,
    AttackType.S?,
    AttackType.M?,
]

export enum AttackType {
    V = 'verbal',
    S = 'somatic',
    M = 'material',
}

export enum AreaOfEffect {
    sphere,
    cone,
    cylinder,
    line,
    cube,
}

export interface AreaOfEffectResult {
    size?: number
    type?: AreaOfEffect
}

export interface DndSpellResult {
    index: string
    name: string
    url?: string
    desc?: string[]
    higher_level?: string[]
    range?: string
    components?: AttackTypeResult
    material?: string
    area_of_effect?: AreaOfEffectResult
    ritual?: boolean
    duration?: string
    concentration?: boolean
    casting_time?: string
    level?: number
    attack_type?: string
    damage?: Damage
    school?: School
    classes?: ClassList[]
    subclasses?: Array<ClassList>
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
