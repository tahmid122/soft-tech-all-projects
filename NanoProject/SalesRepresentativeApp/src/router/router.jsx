import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Market from "../pages/Market/Market";
import Notification from "../pages/Notification/Notification";
import Training from "../pages/Training/Training";
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import SingleMarketProductDetails from "../pages/SingleMarketProductDetails/SingleMarketProductDetails";
import SingleNotificationDetails from "../pages/SingleNotificationDetails/SingleNotificationDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "market", Component: Market },
      { path: "market/:id", Component: SingleMarketProductDetails },
      { path: "notification", Component: Notification },
      { path: "notification/:id", Component: SingleNotificationDetails },
      { path: "training", Component: Training },
      { path: "profile", Component: Profile },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
    ],
  },
]);
