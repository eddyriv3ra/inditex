import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetailAsync } from 'redux/productsSlice';
import './productDetail.scss';

const ProductDetail = () => {
  const product = useSelector(({ products }) => products.productDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetailAsync(id));
  }, []);

  console.log(product);

  return (
    <div className="productDetail">
      <div className="productDetail__container">
        <img src={product.imgUrl} />
      </div>
      <div className="productDetail__container details">
        <div className="productDetail__container__description">
          <div className="productDetail__container description">
            <h4 className="title">Marca:</h4>
            <p className="">{product.brand}</p>
          </div>
          <div className="productDetail__container description">
            <h4 className="title">Modelo: </h4>
            <p>{product.model}</p>
          </div>
          <div className="productDetail__container description">
            <h4 className="title">Precio: </h4>
            <p>{product.price}</p>
          </div>
          <div className="productDetail__container description">
            <h4 className="title">Dimensiones: </h4>
            <p>{product.dimentions}</p>
          </div>
          <div className="productDetail__container description">
            <h4 className="title">Peso: </h4>
            <p>{product.weight}</p>
          </div>
        </div>
        <div className="productDetail__container__description">Holaa</div>
      </div>
    </div>
  );
};

export default ProductDetail;
