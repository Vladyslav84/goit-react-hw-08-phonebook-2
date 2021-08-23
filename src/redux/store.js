// // import { configureStore, getDefaultMiddleware, combineReducers  } from '@reduxjs/toolkit';
// // import contactsSlice from './slices/contacts';
// // import filterSlice from './slices/filter';
// // import authSlice from '../redux/slices/authentication/authentication';
// // import {
// //   persistStore,
// //   persistReducer,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// // } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';

// // const middleware = [
// //   ...getDefaultMiddleware({
// //     serializableCheck: {
// //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //     },
// //   }),
// // ];

// // const authPersistConfig = {
// //   key: 'auth',
// //   storage,
// //   whitelist: ['token'],
// // };



// // const rootReducer = combineReducers({
// //   contactsSlice,
// //   filterSlice,
// //   authSlice,
 
// // });
// // const perReducer = persistReducer(authPersistConfig,rootReducer)

// // const store = configureStore({
// //   reducer:
// //   perReducer,
// //   middleware,
// //   devTools: process.env.NODE_ENV !== "production",
// // });

// // const persistor = persistStore(store);
// // export default {store, persistor};


// import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import contactsReducer from "./phonebook/phonebook-reducers";
// // import authReducer from "./auth/auth-slice";

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     contacts: contactsReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
// });

// export const persistor = persistStore(store);