import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'font-awesome/css/font-awesome.css'
require('bootstrap-loader')
import cvjson from './resume.json'

ReactDOM.render(
  <App cvjson={cvjson}/>,
  document.getElementById('root')
);
