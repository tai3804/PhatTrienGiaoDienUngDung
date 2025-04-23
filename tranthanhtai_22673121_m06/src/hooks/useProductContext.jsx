// src/hooks/useProductContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [],
  loading: false,
  error: null
};

function productReducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(p =>
          p.id === action.payload.id ? action.payload : p
        )
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // 1. Khi mount, nạp từ localStorage nếu có, ngược lại fetch từ data.json
  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      dispatch({ type: 'SET_PRODUCTS', payload: JSON.parse(stored) });
    } else {
      fetchProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Khi state.products thay đổi, lưu vào localStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(state.products));
  }, [state.products]);

  const fetchProducts = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await fetch('/src/data/data.json');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      dispatch({ type: 'SET_PRODUCTS', payload: data });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
  };

  const removeProduct = (id) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id });
  };

  const updateProduct = (product) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: product });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        error: state.error,
        fetchProducts,
        addProduct,
        removeProduct,
        updateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
