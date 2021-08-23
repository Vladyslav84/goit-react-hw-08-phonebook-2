// // import Navigation from '../src/Navigation/Navigation';
// import { Switch, Route, Redirect, Link  } from 'react-router-dom';
// import SignUp from '../src/SingUp/SingUp';
// import SingIn from '../src/SignIn/SignIn';
// import ContactForm from '../src/ContactForm/ContactForm'
import React, { Component } from 'react';
// import PrivateRoute from '../src/PrivateRoute';
// // import ContactForm from '../src/ContactForm/ContactForm';


// function App() {
//   return (
// <>
//       {/* <Link to="/contactform">PB</Link> */}
//       <Switch>
//         <Suspense>
//           <Route exact path="/" >
//            <SignUp />
//           </Route>
//           <Route exact path="/singin" >
//            <SingIn />
//           </Route>
//           {/* <Route path="/contactform">
//              <ContactForm />
//           </Route> */}
//            <PrivateRoute exact path="/contactform">
//            <ContactForm />
//           </PrivateRoute  >
//        </Suspense>
//     </Switch>
//     </>
//   );
// }

// export default App;

import { Route, Switch } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import authOperations from "./redux/auth/auth-operations";
// import { getIsFetchingCurrentUser } from "./redux/auth/auth-selectors";

// import AppBar from "./components/AppBar/AppBar";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import LoginView from './LoginView';
import RegisterView from './RegisterView';

// import Skeleton from "@material-ui/lab/Skeleton";

// const HomeView = lazy(() => import("./views/HomeView"));
// const RegisterView = lazy(() => import("./views/RegisterView"));
// const LoginView = lazy(() => import("./views/LoginView"));
// const ContactsView = lazy(() => import("./views/ContactsView"));

function App() {
  // const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);
  const aaa = false && false
  console.log(aaa)
  return (

  
      
    <div>

    <Switch>
        <PrivateRoute exact path="/" >
          <LoginView />
        </PrivateRoute>
        <PublicRoute exact path="/register">
          <RegisterView />
        </PublicRoute>
   </Switch>

      </div>
    );
}

export default App;