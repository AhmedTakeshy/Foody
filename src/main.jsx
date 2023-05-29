import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index";
import Auth0Wrapper from "./components/admin/authentication/Auth0Wrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Auth0Wrapper>
      <App />
    </Auth0Wrapper>
  </Provider>
);
