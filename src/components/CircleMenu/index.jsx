import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import CloseButton from './CloseButton';
import CircleMenuItem from './CircleMenuItem';

const menuSize = 60;

const menuAnimationOpen = keyframes`
  0% { transform: scale(0, 0); }
  50% { transform: scale(1.1, 1.1); }
`;

// const menuAnimationOpen = keyframes`
//   0% { transform: scale(0, 0) rotate(0deg); }
//   50% { transform: scale(1.1, 1.1) rotate(360deg); }
//   100% { transform: scale(1, 1) rotate(360deg) }
// `;


const menuAnimationClose = keyframes`
  50% { transform: scale(1.1, 1.1); }
  100% { transform: scale(0, 0) }
`;

const CircleWrapper = styled.div`
  position: fixed;
  left: ${props => `${props.x - menuSize/2}px`};
  top: ${props => `${props.y - menuSize/2}px`};
  border-radius: 50%;
  width: ${menuSize}px;
  height: ${menuSize}px;
  display: flex;

  animation: ${props => props.animation} ${props => props.animationDuration}s backwards;
`;


export default class CircleMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isClosing: false,
    }

    this.closeClickHandle = this.closeClickHandle.bind(this);
    this.renderAngle = this.renderAngle.bind(this);
  }

  closeClickHandle() {
    this.setState({ isClosing: true });
  }

  renderAngle(elementsQuantity, index) {
    return 360 - 360 / elementsQuantity * (index + 1);
  }

  render() {
    const { x, y, closeMenuHandler, menuItems } = this.props;
    const { isClosing } = this.state;

    return (
      <CircleWrapper 
        x={x}
        y={y}
        animation={isClosing ? menuAnimationClose : menuAnimationOpen}
        animationDuration={isClosing ? 0.5 : 0.5}
        onAnimationEnd={isClosing ? closeMenuHandler : null}
      >
        <CloseButton onClick={this.closeClickHandle} menuSize={menuSize} />
        {menuItems.map((item, index, array) => <CircleMenuItem angle={this.renderAngle(array.length, index)} onClick={item.onClick} key={index} >{item.name}</CircleMenuItem>)}
      </CircleWrapper>
    );
  }
}

CircleMenu.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  closeMenuHandler: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
}