import ProductCard from 'components/ProductCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from 'redux/productsSlice';
import './products.scss';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.data);
  const searchValue = useSelector(({ products }) => products.searchValue);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  const filteredProducts = searchValue
    ? products.filter(
        (product) =>
          product.model.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchValue.toLowerCase())
      )
    : products;

  return (
    <div className="products">
      {filteredProducts.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default Products;
