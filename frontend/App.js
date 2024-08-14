
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/User/home';
import Login from "./Pages/User/login";
import Register from "./Pages/User/register";
import About from './Components/about';
import Contact from './Components/contact';
import Categories from './Pages/User/product';
import CartPage from './Pages/User/cart';
import Payment from './Components/payment';
import Admin from './Components/admin';
import ALogin from './Pages/Admin/adlogin';
import Tracking from './Components/order';
import Customers from './Components/customers';
import Products from './Components/products';
import Reports from './Components/reports';
import Settings from './Components/settings';
import Categorie from './Components/categorie';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/cart" element={<CartPage/>} />
          <Route path='/adlogin' element={<ALogin/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/order' element={<Tracking/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/categorie' element={<Categorie/>}/>
        </Routes>
      </div>
    
    </Router>

  );
}

export default App;
