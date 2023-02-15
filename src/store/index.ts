import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { RootAction, RootReducer, Services } from "StoreTypes";
import services from "../services/";

// epic middleWare
export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootReducer,
  Services
>({
  dependencies: services,
});



// reducers
const rootReducer = combineReducers({});

// store
const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

export type Store = ReturnType<typeof store.getState>;
export default store;
