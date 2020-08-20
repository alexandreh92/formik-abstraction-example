import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Sidebar, Content } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <li>
          <Link to="/simple_input">Simple Input</Link>
        </li>
        <li>
          <Link to="/async_values">Fetch Async Values</Link>
        </li>
        <li>
          <Link to="/array_input_string">Array Input String</Link>
        </li>
        <li>
          <Link to="/array_input_object">Array Input Object</Link>
        </li>
        <li>
          <Link to="/select">React Select</Link>
        </li>
        <li>
          <Link to="/masked_input">Input Mask</Link>
        </li>
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
};

export default Default;
