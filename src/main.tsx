import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createTheme, CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {MyTheme} from "./MyTheme";
import {windowBoolean, windowString} from "./utils";

const baseUrl: string = import.meta.env.BASE_URL
const mode: string = import.meta.env.MODE
const devMode: boolean = import.meta.env.DEV
const prodMode: boolean = import.meta.env.PROD
const apiUrl: string = windowString('VITE_API_URL') ?? import.meta.env.VITE_API_URL ?? 'n/a'
const debugTranslations: boolean = windowBoolean('VITE_DEBUG_I18N') ?? import.meta.env.VITE_DEBUG_I18N ?? false

console.log('Configuration:', {
  baseUrl, mode, devMode, prodMode, apiUrl, debugTranslations, meta: import.meta.env
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={createTheme(MyTheme)}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
