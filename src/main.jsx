import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UsuarioProvider } from "./context/usuarioContext.jsx";
import { OrgProvider } from "./context/OrgContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OrgProvider>
      <UsuarioProvider>
        <App />
      </UsuarioProvider>
    </OrgProvider>
  </StrictMode>
);
