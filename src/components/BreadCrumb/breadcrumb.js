import React from 'react';
import { Breadcrumb } from 'antd';
import './breadcrumb.css'


const BreadCrumb = () => (
  <Breadcrumb
    items={[
      {
        title: <a href="/">Main</a>,
      },
      {
        title: <a href="/tabacks">Tabacks</a>,
      },
      {
        title: <a href="/mixes">Mixes</a>,
      },
      {
        title: <a href="/map">Map</a>,
      },
      {
        title: <a href="/lounges">Lounges</a>,
      },
      {
        title: <a href="/login">LogIn</a>,
      },
      {
        title: <a href="/signup">SignUp</a>,
      },
      {
        title: <a href="/admin">Admin</a>,
      }
    ]}
  />
);
export default BreadCrumb;