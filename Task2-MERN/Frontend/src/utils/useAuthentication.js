import { useState } from "react";

const useAuthentication = (check) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  return { isAuthenticated, login };
};

export default useAuthentication;
