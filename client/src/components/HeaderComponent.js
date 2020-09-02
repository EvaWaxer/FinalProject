import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import LoginForm from "./LoginComponent";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} dir="rtl">
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}> 
            מערכת לרישום ושיבוץ תלמידים
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            כניסה
          </Button>
          <Button color="inherit" component={Link} to="/register">
            הרשמה
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
};

export default HeaderComponent;
