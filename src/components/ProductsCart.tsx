import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { remove } from '../redux/features/cart';

import Quantity from './Quantity';
import formatPrice from '../utils/formatPrice';

import { UseAppDispatch, useAppSelector } from '../redux/hooks/hooks';

export default function ProductsCart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = UseAppDispatch();

  const reversedCart = cart.slice(0).reverse();

  return (
    <div className="products-cart-container">
      {reversedCart.map((item) => (
        <div key={item.id} className="product-cart">
          <button type="button" onClick={() => dispatch(remove({ item }))}>
            <FaTrash />
          </button>
          <img src={item.thumbnail} alt={item.title} />
          <p className="product-name">{item.title}</p>
          <Quantity {...item} />
          <p className="product-price">{formatPrice(item.price)}</p>
        </div>
      ))}
    </div>
  );
}
