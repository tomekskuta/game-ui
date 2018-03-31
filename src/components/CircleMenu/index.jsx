import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import CentralButton from './CentralButton';
import CircleMenuItem from './CircleMenuItem';
import SubMenuItem from './SubMenuItem';

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

  animation: ${props => props.animation} ${props => props.animationDuration}s backwards;
`;

export default class CircleMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isClosing: false,
      subMenu: '',
    }

    this.closeClickHandle = this.closeClickHandle.bind(this);
    this.renderAngle = this.renderAngle.bind(this);
    this.setSubMenuFor = this.setSubMenuFor.bind(this);
    this.itemMenuHandler = this.itemMenuHandler.bind(this);
    this.closeMenuEventListener = this.closeMenuEventListener.bind(this);
    this.closeMenuEventCondition = this.closeMenuEventCondition.bind(this);
  }

  closeClickHandle() {
    this.setState({ isClosing: true });
  }

  renderAngle(elementsQuantity, index) {
    return 360 - 360 / elementsQuantity * (index + 1);
  }

  setSubMenuFor(itemName) {
    this.setState({ subMenu: itemName });
  }

  itemMenuHandler(item) {
    this.setSubMenuFor(item.name);
    item.onClick();
  }

  closeMenuEventCondition(event) {
    const parent = document.getElementById('parent');
    if (!parent.contains(event.target)) {
      this.closeClickHandle();
    }
  }
  
  closeMenuEventListener() {
    window.addEventListener('click', this.closeMenuEventCondition);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeMenuEventCondition);
  }

  render() {
    const { x, y, closeMenuHandler, menuItems, centralImg } = this.props;
    const { isClosing, subMenu } = this.state;

    return (
      <CircleWrapper
        id="parent"
        x={x}
        y={y}
        animation={isClosing ? menuAnimationClose : menuAnimationOpen}
        animationDuration={isClosing ? 0.2 : 0.5}
        onAnimationEnd={isClosing ? closeMenuHandler : this.closeMenuEventListener}
      >
        <CentralButton onClick={this.closeClickHandle} img={centralImg} />
        {menuItems.map((item, index, array) => <CircleMenuItem 
          angle={this.renderAngle(array.length, index)}
          onClick={() => this.itemMenuHandler(item)}
          key={index}
          isSubMenu={subMenu === item.name}
          subMenu={subMenu === item.name ? item.subMenu.map((subItem, subIndex) => <SubMenuItem key={subIndex} >{subItem}</SubMenuItem>) : null}
        >
          {item.name}
        </CircleMenuItem>)}
      </CircleWrapper>
    );
  }
}

CircleMenu.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  closeMenuHandler: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
  centralImg: PropTypes.string.isRequired,
}