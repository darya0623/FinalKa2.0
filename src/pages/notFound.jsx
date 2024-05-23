import {Fragment} from "react";
import {Space, Typography} from "antd";
import { Helmet } from "react-helmet";
import NF from "../img/404.webp"

export default function notFound() {
  return(
      <Fragment>
        <Helmet>
      <title>Hookah - Не будешь ты сегодня курить😶‍🌫️</title>
    </Helmet>
          <section className="not-found">
            <div className="nf-wrap">
              <h1 className="header-title">Страница не найдена</h1>
                            <p className="header-desc">Не будешь ты сегодня курить</p>
              <hr className="chertochka" />
              <img src={NF} alt="" />
            </div>
          </section>
      </Fragment>
  )
}

