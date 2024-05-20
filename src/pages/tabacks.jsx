import React from "react";
import { Fragment, useState, useEffect, useContext } from "react";
import { Button, Checkbox, Flex, Typography } from "antd";
import { Breadcrumb } from "react-bootstrap";
import { Helmet } from "react-helmet";
import southVibe from "./../img/southVibe.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Tabacks() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:7777/products")
      .then((res) => {
        
        setData(res.data)
      }).catch((err) => {
        alert(err)
      })
  },[])

  console.log(data);


  return (
    <Fragment>
      <Breadcrumb />
      <Helmet>
        <title>Hookah - Tabacks</title>
      </Helmet>

      <div className="container">
        <header className="tabacks-header">
          <h1 className="header-title">Табаки</h1>
          <hr className="chertochka" />
          <h3 className="header-desc">
            Один из крупнейших производителей табака и аксессуаров для кальянов
            в Российской Федерации
          </h3>
        </header>
        <div className="tabacks-wrap">
          <aside className="tabacks-aside">
            <div className="tabacks-aside-item">
              <h4 className="tabacks-aside-text">Тип вкуса</h4>
            </div>

            <div className="tabacks-aside-item">
              <p className="tabacks-aside-text">Миксы <input type="checkbox" /></p>

              <p className="tabacks-aside-text">Мятные <input type="checkbox" /></p>

              <p className="tabacks-aside-text">Напитки <input type="checkbox" /></p>

              <p className="tabacks-aside-text">Пряные <input type="checkbox" /></p>

              <p className="tabacks-aside-text">Outdoor <input type="checkbox" /></p>
            </div>

            <div className="tabacks-aside-item">
              <p className="tabacks-aside-text">Абрикос <input type="checkbox" /></p>

              <p className="tabacks-aside-text">Алкоголь <input type="checkbox" /></p>

              <p className="tabacks-aside-text">Ананас <input type="checkbox" /></p>

              <p className="tabacks-aside-text">Анис <input type="checkbox" /></p>

              <p className="tabacks-aside-text">Груша <input type="checkbox" /></p>
            </div>
          </aside>

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

                          <article className="tabacks-article">
            <div className="cards-tabacks" id="cards-tabacks">
              {data?.map((product) => {
                return(
                  <div className="card-product">
                <img className="product-image" src={product?.photo} alt="error" />
                <b className="product-category">{product?.category?.categoryName}</b>
                <br />
                <Link to="/tabacks/product/${product.id}" className="product-title">
                     {product?.title}
                </Link>
                <hr />
                <div className="product-taste">
                  <p className="taste-item">{product.category?.taste1}</p>
                  <p className="taste-item">{product.category?.taste2}</p>
                  <p className="taste-item">{product.category?.taste3}</p>
                  <p className="taste-item">{product.category?.taste4}</p>
                  <p className="taste-item">{product.category?.taste5}</p>
               
                </div>
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
