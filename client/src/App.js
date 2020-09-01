import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Home from "./components/home/home";
import PrivateRoute from "./utils/private-route";
import Landing from "./components/LandingComponent";
import Login from "./components/login-form";
import Register from "./components/registrationForm/registration-form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root} dir="rtl">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/homepage">
          <Home />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
