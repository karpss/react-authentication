/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react'

function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isInputValid, setIsInputValid] = useState(false);

    const validateInput = useCallback( () => {
        let validInput = true;
        if (username === "" || password === ""){
            validInput = false;
        }
        return validInput;
    }, [username, password]);


    const handleInputChange = (e: any) => {
        setIsInputValid(validateInput());
    }

    useEffect(() => {
        setIsInputValid(validateInput());
      }, [username, password, validateInput]);
      console.log(username);
      console.log(password);
    return (
      <div className='loginForm'>
        <form>
        <input
        type="text"
        placeholder="Username"
        onChange={(event) => handleInputChange(setUsername(event?.target.value))}
        />
        <input
        type="password"
        placeholder="Password"
        onChange={(event) => handleInputChange(setPassword(event?.target.value))}
        
        />
        <button type="submit" disabled={!isInputValid}>Login</button>
        </form>
      </div>
    );
  }

export default Login;