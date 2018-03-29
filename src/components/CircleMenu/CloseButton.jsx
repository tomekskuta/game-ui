import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const closeButtonSize = 60;

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
    height: 25px; 
  }
`;

const StyledCloseButton = styled.div`
  border: solid 2px black;
  border-radius: 50%;
  background: #fff;
  width: ${closeButtonSize}px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  z-index: 2;

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
`;

const CloseButton = ({ menuSize, onClick }) => (
  <StyledCloseButton onClick={onClick}>
    <CloseIcon />
  </StyledCloseButton>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CloseButton;