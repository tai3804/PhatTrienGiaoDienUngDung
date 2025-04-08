// CartContext.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const plusItem = (item) => {
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.ten === item.ten ? { ...i, soLuong: i.soLuong + 1 } : i
      )
    );
  };

  const minusItem = (item) => {
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.ten === item.ten ? { ...i, soLuong: Math.max(i.soLuong - 1, 1) } : i
      )
    );
  };

  const handleOrder = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt hàng?')) {
      setCart([]);
      setShowCart(false);
      alert('Đặt hàng thành công!');
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, showCart, setShowCart, plusItem, minusItem, handleOrder }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
