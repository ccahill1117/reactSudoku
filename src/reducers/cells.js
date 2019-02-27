const defaultCells = Array.from({length: 81}, () => 0);

export default (cells = defaultCells, action) => {
  console.log('cells', cells, action);
  switch (action.type) {
  case 'SET_CELL':
    return [
      ...cells.slice(0, action.index),
      action.value,
      ...cells.slice(action.index + 1)
    ];
  default:
    return cells;
  }
};
