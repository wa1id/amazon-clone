import React from "react";

const HeaderOption = ({ lineOne, lineTwo, handleClick }) => {
  return (
    <div className="header__option" onClick={handleClick}>
      <span className="header__option-one">{lineOne}</span>
      <span className="header__option-two">{lineTwo}</span>
    </div>
  );
};

export default HeaderOption;
