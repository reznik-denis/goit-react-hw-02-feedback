import { Component } from 'react';
import './App.css';

import Statistics from './Components/Statistics';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
  
//   incrementGood = () => {
//         this.setState(prevState => {
//             return {
//                 good: prevState.good + 1,
//             }
//         })
//     }

//     incrementNeutral = () => {
//         this.setState(prevState => {
//             return {
//                 neutral: prevState.neutral + 1,
//             }
//         })
//     }

//     incrementBad = () => {
//         this.setState(prevState => {
//             return {
//                 bad: prevState.bad + 1,
//             }
//         })
//     }

    countTotalFeedback = () => {
        const countTotal = this.state.good + this.state.neutral + this.state.bad;
        return countTotal;
    }

    countPositiveFeedbackPercentage = () => {
        const countPositiveFeedback = Math.round(this.state.good / this.countTotalFeedback() * 100);
        return countPositiveFeedback;
    }
    increment = (option) => {
            this.setState(prevState => {
                return {
                    [option]: prevState[option] + 1,
                }
            })
        }
  
  render() {
      const options = Object.keys(this.state);
    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} onLeaveFeedback={this.increment}/>
        </Section>
        <Section title={"Statistick"}>
                {this.countTotalFeedback() ? <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback}
                    positivePercentage={this.countPositiveFeedbackPercentage} /> : <Notification message="No feedback given" />}
        </Section>
      </div>
    );
}
}

export default App;
