import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Navbar from "../Navbar";

import { store } from "../../../redux/store";

describe("Navbar", () => {
  it("renders header title", () => {
    render(
      <Provider store={store}>
        <Navbar loggedIn={false} />
      </Provider>,
    );
    const headerElement = screen.getByText(/Server Locations/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("renders logout button", () => {
    render(
      <Provider store={store}>
        <Navbar loggedIn />
      </Provider>,
    );
    const buttonElement = screen.getByText(/Log Out/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
