import React from 'react';
import {
  act, render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from '../App';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';
import store from '../redux/store';

describe('7 - Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto', () => {
  beforeEach(() => jest.spyOn(global, 'fetch').mockImplementation(mockFetch));
  it('Clicar no card de um produto leva à página com seus detalhes', async () => {
    render(<Provider store={store}><App /></Provider>);
    expect(global.fetch).toHaveBeenCalled();

    const categoriesEl = await screen.findAllByTestId('category');
    userEvent.click(categoriesEl[0]);

    expect(global.fetch).toHaveBeenCalledTimes(2);

    const productLinksEl = await screen.findAllByTestId('product-detail-link');

    await act(async () => {
      userEvent.click(productLinksEl[0]);
    });

    const productNameEl = await screen.findAllByTestId('product-detail-name');
    const productImageEl = await screen.findByTestId('product-detail-image');
    const productPriceEl = await screen.findByTestId('product-detail-price');

    expect(productNameEl[0]).toHaveTextContent(
      mockedQueryResult.results[0].title,
    );
    expect(productImageEl).toBeInTheDocument();
    expect(productPriceEl).toHaveTextContent(
      mockedQueryResult.results[0].price,
    );
  });

  it('Na página de detalhes de um produto, o elemento que redireciona para o carrinho de compras é exibido', async () => {
    render(<Provider store={store}><App /></Provider>);
    await waitFor(() => expect(screen.getByTestId('shopping-cart-button')).toBeInTheDocument());

    userEvent.click(screen.getByTestId('shopping-cart-button'));

    await waitFor(() => expect(
      screen.getByTestId('shopping-cart-empty-message'),
    ).toBeInTheDocument());
  });
});
