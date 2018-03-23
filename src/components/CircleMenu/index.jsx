import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const menuSize = 250;

const CircleWrapper = styled.div`
  position: fixed;
  left: ${props => `${props.x - menuSize/2}px`};
  top: ${props => `${props.y - menuSize/2}px`};
  border-radius: 50%;
  width: ${menuSize}px;
  height: ${menuSize}px;
  border: solid 1px black;
  display: flex;
`;

const CloseButton = styled.div`
  font-size: 2em;
  border: solid 2px black;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
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