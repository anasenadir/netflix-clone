import Navbar from "../../components/Navbar/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import "./Login.css"
const Login = () => {
    return <div className="login__page">
        <Navbar />
        <div className="login__content__body">
            <h1 className="login__title">Unlimited movies, TV shows, and more.</h1>
            <p className="login__sub__title">Watch anywhere. Cancel anytime.</p>
            <p className="login__title__footer">Ready to watch? Enter your email to create or restart your membership .</p>
            <form className="login__form">
                <input className="login__input" 
                type="text"
                placeholder="Email Address"
                />
                <button className="login__input_button">
                    Get Started <IoIosArrowForward className="login__icon__arrow" />
                </button>
            </form>  
        </div>
    </div>
}

export default Login;