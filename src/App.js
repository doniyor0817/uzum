import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarMain from './components/navbar/NavbarMain';
import Home from './components/router/home/Home';
import Wishes from './components/router/wishes/Wishes';
import Login from './components/router/login/Login';
import Cart from './components/router/cart/Cart';
import Notfound from './components/router/not-found/Notfound';
function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishes' element={<Wishes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
