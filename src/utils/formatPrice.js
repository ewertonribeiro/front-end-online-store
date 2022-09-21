/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const formatNumber = (price) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

export default formatNumber;
