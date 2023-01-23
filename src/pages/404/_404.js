import "./_404.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const _404 = () => {
    return <div className="container__404">
        <h1>404</h1>
        <div className="cloak__wrapper">
            <div className="cloak__container">
                <div className="cloak"></div>
            </div>
        </div>

        <div className="info">
            <h2>We can't find that page</h2>
            <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
            <Link to="/" className="to__home">
                Home
            </Link>
        </div>
    </div>
}


export default _404;