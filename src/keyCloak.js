import Keycloak from "keycloak-js";

// Create and export a single Keycloak instance
const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "sso-demo",
  clientId: "sso-demo",
  checkLoginIframe: false,
});
// keycloak
//   .init({
//     onLoad: "login-required",
//     checkLoginIframe: false, // Disable iframe check
//   })
//   .then((authenticated) => {
//     console.log("Keycloak initialized:", authenticated);
//   })
//   .catch((error) => {
//     console.error("Keycloak initialization failed:", error);
//   });
export default keycloak;
