import {createBrowserRouter} from "react-router-dom"
import { Home } from "../pages/Home"
import { DashbroadLayout } from "../pages/dashbroad"
export const RouterProjects = function () {
    return  createBrowserRouter([
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/dashbroad",
            element: <DashbroadLayout />,
            
        }
    ])
}