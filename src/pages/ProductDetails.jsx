import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getProductById } from '../services/api';
import { add } from '../redux/features/cart';

import '../styles/ProductDetails.css';
import Button from '../components/Button';
import Quantity from '../components/Quantity';

function ProductDetails(props) {

  const { match: { params: { id } } } = props;

  const [product, setProduct] = useState({})
  const dispatch = useDispatch()

  const cart = useSelector(({ cart }) => cart.cart);

  useEffect(() => {
    const item = cart.find(item => item.id == id);

    if (!item) {
      getProductById(id)
        .then((res) => {
          res.quantity = 0;
          setProduct(res);
        });
    } else {
      setProduct(item)
    }

  }, [cart]);

  const { price, title, thumbnail } = product;

  const formatNumber = price => Number(price)
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })

  return (
    <div className="page">
      <div className="left-section">
        <div className="content">
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={thumbnail} alt={title} data-testid="product-detail-image" />
        </div>
      </div>
      <div className="right-section">
        <div className="product-specs">
          <h2>Especificações Técnicas</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
        <div className="product-info-cart">
          <p data-testid="product-detail-price">
            <strong>{formatNumber(price)}</strong>
          </p>
          <Quantity e={product} />
          <Button text="Adicionar ao Carrinho" onClick={() => dispatch(add({ item: product }))} type="button" />
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default withRouter(ProductDetails);
