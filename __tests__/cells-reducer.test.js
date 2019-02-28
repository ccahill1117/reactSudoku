import cells from '../src/reducers/cells';

describe('cells', () => {
  const defaultCells = Array.from({length: 81}, () => 0);

  test('Should return default state if no action type is recognized', () => {
    expect(cells([], { type: null })).toEqual([])
  })

  test('Should return default state if no action type is recognized', () => {
    expect(cells(undefined, { type: null })).toEqual(defaultCells)
  })

  const afterSet = [1, ...defaultCells.slice(1)];
  test('Should return adjusted state if valid input provided by user', () => {
    expect(cells(defaultCells, { type: 'SET_CELL', index: 0, value: 1})).toEqual(afterSet)
  })

})
