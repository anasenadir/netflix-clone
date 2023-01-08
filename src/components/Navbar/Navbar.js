import './Navbar.css';
import logo from '../../assets/Logonetflix.png';
import logoAvatar from "../../assets/Netflix-avatar.png"

const Navbar = ()=>{
    return <div className='nav__header'>
            <img class='nav__logo' src={logo} alt="" />
            <img class='nav__login' src={logoAvatar} alt="" />
        </div>
}


export default Navbar;