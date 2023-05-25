import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {

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