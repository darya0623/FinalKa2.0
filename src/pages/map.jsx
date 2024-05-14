import React, { Fragment } from 'react'
import MapVideo from "./../img/map.mp4"

export default function Map() {
  return (
    <Fragment>

        <main>
            <div className='container'>
            <h1 className='main-title'>Карта</h1>
                        <hr className='chertochka'/>
                <video autoPlay loop controls src={MapVideo}></video>
            </div>
        </main>
    </Fragment>
  )
}

