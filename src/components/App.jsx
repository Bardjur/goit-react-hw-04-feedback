import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';
class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addVoice = e => {
    const name = e.target.name;
    this.setState({ [name]: this.state[name] + 1 })
  }

  countTotalFeedback = () => Object.values(this.state).reduce((prev, curr) => prev + curr, 0);

  countPositiveFeedbackPercentage = () => {
    const percent = this.state.good * 100 / this.countTotalFeedback();
    return percent ? Math.round(percent) : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.addVoice}/>
        </Section>

        <Section title="Statistics">
          {total
            ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positive} />
            : <Notification message="There is no feedback" />
          }
        </Section>
      </div>
    );
  }
};

export default App;