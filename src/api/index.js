const url = 'https://front-test-api.herokuapp.com/';

export const fetchProduct = async () => {
  const response = await fetch(`${url}api/product`);
  return await response.json();
};

export const fetchProductDetail = async (productId) => {
  const response = await fetch(`${url}api/product/${productId}`);
  return await response.json();
};
