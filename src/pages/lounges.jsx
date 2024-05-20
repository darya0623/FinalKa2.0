import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoungeImage from "./../img/lounge.png";
import { Checkbox } from "antd";

const Lounges = () => {
  return (
    <Fragment>
     <Helmet>
      <title>Hookah - Места для курева 😶‍🌫️</title>
    </Helmet>


      <div className="container">
        <header className="lounges-header">
          <h1 className="header-title">Лаунжи</h1>
          <hr className="chertochka" />
        </header>
        <div className="lounges-wrap">
          {/* <aside className="lounges-aside">
            <div className="lounges-aside-item">
              
                  <h4 className="lounges-aside-text">Фильтры</h4>
               
            </div>

            <div className="lounges-aside-item">
             
                  <p className="lounges-aside-text">Миксы <input type="checkbox" /></p>
              
                  <p className="lounges-aside-text">Мятные <input type="checkbox" /></p>
                
                  <p className="lounges-aside-text">Напитки <input type="checkbox" /></p>
                
                  <p className="lounges-aside-text">Пряные <input type="checkbox" /></p>
              
            </div>

            <div className="lounges-aside-item">
             
                  <h4 className="lounges-aside-text">Фильтры</h4>
               
            </div>
            
            <div className="lounges-aside-item">
              
                <p className="lounges-aside-text">Алкоголь <input type="checkbox" /></p>
                
               
                  <p className="lounges-aside-text">Алкоголь <input type="checkbox" /></p>
                
                  <p className="lounges-aside-text">Ананас <input type="checkbox" /></p>
                
                  <p className="lounges-aside-text">Анис <input type="checkbox" /></p>
             
                  <p className="lounges-aside-text">Груша <input type="checkbox" /></p>
              
            </div>
          </aside> */}

          {/*Products__wrap active*/}
          <article className="lounges-article">
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

            <div className="cards-lounges">
              <div className="card-product">
                <img className="product-image" src={LoungeImage} alt="error" />
                <b className="product-loc">Лубянка</b>
                <br />
                <Link to="/lounges/product/:id" className="product-title">
                  МЯТА LOUNGE На Лубянке
                </Link>
                <hr />
                <div className="product-price"></div>
              </div>
              <div className="card-product">
                <img className="product-image" src={LoungeImage} alt="error" />
                <b className="product-loc">Лубянка</b>
                <br />
                <Link to="/lounges/product/" className="product-title">
                  МЯТА LOUNGE На Лубянке
                </Link>
                <hr />
                <div className="product-price"></div>
              </div>
              <div className="card-product">
                <img className="product-image" src={LoungeImage} alt="error" />
                <b className="product-loc">Лубянка</b>
                <br />
                <Link to="/lounges/product/:id" className="product-title">
                  МЯТА LOUNGE На Лубянке
                </Link>
                <hr />
                <div className="product-price"></div>
              </div>
              <div className="card-product">
                <img className="product-image" src={LoungeImage} alt="error" />
                <b className="product-loc">Лубянка</b>
                <br />
                <Link to="/lounges/product/:id" className="product-title">
                  МЯТА LOUNGE На Лубянке
                </Link>
                <hr />
                <div className="product-price"></div>
              </div>
              <div className="card-product">
                <img className="product-image" src={LoungeImage} alt="error" />
                <b className="product-loc">Лубянка</b>
                <br />
                <Link to="/lounges/product/:id" className="product-title">
                  МЯТА LOUNGE На Лубянке
                </Link>
                <hr />
                <div className="product-price"></div>
              </div>
              <div className="card-product">
                <img className="product-image" src={LoungeImage} alt="error" />
                <b className="product-loc">Лубянка</b>
                <br />
                <a to="/lounges/product/:id" className="product-title">
                  МЯТА LOUNGE На Лубянке
                </a>
                <hr />
                <div className="product-price"></div>
              </div>
            </div>

            
          </article>
        </div>
      </div>
    </Fragment>
  );
};

export default Lounges;
