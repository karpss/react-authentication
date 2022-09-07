/* eslint-disable */
import React from 'react';
import {tokenReset} from "../../redux/authorizationSlice";
import {useAppDispatch} from "../../hooks/typeManagementHook";

type NavbarProps = {
loggedIn: boolean;
}

function Navbar({loggedIn}: NavbarProps) {
  const dispatch = useAppDispatch();

  const logOut = () => {
    sessionStorage.removeItem("token");
    dispatch(tokenReset());
  };

  return (
    <div className="navbar-container">
      <h4>Server Locations</h4>
      {loggedIn && <button onClick={logOut}>Log Out</button>}
    </div>
  );
}

export default Navbar