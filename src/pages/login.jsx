import React from "react";
import { Fragment } from "react";
import { Checkbox } from "antd";
import Yandex from "./../img/icons/Yandex.svg"
import VK from "./../img/icons/VK.svg"
import Google from "./../img/icons/Google.svg"

export default function LogIn() {

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:7777/products")
  //     .then((res) => {
        
  //       setData(res.data)
  //     }).catch((err) => {
  //       alert(err)
  //     })
  // },[])

  // console.log(data);

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
              <button className="login-button">Войти</button>
            </div>
          </div>
        </article>
      </main>
    </Fragment>
  );
}
