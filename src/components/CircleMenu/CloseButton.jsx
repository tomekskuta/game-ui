import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const closeButtonSize = 70;

const closeButtonAnimation = keyframes`
  100% { transform: rotate(360deg) }
`;

const closeIconAnimation = direction => keyframes`
  from { 
    transform: rotate(0); 
    height: 0; 
  }
  to { 
    transform: rotate(${direction}45deg); 
    height: 40px; 
  }
`;

const closeIconMouseOutAnimation = keyframes`
  100% { transform: scale(0, 0); }
`;

const StyledCloseButton = styled.div`
  box-sizing: border-box;
  border: solid 2px black;
  border-radius: 50%;
  background: #fff;
  width: ${closeButtonSize}px;
  height: ${closeButtonSize}px;
  position: absolute;
  left: ${props => props.menuSize/2 - closeButtonSize/2}px;
  top: ${props => props.menuSize/2 - closeButtonSize/2}px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  :hover {
    animation: ${closeButtonAnimation} 1s;
  }
`;

const CloseIcon = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;

  :before, 
  :after {
    position: relative;
    width: 3px;
    content: ' ';
    background: #000;
  }

  ${StyledCloseButton}:hover & {
    opacity:1;
    
    :before {
      left: 1px;
      animation: ${closeIconAnimation('+')} 0.5s both;
    }

    :after {
      right: 2px;
      animation: ${closeIconAnimation('-')} 0.5s both;
    }
  }

  ${StyledCloseButton}:not(:hover) & {
    animation: ${closeIconMouseOutAnimation} 0.5;
    opacity: 1;
  }
`;

const CloseButton = ({ menuSize, onClick }) => (
  <StyledCloseButton menuSize={menuSize} onClick={onClick}>
    <CloseIcon />
  </StyledCloseButton>
);

StyledCloseButton.propTypes = {
  menuSize: PropTypes.number.isRequired,
}

CloseButton.propTypes = {
  menuSize: PropTypes.number.isRequired,
  onCLick: PropTypes.func.isRequired,
}

export default CloseButton;