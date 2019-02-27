import { combineReducers } from 'redux';
import cells from './cells';

const rootReducer = combineReducers({
  cells: cells
});

export default rootReducer;
