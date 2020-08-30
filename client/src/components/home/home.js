import React,{ useEffect } from 'react';
import {  BrowserRouter as Router,Route, withRouter } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios'

import Navbar from "../navbar-component";
import CreateStudent from "../create-student-component";
import EditStudent from "../edit-student-component";
import PermanentDrawerRight from "./sidebar"

function Home(props) {
    useEffect(() => {
        axios.get('http://localhost:5000/users/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
            if(response.status.isAdmin){
                RedirectToDashboard()
            }
        })
        .catch(function (error) {
          redirectToLogin()
        });
      })
    function redirectToLogin() {
    props.history.push('/login');
    }
    function RedirectToDashboard(){
      props.history.push('/dashboard')
    }
    return(
        <div className="mt-2">
    <Router>
        <div className="container"> 
            <Navbar />
            <br/>
            <Route path="/student" exact component={CreateStudent} />
            <Route path="/student:id" component={EditStudent} />    
            <PermanentDrawerRight/>

        </div>
    </Router>    
      </div>
    )
}

export default withRouter(Home);