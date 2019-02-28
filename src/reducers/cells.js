const defaultCells = Array.from({length: 81}, () => 0);

function validateCell(index, value, cells) {
  console.log(`validate [${index}]=${value}`);
  const row = Math.floor(index / 9);
  const rowValues = cells.slice((row * 9),((row * 9) + 9));
  console.log(`row=${row} values=${rowValues}`);
  if (rowValues.includes(value)) {
    return false;
  }
  return true;
}

export default (cells = defaultCells, {type, index, value, message}) => {
  console.log('reducer=', message, cells);
  switch (type) {
  case 'SET_CELL':
    if(!validateCell(index, value, cells)) {
      return cells;
    }
    return [
      ...cells.slice(0, index),
      value,
      ...cells.slice(index + 1)
    ];
  default:
    return cells;
  }
};
