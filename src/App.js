import Index from "./components/Index";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import { Link , Route , Routes ,  BrowserRouter} from "react-router-dom";
import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
