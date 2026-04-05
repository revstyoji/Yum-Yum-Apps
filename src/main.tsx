import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./Routes/router"
import { ApolloProvider } from '@apollo/client/react';
import {client} from "../src/service/connection"

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={mainRouter} />
    </ApolloProvider>
  </StrictMode>
)