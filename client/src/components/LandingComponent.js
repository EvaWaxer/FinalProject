import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline} from "@material-ui/core";
import Header from './HeaderComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,

}));

const LandingComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header/>
    </div>
  );
};

export default LandingComponent;
