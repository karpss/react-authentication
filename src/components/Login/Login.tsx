import React, { useState, useEffect, useCallback } from "react";
import styles from "./Login.module.css";

type LoginProps = {
  onSubmit: (username: string, password: string) => void;
  loginErrorMessage: string;
};

function Login({ onSubmit, loginErrorMessage }: LoginProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState(false);

  const validateInput = useCallback(() => {
    let validInput = true;
    if (username === "" || password === "") {
      validInput = false;
    }
    return validInput;
  }, [username, password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInput()) {
      onSubmit(username, password);
    }
  };
  const handleInputChange = (e: any) => {
    setIsInputValid(e?.validateInput());
  };

  useEffect(() => {
    setIsInputValid(validateInput());
  }, [username, password, validateInput]);

  return (
    <div className={styles.loginForm}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) =>
            handleInputChange(setUsername(event?.target.value))
          }
          className={styles.loginInput}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) =>
            handleInputChange(setPassword(event?.target.value))
          }
          className={styles.loginInput}
        />
        <p>{loginErrorMessage}</p>
        <button
          className={styles.loginButton}
          type="submit"
          disabled={!isInputValid}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
