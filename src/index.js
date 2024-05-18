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
import TabackInfo from './pages/tabakInfo.jsx';
import Lounges from "./pages/lounges.jsx"
import LoungeInfo from "./pages/loungeInfo.jsx"
import Mixes from "./pages/mixes.jsx"
import MixInfo from "./pages/mixInfo.jsx"
import Mixer from "./pages/mixer.jsx"
import LogIn from "./pages/login.jsx"
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
        path: "/admin",
        element: <Admin />
      },
      {
        path: "tabacks",
        element: <Tabacks />
      },
      {
        path: "tabacks/product/:id",
        element: <TabackInfo />
      },
      {
        path: "mixes",
        element: <Mixes />
      },
      {
        path: "mixes/product/:id",
        element: <MixInfo />
      },
      {
        path: "mixer",
        element: <Mixer />
      },
      {
        path: "lounges",
        element: <Lounges />
      },
      {
        path: "lounde/info",
        element: <LoungeInfo />
      },
      {
        path: "map",
        element: <Map />
      },
      {
        path: "login",
        element: <LogIn />
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
