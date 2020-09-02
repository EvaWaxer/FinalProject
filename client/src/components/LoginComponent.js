import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { LOGIN_TOKEN_NAME } from "../constants/apiContants";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

function LoginComponent(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/users/login", payload)
      .then(function (response) {
        if (response.status === 200) {
          localStorage.setItem(LOGIN_TOKEN_NAME, response.data.token);
          redirectToHome();
          props.showError(null);
        } else if (response.code === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Username does not exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const redirectToHome = () => {
    props.history.push("/homepage");
  };
    return (
      <Dialog open={true} maxWidth="xs">
        <DialogTitle> כניסה</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} className="form-group">
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Email"
                label="Email"
                name="Email"
                autoComplete="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} className="form-group">
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Password"
                label="Password"
                name="Password"
                type="password"
                autoComplete="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} className="form-group">
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                onClick={handleSubmitClick}
              >
                כניסה
              </Button>
            </Grid>

            <Grid item xs={12} className="form-group">
              <p className="forgot-password text-right">
                <a href="/Register">הרשמה</a>
              </p>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
}

export default withRouter(LoginComponent);
