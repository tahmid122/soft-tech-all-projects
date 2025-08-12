import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import SalesRepresentative from "../pages/SalesRepresentative/SalesRepresentative";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Error404 from "../pages/Error/Error404";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";

// All routes
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "sales-representative",
        Component: SalesRepresentative,
      },
      {
        path: "admin",
        Component: Login,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "products/:id",
        Component: SingleProduct,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/*",
    Component: Error404,
  },
]);
// All routes
