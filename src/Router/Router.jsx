import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Page/Home/Home";
import ErrorPage from "../Components/Error/ErrorPage";
import Auth from "../Auth/Auth";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import App from "../App";
import Dashboard from "../Dashboard/DashboardLayout/DashboardLayout";
import AddCamp from "../Dashboard/Admin/AddCamp/AddCamp";
import ManageCamp from "../Dashboard/Admin/ManageCamp/ManageCamp";
import CampDetails from "../Page/Home/PopularMedicalCamps/CampDetails";
import AllCamps from "../Page/AllCapms/AllCamps";
import RegisteredCamps from "../Dashboard/Participant/RegisteredCamps/RegisteredCamps";
import Payment from "../Dashboard/Participant/Payment/Payment";
import PaymentHistory from "../Dashboard/Participant/PaymentHistory/PaymentHistory";
import AdminProtected from "../ProtectedRoute/AdminProtected";
import ForbiddenPage from "../components/ForbiddenPage/ForbiddenPage";
import ParticipantProtected from "../ProtectedRoute/ParticipantProtected";
import ManageRegisteredCamp from "../Dashboard/Admin/ManageRegisteredCamp/ManageRegisteredCamp";
import DashboardRedirect from "../Dashboard/DashboardLayout/DashboardRedirect/DashboardRedirect";
import UpdateProfile from "../Dashboard/UpdateProfile/UpdateProfile";
import ContactUs from "../Page/Home/ContactUs/ContactUs";
import AboutUs from "../Page/Home/AboutUs/AboutUs";
import ProfileRedirect from "../Dashboard/DashboardLayout/DashboardRedirect/ProfileRedirect";
import HealthAwareness from "../Page/HealthAwarness/HealthAwarness";

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
        element: <AllCamps />,
      },
      {
        path: "/health-awareness",
        element: <HealthAwareness />,
      },
      {
        path: "/camp-details/:id",
        element: (
          <ProtectedRoute>
            <CampDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/forbidden",
        element: <ForbiddenPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
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
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardRedirect />,
      },
      {
        path: "profile",
        element: <ProfileRedirect />,
      },

      {
        path: "add-camp",
        element: (
          <ProtectedRoute>
            <AdminProtected>
              <AddCamp />
            </AdminProtected>
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-camp",
        element: (
          <ProtectedRoute>
            <AdminProtected>
              <ManageCamp />
            </AdminProtected>
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-registered-camp",
        element: (
          <ProtectedRoute>
            <AdminProtected>
              <ManageRegisteredCamp />
            </AdminProtected>
          </ProtectedRoute>
        ),
      },

      //Participant route
      {
        path: "registered-camps",
        element: (
          <ProtectedRoute>
            <ParticipantProtected>
              <RegisteredCamps />
            </ParticipantProtected>
          </ProtectedRoute>
        ),
      },

      {
        path: "payment/:id",
        element: (
          <ProtectedRoute>
            <ParticipantProtected>
              <Payment />
            </ParticipantProtected>
          </ProtectedRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <ProtectedRoute>
            <ParticipantProtected>
              <PaymentHistory />
            </ParticipantProtected>
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    Component: ErrorPage,
  },
]);
