import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="header__logo"
        alt="logo"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-one">Hello Guest</span>
          <span className="header__option-two">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__option-one">Returns</span>
          <span className="header__option-two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-one">Your</span>
          <span className="header__option-two">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
