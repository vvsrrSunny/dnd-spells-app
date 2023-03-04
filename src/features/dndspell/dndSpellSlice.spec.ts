import dndSpellReducer, {
    DndSpellState,
    setState,
} from './dndSpellSlice';

describe('dnd spell reducer', () => {
    const initialState: DndSpellState = {
        "data": {
            "index": "acid-arrow",
            "name": "Acid Arrow",
            "desc": [
                "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
            ],
            "url": "/api/spells/acid-arrow"
        }
    };

    it('should handle initial state', () => {
        expect(dndSpellReducer(undefined, { type: 'unknown' })).toEqual({
            "data": {
                "index": "index val",
                "name": "name val",
                "url": "url"
            }
        });
    });

    it('should set dnd spell state', () => {
        const newResult = {
            "index": "acid-arrow-updated",
            "name": "Updated Acid Arrow",
            "desc": [
                "new description"
            ],
            "url": "/api/spells/acid-arrow-updated"
        }
        const actual = dndSpellReducer(initialState, setState(newResult));
        // expect(actual.count).toEqual(1);
        expect(actual.data.desc).toEqual(
            [
                "new description"
            ]
        );
    });
});
