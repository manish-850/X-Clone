import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import UserContext from "./Context/UserContext.jsx";
import LoadingContext from "./Context/LoadingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingContext>
      <UserContext>
        <App />
      </UserContext>
    </LoadingContext>
  </StrictMode>,
);
