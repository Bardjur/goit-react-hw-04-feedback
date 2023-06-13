import React from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types'

function Statistics({good, neutral, bad, total, positivePercentage}) {
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics