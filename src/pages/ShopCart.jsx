import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '../components/Button';
import Form from '../components/Form';

import '../styles/ShopCart.css';
import ProductsCart from '../components/ProductsCart';
import ShopCartTotal from '../components/ShopCartTotal';

export default function ShopCart() {
  const cart = useSelector((state) => state.cart.cart);

  const [buy, setBuy] = useState(false);

  return (
    <div>
      {cart.length === 0 ? (
        <div className="message-container">
          <h1>Seu carrinho está vazio</h1>
        </div>
      ) : (
        <div className="page">
          <div className="left-section">
            <div className="content">
              <h1>Carrinho de compras</h1>
              <ProductsCart />
            </div>
          </div>
          <div className="right-section">
            {buy ? (
              <div className="payment-section">
                <h1>Informações do Comprador!</h1>
                <Form />
              </div>
            ) : (
              <ShopCartTotal>
                <Button
                  style={{ padding: '1rem 5rem', alignSelf: 'center' }}
                  text="Finalizar Compra"
                  type="button"
                  onClick={() => setBuy(true)}
                />
              </ShopCartTotal>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
