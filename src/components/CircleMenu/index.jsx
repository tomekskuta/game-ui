import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import CloseButton from './CloseButton';

const menuSize = 240;

const menuAnimationOpen = keyframes`
  0% { transform: scale(0, 0); }
  50% { transform: scale(1.1, 1.1); }
`;

const menuAnimationClose = keyframes`
  50% { transform: scale(1.1, 1.1); }
  100% { transform: scale(0, 0) }
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
  animation: ${props => props.animation} 0.5s;
`;


export default class CircleMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isClosing: false,
    }

    this.closeClickHandle = this.closeClickHandle.bind(this);
  }

  closeClickHandle() {
    this.setState({ isClosing: true });
  }

  render() {
    const { x, y, closeMenuHandler } = this.props;
    const { isClosing } = this.state;

    return (
      <CircleWrapper x={x} y={y} animation={isClosing ? menuAnimationClose : menuAnimationOpen} onAnimationEnd={isClosing ? closeMenuHandler : null} >
        <CloseButton onClick={this.closeClickHandle} menuSize={menuSize} />
      </CircleWrapper>
    );
  }
}

CircleMenu.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  closeMenuHandler: PropTypes.func.isRequired,
}