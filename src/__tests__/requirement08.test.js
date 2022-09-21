import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from '../App';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';
import store from '../redux/store';

describe('8 - Adicione produtos a partir da tela de listagem de produtos', () => {
  beforeEach(() => jest.spyOn(global, 'fetch').mockImplementation(mockFetch));
  it('Adiciona um produto ao carrinho a partir da tela principal', async () => {
    render(<Provider store={store}><App /></Provider>);
    expect(global.fetch).toHaveBeenCalled();

    userEvent.click((await screen.findAllByTestId('category'))[0]);
    expect(global.fetch).toHaveBeenCalledTimes(2);

    userEvent.click((await screen.findAllByTestId('product-add-to-cart'))[0]);
    userEvent.click((await screen.findByTestId('shopping-cart-button')));

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(screen.getAllByTestId('shopping-cart-product-name'));
    expect(screen.getByTestId('shopping-cart-product-name')).toHaveTextContent(
      mockedQueryResult.results[0].title,
    );
    expect(
      screen.getByTestId('shopping-cart-product-quantity'),
    ).toHaveTextContent('1');
  });
});
