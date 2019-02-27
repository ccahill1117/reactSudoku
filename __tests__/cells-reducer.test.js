import cells from '../src/reducers/cells';

describe('cells', () => {
  const defaultCells = Array.from({length: 81}, () => 0);

  test('Should return default state if no action type is recognized', () => {
    expect(cells([], { type: null })).toEqual([])
  })

  test('Should return default state if no action type is recognized', () => {
    expect(cells(undefined, { type: null })).toEqual(defaultCells)
  })
})
