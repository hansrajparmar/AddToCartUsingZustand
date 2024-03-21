// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import useStore from '../store';

const Header = () => {
  const cartItemsLength = useStore((state) => state.cartItems.length);

  return (
    <nav>
      <h2>Logo Here</h2>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}>
          <FiShoppingBag />
          <p>{cartItemsLength}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
