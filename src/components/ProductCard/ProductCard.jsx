import './productCard.scss';

const ProductCard = ({ product }) => (
  <div className="productCard">
    <div className="productCard__details">
      <img src={product.imgUrl} alt={product.model} />
      <div>
        <div className="productCard__details__descriptin">
          <h2>{product.brand}</h2>
          <h2>{product.model}</h2>
        </div>
        <h2>{product.price}€</h2>
      </div>
    </div>
    {/* <button className={productStyles.card__add_btn} onClick={product.addItem}>
      Añadir al carrito
    </button> */}
  </div>
);

export default ProductCard;
