import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppTwo from './AppTwo';
import AppThree from './AppThree';
import AppFour from './AppFour';
import UseReducer from './UseReducer';





ReactDOM.render(
  <React.StrictMode>
    <UseReducer />
    {/* <AppFour /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

