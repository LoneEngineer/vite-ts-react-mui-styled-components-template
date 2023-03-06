import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createTheme, CssBaseline, GlobalStyles, StyledEngineProvider, Theme, ThemeProvider} from "@mui/material";
import {MyTheme} from "./MyTheme";
import {StyledGlobalStyles} from "./StyledGlobalStyles";
import {css} from "styled-components/macro";

const muiGlobalStyles = (theme: Theme) => css`
    #h3 {
      background-color: ${theme.palette.background.default};
      border-style: dashed;
      border-width: 2px;
      border-color: ${theme.palette.success.main};
    }
  `

// this cause error with Emotion involved
const muiGlobalStyles2 = (theme: Theme) => css`
    #h2 {
      background-color: ${theme.palette.background.paper};
      ${({theme}) => ({ fontSize: theme.typography.h6.fontSize })};
      font-size: 44px;
    }
  `

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={createTheme(MyTheme)}>
      <StyledEngineProvider injectFirst>
        {/* does not compile - says 'no palette.typography prop under theme' */
        <StyledGlobalStyles />
        /**/}
        {/**/
        <GlobalStyles styles={muiGlobalStyles}/>
        /**/}
        {/* compile, but works only for non-interpolated fields */
          <GlobalStyles styles={(theme) => muiGlobalStyles2(theme)}/>
          /**/}
        {/* works fine:*/
        <GlobalStyles styles={(theme) => {
          const css = {
          '#h4': {
            backgroundColor: theme.palette.error.main,
            fontSize: theme.typography.h6.fontSize,
            borderStyle: 'dashed',
            borderColor: '#646cff',
            borderWidth: '2px'
          }}
          console.log('built-in', css)
          return css;
          }
        } />
        /**/}
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
