import React from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

import { Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import AddSchool from "./AddSchoolComponent";

const componentDidMount = () => {
  axios
    .get("http://localhost:5000/schools/")
    .then((response) => {
      response.data.forEach((element) => {
        console.log(element.name);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
const Schools = () => {
  componentDidMount();

  return (
    <div dir="rtl">
      <h1>ניהול בתי ספר</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} className="form-group">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to="/admin/schools/add"
          >
            הוסף בית ספר
          </Button>
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/admin/schools" />
        <Route path="/admin/schools/add" component={AddSchool} />
      </Switch>
    </div>
  );
};

export default Schools;
