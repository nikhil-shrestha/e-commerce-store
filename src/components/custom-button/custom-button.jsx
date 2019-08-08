import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

export default function customButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
