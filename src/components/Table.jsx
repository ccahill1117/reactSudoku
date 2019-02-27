import React from 'react';
import Cell from './Cell';
import PropTypes from 'prop-types';


function Table(props){

  return(
    <div>
      {(props.cellArray).map((cell, index) =>
        <Cell value={cell.value}
          key={index}
        />
      )}
    </div>
  );
}

Table.propTypes = {
  cellArray: PropTypes.arrayOf(PropTypes.number),
};

export default Table;
