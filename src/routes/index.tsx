import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../helpers/routes";

export function PrivateRoutes() {
  const { signed } = useContext(AuthGoogleContext);

  return signed ? <Outlet /> : <Navigate to={ROUTES.BASE} />;
}
