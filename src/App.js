import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import {Routes,Route} from 'react-router-dom'

function App(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
