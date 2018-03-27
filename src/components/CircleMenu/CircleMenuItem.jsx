import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const animation = (props) => keyframes`
  from { 
    transform: translate(0) rotate(${props.angle}deg);
  }
  to { 
    transform: translate(-70px) rotate(${props.angle}deg);
  }
`;

const StyledItem = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border: solid 2px black;
  border-radius: 50%;
  transform-origin: 30px 30px;
  transform: rotate(${props => props.angle}deg) translate(-70px);
  /* animation: ${props => css`${animation} 1s forwards`}; */
`;

const ItemContent = styled.div`
  transform: rotate(-${props => props.angle}deg);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  background: #fff;
  text-align: center;
`;

const CircleMenuItem = ({ children, angle }) => (
  <StyledItem angle={angle} >
    <ItemContent angle={angle} >
      {children}
    </ItemContent>
  </StyledItem>
);

CircleMenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  angle: PropTypes.number.isRequired,
}

export default CircleMenuItem;