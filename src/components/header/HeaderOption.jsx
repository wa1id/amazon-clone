import React from 'react';

const HeaderOption = ({lineOne, lineTwo}) => {
  return (
    <div className="header__option">
      <span className="header__option-one">{lineOne}</span>
      <span className="header__option-two">{lineTwo}</span>
    </div>
  );
};

export default HeaderOption;