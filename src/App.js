import { Component } from 'react';
import './App.css';
// import Statistics from './Components/Statistics';
// import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions'

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    }
  // increment = ({ option }) => {
  //       this.setState(prevState => {
  //           return {
  //               option: prevState.option + 1,
  //           }
  //       })
  //   }
  
  render() {
    return (
    
      <FeedbackOptions options={['good', 'neutral', 'bad']} />
      
      
      // <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positivePercentage}>
      //   <FeedbackOptions options={['good', 'neutral', 'bad', 'total', 'positivePercentage']} onLeaveFeedback={}></FeedbackOptions>
      // <Statistics />
    );
}
}

export default App;
