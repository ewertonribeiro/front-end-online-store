import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/features/cart';

import Quantity from './Quantity';

import formatPrice from '../utils/formatPrice';

export default function ProductsCart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="product-cart">
          <button type="button" onClick={() => dispatch(remove({ item }))}>
            <FaTrash />
          </button>
          <img src={item.thumbnail} alt={item.title} />
          <p className="product-name">{item.title}</p>
          <Quantity e={item} />
          <p className="product-price">{formatPrice(item.price)}</p>
        </div>
      ))}
    </>
  );
}
