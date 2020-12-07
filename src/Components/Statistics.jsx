import React, {Component} from 'react';

class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    incrementGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        })
    }

    incrementNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    }

    incrementBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
        })
    }

    countTotalFeedback = () => {
        const countTotal = this.state.good + this.state.neutral + this.state.bad;
        return countTotal;
    }

    countPositiveFeedbackPercentage = () => {
        const countPositiveFeedback = Math.round(this.state.good / this.countTotalFeedback() * 100);
        return countPositiveFeedback;
    }
    
    render() {
        const countTotal = this.countTotalFeedback();
        const countPositiveFeedback = this.countPositiveFeedbackPercentage();
          return (
            <div className="App">
                <header className="App-header">
                    <h1>Expresso</h1>
                </header>
                {/* <h2 className="feedback">Please leave feedback</h2> */}
                
                <h2 className="feedback">Statisticks</h2>
                <ul>
                    <li>Good: <span>{this.state.good}</span></li>
                    <li>Neutral: <span>{this.state.neutral}</span></li>
                    <li>Bad: <span>{this.state.bad}</span></li>
                    <li>Total: <span>{countTotal}</span></li>
                    <li>Positive feedback: {countPositiveFeedback ? <span>{countPositiveFeedback}</span> : 0}%</li>
                </ul>
            </div>);
    }
}

export default Statistics