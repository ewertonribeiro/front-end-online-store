const URL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const response = await fetch(`${URL}/categories`);

  const data: Categorie[] = await response.json();

  return data;
}


interface APIRETURN {
    results:Item[]
}

export async function getProductsFromCategoryAndQuery(
  categoryId?: string,
  query?: string,
):Promise<APIRETURN> {
  if (categoryId) {
    const response = await fetch(`${URL}/search?category=${categoryId}`);

    const data = await response.json();
    return data;
  }

  const response = await fetch(`${URL}/search?q=${query}`);
  const data = await response.json();
  return data;
}

export async function getProductById(id: string) {
  const url = `https://api.mercadolibre.com/items/${id}`;

  const response: Item = await (await fetch(url)).json();

  return response;
}
