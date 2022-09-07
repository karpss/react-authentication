/* eslint-disable */
import React,{useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login";
import DataList from "./components/DataList/DataList";
import {getAuthorizationToken} from "./api/api";
import {tokenSelect, tokenAssign} from "./redux/authorizationSlice";
import {useAppSelector, useAppDispatch} from "./hooks/typeManagementHook";


function App() {
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>("");

  const token = useAppSelector(tokenSelect);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tokenAssign(sessionStorage.getItem("token") || ""));
  }, [])


  const onSubmit = (username: string, password: string) => {
    getAuthorizationToken(username, password)
    .then((res) => {
      if (!res.ok) {
        throw Error("Login failed");
      }
      setLoginErrorMessage("");
      return res.json();
    })
    .then((data) => {
      dispatch(tokenAssign(data.token));
      sessionStorage.setItem("token", data.token);
    })
    .catch((error) => setLoginErrorMessage(error.message));


  }
  console.log(token);
  return (
    <div className="App">
      <Navbar loggedIn={!!token}/>
      {token ? (
        <DataList />
      ) : (
      <Login onSubmit={onSubmit} loginErrorMessage={loginErrorMessage}/>
      )}
    </div>
  );
}

export default App;
