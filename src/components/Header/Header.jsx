import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <h1 className="header__title">CELLPHONES</h1>
      </Link>
      <FiShoppingCart className="header__icon" />
    </nav>
  );
};

export default Header;
