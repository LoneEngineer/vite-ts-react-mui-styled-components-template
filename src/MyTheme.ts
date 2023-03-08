import {ThemeOptions} from "@mui/material";

export const MyTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: "#aa00aa",
      paper: "#707040"
    },
    success: {
      main: "#404080"
    },
    error: {
      main: "#aa9900"
    }
  },
  typography: {
    h1: {
      color: "aqua",
      fontSize: 24
    },
    h5: {
      fontSize: 42,
      color: "greenyellow"
    },
    h6: {
      fontSize: 36,
    }
  }
}
