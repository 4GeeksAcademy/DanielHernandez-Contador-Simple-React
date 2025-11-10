import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';

// Variables
let counter = 0;


setInterval(() => {
  counter++;
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondsCounter seconds = {counter}/>
    </React.StrictMode>,
  )
}, 1000)


