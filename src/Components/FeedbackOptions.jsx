import React from 'react';

export default function FeedbackOptions ({options, onLeaveFeedback}) {
    options.map(option => {
        return <button type="button" className="button" onClick={onLeaveFeedback}>{Object.keys(option)}</button>
    })
}