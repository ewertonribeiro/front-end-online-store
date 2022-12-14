import React from 'react';

import formatPrice from '../utils/formatPrice';

import { useAppSelector } from '../redux/hooks/hooks';

interface Props {
  children: React.ReactNode;
}

export default function ShopCartTotal({ children }: Props) {
  const cart = useAppSelector((state) => state.cart.cart);

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
