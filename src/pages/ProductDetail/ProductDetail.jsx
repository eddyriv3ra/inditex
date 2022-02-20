import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetailAsync } from 'redux/productsSlice';
import './productDetail.scss';

const storageCode = [{ id: 1 }, { id: 2 }, { id: 3 }];
const colorCode = [{ id: 1 }, { id: 2 }];

const ProductDetail = () => {
  const product = useSelector(({ products }) => products.productDetail);
  const [selected, setSelected] = useState({ color: 1, storage: 1 });
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetailAsync(id));
  }, []);

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
        <div className="productDetail__container__description right">
          <div className="productDetail__container__description__storage">
            <h3>Almacenamiento</h3>
            <div className="buttons_container">
              {storageCode.map((storage) => {
                return (
                  <button className="storage-buttons" key={storage.id}>
                    {storage.id}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="productDetail__container__description__storage">
            <h3>Colores</h3>
            <div className="buttons_container">
              {colorCode.map((storage) => {
                return (
                  <button className="storage-buttons" key={storage.id}>
                    {storage.id}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="add_container">
            <button className="add">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
