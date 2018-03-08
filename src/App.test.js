import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

var localStorageMock = (function() {
    var store = {};
    return {
        getItem: function(key) {
            return store[key];
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        },
        removeItem: function(key) {
            delete store[key];
        }
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

it('renders without crashing', () => {
    const div = document.createElement('div');

    // Hotfix
    const script = window.document.createElement('script');
    window.document.body.appendChild(script);

    ReactDOM.render(<App />, div);
});
