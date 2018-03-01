import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
    const div = document.createElement('div');

    // Hotfix
    const script = window.document.createElement("script");
    window.document.body.appendChild(script);

        ReactDOM.render(<App />, div);
});
