import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendCartItemsAsync } from 'redux/cartSlice';
import './productActions.scss';

const storageCode = [{ id: 1 }, { id: 2 }, { id: 3 }];
const colorCode = [{ id: 1 }, { id: 2 }];

const ProductActions = ({ productId }) => {
  const [selected, setSelected] = useState({ colorId: 1, storageId: 1 });
  const dispatch = useDispatch();

  return (
    <div>
      <div className="productActions__container">
        <h3>Almacenamiento:</h3>
        <div className="buttons_container">
          {storageCode.map((storage) => {
            return (
              <button
                className={`buttons ${
                  storage.id === selected.storageId ? 'selected' : ''
                }`}
                key={storage.id}
                onClick={() =>
                  setSelected({
                    ...selected,
                    storageId: storage.id,
                  })
                }
              >
                {storage.id}
              </button>
            );
          })}
        </div>
      </div>
      <div className="productActions__container">
        <h3>Color:</h3>
        <div className="buttons_container">
          {colorCode.map((color) => {
            return (
              <button
                className={`buttons ${
                  color.id === selected.colorId ? 'selected' : ''
                }`}
                key={color.id}
                onClick={() =>
                  setSelected({
                    ...selected,
                    colorId: color.id,
                  })
                }
              >
                {color.id}
              </button>
            );
          })}
        </div>
      </div>
      <div className="productActions__container__addButton">
        <button
          onClick={() =>
            dispatch(
              sendCartItemsAsync({
                id: productId,
                colorCode: selected.colorId,
                storageCode: selected.storageId,
              })
            )
          }
        >
          Añadir
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
