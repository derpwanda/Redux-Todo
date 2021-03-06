import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';


ReactDOM.render(
  <Provider store={createStore(function() {return{} })}>
    <App />
  </Provider>, document.getElementById('root'));
