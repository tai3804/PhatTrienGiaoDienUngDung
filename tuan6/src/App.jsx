import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

function App() {
  const [data, setData] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("src/data/data.json")
      .then((r) => r.json())
      .then(setData);
  }, []);

  
  const addToCart = (newItem) => {
    setCartItems(() => {
      const existingItem = cartItems.find((item) => item.ten === newItem.ten);
      if (existingItem) {
        return cartItems.map((item) =>
          item.ten === newItem.ten ? { ...item, soLuong: item.soLuong + 1 } : item
        );
      } else {
        return [...cartItems, { ten: newItem.ten, gia: newItem.gia, img: newItem.img, soLuong: 1 }];
      }
    });

    console.log(cartItems);
    
  };
  

  return (
    <>
      <Header setShowCart = {setShowCart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu data={data} addToCart={addToCart} />}
        />
      </Routes>
      <Footer />

      {showCart && <Cart data={cartItems} setData={setCartItems} setShowCart={setShowCart} />}

    </>
  );
}

export default App;