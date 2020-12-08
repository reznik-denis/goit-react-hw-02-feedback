import React from 'react';

export default function Section({ title, children }) {
    return <section>
        <h2 className="feedback">{title}</h2>
        {children}
        </section>
}