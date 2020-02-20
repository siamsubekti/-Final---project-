import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/App.css';
import './style/css/index.css';
import './style/css/all.css';
import './style/css/style.css';
import './style/css/sb-admin-2.css';
import './style/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
