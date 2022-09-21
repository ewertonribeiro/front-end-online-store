import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rotas from './components/Rotas';
import Header from './components/Header';
import { setCart } from './redux/features/cart';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCart());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}
