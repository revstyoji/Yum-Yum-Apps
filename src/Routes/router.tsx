import {createBrowserRouter, type RouteObject} from "react-router-dom"
import { Home } from "@/layouts/Home"
import DashbroadPage from "@/pages/dashbroad"
import PageMenu from "@/layouts/Menu"
import Orders from "@/layouts/Orders";
import { Customers } from "@/layouts/Customers";
const adminRoutes: RouteObject = {
  path: "/admin",
  element: <DashbroadPage />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "menu",
      element: <PageMenu />,
    },
    {
      path: "orders",
      element: <Orders />
    },
    {
      path: "customers",
      element: <Customers/>
    }
  ],
};

export const mainRouter = createBrowserRouter([
  adminRoutes,
]);