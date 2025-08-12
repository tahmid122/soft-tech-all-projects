import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import ThemeContextProvider from "./contexts/Theme/ThemeContextProvider";
import LanguageContextProvider from "./contexts/Language/LanguageContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </LanguageContextProvider>
  </StrictMode>
);
