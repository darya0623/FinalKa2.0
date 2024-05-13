import './App.css';
import * as React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logo from "./../src/img/logo.svg"
import { Fragment } from 'react';

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
            <a href="/main"><img className="nav-logo" src={logo} alt="error" /></a>
            <a href="/tabacks" className="nav-item">Табаки</a>
            <a href="/mixes" className="nav-item">Миксы</a>
            <a href="/lounges" className="nav-item">Лаунжи</a>
            <a href="!#" className="nav-item">Магазины</a>
            <a href="!#" className="nav-item">Карта</a>
            <a href="!#" className="nav-item">Мои табаки</a>
            <a href='/login' className="nav-item">Войти</a>
          </nav>
        </div>
      </header>



      <Outlet />


      <footer className='footer'>

            <div className='container'>

            <nav className="footer-nav">
            <a href="/tabacks" className="f-nav-item">Табаки</a>
            <a href="/mixes" className="f-nav-item">Миксы</a>
            <a href="/lounges" className="f-nav-item">Лаунжи</a>
            <a href="!#" className="f-nav-item">Магазины</a>
            <a href="!#" className="f-nav-item">Карта</a>
          </nav>

            </div>

        </footer>
    </Fragment>

  );

}

export default App;
