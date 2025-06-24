import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import AppRouter from "./AppRouter";
import keycloak from "./keyCloak.js";

function App() {
  console.log("Keycloak instance:", keycloak);

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <AppRouter />
    </ReactKeycloakProvider>
  );
}

export default App;
