import { createBrowserRouter } from "react-router";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Inventory from "../pages/Inventory/Inventory";
import CreateRole from "../pages/Dashboard/CreateRole/CreateRole";
// all routes
export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashBoardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "inventory", Component: Inventory },
      { path: "createRole", Component: CreateRole },
    ],
  },
]);
// all routes
