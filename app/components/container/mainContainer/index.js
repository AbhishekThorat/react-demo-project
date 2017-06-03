import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../../ui';

const MainContainer = props =>
  <div className="parent-container">
    <Header />
    {props.children}
    <Footer />
  </div>

export { MainContainer };
