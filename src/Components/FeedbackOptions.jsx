import React from 'react';

export default function FeedbackOptions (props) {
    props.map(option => {
        return <button type="button" className="button">{option}</button>
    })
}