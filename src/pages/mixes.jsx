import React from "react";
import { Fragment, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import IdealBreakfast from "./../img/idealBreakfast.png";
import axios from "axios";

export default function Mixes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7777/mixes")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  console.log(data);

  return (
    <Fragment>
      <Helmet>
        <title>Hookah - Миксы 😶‍🌫️</title>
      </Helmet>

      <div className="container">
        <header className="mixes-header">
          <h1 className="header-title">Миксы</h1>
          <hr className="chertochka" />
        </header>
        <div className="mixes-wrap">
          {/* <aside className="mixes-aside">
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
        </aside> */}

          {/*Products__wrap active*/}
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

<article className="mixes-article">
            <div className="cards-mixes" id="cards-mixes">
              {data?.map((product) => {
                return(
                  <div className="card-product">
                <img className="product-image" src={product?.photo} alt="error" />
                <br />
                <p className="product-title">
                     {product?.title}
                </p>
                
                <hr />
                <b className="product-category">{product?.category?.categoryName1}</b>
                <br />
                <b className="product-category">{product?.category?.categoryName2}</b>
                
              </div>
                )
              })}

            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
}
