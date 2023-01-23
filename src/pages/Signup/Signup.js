import Navbar from "../../components/Navbar/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Signup = () => {
    const usersLoginState  = useSelector(state => state.user.user);
    const navigate         = useNavigate();

    useEffect (()=>{
        if(usersLoginState || localStorage.getItem('email') !== null){
            return navigate('/');
        }
    }, [usersLoginState])

    return  <div className="signup__page">
                <Navbar />
                <div className="signup__content__body">
                    <h1 className="signup__title">Unlimited movies, TV shows, and more.</h1>
                    <p className="signup__sub__title">Watch anywhere. Cancel anytime.</p>
                    <p className="signup__title__footer">Ready to watch? Enter your email to create or restart your membership .</p>
                    <form className="signup__form">
                        <input className="signup__input" 
                            type="text"
                            placeholder="Email Address"
                        />
                        <button className="signup__input_button" onClick={(e)=>e.preventDefault()}>
                            Get Started <IoIosArrowForward className="signup__icon__arrow" />
                        </button>
                    </form>  
                </div>
            </div>
}

export default Signup;