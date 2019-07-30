import React from 'react';

import './custom-button.scss';

export default function customButton({ children, ...props }) {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  );
}
