import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const menuSize = 60;

const menuAnimationOpen = keyframes`
  0% { transform: scale(0, 0); }
  50% { transform: scale(1.1, 1.1); }
`;

const menuAnimationClose = keyframes`
  50% { transform: scale(1.1, 1.1); }
  100% { transform: scale(0, 0); }
`;

const CircleWrapper = styled.div`
  position: fixed;
  left: ${props => `${props.x - menuSize/2}px`};
  top: ${props => `${props.y - menuSize/2}px`};
  border-radius: 50%;
  width: ${menuSize}px;
  height: ${menuSize}px;
  display: flex;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  animation: ${props => `${props.animation} ${props.animationDuration}s backwards`};
`;

CircleWrapper.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  animation: PropTypes.string.isRequired,
  animationDuration: PropTypes.number.isRequired,
}

const CircleMenuWrapper = ({ children, id, x, y, isMenuClosing, onAnimationEnd }) => (
  <CircleWrapper
    id={id}
    x={x}
    y={y}
    animation={isMenuClosing ? menuAnimationClose : menuAnimationOpen}
    animationDuration={isMenuClosing ? 0.2 : 0.5}
    onAnimationEnd={onAnimationEnd}
  >
    {children}
  </CircleWrapper>
);

CircleMenuWrapper.propTypes = {
  children: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isMenuClosing: PropTypes.bool.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
}

export default CircleMenuWrapper;