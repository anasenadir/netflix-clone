import './Navbar.css';
import logo from '../../assets/Logonetflix.png';
import logoAvatar from "../../assets/Netflix-avatar.png"
import { useEffect, useState } from 'react';

const Navbar = ()=>{
    const [navState , setNavState] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll' , ()=>{
            if(document.documentElement.scrollTop > 100)
                setNavState(true);
            else
                setNavState(false);
            
        });
        
        return () => {
            window.removeEventListener('scroll');
        };

    }, [])

    return <div className={`nav ${navState && 'show'}`}>
            <img className='nav__logo' src={logo} alt="" />
            <img className='nav__login' src={logoAvatar} alt="" />
        </div>
}


export default Navbar;