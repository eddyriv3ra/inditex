import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const cartCount = useSelector(({ cart }) => cart.cartCount);

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">CELLPHONIAN</h1>
      </Link>
      <div className="header__cartContainer">
        <span className="count">{cartCount}</span>
        <FiShoppingCart className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
