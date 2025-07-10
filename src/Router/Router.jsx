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
import CampDetails from "../Page/Home/PopularMedicalCamps/CampDetails";
import AllCamps from "../Page/AllCapms/AllCamps";
import RegisteredCamps from "../Dashboard/Participant/RegisteredCamps/RegisteredCamps";
import Payment from "../Dashboard/Participant/Payment/Payment";
import PaymentHistory from "../Dashboard/Participant/PaymentHistory/PaymentHistory";

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
            <AllCamps />
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
      //Admin route
      {
        path: "add-camp",
        element: <AddCamp />,
      },
      {
        path: "manage-camp",
        element: <ManageCamp />,
      },

      //Participant route
      {
        path: "registered-camps",
        element: <RegisteredCamps />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
    ],
  },

  {
    path: "*",
    Component: ErrorPage,
  },
]);
