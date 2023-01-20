import { Route, Routes } from 'react-router-dom';
import './App.css';
import Forgot from './screens/Forgot';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Reset from './screens/Reset';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/reset' element={<Reset/>}/>
      </Routes>
    </div>
  );
}

export default App;
