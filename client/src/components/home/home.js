import React,{ useEffect } from 'react';
import {  BrowserRouter as Router, withRouter } from 'react-router-dom';
import { LOGIN_TOKEN_NAME } from '../../constants/apiContants';
import axios from 'axios'

function Home(props) {
    useEffect(() => {
        axios.get('http://localhost:5000/users/me', { headers: { 'token': localStorage.getItem(LOGIN_TOKEN_NAME) }})
        .then(function (response) {
          if(response.status === 200)
          {
            RedirectToAdmin();
          }
            if(response.status !== 200){
              redirectToLogin()
            }
            if(response.status.isAdmin){
               //RedirectToDashboard()
            }
        })
        .catch(function (error) {
          redirectToLogin()
        });
      })
    function redirectToLogin() {
    props.history.push('/login');
    }
    function RedirectToAdmin(){
      props.history.push('/admin')
    }
    return(
        <div className="mt-2" dir='rtl'>
    <Router>
        <div className="container"> 

        </div>
    </Router>    
      </div>
    )
}

export default withRouter(Home);

/**
 *            <br/>
            <Route path="/student" exact component={CreateStudent} />
            <Route path="/student:id" component={EditStudent} />    
            <PermanentDrawerRight/>

 */