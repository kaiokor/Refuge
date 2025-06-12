import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UsuarioProvider } from "./context/UsuarioContext";
import { OrgProvider } from "./context/OrgContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OrgProvider>
      <UsuarioProvider>
        <App />
      </UsuarioProvider>
    </OrgProvider>
  </StrictMode>
);
