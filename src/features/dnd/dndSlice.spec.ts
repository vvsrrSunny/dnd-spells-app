import dndReducer, {
    DndState,
    setState,
} from './dndSlice';

describe('counter reducer', () => {
    const initialState: DndState = {
        count: 0,
        results: [],
    };

    it('should handle initial state', () => {
        expect(dndReducer(undefined, { type: 'unknown' })).toEqual({
            count: 0,
            result: [],
        });
    });

    it('should handle increment', () => {
        const newResult = {
            count: 1,
            results: [
                {
                    index: 'new test index',
                    name: 'new test name',
                    url: 'new test url'
                }
            ],
        }
        const actual = dndReducer(initialState, setState(newResult));
        // expect(actual.count).toEqual(1);
        expect(actual.results[0].index).toEqual('new test index');
    });
});
