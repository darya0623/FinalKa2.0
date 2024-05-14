import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import './style/adapt.scss';
import App from './App.jsx';
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



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "main",
        element: <Main />
      },
      {
        path: "tabacks",
        element: <Tabacks />
      },
      {
        path: "tabackInfo",
        element: <TabackInfo />
      },
      {
        path: "mixes",
        element: <Mixes />
      },
      {
        path: "mixInfo",
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
        path: "loungeInfo",
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
