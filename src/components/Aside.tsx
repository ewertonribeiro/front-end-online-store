import React, { useState, useEffect } from 'react';

import { getCategories } from '../services/api';

import '../styles/Aside.css';
import Button from './Button';
import { UseAppDispatch } from '../redux/hooks/hooks';
import { fetchItemByQuery } from '../redux/thunks/fetchItemByQuery';

export default function Aside() {
    const dispatch = UseAppDispatch();
    const [categories, setCategories] = useState<Categorie[]>([]);

    const [show, setShow] = useState(true);

    useEffect(() => {
        getCategories().then((categorie) => {
            setCategories(categorie);
        });

        const listener = () => {
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

    const handleCategoryClick = (id: string) => dispatch(fetchItemByQuery(id));
    
    return (
        <>
            <Button
                categorie
                text='Categorias'
                style={{ width: '80%' }}
                onClick={() => setShow(!show)}
            />
            {show && (
                <aside>
                    <h1 className='aside-title'> Categorias </h1>
                    <div className='separator' />
                    <div className='labels-wrapper'>
                        {categories.map(({ id, name }) => (
                            <label htmlFor={name} key={id}>
                                <input
                                    onClick={() => handleCategoryClick(id)}
                                    type='radio'
                                    id={name}
                                    data-testid='category'
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
