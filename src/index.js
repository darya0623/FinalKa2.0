import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import './style/adapt.scss';
import App from './App';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Main from './pages/main';
import Tabacks from './pages/tabacks';
import TabackInfo from './pages/tabakInfo';
import Lounges from "./pages/lounges.js"
import LoungeInfo from "./pages/loungeInfo.js"
import Mixes from "./pages/mixes.js"
import MixInfo from "./pages/mixInfo.js"
import Mixer from "./pages/mixer.js"
import LogIn from "./pages/login.js"
import SignUp from "./pages/signup.js"




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/main",
        element: <Main />
      },
      {
        path: "/tabacks",
        element: <Tabacks />
      },
      {
        path: "/tabackInfo",
        element: <TabackInfo />
      },
      {
        path: "/mixes",
        element: <Mixes />
      },
      {
        path: "/mixInfo",
        element: <MixInfo />
      },
      {
        path: "/mixer",
        element: <Mixer />
      },
      {
        path: "/lounges",
        element: <Lounges />
      },
      {
        path: "/loungeInfo",
        element: <LoungeInfo />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/signup",
        element: <SignUp />
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
