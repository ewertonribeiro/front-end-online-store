const l = localStorage;

function getAllFromCart() {
  const itens = JSON.parse(l.getItem('cart'));

  return itens || [];
}

function addToCart(item) {
  const itens = getAllFromCart();

  const itemAlreadInCart = itens.some(({ id }) => id === item.id);

  if (itemAlreadInCart) {
    const newCart = itens.map((e) => {
      if (e.id === item.id) {
        const newItem = { ...e, quantity: e.quantity += 1 };
        return newItem;
      }
      return e;
    });
    l.setItem('cart', JSON.stringify(newCart));
  } else {
    item.quantity = 1;
    itens.push(item);
    l.setItem('cart', JSON.stringify(itens));
  }
}

function subToCart(item) {
  const itens = getAllFromCart();

  const newCart = itens.filter((e) => {
    if (e.id === item.id) {
      if (e.quantity === 1) {
        return false;
      }
      const obj = { ...e, quantity: e.quantity -= 1 };
      return obj;
    }
    return e;
  });

  l.setItem('cart', JSON.stringify(newCart));
}

function removeToCart(item) {
  const itens = getAllFromCart();

  const newCart = itens.filter((e) => e.id !== item.id);

  l.setItem('cart', JSON.stringify(newCart));
}

function getItemFromCart(id) {
  const itens = getAllFromCart();
  return itens.find((item) => item.id === id);
}

export {
  addToCart, getAllFromCart, getItemFromCart, subToCart, removeToCart,
};
