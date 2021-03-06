import { Link } from 'react-router-dom';
import './productCard.scss';

const ProductCard = ({ product }) => (
  <div className="productCard">
    <Link to={`/details/${product.id}`}>
      <div className="productCard__details">
        <img src={product.imgUrl} alt={product.model} />
        <h2>{product.brand}</h2>
        <h2>{product.model}</h2>
        <h2>{product.price}€</h2>
      </div>
    </Link>
  </div>
);

export default ProductCard;
