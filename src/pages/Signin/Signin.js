import Navbar from "../../components/Navbar/Navbar";
import { Link, Route, useNavigate } from "react-router-dom";
import "./signin.css"
import { useEffect, useRef } from "react"
import { auth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "../../helpers/firebase";
import { useSelector } from "react-redux";
const Signin = ()=>{
    const email = useRef('');
    const password = useRef('');
    const navigate  = useNavigate();
    const usersLoginState = useSelector(state => state.user.user); 
    useEffect(()=>{
        if(usersLoginState || localStorage.getItem('email') !== null){
            return navigate('/');
        }
    }, [usersLoginState])

    const signup = (e)=> {
        e.preventDefault();
        createUserWithEmailAndPassword(auth , email.current.value , password.current.value)
        .catch((error)=>console.log(error));

        
    }

    const login = (e)=> {
        e.preventDefault();
        signInWithEmailAndPassword(auth , 
            email.current.value , 
            password.current.value).then(data => data.user ).then(user =>{
                localStorage.setItem('email',user.email);
                return navigate('/');
            })
        .catch(error => console.log(error));
    } 


    return <div className="signin__page">
        <Navbar />
            <form className="signin__form">
                <h2 className="signin__title">Sign In</h2>
                <div className="signin__inputs__container">
                    <input className="signin__input" 
                    type="text"
                    ref={email}
                    placeholder="Email Address"
                    />
                    <input className="signin__input" 
                    type="password"
                    ref={password}
                    placeholder="Password Address"
                    />
                </div>
                <button className="signin__input_button" onClick={login}>
                    sign in
                </button>
                <div className="sigin__help">
                    <label htmlFor="remember">
                        <input type="checkbox" />
                        remember me 
                    </label>
                    <a href="#" onClick={signup}>need help?</a>
                </div>

                <div className="sigin__footer">
                    <div className="footer__top">
                        New to Netflix? <Link to="/signup">Sign up now.</Link> 
                    </div>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                </div>
            </form>  
    </div>
}


export default Signin;