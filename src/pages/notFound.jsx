import {Fragment} from "react";
import {Space, Typography} from "antd";
import { Helmet } from "react-helmet";

export default function notFound() {
  return(
      <Fragment>
        <Helmet>
      <title>Hookah - Не будешь ты сегодня курить😶‍🌫️</title>
    </Helmet>
          <section className="not-found">
          </section>
      </Fragment>
  )
}

