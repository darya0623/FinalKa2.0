import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import './style/adapt.scss';
import App from './App.js';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Main from './pages/main.jsx';
import Tabacks from './pages/tabacks.jsx';
import Lounges from "./pages/lounges.jsx"
import Mixes from "./pages/mixes.jsx"
import SignUp from "./pages/signup.jsx"
import Map from './pages/map.jsx';
import NotFound from './pages/notFound.jsx';
import Admin from './pages/admin/admin.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "admin",
        element: <Admin />
      },
      {
        path: "tabacks",
        element: <Tabacks />
      },
      {
        path: "mixes",
        element: <Mixes />
      },
      {
        path: "lounges",
        element: <Lounges />
      },
      {
        path: "map",
        element: <Map />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
