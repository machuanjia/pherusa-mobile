/*
 * @Author: D.Y
 * @Date: 2021-07-01 08:44:39
 * @LastEditTime: 2021-07-03 09:09:10
 * @LastEditors: D.Y
 * @FilePath: /pherusa-mobile/src/index.js
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
