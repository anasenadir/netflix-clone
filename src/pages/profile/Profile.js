
import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css"
import profile_avatar from "../../assets/Netflix-avatar.png"
import { auth  ,signOut } from "../../helpers/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import {logoutUser} from "../../helpers/store/slices/userSlice"

const Profile  = () => {
    const userEmail = useSelector(state => state.user.user); 
    const navigate = useNavigate();
    const dispatchUserState = useDispatch();


    useEffect(()=>{
        if(!userEmail && !localStorage.getItem('email')){
            return navigate('/signup');
        }
    }, [userEmail])


    const logout = ()=>{
        signOut(auth).then(() => {
            localStorage.removeItem('email');
            dispatchUserState(logoutUser());
        }).catch((error) => {
        // An error happened.
            console.log(error);
        });
    }
    return  <div className="profile__container">
        <Navbar />

        <div className="profile__body">
            <h2 className="profile__body__title">Edit Profile</h2>
            <div className="profile__info">
                <img className="profile__avatar" src={profile_avatar} alt="avatar" />

                <div className="profile__info__details">
                    <input type="text" readOnly value={userEmail ? userEmail : ""}/>
                    <h5 className="profile__info__plans__title">Plan (Current Plan Premium)</h5>
                    <div className="profile__info__plans">
                        <p className="profile__plans__renewal_date">Renewal Date: 04/03/2023</p>
                        <div className="plan__type">
                            <p className="plan__type__name">
                                Netflix Standard <span>1080p</span>
                            </p>
                            <button className="plan__type__button">Subscribe</button>
                        </div>
                        <div className="plan__type">
                            <p className="plan__type__name">
                                Netflix Basic <span>480p</span> 
                            </p>
                            <button className="plan__type__button">Subscribe</button>
                        </div>
                        <div className="plan__type">
                            <p className="plan__type__name">
                                Netflix Premium <span>4K+HDR</span>
                            </p>
                            <button className="plan__type__button current">Current Plan</button>
                        </div>
                    </div>
                    <button className="profile__details__button" onClick={logout}>Sign out</button>
                </div>
            </div>
        </div>
    </div>
}


export default Profile;
