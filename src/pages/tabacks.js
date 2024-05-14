import React from "react";
import { Fragment, useState, useEffect, useContext } from "react";
import { Button, Checkbox, Flex, Typography } from "antd";
import { Breadcrumb } from "react-bootstrap";
import { Helmet } from "react-helmet";
import southVibe from "./../img/southVibe.png"

export default function Tabacks() {
//     const container = document.querySelector("#categories-container")
//     const inputCatalogSearch = document.querySelector("#catalog-search")

//     GetAPIFunc("/tabacks").then(data => {

//         container.innerHTML = ""

//         data.map(item => {
//             const { id, category, name, image } = item
//             container.insertAdjacentHTML("beforeend", `
//             <div class="col col-12 col-md-6 col-lg-4 mb-3">

//                 <a href="./catalog.html?id=${id}" class="card-link">
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
//                                     <a href='/tabackInfo' className='product-title'>${product.title}</a>
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
            <div className="tabacks-catalog">

            </div>

            <div className="container">
                <header className="tabacks-header">
                    <h1 className="header-title">Табаки</h1>
                    <h3 className="header-desc">Один из крупнейших производителей табака и аксессуаров для кальянов в Российской Федерации</h3>
                </header>
                <div className="tabacks-wrap">

                    <aside className='tabacks-aside'>
                        <div className="tabacks-aside-item">

                            <ul>
                                <li>
                                    <h4 className='tabacks-aside-text'>Тип вкуса</h4>
                                </li>
                            </ul>
                        </div>

                        <div className="tabacks-aside-item">


                            <ul>
                                <li>
                                    <p className='tabacks-aside-text'>Миксы</p>
                                </li>

                                <li>
                                    <p className='tabacks-aside-text'>Мятные</p>
                                </li>

                                <li>
                                    <p className='tabacks-aside-text'>Напитки</p>
                                </li>

                                <li>
                                    <p className='tabacks-aside-text'>Пряные</p>
                                </li>

                                <li>
                                    <p className='tabacks-aside-text'>Outdoor</p>
                                </li>
                            </ul>
                        </div>

                        <div className="tabacks-aside-item">

                            <ul>

                                <li>
                                    <p className='tabacks-aside-text'>Абрикос</p>
                                </li>

                                <li>
                                    <p className='tabacks-aside-text'>Алкоголь</p>
                                </li>

                                <li>
                                    <p className='tabacks-aside-text'>Ананас</p>
                                </li>
                                <li>
                                    <p className='tabacks-aside-text'>Анис</p>
                                </li>
                                <li>
                                    <p className='tabacks-aside-text'>Груша</p>
                                </li>
                            </ul>
                        </div>



                    </aside>

                    {/*Products__wrap active*/}
                    <article className="tabacks-article">


                        <Flex align={"center"} justify={"space-between"} className="Products__filters">
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

                            <div className='cards'>
                                
                            <div className='card-product'>
                                    <img className='product-image' src={southVibe} alt='error' />
                                    <b className='product-category'>Darkside</b>
                                    <br />
                                    <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                    <hr />
                                    <div className='product-taste'>
                                        <p className='taste-item'>Груша</p>
                                        <p className='taste-item'>Манго</p>
                                    </div>
                                </div>
                                <div className='card-product'>
                                    <img className='product-image' src={southVibe} alt='error' />
                                    <b className='product-category'>Darkside</b>
                                    <br />
                                    <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                    <hr />
                                    <div className='product-taste'>
                                        <p className='taste-item'>Груша</p>
                                        <p className='taste-item'>Манго</p>
                                    </div>
                                </div>
                                <div className='card-product'>
                                    <img className='product-image' src={southVibe} alt='error' />
                                    <b className='product-category'>Darkside</b>
                                    <br />
                                    <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                    <hr />
                                    <div className='product-taste'>
                                        <p className='taste-item'>Груша</p>
                                        <p className='taste-item'>Манго</p>
                                    </div>
                                </div>
                                <div className='card-product'>
                                    <img className='product-image' src={southVibe} alt='error' />
                                    <b className='product-category'>Darkside</b>
                                    <br />
                                    <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                    <hr />
                                    <div className='product-taste'>
                                        <p className='taste-item'>Груша</p>
                                        <p className='taste-item'>Манго</p>
                                    </div>
                                </div>
                                <div className='card-product'>
                                    <img className='product-image' src={southVibe} alt='error' />
                                    <b className='product-category'>Darkside</b>
                                    <br />
                                    <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                    <hr />
                                    <div className='product-taste'>
                                        <p className='taste-item'>Груша</p>
                                        <p className='taste-item'>Манго</p>
                                    </div>
                                </div>
                                <div className='card-product'>
                                    <img className='product-image' src={southVibe} alt='error' />
                                    <b className='product-category'>Darkside</b>
                                    <br />
                                    <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                    <hr />
                                    <div className='product-taste'>
                                        <p className='taste-item'>Груша</p>
                                        <p className='taste-item'>Манго</p>
                                    </div>
                                </div>
                                

                            </div>
                        </Flex>


                        <div className="Products__buttons">
                            <button primary>load more products</button>
                        </div>
                    </article>
                </div>





            </div>
        </Fragment>
    )

}