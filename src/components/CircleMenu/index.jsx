import React from 'react';
import PropTypes from 'prop-types';

import CircleMenuWrapper from './CircleMenuWrapper';
import CentralButton from './CentralButton';
import CircleMenuItem from './CircleMenuItem';
import SubMenuItem from './SubMenuItem';

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
    this.itemSubMenuHandler = this.itemSubMenuHandler.bind(this);
    this.closeMenuEventListener = this.closeMenuEventListener.bind(this);
    this.closeMenuEventCondition = this.closeMenuEventCondition.bind(this);
  }

  closeClickHandle() {
    this.setState({ isClosing: true });
  }

  renderAngle(elementsQuantity, index) {
    return 360 / elementsQuantity * index;
  }

  setSubMenuFor(itemName) {
    this.setState({ subMenu: itemName });
  }

  itemMenuHandler(item) {
    item.action();
    if (item.shouldCloseAfterClick) {
      this.closeClickHandle();
    }
    if (item.subMenu) {
      this.setSubMenuFor(item.name);
    }
  }

  itemSubMenuHandler(subItem) {
    subItem.action();
    if (subItem.shouldCloseAfterClick) {
      this.closeClickHandle();
    }
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
      <CircleMenuWrapper
        id="parent"
        x={x}
        y={y}
        isMenuClosing={isClosing}
        onAnimationEnd={isClosing ? closeMenuHandler : this.closeMenuEventListener}
      >
        <CentralButton onClick={this.closeClickHandle} img={centralImg} />
        {menuItems.map((item, index, array) => <CircleMenuItem 
          angle={this.renderAngle(array.length, index)}
          onClick={() => this.itemMenuHandler(item)}
          key={index}
          isSubMenu={subMenu}
          subMenu={subMenu === item.name 
            ? item.subMenu.map((subItem, subIndex, subArray) => (
              <SubMenuItem
                key={subIndex}
                index={subIndex}
                angle={this.renderAngle(array.length, index)}
                subMenuLength={subArray.length}
                onClick={() => this.itemSubMenuHandler(subItem)}
              >
                {subItem.name}
              </SubMenuItem>
            )) 
            : null
          }
        >
          {item.name}
        </CircleMenuItem>)}
      </CircleMenuWrapper>
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