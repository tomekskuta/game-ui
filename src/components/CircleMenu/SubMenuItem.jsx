import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const subMenuAnimation = angle => keyframes`
    0% { top: 0; }
  30% { 
    top: -65px;
    transform: rotate(0deg); 
  }
  100% {
    top: -65px;
    transform: rotate(${angle}deg);
  }
`;

const StyledSubMenuItem = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transform-origin: 30px 160px;
  animation: ${props => subMenuAnimation(props.angle)} 0.3s forwards;
`;

StyledSubMenuItem.propTypes = {
  angle: PropTypes.number.isRequired,
}

const SubItemContent = styled.div`
  box-sizing: border-box;
  width: inherit;
  height: inherit;
  border: solid 2px black;
  border-radius: 50%;
  line-height: 60px;
  background: #fff;
  text-align: center;
  cursor: pointer;
  transform: scale(0.9, 0.9) rotate(${props => props.angle}deg);

  :hover {
    transform: scale(1, 1) rotate(${props => props.angle}deg);
  }
`;

const getSubItemAngle = (index, length) => -(length * 27 / 2) + 27/2 + index * 27;

const SubMenuItem = ({ children, index, angle, subMenuLength, onClick }) => (
  <StyledSubMenuItem angle={getSubItemAngle(index, subMenuLength)} >
    <SubItemContent angle={-(angle + getSubItemAngle(index, subMenuLength))} onClick={onClick} >
      {children}
    </SubItemContent>
  </StyledSubMenuItem>
);

SubMenuItem.propTypes = {
  children: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  subMenuLength: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SubMenuItem;