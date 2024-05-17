import React, { Fragment } from "react";
import MapVideo from "./../img/map.mp4";

export default function Map() {


  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="map-wrap">

          <h1 className="main-title">Карта</h1>
          <hr className="chertochka" />
          <video autoPlay muted loop id="mapVid">
            <source src={MapVideo} type="video/mp4" />
          </video>
          </div>


        </div>
      </main>
    </Fragment>
  );
}
