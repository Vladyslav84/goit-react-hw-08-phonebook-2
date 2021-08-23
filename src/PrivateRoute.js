import { useSelector } from 'react-redux';
import { Route, Redirect,useHistory } from 'react-router-dom';
// import authSelectors from './redux/slices/authentication/auth-selectors';
import React, {Component} from 'react';
// import ContactForm from './ContactForm/ContactForm';

// import { getLogIn } from "../redux/auth/auth-selectors";

function PrivateRoute({ children, ...routeProps }) {
  // const isLoggedIn = useSelector(getLogIn);

  return (
    <Route {...routeProps}>
      {true ? children : <Redirect to="/register" />}
    </Route>
  );
}

export default PrivateRoute;