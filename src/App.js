import Index from "./components/Index";
import Home from "./pages/home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/profile/Profile";
import { Link , Route , Routes ,  BrowserRouter} from "react-router-dom";
import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
