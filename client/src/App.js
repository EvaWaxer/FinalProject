import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Login from "./components/LoginComponent";
import Home from "./components/home/home";
import PrivateRoute from "./utils/private-route";
import Landing from "./components/LandingComponent";
import Register from "./components/RegistrationForm";
import Admin from "./components/AdminComponent";
import Students from "./components/StudentsComponent";
import Schools from "./components/SchoolsMangmentComponent"
 
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
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
