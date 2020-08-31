import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import { CssBaseline, createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    main: "#000000",
  },
  direction: "rtl",
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
  