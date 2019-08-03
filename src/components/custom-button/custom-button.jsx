import React from 'react';

import './custom-button.scss';

export default function customButton({ children, isGoogleSignIn, ...props }) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}
