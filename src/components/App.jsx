import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import { connect } from 'react-redux';
import styles from './App.css';

function App(props) {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Sudoku Solver</h1>
      <div>
        <Table cellArray={props.cellArray} />
      </div>
    </div>
  );
}

App.propTypes = {
  cellArray: PropTypes.arrayOf(PropTypes.number),
};

const mapStateToProps = state => {
  return {
    cellArray: state.cells,
  };
};

export default connect(mapStateToProps)(App);
