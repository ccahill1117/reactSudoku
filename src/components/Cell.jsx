import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){

  return (
    <div>
      <p>value : {(props.value == 0) ? '' : props.value}</p>
    </div>
  );

}

Cell.propTypes = {
  value: PropTypes.number,
};

export default Cell;
