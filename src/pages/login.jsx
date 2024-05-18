import React from "react";
import { Fragment } from "react";
import { Checkbox } from "antd";
import Yandex from "./../img/icons/Yandex.svg"
import VK from "./../img/icons/VK.svg"
import Google from "./../img/icons/Google.svg"

export default function LogIn() {
  return (
    <Fragment>
      <main>
        <aside className="aside">
            <div className="aside-wrap">
          <div className="container">

            <h1 className="login-title">Добро пожаловать на Hookah Portal</h1>
            <p className="login-text">Вы можете войти используя свои соцсети</p>
            <div className="button-area">

            <button className="login-btn"><img className="btn-image" src={Yandex} alt="error"/></button>
            <button className="login-btn"><img className="btn-image" src={VK} alt="error"/></button>
            <button className="login-btn"><img className="btn-image" src={Google} alt="error"/></button>
            </div>
            </div>
          </div>
        </aside>
        <article className="article"></article>
      </main>
    </Fragment>
  );
}
