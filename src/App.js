//src/app.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cv from './page/Cv';
import Admin from './page/Admin';
import Login from'./page/Login'
import Nopage from './page/Nopage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Cv/>}></Route>
      <Route path='/Admin'element={<Admin/>}></Route>
      <Route path='/Login'element={<Login/>}></Route>
      <Route path='/Nopage'element={<Nopage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
