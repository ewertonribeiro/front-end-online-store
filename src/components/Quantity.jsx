import { useDispatch } from 'react-redux';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { add, sub } from '../redux/features/cart';

import '../styles/Quantity.css';

function Quantity({ e }) {
  const dispatch = useDispatch();

  return (
    <div className="quantity">
      <button
        type="button"
        data-testid="product-decrease-quantity"
        onClick={() => dispatch(sub({ item: e }))}
      >
        <HiMinus />
      </button>
      <div className="quantity-div">
        <p data-testid="shopping-cart-product-quantity">{e.quantity}</p>
      </div>
      <button
        type="button"
        data-testid="product-increase-quantity"
        onClick={() => dispatch(add({ item: e }))}
      >
        <HiPlus />
      </button>
    </div>
  );
}

export default Quantity;