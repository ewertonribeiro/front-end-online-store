const l = localStorage;

function getAllFromCart() {
  const itens = l.getItem('cart');

  const cart = typeof itens === 'string' ? JSON.parse(itens) : [];

  return cart;
}

function addToCart(item: Item) {
  const itens: Item[] = getAllFromCart();

  const itemAlreadInCart = itens.some(({ id }) => id === item.id);

  if (itemAlreadInCart) {
    const newCart = itens.map((e) => {
      if (e.id === item.id) {
        const newItem = { ...e, quantity: (e.quantity += 1) };
        return newItem;
      }
      return e;
    });
    l.setItem('cart', JSON.stringify(newCart));
  } else {
    Object.assign(item, { quantity: 1 });
    itens.push(item);
    l.setItem('cart', JSON.stringify(itens));
  }
}

function subToCart(item: Item) {
  const itens: Item[] = getAllFromCart();

  const newCart = itens.filter((e) => {
    if (e.id === item.id) {
      if (e.quantity === 1) {
        return false;
      }
      const obj = { ...e, quantity: (e.quantity -= 1) };
      return obj;
    }
    return e;
  });

  l.setItem('cart', JSON.stringify(newCart));
}

function removeToCart(item: Item) {
  const itens: Item[] = getAllFromCart();

  const newCart = itens.filter((e) => e.id !== item.id);

  l.setItem('cart', JSON.stringify(newCart));
}

function getItemFromCart(id: string) {
  const itens: Item[] = getAllFromCart();
  return itens.find((item) => item.id === id);
}

export { addToCart, getAllFromCart, getItemFromCart, subToCart, removeToCart };
