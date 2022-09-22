import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import { setProducts } from '../redux/features/products';

import '../styles/Aside.css';
import Button from './Button';

export default function Aside() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState<Categorie[]>([]);

  const [show, setShow] = useState(true);

  useEffect(() => {
    getCategories().then((categorie) => {
      setCategories(categorie);
    });

    const listener = (e: UIEvent) => {
      if (window.innerWidth >= 1144) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener, false);
    };
  }, []);

  async function handleCategoryClick(id: string) {
    const { results } = await getProductsFromCategoryAndQuery(id);
    dispatch(setProducts({ lista: results }));
  }
  return (
    <>
      <Button
        categorie
        text="Categorias"
        style={{ width: '80%' }}
        onClick={() => setShow(!show)}
      />
      {show && (
        <aside>
          <h1 className="aside-title"> Categorias </h1>
          <div className="separator" />
          <div className="labels-wrapper">
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
          </div>
        </aside>
      )}
    </>
  );
}
