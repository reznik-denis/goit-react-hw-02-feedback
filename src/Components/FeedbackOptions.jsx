import React, {Component} from 'react';

class FeedbackOptions extends Component {
    render() {
        const options = this.props.options
        return <div className="centerButtons">{options.map((option, index) => (
    <button key = {index} type="button" className="button"> { option } </button>
    ))}</div>
    }
}

export default FeedbackOptions