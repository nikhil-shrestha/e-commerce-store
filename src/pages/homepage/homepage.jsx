import React from 'react';

import Directory from '../../components/directory/directory';

import './homepage.scss';

import { HomepageContainer } from './homepage.styles';

export default function homepage() {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
}
