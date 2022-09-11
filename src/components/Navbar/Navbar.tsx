import React from "react";
import { tokenReset } from "../../redux/authorizationSlice";
import { useAppDispatch } from "../../hooks/typeManagementHook";
import styles from "./Navbar.module.css";

type NavbarProps = {
  loggedIn: boolean;
};

function Navbar({ loggedIn }: NavbarProps) {
  const dispatch = useAppDispatch();

  const logOut = () => {
    sessionStorage.removeItem("token");
    dispatch(tokenReset());
  };

  return (
    <div className={styles.navbar}>
      <h2 className={styles.header}>Server Locations</h2>
      {loggedIn && (
        <button type="button" className={styles.logoutButton} onClick={logOut}>
          Log Out
        </button>
      )}
    </div>
  );
}

export default Navbar;
