import React from 'react'
import { Fragment } from 'react'
import Kalyan from "./../img/Kalyan.png";
import Hello from "./../img/Hello.png";
import FogOne from "./../img/FogOne.png";
import FogTwo from "./../img/FogTwo.png";
import Portal from "./../img/Portal.png"
import vectorOne from "./../img/vectorOne.svg"
import vectorTwo from "./../img/vectorTwo.svg"
import southVibe from "./../img/southVibe.png"
import { Helmet } from 'react-helmet';
import "./../index.scss"

export default function Main() {
    return (
        <Fragment>
            <Helmet>
            <title>Hookah - Главная</title>
        </Helmet>

            <div className='main-wrap'>

                <header className='header'>

                    <div className='container'>
                        <div className="kalyan-wrap">
                            <div className="main-hello">
                                <p className="hello-text">Приветствуем на</p>
                                <img src={Hello} alt="error" className="hello-name" />
                                <img src={Kalyan} alt="error" className="hello-kalyan" />
                                <img src={Portal} alt="" className="hello-portal" />
                                <div className='subtitle-wrap'>

                                    <div className="main-subtitle">
                                        <div className="subtitle-item">
                                            <img className='vector-one' src={vectorOne} alt='error' />
                                            <img className='vector-two' src={vectorTwo} alt='error' />
                                            <p className="item-text">Здесь ты найдешь
                                                <br />
                                                миксы на любой вкус</p>
                                        </div>
                                        <div className="subtitle-item">
                                            <img className='vector-one' src={vectorOne} alt='error' />
                                            <img className='vector-two2' src={vectorTwo} alt='error' />
                                            <p className="item-text">И сможешь поделиться
                                                <br />
                                                своими миксами</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            {/* <img src={FogOne} alt="error" className="hello-fog1" />
                            <img src={FogTwo} alt="error" className="hello-fog2" /> */}

                        </div>

                    </div>
                </header>

                <main className='main'>
                    <div className='container'>
                        <h1 className='main-title'>Популярные табаки</h1>
                        <hr className='chertochka'/>
                        <div className='cards'>
                            <div className='card-product'>
                                <img className='product-image' src={southVibe} alt='error'/>
                                <b className='product-category'>Darkside</b>
                                <br/>
                                <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                <hr/>
                                <div className='product-taste'>
                                    <p className='taste-item'>Груша</p>
                                    <p className='taste-item'>Манго</p>
                                </div>
                            </div>
                            <div className='card-product'>
                                <img className='product-image' src={southVibe} alt='error'/>
                                <b className='product-category'>Darkside</b>
                                <br/>
                                <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                <hr/>
                                <div className='product-taste'>
                                    <p className='taste-item'>Груша</p>
                                    <p className='taste-item'>Манго</p>
                                </div>
                            </div>
                            <div className='card-product'>
                                <img className='product-image' src={southVibe} alt='error'/>
                                <b className='product-category'>Darkside</b>
                                <br/>
                                <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                <hr/>
                                <div className='product-taste'>
                                    <p className='taste-item'>Груша</p>
                                    <p className='taste-item'>Манго</p>
                                </div>
                            </div>
                            <div className='card-product'>
                                <img className='product-image' src={southVibe} alt='error'/>
                                <b className='product-category'>Darkside</b>
                                <br/>
                                <a href='/tabackInfo' className='product-title'>Южный Вайб</a>
                                <hr/>
                                <div className='product-taste'>
                                    <p className='taste-item'>Груша</p>
                                    <p className='taste-item'>Манго</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className='create-section-one'>
                        <div className='container'>
                            <div className='create-title'>

                            <h1 className='title-item'>Создай свой микс</h1>
                            <p className='create-desc'>Мы рады тому, что способны удовлетворить даже самые притязательные 
                            <br/>
                            требования наших Клиентов, а в ближайших планах нашей компании, еще 
                            <br/>
                            больше расширить ассортимент товаров и услуг. </p>
                            </div>
                        </div>
                    </section>

                    <section className='create-section-two'>
                            <div className='container'>
                                <h1 className='create-title-popular'>Популярные табаки</h1>

                            </div>
                    </section>
                </main>

            </div>



        </Fragment>






    )
}

