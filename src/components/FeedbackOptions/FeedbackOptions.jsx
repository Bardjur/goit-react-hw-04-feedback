import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types'

class FeedbackOptions extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string,).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }

  render() {
    const { options, onLeaveFeedback } = this.props;
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
}

export default FeedbackOptions;