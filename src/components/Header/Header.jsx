import Breadcrumbs from '@mui/material/Breadcrumbs';
import { FiShoppingCart } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Link from '@mui/material/Link';
import './Header.scss';

const Header = () => {
  const cartCount = useSelector(({ cart }) => cart.cartCount);
  const product = useSelector(({ products }) => products.productDetail);

  const { pathname } = useLocation();

  return (
    <header className="header">
      <Link underline="hover" color="inherit" href="/">
        <h1 className="header__title">CELLPHONIAN</h1>
      </Link>
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
        <Link underline="hover" color="inherit" href="/" className="link">
          Home
        </Link>
        {pathname.length > 1 && (
          <Link
            underline="hover"
            color="inherit"
            href={`/details/${product.id}`}
            className="link"
          >
            {product.model}
          </Link>
        )}
      </Breadcrumbs>
      <div className="header__cartContainer">
        <span className="count">{cartCount}</span>
        <FiShoppingCart className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
