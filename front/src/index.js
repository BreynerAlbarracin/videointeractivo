import React from 'react';
import ReactDOM from 'react-dom';
import ControlPage from './pages/ControlPage';
import * as serviceWorker from './serviceWorker';
import './assets/CSS/App.css'

ReactDOM.render(
  <React.StrictMode>
    <ControlPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
