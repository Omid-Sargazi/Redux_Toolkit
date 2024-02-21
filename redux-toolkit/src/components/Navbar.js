import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>OmidShop</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <FaShoppingBag size={30} />
          <span className="bag-quantity">
            <span>3</span>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
