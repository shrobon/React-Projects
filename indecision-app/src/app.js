// import anything, {square, add} from './utils.js'

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(4,4));
// console.log(anything(20,80)); // This is grabbind the subtract function

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from webpack !</p>

ReactDOM.render(
    template,
    document.getElementById('app')
);