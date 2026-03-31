import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { RouterProjects } from "./Routes/router"

const root = document.getElementById('root')!;
const router = RouterProjects(); // 🔥 dipanggil

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)