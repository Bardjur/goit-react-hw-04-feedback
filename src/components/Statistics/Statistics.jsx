import React, { Component } from "react";
import css from './Statistics.module.css';

class Statistics extends Component {
  
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