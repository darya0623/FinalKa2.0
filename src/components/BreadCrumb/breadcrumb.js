import React from 'react';
import { Breadcrumb } from 'antd';
import './breadcrumb.css'


const BreadCrumb = () => (
  <Breadcrumb
    items={[
      {
        title: <a href="/main">Main</a>,
      },
      {
        title: <a href="/tabacks">Tabacks</a>,
      },
      {
        title: <a href="/tabackInfo">TabackInfo</a>,
      },
      {
        title: <a href="/login">LogIn</a>,
      },
      {
        title: <a href="/profile">Profile</a>,
      },
    ]}
  />
);
export default BreadCrumb;