import React from 'react';
import ReactDOM from 'react-dom';


// React way of creating element
const heading = React.createElement('h1', {id: 'Head'}, "Anindyo Bose");

// JSX way of creating element
const jsx = <h1 id="Head">Anindyo Bose JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsx);