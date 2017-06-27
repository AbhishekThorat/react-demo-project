import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../../containers';
import { ParentLayout as ParentContainer } from './styles';

const ParentLayout = props =>
  <ParentContainer>
    <Header />
    {props.children}
    <Footer />
  </ParentContainer>

export { ParentLayout };
