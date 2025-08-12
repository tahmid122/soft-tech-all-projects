import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import CartContextProvider from "./contexts/CartContextProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </CartContextProvider>
  </StrictMode>
);
