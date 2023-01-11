import './Navbar.css';
import logo from '../../assets/Logonetflix.png';
import logoAvatar from "../../assets/Netflix-avatar.png"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    const [navState , setNavState] = useState(false);
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
            <Link to='/'>
                <img className='nav__logo' src={logo} alt="" />
            </Link>
            <div className='nav__links_container'>
                <button className='nav__signin__button'>Sign in</button>
                <Link to="/login">
                    <img className='nav__login' src={logoAvatar} alt="" />
                </Link>
            </div>
        </div>
}


export default Navbar;