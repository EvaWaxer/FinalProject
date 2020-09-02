import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import {LOGIN_TOKEN_NAME} from '../constants/apiContants';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

function RegistrationForm(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(password, confirmPassword, username, email);
      sendDetailsToServer();
    }
  };

  const sendDetailsToServer = () => {
    if(email.length && password.length) {
        const payload={
            "email":email,
            "password":password,
        }
        axios.post('http://localhost:5000/users/register', payload)
            .then(function (response) {
                    localStorage.setItem(LOGIN_TOKEN_NAME,response.data.token);
                    //todo: dosent belong here, belong to mangment
                    //localStorage.setItem(ADMIN_TOKEN_NAME, response.data.token);
                    redirectToLogin();

            })
            .catch(function (error) {
                console.log(error);
            });    
    }     
}

const redirectToLogin = () => {
    props.history.push('/login'); 
}
  return (
    <Dialog open={true} maxWidth="xs">
      <DialogTitle> הרשמה</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} className="form-group">
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="שם משתמש"
              name="username"
              autoComplete="שם משתמש"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className="form-group">
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="אימייל"
              name="email"
              autoComplete="אימייל"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className="form-group">
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="סיסמא"
              type="password"
              id="password"
              autoComplete="סיסמא"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className="form-group">
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="הכנס סיסמא"
              type="password"
              id="password"
              autoComplete="הכנס סיסמא בשנית"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              הרשמה
            </Button>
          </Grid>
          <Grid item xs={12} className="form-group">
            <p className="forgot-password text-right">
              כבר רשום? <a href="/Login">התחבר</a>
            </p>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default withRouter(RegistrationForm);

/*import React, {useState} from 'react';
import { Link, Switch, Route } from "react-router-dom";
import axios from 'axios';
import './registration-form.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

function RegistrationForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "email":state.email,
                "password":state.password,
            }
            axios.post('http://localhost:5000/users/register', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    const redirectToHome = () => {
        props.updateTitle('Homepage')
        props.history.push('/homepage');
    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
            
        </div>
    )
}

export default withRouter(RegistrationForm);*/