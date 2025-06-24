import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Dashboard = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      {keycloak?.authenticated ? (
        <div>
          <h1>Welcome, {keycloak.tokenParsed?.preferred_username}</h1>
          <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => keycloak.login()}>Login</button>
      )}
    </div>
  );
};

export default Dashboard;
