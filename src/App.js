import './App.css';
import * as React from 'react';
import {Outlet, useLocation, useNavigate } from 'react-router-dom';
import logo from "./../src/img/logo.svg"
import { Fragment } from 'react';
import { Content } from 'antd/es/layout/layout';
import { Link, Route, Routes } from "react-router-dom";
import Tabacks from './pages/tabacks';
import TabackInfo from './pages/tabakInfo';
import NotFound from './pages/notFound';
import Main from './pages/main';
import Mixes from './pages/mixes';
const App = () => {
  // const { pathname } = useLocation();
  // const navigation = useNavigate()
  // React.useEffect(() => {
  //   if (pathname === "/") {
  //     navigation("/main")
  //   }
  // }, [])

  

  return (
    <Fragment>

      <header>

      <div className="container">
          <nav className="header-nav">
            <Link to="/"><img className="nav-logo" src={logo} alt="error" /></Link>
            <Link to="/tabacks" className="nav-item">Табаки</Link>
            <Link to="/mixes" className="nav-item">Миксы</Link>
            <Link to="/lounges" className="nav-item">Лаунжи</Link>
            <Link to="!#" className="nav-item">Магазины</Link>
            <Link to="/map" className="nav-item">Карта</Link>
            <Link to="!#" className="nav-item">Мои табаки</Link>
            <Link to='/login' className="nav-item">Войти</Link>
          </nav>
        </div>
      </header>

      
      <section className='navbar-section'>
      <nav className="header-nav">
            <Link to="/"><img className="nav-logo" src={logo} alt="error" /></Link>
            <Link to="/tabacks" className="nav-item">Табаки</Link>
            <Link to="/mixes" className="nav-item">Миксы</Link>
            <Link to="/lounges" className="nav-item">Лаунжи</Link>
            <Link to="!#" className="nav-item">Магазины</Link>
            <Link to="/map" className="nav-item">Карта</Link>
          </nav>
                </section>



      <Outlet />




      <footer className='footer'>

            <div className='container'>

              <div className='footer-wrap'>

            <nav className="footer-nav">
            <Link to="/tabacks" className="f-nav-item">Табаки</Link>
            <Link to="/mixes" className="f-nav-item">Миксы</Link>
            <Link to="/lounges" className="f-nav-item">Лаунжи</Link>
            <Link to="!#" className="f-nav-item">Магазины</Link>
            <Link to="!#" className="f-nav-item">Карта</Link>
          </nav>

          <p> &copy; 2021 HookahPortal.ru</p>
              </div>


            </div>

        </footer>
    </Fragment>

  );

}

export default App;
