import React from 'react'
import { Fragment } from 'react'
import Kalyan from "./../img/Kalyan.png";
import Hello from "./../img/Hello.png";
import FogOne from "./../img/FogOne.png";
import FogTwo from "./../img/FogTwo.png";
import Portal from "./../img/Portal.png"
import vectorOne from "./../img/vectorOne.svg"
import "./../index.scss"

export default function Main() {
    return (
        <Fragment>

            <div className='main-wrap'>

                <header className='header'>

                    <div className='container'>
                        <div className="kalyan-wrap">
                            <div className="main-hello">
                                <p className="hello-text">Приветствуем на</p>
                                <img src={Hello} alt="error" className="hello-name" />
                                <img src={Kalyan} alt="error" className="hello-kalyan" />
                                <img src={Portal} alt="" className="hello-portal" />
                                <div className="main-subtitle">
                                    <div className="subtitle-item">
                                        <img className='vector-one' src={vectorOne} alt='error' />
                                        <p className="item-text">Здесь ты найдешь
                                            <br />
                                            миксы на любой вкус</p>
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

                    </div>
                </main>

            </div>



        </Fragment>






    )
}

