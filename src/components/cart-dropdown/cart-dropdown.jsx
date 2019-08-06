import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.scss';

export default function cartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
}
