import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../helpers/routes";

export function PrivateRoutes() {
  const { signed } = useContext(AuthContext);

  return signed ? <Outlet /> : <Navigate to={ROUTES.BASE} />;
}
