import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./helpers/routes";
import { App } from "./App";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Home } from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.HOME,
    element: <Home />
    // children: [{ path: "home", element: <Home /> }]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
