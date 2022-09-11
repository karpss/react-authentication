/* eslint-disable */
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Login from "../Login";


describe("Login Form", () => {

it("should display username and password input fields", () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} loginErrorMessage="" />);
  
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("button should not be clickable if input is empty", () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} loginErrorMessage="" />)
    const buttonElement = screen.getByText('Login');
    fireEvent.click(buttonElement);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("should show error message if it's passed to indicate Login failure", () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} loginErrorMessage="Login Failed" />);
  
    expect(screen.getByText("Login Failed")).toBeInTheDocument();
  });

  it("should enable login button when username and password are filled with value", () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} loginErrorMessage="" />);
  
    const usernameValue = screen.getByPlaceholderText("Username");
    const passwordValue = screen.getByPlaceholderText("Password");
  
    fireEvent.change(usernameValue, { target: { value: "username" } });
    expect(usernameValue).toHaveValue("username");
    expect(screen.getByRole("button", { name: /Login/i })).toBeDisabled();
  
    fireEvent.change(passwordValue, { target: { value: "password" } });
    expect(passwordValue).toHaveValue("password");
  
    expect(screen.getByRole("button", { name: /Login/i })).toBeEnabled();
  });

  it("should call 'onSubmit' function once Login is clicked", () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} loginErrorMessage="" />);
  
    const usernameValue = screen.getByPlaceholderText("Username");
    const passwordValue = screen.getByPlaceholderText("Password");
  
    fireEvent.change(usernameValue, { target: { value: "username" } });
    fireEvent.change(passwordValue, { target: { value: "password" } });
    screen.getByRole("button", { name: /Login/i }).click();
  
    expect(onSubmit).toBeCalledWith("username", "password");
    expect(onSubmit).toHaveBeenCalledTimes(1);
});
})