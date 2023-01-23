import './Navbar.css';
import logo from '../../assets/Logonetflix.png';
import logoAvatar from "../../assets/Netflix-avatar.png"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ()=>{
    const [navState , setNavState] = useState(false);
    const usersLoginState = useSelector(state => state.user.user); 

    useEffect(()=>{
        window.addEventListener('scroll' , ()=>{
            if(document.documentElement.scrollTop > 100)
                setNavState(true);
            else
                setNavState(false);
            
        });

    }, [])

    return <div className={`nav ${navState && 'show'}`}>
            {
                usersLoginState || localStorage.getItem('email') ? 
                <Link to='/'>
                    <img className='nav__logo' src={logo} alt="" />
                </Link>
                :
                <Link to='/signup'>
                    <img className='nav__logo' src={logo} alt="" />
                </Link>
            }
            <div className='nav__links_container'>
                {
                !usersLoginState  && !localStorage.getItem('email') ? 
                <Link to='/signin'>
                    <button className='nav__signin__button'>
                            Sign in
                    </button>
                </Link>
                :
                <Link to="/profile">
                    <img className='nav__login' src={logoAvatar} alt="profilr__logo" />
                </Link>
                }
                
            </div>
        </div>
}


export default Navbar;