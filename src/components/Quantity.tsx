import { useEffect, useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { add, sub } from '../redux/features/cart';

import '../styles/Quantity.css';

import { UseAppDispatch, useAppSelector } from '../redux/hooks/hooks';

function Quantity(item: Item) {
  const dispatch = UseAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setInCart(cart.some((e) => e.id === item.id));
  }, [cart]);

  return (
    <div className="quantity">
      {inCart && (
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={() => dispatch(sub({ item: item }))}
        >
          <HiMinus />
        </button>
      )}
      <div className="quantity-div">
        <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
      </div>
      {inCart && (
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={() => dispatch(add({ item: item }))}
        >
          <HiPlus />
        </button>
      )}
    </div>
  );
}

export default Quantity;
