import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const menuSize = 240;
const closeButtonSize = 70;

const menuAnimationOpen = keyframes`
  0% { transform: scale(0, 0); }
  50% { transform: scale(1.1, 1.1); }
`;

const closeButtonAnimation = keyframes`
  100% { transform: rotate(360deg) }
`;

const CircleWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  left: ${props => `${props.x - menuSize/2}px`};
  top: ${props => `${props.y - menuSize/2}px`};
  border-radius: 50%;
  width: ${menuSize}px;
  height: ${menuSize}px;
  /* border: solid 1px black; */
  display: flex;
  animation: ${menuAnimationOpen} 0.5s;
`;

const CloseButton = styled.div`
  box-sizing: border-box;
  font-size: 2em;
  border: solid 2px black;
  border-radius: 50%;
  background: #fff;
  width: ${closeButtonSize}px;
  height: ${closeButtonSize}px;
  text-align: center;
  line-height: ${closeButtonSize}px;
  position: absolute;
  left: ${menuSize/2 - closeButtonSize/2}px;
  top: ${menuSize/2 - closeButtonSize/2}px;
  animation: ${closeButtonAnimation} 1s;
`;

export default class CircleMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isClosing: false,
    }
  }

  render() {
    const { x, y } = this.props;

    return (
      <CircleWrapper x={x} y={y} >
        <CloseButton>&#10005;</CloseButton>
      </CircleWrapper>
    );
  }
}

CircleMenu.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}