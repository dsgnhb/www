import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import localStorageMock from './localStorageMock';

Object.defineProperty(window, 'localStorage', {value: localStorageMock});

it('renders without crashing', () => {
    const div = window.document.createElement('div');
    const script = window.document.createElement('script');
    window.document.body.appendChild(script);

    ReactDOM.render(<App />, div);
});
