import React from "react";
import { Fragment, useState, useEffect, useContext } from "react";
import { Button, Checkbox, Flex, Typography } from "antd";
import { Breadcrumb } from "react-bootstrap";
import { Helmet } from "react-helmet";
import southVibe from "./../img/southVibe.png";
import { Link } from "react-router-dom";

export default function Tabacks() {
  //     const container = document.querySelector("#categories-container")
  //     const inputCatalogSearch = document.querySelector("#catalog-search")

  //     GetAPIFunc("/tabacks").then(data => {

  //         container.innerHTML = ""

  //         data.map(item => {
  //             const { id, category, name, image } = item
  //             container.insertAdjacentHTML("beforeend", `
  //             <div class="col col-12 col-md-6 col-lg-4 mb-3">

  //                 <a to="./catalog.html?id=${id}" class="card-link">
  //                     <div class="card">
  //                         <img src="${image}" class="card-img-top" alt="phones">
  //                         <div class="card-body">
  //                             <h5 class="card-title">${name}</h5>
  //                         </div>
  //                     </div>
  //                 </a>
  //             </div>
  //             `)
  //         })
  //     })

  //     inputCatalogSearch.addEventListener("input", (e)=>{
  //         GetAPIFunc(`/catalog?q=${e.target.value}`).then(data => {

  //             container.innerHTML = ""

  //             data.map(item => {
  //                 const { id, category, name, image } = item
  //                 container.insertAdjacentHTML("beforeend", `
  //                 <div className='card-product'>
  //                                     <img className='product-image' src={southVibe} alt='error' />
  //                                     <b className='product-category'>Darkside</b>
  //                                     <br />
  //                                     <a to='/tabacks/product/:id' className='product-title'>${product.title}</a>
  //                                     <hr />
  //                                     <div className='product-taste'>
  //                                         <p className='taste-item'>Груша</p>
  //                                         <p className='taste-item'>Манго</p>
  //                                     </div>
  //                                 </div>
  //                 `)
  //             })
  //         })
  //     })
  // }

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
          <article className="tabacks-article">
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

            <div className="cards-tabacks">
              <div className="card-product">
                <img className="product-image" src={southVibe} alt="error" />
                <b className="product-category">Darkside</b>
                <br />
                <Link to="/tabacks/product/:id" className="product-title">
                  Южный Вайб
                </Link>
                <hr />
                <div className="product-taste">
                  <p className="taste-item">Груша</p>
                  <p className="taste-item">Манго</p>
                </div>
              </div>
              <div className="card-product">
                <img className="product-image" src={southVibe} alt="error" />
                <b className="product-category">Darkside</b>
                <br />
                <Link to="/tabacks/product/" className="product-title">
                  Южный Вайб
                </Link>
                <hr />
                <div className="product-taste">
                  <p className="taste-item">Груша</p>
                  <p className="taste-item">Манго</p>
                </div>
              </div>
              <div className="card-product">
                <img className="product-image" src={southVibe} alt="error" />
                <b className="product-category">Darkside</b>
                <br />
                <Link to="/tabacks/product/:id" className="product-title">
                  Южный Вайб
                </Link>
                <hr />
                <div className="product-taste">
                  <p className="taste-item">Груша</p>
                  <p className="taste-item">Манго</p>
                </div>
              </div>
              <div className="card-product">
                <img className="product-image" src={southVibe} alt="error" />
                <b className="product-category">Darkside</b>
                <br />
                <Link to="/tabacks/product/:id" className="product-title">
                  Южный Вайб
                </Link>
                <hr />
                <div className="product-taste">
                  <p className="taste-item">Груша</p>
                  <p className="taste-item">Манго</p>
                </div>
              </div>
              <div className="card-product">
                <img className="product-image" src={southVibe} alt="error" />
                <b className="product-category">Darkside</b>
                <br />
                <Link to="/tabacks/product/:id" className="product-title">
                  Южный Вайб
                </Link>
                <hr />
                <div className="product-taste">
                  <p className="taste-item">Груша</p>
                  <p className="taste-item">Манго</p>
                </div>
              </div>
              <div className="card-product">
                <img className="product-image" src={southVibe} alt="error" />
                <b className="product-category">Darkside</b>
                <br />
                <a to="/tabacks/product/:id" className="product-title">
                  Южный Вайб
                </a>
                <hr />
                <div className="product-taste">
                  <p className="taste-item">Груша</p>
                  <p className="taste-item">Манго</p>
                </div>
              </div>
            </div>

            {/* <div className="Products__buttons">
                            <button primary>load more products</button>
                        </div> */}
          </article>
        </div>
      </div>
    </Fragment>
  );
}
