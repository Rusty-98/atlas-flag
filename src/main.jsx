import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Countries from './Components/Countries.jsx';
import Home from './Components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <Countries />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
