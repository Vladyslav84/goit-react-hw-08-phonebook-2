// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../src/redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import persistor from '../src/redux/store';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store.store}>
//       <PersistGate loading={null} persistor={store.persistor}>
//         <BrowserRouter>
//          <App />
//       </BrowserRouter>
//      </PersistGate>
//   </Provider>

//     </React.StrictMode>,
//   document.getElementById('root')
// );
import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>

    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
       </>

  </React.StrictMode>,
  document.getElementById("root")
);

