import React, { useState, useRef } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import { LOGIN_TOKEN_NAME } from "../constants/apiContants";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../actions/auth"

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Alert from '@material-ui/lab/Alert';


const redirectToHome = () => {
  props.history.push("/homepage");
};

const required = (value) => {
  if (!value) {
    return (
      <div>
         <Alert severity="error">This field is required!</Alert>
      </div>
    );
  }
};

function LoginComponent(props) {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  
  const dispatch = useDispatch();

  const handleSubmitClick = (e) => {
    e.preventDefault();
    //localStorage.clear();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) 
    {
      const payload = {
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:5000/users/login", payload)
        .then(function (response) {
          if (response.status === 200) {

           // localStorage.setItem(LOGIN_TOKEN_NAME, response.data.token);
            redirectToHome();
            window.location.reload();
            //props.showError(null);
          }  else {
            //props.showError("Username does not exists");
            setLoading(false);
          }
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    }
  };

  
    return (
      <Dialog open={true} maxWidth="xs">
        <DialogTitle align="left"> כניסה</DialogTitle>
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
