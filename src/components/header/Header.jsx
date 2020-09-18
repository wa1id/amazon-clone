import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import HeaderOption from "./HeaderOption";
import { useStateValue } from "../StateProvidor";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={user ? "" : "/login"}>
          <HeaderOption
            lineOne="Hello Guest"
            lineTwo={user ? "Sign out" : "Sign in"}
            handleClick={handleAuthentication}
          />
        </Link>
        <HeaderOption lineOne="Returns" lineTwo="& Orders" />
        <HeaderOption lineOne="Your" lineTwo="Prime" />

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__option-two header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
