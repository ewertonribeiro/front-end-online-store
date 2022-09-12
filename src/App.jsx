import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './components/Rotas';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}
