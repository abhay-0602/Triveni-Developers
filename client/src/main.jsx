import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-deagq0uc68146l8y.us.auth0.com"
    clientId="lfNabEQlIHleYf6G6EZppZZvomJCpBcj"
    authorizationParams={{
      redirect_uri:"https://triveni-developers.vercel.app"
    }}
    audience="http://localhost:8000"
    scope="openid profile email"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
