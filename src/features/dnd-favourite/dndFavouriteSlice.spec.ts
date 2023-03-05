import dndFavouriteReducer, {
    DndFavouriteState,
    addState, removeState
} from './dndFavouriteSlice';

describe('dnd reducer', () => {
    const initialState: DndFavouriteState = {
        count: 0,
        results: [],
    };

    it('should handle initial state', () => {
        expect(dndFavouriteReducer(undefined, { type: 'unknown' })).toEqual({
            count: 0,
            results: [],
        });
    });

    it('should add dnd favourite state', () => {
        const newResult = 'new test index';
        const actual = dndFavouriteReducer(initialState, addState(newResult));
        expect(actual.count).toEqual(1);
        expect(actual.results[0]).toEqual('new test index');
    });

    it('should remove an item from dnd favourite state', () => {
        const ResultToRemove = 'new test index';

        const actual = dndFavouriteReducer({
            count: 1,
            results: ['new test index'],
        }, removeState(ResultToRemove));


        expect(actual.count).toEqual(0);
        expect(actual.results.length).toEqual(0);
    });
});
