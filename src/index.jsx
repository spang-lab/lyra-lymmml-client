/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import App from './pages/app/App.jsx';


const container = document.getElementById('root');
ReactDOM.render(<App />, container);
