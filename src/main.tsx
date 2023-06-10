import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ROUTES } from "./helpers/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <App />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
