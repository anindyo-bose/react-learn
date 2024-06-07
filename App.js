import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child'}, [
        React.createElement('h1', {}, 'Anindyo'),
        React.createElement('p2', {}, 'What you wanna do?s')
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, 'Anindyo'),
        React.createElement('p2', {}, 'This is a paragraph')
    ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);