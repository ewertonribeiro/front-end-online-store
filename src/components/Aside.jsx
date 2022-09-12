import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import { setProducts } from '../redux/features/products';

export default function Aside() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categorie) => {
      setCategories(categorie);
    });
  });

  async function handleCategoryClick(id) {
    const { results } = await getProductsFromCategoryAndQuery(id);
    dispatch(setProducts({ lista: results }));
  }
  return (
    <aside>
      {categories.map(({ id, name }) => (
        <label htmlFor="categoryRadio" key={ id }>
          {name}
          <input
            onClick={ () => handleCategoryClick(id) }
            type="radio"
            id="categoryRadio"
            data-testid="category"
          />
        </label>
      ))}
    </aside>
  );
}
