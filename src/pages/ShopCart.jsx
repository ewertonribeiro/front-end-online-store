import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { remove } from '../redux/features/cart';

import Quantity from '../components/Quantity';

import { FaTrash, FaCcVisa, FaCcMastercard, FaCcAmex, FaBarcode } from 'react-icons/fa';

import '../styles/ShopCart.css';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';


export default function ShopCart() {

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [buy, setBuy] = useState(false);

  const totalPrice = cart.reduce((
    acc, {
      quantity,
      price
    }) => acc += (quantity * price), 0)

  const formatNumber = price => Number(price)
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/');
  }

  return (
    <>
      {
        cart.length === 0 ?
          <div className="message-container">
            <h1>
              Seu carrinho está vazio
            </h1>
          </div>
          : <div className="page">
            <div className="left-section">
              <div className="content">
                <h1>Carrinho de compras</h1>
                {cart.map((item) => (
                  <div key={item.id} className="product-cart">
                    <button
                      type="button"
                      onClick={() => dispatch(remove({ item }))}
                    >
                      <FaTrash />
                    </button>
                    <img src={item.thumbnail} alt={item.title} />
                    <p className="product-name">{item.title}</p>
                    <Quantity e={item} />
                    <p className="product-price">{formatNumber(item.price)}</p>
                  </div>
                ))
                }
              </div>
            </div>
            <div className="right-section">
              {buy
                ? <div className="payment-section">
                  <h1>Informações do Comprador!</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-inputs">
                      <div className="form-control grid-1">
                        <input
                          type="text"
                          placeholder="Nome Completo"
                          required
                        />
                        <input
                          type="text"
                          required
                          placeholder="CPF"
                          pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                        />
                      </div>
                      <div className="form-control grid-1">
                        <input
                          type="email"
                          placeholder="Email"
                          required
                        />
                        <input
                          type="tel"
                          required
                          placeholder="Telefone"
                        // pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                        />
                      </div>
                      <div className="form-control grid-2">
                        <input
                          type="text"
                          placeholder="Cep"
                          required
                          pattern="\d{5}-?\d{3}"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Endereço"
                        />
                      </div>
                      <div className="form-control grid-3">
                        <input
                          type="text"
                          placeholder="Complemento"
                          required
                        />
                        <input
                          type="number"
                          required
                          placeholder="Numero"
                        />
                      </div>
                      <div className="form-control grid-3">
                        <input
                          type="text"
                          placeholder="Cidade"
                          required
                        />
                        <select name="state" required>
                          <option value="Para - PA" >Para - PA</option>
                          <option value="Para - PA" >Para - PA</option>
                          <option value="Para - PA" >Para - PA</option>
                          <option value="Para - PA" >Para - PA</option>
                        </select>
                      </div>
                    </div>

                    <div className="payment-methods">
                      <h1>Metodo de Pagamento</h1>

                      <div className="payment-methods-container">

                        <div className="payment-methods-method boleto">
                          <h3>Boleto</h3>
                          <label htmlFor="boleto">
                            <input type="radio" id="boleto" name="method" value="boleto" />
                            <FaBarcode />
                          </label>
                        </div>

                        <div className="payment-methods-method">
                          <h3>Cartão de Crédito</h3>
                          <div>
                            <label htmlFor="visa">
                              <input type="radio" id="visa" name="method" value="visa" />
                              <FaCcVisa />
                            </label>
                            <label htmlFor="master">
                              <input type="radio" id="master" name="method" value="mastercard" />
                              <FaCcMastercard />
                            </label>
                            <label htmlFor="elo">
                              <input type="radio" id="elo" name="method" value="elo" />
                              <FaCcAmex />
                            </label>
                          </div>
                        </div>

                      </div>

                    </div>

                    <Button type="submit" text="Comprar" style={{ padding: "1rem 5rem" }} />
                  </form>
                </div>
                : <div className="shopcart-total">
                  <h1>
                    Valor Total Da Compra:
                  </h1>
                  <h3>{formatNumber(totalPrice)}</h3>
                  <Button style={{ padding: "1rem 5rem", alignSelf: "center" }} text="Finalizar Compra" type="button" onClick={() => setBuy(true)} />
                </div>

              }
            </div>
          </div>
      }
    </>
  );
}


