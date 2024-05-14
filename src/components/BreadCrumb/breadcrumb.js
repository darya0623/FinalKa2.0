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
        title: <a href="/lounges">Lounges</a>,
      },
      {
        title: <a href="/loungeInfo">LoungeInfo</a>,
      },
      {
        title: <a href="/login">LogIn</a>,
      },
      {
        title: <a href="/signup">SignUp</a>,
      },
    ]}
  />
);
export default BreadCrumb;