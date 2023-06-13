import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';
import Section from './Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addVoice = e => {
    const name = e.target.name;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const percent = good * 100 / total;
    return percent ? Math.round(percent) : 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addVoice}/>
      </Section>

      <Section title="Statistics">
        {total
          ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()} />
          : <Notification message="There is no feedback" />
        }
      </Section>
    </div>
  );
};

export default App;
