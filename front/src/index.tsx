import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store";

import App from "./App";
import { GlobalStyles } from "./components/GlobalStyles";

ReactDOM.render(
  <Provider store={store}>
      <GlobalStyles />
      <App />
  </Provider>,
  document.getElementById("root")
);