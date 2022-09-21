import React from 'react';
import { useSelector } from 'react-redux';

import formatPrice from '../utils/formatPrice';

export default function ShopCartTotal({ children }) {
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce(
    (acc, { quantity, price }) => (acc += quantity * price),
    0,
  );

  return (
    <div className="shopcart-total">
      <h1>Valor Total Da Compra:</h1>
      <h3>{formatPrice(totalPrice)}</h3>
      {children}
    </div>
  );
}
