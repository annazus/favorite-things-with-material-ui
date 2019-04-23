import React from "react";
import { render } from "react-dom";
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  colors
} from "@material-ui/core";

import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: colors.teal
  },
  typography: {
    useNextVariants: true
  }
});
render(
  <CssBaseline>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);
