import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Welcome from "../components/Welcome.tsx";
import RootLayout from "../components/layout/RootLayout.tsx";
import Home from "../components/Home.tsx";
import Dms from "../components/Dms.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "admin",
        element: <Home />,
      },
      {
        path: "dms",
        element: <Dms />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
