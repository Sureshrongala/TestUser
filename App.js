import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './LogIn';
import Register from './Register';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
         <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
