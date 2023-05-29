import React, { Component } from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types'

class Statistics extends Component {

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }
  
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={css.list}>
        <li>good: { good }</li>
        <li>neutral: { neutral }</li>
        <li>bad: { bad }</li>
        <li>Total: { total }</li>
        <li>Positive feedback: { positivePercentage }</li>
      </ul>
    )
  }
}
export default Statistics