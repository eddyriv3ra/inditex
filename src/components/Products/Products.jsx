import ProductCard from 'components/ProductCard';
import './products.scss';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default Products;
