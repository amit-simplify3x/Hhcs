import React, { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

const Login = () => {
  const { keycloak, initialized, error } = useKeycloak();
  const [loading, setLoading] = useState(true);

  // Wait for Keycloak initialization
  useEffect(() => {
    if (initialized) {
      setLoading(false); // Set loading to false when Keycloak is initialized
    }
  }, [initialized]);

  useEffect(()=>{
if(error){
  console.log(error)
}
  },[error])

  const handleLogin = () => {
    if (initialized && keycloak) {
      keycloak.login(); // Call login if initialized
    } else {
      console.error("Keycloak is not initialized yet.");
    }
  };

  // Show a loading state while Keycloak is initializing
  // if (loading) {
  //   return <div>Loading Keycloak...</div>;
  // }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6">
              <button
                type="button"
                className="text-blue-800"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
