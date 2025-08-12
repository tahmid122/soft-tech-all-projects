import { createBrowserRouter } from "react-router";
import Login from "../pages/Login/Login";
import SettingPassword from "../pages/SettingPassword/SettingPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/new-password",
    Component: SettingPassword,
  },
]);
