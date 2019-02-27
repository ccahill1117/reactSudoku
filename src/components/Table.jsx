import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import styles from './Table.css';


function Table(props){
  return(
    <div className={styles.table}>
      {(props.cellArray).map((value, index) =>
        <Cell 
          key={index}
          index={index}
          value={value} />
      )}
    </div>
  );
}

Table.propTypes = {
  cellArray: PropTypes.arrayOf(PropTypes.number),
};

export default Table;
