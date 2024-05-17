import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import IdealBreakfast from "./../img/idealBreakfast.png"

export default function Mixes() {
  return (
    <Fragment>
    <Helmet>
      <title>Hookah - mixes</title>
    </Helmet>

    <div className="container">
      <header className="mixes-header">
        <h1 className="header-title">Лаунжи</h1>
        <hr className="chertochka" />
      </header>
      <div className="mixes-wrap">
        <aside className="mixes-aside">
          <div className="mixes-aside-item">
            
                <h4 className="mixes-aside-text">Фильтры</h4>
             
          </div>

          <div className="mixes-aside-item">
           
                <p className="mixes-aside-text">Миксы <input type="checkbox" /></p>
            
                <p className="mixes-aside-text">Мятные <input type="checkbox" /></p>
              
                <p className="mixes-aside-text">Напитки <input type="checkbox" /></p>
              
                <p className="mixes-aside-text">Пряные <input type="checkbox" /></p>
            
          </div>

          <div className="mixes-aside-item">
           
                <h4 className="mixes-aside-text">Фильтры</h4>
             
          </div>
          
          <div className="mixes-aside-item">
            
              <p className="mixes-aside-text">Алкоголь <input type="checkbox" /></p>
              
             
                <p className="mixes-aside-text">Алкоголь <input type="checkbox" /></p>
              
                <p className="mixes-aside-text">Ананас <input type="checkbox" /></p>
              
                <p className="mixes-aside-text">Анис <input type="checkbox" /></p>
           
                <p className="mixes-aside-text">Груша <input type="checkbox" /></p>
            
          </div>
        </aside>

        {/*Products__wrap active*/}
        <article className="mixes-article">
          {/* <Button onClick={handleFilter} icon={<FiFilter />}>
                                  filter & sort
                              </Button> */}

          {/* <div className="Products__filters-right">
                          <button className={`Products__filters-red`} secondary>
                              <p bodyText={"p"}>Models</p>
                          </button>
                          <button secondary>
                              <p bodyText={"p"}>products</p>
                          </button>

                      </div> */}

          <div className="cards-mixes">
            <div className="card-product">
              <img className="product-image" src={IdealBreakfast} alt="error" />
              <b className="product-loc">Лубянка</b>
              <br />
              <Link to="/mixes/product/:id" className="product-title">
                Идеальный завтрак
              </Link>
              <hr />
              <div className="product-price"></div>
            </div>
            <div className="card-product">
              <img className="product-image" src={IdealBreakfast} alt="error" />
              <b className="product-loc">Лубянка</b>
              <br />
              <Link to="/mixes/product/" className="product-title">
                Идеальный завтрак
              </Link>
              <hr />
              <div className="product-price"></div>
            </div>
            <div className="card-product">
              <img className="product-image" src={IdealBreakfast} alt="error" />
              <b className="product-new">НОВИНКА</b>
              <br />
              <Link to="/mixes/product/:id" className="product-title">
                Идеальный завтрак
              </Link>
              <hr />
              <div className="product-price"></div>
            </div>
            <div className="card-product">
              <img className="product-image" src={IdealBreakfast} alt="error" />
              <b className="product-loc">Лубянка</b>
              <br />
              <Link to="/mixes/product/:id" className="product-title">
                Идеальный завтрак
              </Link>
              <hr />
              <div className="product-price"></div>
            </div>
            <div className="card-product">
              <img className="product-image" src={IdealBreakfast} alt="error" />
              <b className="product-loc">Лубянка</b>
              <br />
              <Link to="/mixes/product/:id" className="product-title">
                Идеальный завтрак
              </Link>
              <hr />
              <div className="product-price"></div>
            </div>
            <div className="card-product">
              <img className="product-image" src={IdealBreakfast} alt="error" />
              <b className="product-loc">Лубянка</b>
              <br />
              <a to="/mixes/product/:id" className="product-title">
                Идеальный завтрак
              </a>
              <hr />
              <div className="product-price"></div>
            </div>
          </div>

          <div className="Products__buttons">
            <button primary>load more products</button>
          </div>
        </article>
      </div>
    </div>
  </Fragment>
  )
}