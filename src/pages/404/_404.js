// import "./_404.css";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { useEffect } from "react";
import style from  './_404.module.css';
const _404 = () => {    
    return <div className={style.container__404}>
        <h1 className={style.title__404}>404</h1>
        <div className={style.cloak__wrapper}>
            <div className={style.cloak__container}>
                <div className={style.cloak}></div>
            </div>
        </div>

        <div className={style.info}>
            <h2 className={style.info__subTitle}>We can't find that page</h2>
            <p className={style.info__text}>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
            <Link to="/" className={style.to__home}>
                Home
            </Link>
        </div>
    </div>
}


export default _404;