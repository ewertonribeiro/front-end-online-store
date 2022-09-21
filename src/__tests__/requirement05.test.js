import React from 'react';
import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from '../App';
import mockFetch from '../__mocks__/mockFetch';
import searchedQuery from '../__mocks__/searchQuery';
import store from '../redux/store';

describe('5 - Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos', () => {
  it('Exibe a mensagem "Nenhum produto foi encontrado" caso a busca não retorne produtos', async () => {
    render(<Provider store={store}><App /></Provider>);
    userEvent.clear(screen.getByTestId('query-input'));

    userEvent.click(screen.getByTestId('query-button'));
    await waitFor(() => expect(screen.getByText('Nenhum produto foi encontrado')).toBeInTheDocument());
  });

  it('Exibe todos os produtos retornados pela API, dado um determinado filtro', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    render(<Provider store={store}><App /></Provider>);

    userEvent.type(
      screen.getByTestId('query-input'),
      'carro',
    );

    const buttonEl = await screen.findByTestId('query-button');
    userEvent.click(buttonEl);

    expect(global.fetch).toHaveBeenCalled();

    const productsElements = await screen.findAllByTestId('product');
    expect(productsElements.length).toEqual(
      searchedQuery.results.length,
    );
  });
});
