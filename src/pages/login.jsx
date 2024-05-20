import React from "react";
import { Fragment, useState, useEffect, useContext } from "react";
import { Checkbox } from "antd";
import Yandex from "./../img/icons/Yandex.svg"
import VK from "./../img/icons/VK.svg"
import Google from "./../img/icons/Google.svg"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom";
import axios from "axios";

export default function LogIn() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:7777/prostofile")
      .then((res) => {
        
        setData(res.data)
      }).catch((err) => {
        alert(err)
      })
  },[])

  console.log(data);

  return (
    <Fragment>
    <Helmet>
    <title>Hookah - Вход в аккаунт 😶‍🌫️</title>
  </Helmet>
      <main className="login-main">
        <aside className="aside">
          <div className="aside-wrap">
            <div className="container">

              <h1 className="login-title">Добро пожаловать на Hookah Portal</h1>
              <p className="login-text">Вы можете войти используя свои соцсети</p>
              <div className="button-area">

                <button className="login-btn"><img className="btn-image" src={Yandex} alt="error" /></button>
                <button className="login-btn"><img className="btn-image" src={VK} alt="error" /></button>
                <button className="login-btn"><img className="btn-image" src={Google} alt="error" /></button>
              </div>
            </div>
          </div>
        </aside>
        <article className="article">
          <div className="container">
            <div className="article-wrap">
              <h1 className="article-login-title">Войти</h1>
              <input className="login-email" id="username" type="text" placeholder="Ваш email" />
              <hr className="cherti"/>
              <input className="login-password" type="password" placeholder="Ваш пароль" />
              <hr className="cherti"/>
              <button className="login-button">Войти</button>
              <p className="register-link">Еще нет аккаунта? <Link to="/signUp">Зарегистрироваться</Link></p>
            </div>
          </div>
        </article>
      </main>
    </Fragment>
  );
}
