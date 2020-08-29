import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from './components/header/header';
import LoginForm from './components/LoginForm/login-form';
import RegistrationForm from './components/registrationForm/registration-form';
import Home from './components/home/home';
import PrivateRoute from './utils/private-route';
import AlertComponent from './components/alertComponent/alert-component'; 


function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <div className="container">
      <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <PrivateRoute path="/homepage">
              <Home/>
            </PrivateRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
      </div>  
    </Router>
  );
}

export default App;
