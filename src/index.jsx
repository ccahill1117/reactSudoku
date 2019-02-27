import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index.js';
import './index.css';

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => {
  console.log('subscribe', store.getState(), unsubscribe);
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
