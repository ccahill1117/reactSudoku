const defaultCells = Array.from({length: 81}, () => 0);

export default (cells = defaultCells, {type, index, value, message}) => {
  console.log('reducer=', message);
  switch (type) {
  case 'SET_CELL':
    return [
      ...cells.slice(0, index),
      value,
      ...cells.slice(index + 1)
    ];
  default:
    return cells;
  }
};
