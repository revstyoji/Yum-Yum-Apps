import {createBrowserRouter, type RouteObject} from "react-router-dom"
import { Home } from "@/layouts/Home"
import DashbroadPage from "@/pages/dashbroad"
import PageMenu from "@/layouts/Menu"
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
  ],
};

export const mainRouter = createBrowserRouter([
  adminRoutes,
]);