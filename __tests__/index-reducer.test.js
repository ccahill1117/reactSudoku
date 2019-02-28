import rootReducer from '../src/reducers/index';
import { createStore } from 'redux';

describe('rootReducer', () => {
  const defaultCells = Array.from({length: 81}, () => 0);

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer(undefined, { type: null } )).toEqual({
      cells: defaultCells
    });
  });
});
