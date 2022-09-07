/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./authorizationSlice";
import serverDataListReducer from "./serverDataListSlice";

const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    serverDataList: serverDataListReducer,
  },
});


export default store;
