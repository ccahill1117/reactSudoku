const defaultCells = Array.from({length: 81}, () => 0);

export default (cells = defaultCells, action) => {
  console.log('reducer=', action.garbage);
  switch (action.type) {
  case 'SET_CELL':
    return [
      ...cells.slice(0, action.hello),
      action.value,
      ...cells.slice(action.hello + 1)
    ];
  default:
    return cells;
  }
};
