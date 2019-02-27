import React from 'react';
import styles from './App.css';
import Table from './Table';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div>
      <h1>React Application</h1>
      <h3 className={styles.text}>Local CSS Module Style</h3>
      <Table cellArray={props.cellArray} />
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
