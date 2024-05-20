import React from 'react'
import { Fragment, useState, useEffect, useContext } from "react";
import Yandex from "./../img/icons/Yandex.svg"
import VK from "./../img/icons/VK.svg"
import Google from "./../img/icons/Google.svg"
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7777/user');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once

  const addUser = () => {
    if (!userName.trim() || !userPassword.trim()) {
      alert('Please fill in both username and password.');
      return;
    }

    const newUser = {
      username: userName.trim(),
      password: userPassword.trim()
    };

    axios.post('http://localhost:7777/user')
      .then(response => {
        setUser([...user, response.data]);
        setUserName('');
        setUserPassword('');
      })
      .catch(error => alert('Error adding user:', error));
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
            <h1 className="article-login-title">Зарегистрироваться</h1>
            <input className="login-email" 
            id="username" 
            type="text" 
            placeholder="Ваш email/username"
            value={userName}
      onChange={(e) => setUserName(e.target.value)} />
            <hr className="cherti"/>
            <input className="login-password" 
            type="password" 
            placeholder="Ваш пароль"
            value={userPassword}
      onChange={(e) => setUserPassword(e.target.value)} />
            <hr className="cherti"/>
            <button 
            className="login-button"
            onClick={addUser}>Зарегистрироваться</button>
            <p className="register-link">Уже есть аккаунт? <Link to="/logIn">Войти</Link></p>
          </div>
        </div>
      </article>
    </main>
  </Fragment>
);
}
