import { useState, useEffect } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPercent(Number.isNaN(Math.round((good * 100) / total)) ? 0 : Math.round((good * 100) / total));
  }, [good, neutral, bad, total]);

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
  };  
  
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
          total={total}
          percent={percent}
        />
      </Section>
    </>
  );
}
