import { useDispatch } from 'react-redux';
import { searchValue } from 'redux/productsSlice';
import './search.scss';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <input
        placeholder="Search"
        onChange={(event) => dispatch(searchValue(event.target.value))}
      />
    </div>
  );
};

export default Search;
