/* eslint-disable */
import React from "react";
import { render } from "@testing-library/react";
import DataList from "../DataList";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

test("matches snapshot", () => {
  const { container } = render
  (<Provider store={store}>
  <DataList />
  </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
