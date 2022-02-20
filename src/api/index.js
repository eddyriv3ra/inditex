const url = 'https://front-test-api.herokuapp.com/';

export const fetchData = async () => {
  const response = await fetch(`${url}api/product`);
  return await response.json();
};
