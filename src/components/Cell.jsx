import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Cell.css';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = parseInt(this.state.value);
    if(isNaN(value) || (value == 0)) {
      console.log(`submit [${this.props.index}] = _`);
      this.props.dispatch({
        type: 'SET_CELL',
        hello: this.props.index,
        value: 0,
        garbage: 'bad-value'
      });
      this.setState({ value: ''});
    } else {
      console.log(`submit [${this.props.index}] = ${this.state.value}`);
      this.props.dispatch({
        type: 'SET_CELL',
        hello: this.props.index,
        value: value,
        garbage: 'good-value'
      });
    }
  }

  render() {
    return (
      <div className={styles.cell}>
        <div className={styles.value}>{this.props.index}={this.props.value}</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            maxLength='1'
            value={this.state.value}
            onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

/*
        <div className={styles.value}>{this.props.index}={(this.props.value == 0) ? '' : this.props.value}</div>
        */
Cell.propTypes = {
  index: PropTypes.number,
  value: PropTypes.number,
  dispatch: PropTypes.func
};

export default connect()(Cell);
