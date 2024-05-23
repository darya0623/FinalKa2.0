import "./App.css";
import * as React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "./../src/img/logo.svg";
import { Fragment } from "react";
import { Content } from "antd/es/layout/layout";
import { Link, Route, Routes } from "react-router-dom";
import Tabacks from "./pages/tabacks";
import NotFound from "./pages/notFound";
import Main from "./pages/main";
import Mixes from "./pages/mixes";
import MenuBtn from "./img/menu.svg";
import IkisBtn from "./img/ikis.svg";
import { useState } from "react";

const App = () => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <nav className="header-nav">
            <Link to="/">
              <img className="nav-logo" src={logo} alt="error" />
            </Link>
            <Link to="/tabacks" className="nav-item">
              Табаки
            </Link>
            <Link to="/mixes" className="nav-item">
              Миксы
            </Link>
            <Link to="/lounges" className="nav-item">
              Лаунжи
            </Link>
            <Link to="/map" className="nav-item">
              Карта
            </Link>
            {!localStorage.getItem("password") ? (
              <Link to="/signUp" className="nav-item">
                Войти
              </Link>
            ) : (
              <button className="logout-btn"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Выйти
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* <button id='openNavButton' className='menu-btn'><img src={MenuBtn} alt='error' /></button>


      <section id='myNav' className='navbar-section'>

        <nav className="header-navbar">
          <Link to="/"><img className="navbar-logo" src={logo} alt="error" /></Link>
          <button id='closeNavButton' className='ikis-btn'><img src={IkisBtn} alt='error' /></button>
          <Link to="/tabacks" className="navbar-item">Табаки</Link>
          <Link to="/mixes" className="navbar-item">Миксы</Link>
          <Link to="/lounges" className="navbar-item">Лаунжи</Link>
          <Link to="!#" className="navbar-item">Магазины</Link>
          <Link to="/map" className="navbar-item">Карта</Link>
        </nav>
      </section> */}

      <Outlet />

      <footer className="footer">
        <div className="container">
          <div className="footer-wrap">
            <nav className="footer-nav">
              <Link to="/tabacks" className="f-nav-item">
                Табаки
              </Link>
              <Link to="/mixes" className="f-nav-item">
                Миксы
              </Link>
              <Link to="/lounges" className="f-nav-item">
                Лаунжи
              </Link>
              <Link to="!#" className="f-nav-item">
                Магазины
              </Link>
              <Link to="!#" className="f-nav-item">
                Карта
              </Link>
            </nav>

            <p> &copy; 2021 HookahPortal.ru</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default App;
