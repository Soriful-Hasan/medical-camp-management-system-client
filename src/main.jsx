import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <AuthProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </StrictMode>
  </QueryClientProvider>
);
