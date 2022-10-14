import { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const label = event.target.textContent;

    switch (label) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      
      case 'bad':
        setBad(prev => prev + 1);
        break;
      
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    let percent = Math.round((good * 100) / countTotalFeedback());

    if (isNaN(percent)) {
      percent = percent || 0;
    } 
    return percent;
  }
  
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">        
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
}
