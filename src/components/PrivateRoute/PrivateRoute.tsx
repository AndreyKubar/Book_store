import { Navigate, useLocation } from "react-router-dom";

export type PrivateRouteProps = {
  isAuthenticated: boolean | undefined;
  authenticationPath: string;
  outlet: JSX.Element;
};

function PrivateRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: PrivateRouteProps) {
  const location = useLocation();

  if (isAuthenticated) {
    return outlet;
  } else {
    return (
      <Navigate
        to={{ pathname: authenticationPath }}
        state={{ from: location }}
      />
    );
  }
}

export default PrivateRoute;