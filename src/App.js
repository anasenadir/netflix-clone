import Index from "./components/Index";
import Home from "./pages/home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/profile/Profile";
import _404 from "./pages/404/_404"; 
import { Link , Route , Routes ,  BrowserRouter} from "react-router-dom";

import { auth , onAuthStateChanged} from "./helpers/firebase";
import { loginUser , logoutUser } from "./helpers/store/slices/userSlice";
import { useDispatch } from "react-redux";


import './App.css'
import { useEffect } from "react";
function App() {
  const dispatchUserState = useDispatch();

  useEffect(()=>{
    if(!localStorage.getItem('email')){  
        onAuthStateChanged(auth , user=>{
            if(user){
                console.log('login');
                localStorage.setItem('email',user.email);
                dispatchUserState(loginUser(user.email));
            }
            // else{
            //     console.log('logout');
            //     localStorage.removeItem('emial');
            //     dispatchUserState(logoutUser());
            // }
        })
    }else{
      dispatchUserState(loginUser(localStorage.getItem('email')));
    }


  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path="*" element={<_404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
