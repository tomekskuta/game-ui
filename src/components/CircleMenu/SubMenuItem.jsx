import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const StyledSubMenuItem = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 1;
  transform-origin: 30px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(0.9, 0.9);
`;

export default class SubMenuItem extends React.Component {
  render() {
    return (
      <StyledSubMenuItem>{this.props.children}</StyledSubMenuItem>
    )
  }
}