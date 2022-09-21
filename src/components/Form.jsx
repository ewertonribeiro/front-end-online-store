import React from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import {
  FaBarcode, FaCcVisa, FaCcMastercard, FaCcAmex,
} from 'react-icons/fa';
import Button from './Button';

function Form() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inputs">
        <div className="form-control grid-1">
          <input type="text" placeholder="Nome Completo" required />
          <input
            type="text"
            required
            placeholder="CPF"
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
          />
        </div>
        <div className="form-control grid-1">
          <input type="email" placeholder="Email" required />
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
          <input type="text" required placeholder="Endereço" />
        </div>
        <div className="form-control grid-3">
          <input type="text" placeholder="Complemento" required />
          <input type="number" required placeholder="Numero" />
        </div>
        <div className="form-control grid-3">
          <input type="text" placeholder="Cidade" required />
          <select name="state" required>
            <option value="Para - PA">Para - PA</option>
            <option value="Para - PA">Para - PA</option>
            <option value="Para - PA">Para - PA</option>
            <option value="Para - PA">Para - PA</option>
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
                <input
                  type="radio"
                  id="master"
                  name="method"
                  value="mastercard"
                />
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

      <Button type="submit" text="Comprar" style={{ padding: '1rem 5rem' }} />
    </form>
  );
}

export default Form;
