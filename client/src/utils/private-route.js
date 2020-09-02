import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { LOGIN_TOKEN_NAME, ADMIN_TOKEN_NAME } from '../constants/apiContants';
function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
        //localStorage.getItem(ADMIN_TOKEN_NAME) ?(children) :(
          localStorage.getItem(LOGIN_TOKEN_NAME) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        //)
        }
      />
    );
  }

export default PrivateRoute;