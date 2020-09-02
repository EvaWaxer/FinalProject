import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

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
      <StylesProvider jss={jss}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
  