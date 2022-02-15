import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontSize: '$md',
    fontFamily: 'Josefin Sans, sans-serif;'
  },
  '::placeholder': {
    color: '$text'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
    {globalStyles()}
  </React.StrictMode>,
  document.getElementById('root')
)
