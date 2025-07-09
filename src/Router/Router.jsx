import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Page/Home/Home";
import ErrorPage from "../Components/Error/ErrorPage";
import Auth from "../Auth/Auth";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import App from "../App";
import Dashboard from "../Dashboard/Dashboard";
import AddCamp from "../Dashboard/Admin/AddCamp/AddCamp";
import ManageCamp from "../Dashboard/Admin/ManageCamp/ManageCamp";
import Items from "../Page/Items/Items";
import CampDetails from "../Page/Home/PopularMedicalCamps/CampDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/items",
        element: (
          <ProtectedRoute>
            <Items />
          </ProtectedRoute>
        ),
      },
      {
        path: "/camp-details/:id",
        element: (
          <ProtectedRoute>
            <CampDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        path: "add-camp",
        element: <AddCamp />,
      },
      {
        path: "manage-camp",
        element: <ManageCamp />,
      },
    ],
  },

  {
    path: "*",
    Component: ErrorPage,
  },
]);
