import { Navigate } from "react-router-dom";

function Protected({ children }) {

  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/contact" />;
  }

  return children;
}

export default Protected;