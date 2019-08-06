import React from 'react';

import './custom-button.scss';

export default function customButton({
  children,
  isGoogleSignIn,
  inverted,
  ...props
}) {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}
