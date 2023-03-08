import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CssBaseline} from "@mui/material";
import {windowBoolean, windowString} from "./utils";
import {millisecondsInHour, millisecondsInMinute} from "date-fns/constants";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
)
