import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotateItems = angle => keyframes`
  0% { left: 0; }
  30% { 
    left: -70px;
    transform: rotate(0deg); 
  }
  100% {
    left: -70px;
    transform: rotate(${angle}deg);
  }
`;

const rotateContent = angle => keyframes`
  from { transform: rotate(${angle}deg); }
  to { transform: rotate(-${angle + 720}deg); }
`;

const StyledItem = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 1;
  transform-origin: 100px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${props => `${rotateItems(props.angle)} 1s forwards`};
`;

const ItemContent = styled.div`
  box-sizing: border-box;
  width: inherit;
  height: inherit;
  border: solid 2px black;
  border-radius: 50%;
  line-height: 60px;
  background: #fff;
  text-align: center;
  /* animation: ${props => `${rotateContent(props.angle)} 1.5s forwards`}; */
  transform: rotate(-${props => props.angle}deg) scale(1, 1);
  cursor: pointer;

  :hover {
    transform: rotate(-${props => props.angle}deg) scale(1.1, 1.1);
  }
`;

const CircleMenuItem = ({ children, angle, onClick }) => (
  <StyledItem angle={angle} >
    <ItemContent angle={angle} onCLick={onClick} >
      {children}
    </ItemContent>
  </StyledItem>
);

CircleMenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  angle: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default CircleMenuItem;