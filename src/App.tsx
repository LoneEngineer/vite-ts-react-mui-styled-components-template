import "./App.css";
import {createTheme, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {I18nextProvider} from "react-i18next";
import {MyTheme} from "./MyTheme";
import i18n from "@utils/i18n";
import Page from "@components/Page";

function App() {
  return (
    <ThemeProvider theme={createTheme(MyTheme)}>
      <StyledEngineProvider injectFirst>
        <I18nextProvider i18n={i18n}>
          <Page />
        </I18nextProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default App
