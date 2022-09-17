import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './components/Rotas';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { setCart } from './redux/features/cart';

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCart());
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}
