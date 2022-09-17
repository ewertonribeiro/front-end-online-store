import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import { setProducts } from '../redux/features/products';

import '../styles/Aside.css';

export default function Aside() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categorie) => {
      setCategories(categorie);
    });
  }, []);

  async function handleCategoryClick(id) {
    const { results } = await getProductsFromCategoryAndQuery(id);
    dispatch(setProducts({ lista: results }));
  }
  return (
    <aside>
      <h1 className="aside-title"> Categorias </h1>
      <div className="separator" />
      {categories.map(({ id, name }) => (
        <label htmlFor={name} key={id}>
          <input
            onClick={() => handleCategoryClick(id)}
            type="radio"
            id={name}
            data-testid="category"
          />
          {name}
        </label>
      ))}
    </aside>
  );
}
