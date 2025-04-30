import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./utils/AuthContext.jsx";
import { HashRouter } from "react-router-dom";

import App from "./components/App/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
