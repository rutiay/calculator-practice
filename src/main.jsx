import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { KeysContextProvider } from "./context/KeysContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <KeysContextProvider>
        <App />
      </KeysContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
