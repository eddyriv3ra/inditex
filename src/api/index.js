const url = 'https://front-test-api.herokuapp.com/api/';

export const fetchProduct = async () => {
  const response = await fetch(`${url}product`);
  return await response.json();
};

export const fetchProductDetail = async (productId) => {
  const response = await fetch(`${url}product/${productId}`);
  return await response.json();
};

export const addToCart = async (items) => {
  const response = await fetch(`${url}cart/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(items),
  });
  return await response.json();
};
