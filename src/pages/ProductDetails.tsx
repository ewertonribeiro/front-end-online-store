import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseAppDispatch, useAppSelector } from '../redux/hooks/hooks';

import { getProductById } from '../services/api';
import { add } from '../redux/features/cart';

import '../styles/ProductDetails.css';
import Button from '../components/Button';
import Quantity from '../components/Quantity';

import formatPrice from '../utils/formatPrice';
import { FiPackage } from 'react-icons/fi';

interface Param {
  id: string;
}

function ProductDetails() {
  const { id }: Param = useParams();

  const [item, setItem] = useState<Item | undefined>();
  const dispatch = UseAppDispatch();

  const cart = useAppSelector((state) => state.cart.cart);

  useEffect(() => {
    const item = cart.find((item) => item.id == id);

    if (!item) {
      getProductById(id).then((res) => {
        res.quantity = 0;
        setItem(res);
      });
    } else {
      setItem(item);
    }
  }, [cart]);

  return (
    <div className="page">
      {!item ? (
        <div />
      ) : (
        <>
          <div className="left-section">
            <div className="content">
              {item.shipping.free_shipping && (
                <div className="frete">
                  Frete Grátis
                  <FiPackage />
                </div>
              )}
              <h2>{item.title}</h2>
              <img src={item.thumbnail} alt={item.title} />
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
                <strong>{formatPrice(item.price)}</strong>
              </p>
              <Quantity {...item} />
              <Button
                text="Adicionar ao Carrinho"
                onClick={() => dispatch(add({ item }))}
                type="button"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
