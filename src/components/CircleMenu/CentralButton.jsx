import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const centralButtonSize = 60;

const centralButtonAnimation = keyframes`
  100% { transform: rotate(180deg) }
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

const StyledCentralButton = styled.div`
  border: solid 2px black;
  border-radius: 50%;
  background: #fff;
  width: ${centralButtonSize}px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  z-index: 1000;
  align-items: center;
`;

const CloseIcon = styled.div`
  position: absolute;
  opacity: 0;
  display: flex;
  align-items: center;
  transition: opacity 0.5s;

  :before, 
  :after {
    position: relative;
    width: 3px;
    content: ' ';
    background: #000;
  }

  ${StyledCentralButton}:hover & {
    opacity:1;
    animation: ${centralButtonAnimation} 1s;
    
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

const Image = styled.img`
  position: absolute;
  opacity: 1;
  height: 60%;
  width: auto;
  transition: opacity 0.5s;
  align-self: center;

  ${StyledCentralButton}:hover & {
    opacity: 0;
  }
`;

const CentralButton = ({ menuSize, onClick, img }) => (
  <StyledCentralButton onClick={onClick}>
    <CloseIcon />
    <Image src={img} />
  </StyledCentralButton>
);

CentralButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
}

export default CentralButton;