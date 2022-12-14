import React, { FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import {  fetchItemBySearch } from '../redux/thunks/fetchItemBySearch';

import { UseAppDispatch, useAppSelector } from '../redux/hooks/hooks';

import Button from './Button';
import ProductsCart from './ProductsCart';
import ShopCartTotal from './ShopCartTotal';
import CartButton from './CartButton';

import Logo from '../assets/logo.svg';

import '../styles/Header.css';
import '../styles/query/header-component-mediaquery.css';

function Header() {
    const [search, setSearch] = useState('');
    const [slider, setSlider] = useState(false);

    const dispatch = UseAppDispatch();

    const cart = useAppSelector((state) => state.cart.cart);

    const history = useHistory();

    function redirect() {
        setSlider(false);
        history.push('/shopcart');
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        dispatch(fetchItemBySearch(search));
        setSearch('');
    }

    return (
        <>
            <header className='header'>
                <div className='header-container'>
                    <form className='search-wrapper' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Digite a sua Busca'
                            data-testid='query-input'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaSearch />
                    </form>
                    <Link to='/'>
                        <div className='header-logo'>
                            <img src={Logo} alt='logo' />
                        </div>
                    </Link>
                    <CartButton onClick={() => setSlider(!slider)} />
                </div>
            </header>
            {slider && (
                <div className='slider'>
                    {cart.length === 0 ? (
                        <div className='message-container'>
                            <h1>Seu Carrinho Esta Vazio</h1>
                        </div>
                    ) : (
                        <>
                            <ProductsCart />
                            <ShopCartTotal>
                                <Link to='/shopcart'>
                                    <Button
                                        style={{ padding: '1rem 5rem', alignSelf: 'center' }}
                                        text='Finalizar Compra'
                                        type='button'
                                        onClick={() => redirect()}
                                    />
                                </Link>
                            </ShopCartTotal>
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default Header;
