import { createBrowserRouter } from "react-router";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Inventory from "../pages/Inventory/Inventory";
import CreateRole from "../pages/Dashboard/CreateRole/CreateRole";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import ProductQrCode from "../pages/ProductQrCode/ProductQrCode";
import SalesReport from "../pages/SalesReport/SalesReport";
import LowStockAlert from "../pages/LowStockAlert/LowStockAlert";
import Login from "../pages/Login/Login";
// all routes
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: DashBoardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "e-commerce", Component: Inventory },
      { path: "createRole", Component: CreateRole },
      { path: "productManagement", Component: ProductManagement },
      { path: "productQrCode", Component: ProductQrCode },
      { path: "salesReport", Component: SalesReport },
      { path: "lowStockAlerts", Component: LowStockAlert },
    ],
  },
]);
// all routes
