import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { add } from '../redux/features/cart';

import '../styles/Product.css';
import Button from './Button';

export default function Product({ title, price, thumbnail, id, ...rest }) {
  const dispatch = useDispatch();

  const formatNumber = price => Number(price)
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  return (
    <div className="product" >
      <div>
        <img src={thumbnail} alt={title} />
        <h2 className="product-title">{title}</h2>
        <p className="product-price">
          <strong>{formatNumber(price)}</strong>
        </p>
      </div>
      <div className="div-button">
        <Link className="saiba-mais" to={`/product/${id}`} >Saiba Mais</Link>
        <Button
          text="Adicionar ao Carrinho"
          onClick={() => dispatch(add({
            item: {
              title,
              price,
              thumbnail,
              id,
              ...rest
            }
          }))}
        />
      </div>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.number,
}.isRequired;
