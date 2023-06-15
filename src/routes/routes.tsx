import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from ".";
import { Signin } from "../pages/Signin";
import { Home } from "../pages/Home/Home";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { ROUTES } from "../helpers/routes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path={ROUTES.BASE} element={<Signin />} />
        <Route path={ROUTES.HOME} element={<PrivateRoutes />}>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}