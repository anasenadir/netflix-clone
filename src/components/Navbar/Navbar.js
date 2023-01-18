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
        
        // return () => {
        //     window.removeEventListener('scroll');
        // };

    }, [])

    return <div className={`nav ${navState && 'show'}`}>
            {
                usersLoginState ? 
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
                !usersLoginState &&
                <button className='nav__signin__button'>
                    <Link to='/signin'>
                        Sign in
                    </Link>
                </button>
                }
                
                <Link to="/profile">
                    {usersLoginState && <img className='nav__login' src={logoAvatar} alt="" />}
                </Link>
            </div>
        </div>
}


export default Navbar;