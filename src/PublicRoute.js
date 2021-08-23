import { useSelector } from 'react-redux';
import { Route, Redirect, useHistory } from 'react-router-dom';
// import authSelectors from './redux/slices/authentication/auth-selectors';
import React, { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';

// import { getLogIn } from "../redux/auth/auth-selectors";

export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/',
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}