import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./authorizationSlice";
import serverDataListReducer from "./serverDataListSlice";

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    serverDataList: serverDataListReducer,
  },
});
