import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types'

function FeedbackOptions({options, onLeaveFeedback}) {
  return (
  <>
    {options.map(option => (
      <button
        className={css.btn}
        key={option}
        type="button"
        onClick={onLeaveFeedback}
        name={option}
      >{option}</button>
    ))}
  </>)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string,).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }

export default FeedbackOptions;
