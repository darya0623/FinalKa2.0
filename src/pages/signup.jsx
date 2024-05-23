import React from "react";
import { Fragment, useState, useEffect, useContext } from "react";
import Yandex from "./../img/icons/Yandex.svg";
import VK from "./../img/icons/VK.svg";
import Google from "./../img/icons/Google.svg";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7777/user")
  //     .then((response) => setUser(response.data))
  //     .catch((error) => console.error("Error", error));
  // }, []);

  const addUser = () => {
    localStorage.setItem("username", userName);
    localStorage.setItem("password", userPassword);
    navigate("/");
    window.location.reload();
  };


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
              <p className="login-text">
                Вы можете войти используя свои соцсети
              </p>
              <div className="button-area">
                <button className="login-btn">
                  <img className="btn-image" src={Yandex} alt="error" />
                </button>
                <button className="login-btn">
                  <img className="btn-image" src={VK} alt="error" />
                </button>
                <button className="login-btn">
                  <img className="btn-image" src={Google} alt="error" />
                </button>
              </div>
            </div>
          </div>
        </aside>
        <article className="article">
          <div className="container">
            <div className="article-wrap">
              <h1 className="article-login-title">Зарегистрироваться</h1>
              <input
                className="login-email"
                id="username"
                type="text"
                placeholder="Ваш email/username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <hr className="cherti" />
              <input
                className="login-password"
                id="password"
                type="password"
                placeholder="Ваш пароль"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <button id="show-hide-btn">knopka</button>
              <hr className="cherti" />
              <button className="login-button" onClick={addUser}>
                Зарегистрироваться
              </button>
              <p className="register-link">
                Уже есть аккаунт? <Link to="/logIn">Войти</Link>
              </p>
            </div>
          </div>
        </article>
      </main>
    </Fragment>
  );
}
