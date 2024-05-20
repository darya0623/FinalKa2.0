import React from 'react'
import { Fragment, useState, useEffect, useContext } from "react";
import Yandex from "./../img/icons/Yandex.svg"
import VK from "./../img/icons/VK.svg"
import Google from "./../img/icons/Google.svg"
import axios from 'axios'
export default function SignUp() {

//   const AuthFunc = (input, password, login) => {
//     login.addEventListener("click", () => {
//         const user = {
//             lognUser: input.value,
//             passUser: password.value,
//         }
        
//         GetAPIFunc("/profile").then((data) => {
//             if (
//                 (data.login === user.lognUser) &&
//                 (data.password === user.passUser)
//             ) {
//                 localStorage.setItem("auth", JSON.stringify(user))
//             }
//         })
//     })
// }

//  const CHeckAuthFunc = (modal, removeOne, removeTwo, openAuth) => {
//     let user = JSON.parse(localStorage.getItem("auth"))
//     if (user) {
        
//         axios.get("/profile").then((data) => {
//             if (
//                 (data.login === user.lognUser) &&
//                 (data.password === user.passUser)
//             ) {
//                 ModalLoginFunc(modal, removeOne, removeTwo, openAuth)
//             }
//         })
//     }
// }

//  const LogoutAuthFunc = (eventButton) => {
//     eventButton.addEventListener("click", () => {
//         localStorage.removeItem("auth")
//     })
// }


  
  return (
    <Fragment>
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
              
              <button className="login-button">Зарегистрироваться</button>
            </div>
          </div>
        </article>
      </main>
    </Fragment>
  )
}
