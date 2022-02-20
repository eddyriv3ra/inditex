import Products from 'components/Products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from 'redux/productsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.data);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  return <Products products={products} />;
};

export default Home;
