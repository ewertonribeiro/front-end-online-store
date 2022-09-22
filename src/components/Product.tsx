import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';
import { add } from '../redux/features/cart';
import '../styles/Product.css';
import Button from './Button';

import formatPrice from '../utils/formatPrice';

export default function Product({
  title,
  price,
  thumbnail,
  id,
  cart,
  shipping,
  ...rest
}: Item) {
  const dispatch = useDispatch();

  return (
    <div className={`product ${cart && 'product-in-cart'}`}>
      {shipping.free_shipping && (
        <div className="frete">
          Frete Grátis
          <FiPackage />
        </div>
      )}
      <div>
        <img src={thumbnail} alt={title} />
        <h2 className="product-title">{title}</h2>
        <p className="product-price">
          <strong>{formatPrice(price)}</strong>
        </p>
      </div>
      <div className="div-button">
        <Link className="saiba-mais" to={`/product/${id}`}>
          Saiba Mais
        </Link>
        <Button
          text="Adicionar ao Carrinho"
          onClick={() =>
            dispatch(
              add({
                item: {
                  title,
                  price,
                  thumbnail,
                  id,
                  shipping,
                  ...rest,
                },
              }),
            )
          }
        />
      </div>
    </div>
  );
}
