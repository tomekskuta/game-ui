import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
  blue: '#0172b8',
  red: '#c02034',
  green: '#88b14b',
  yellow: '#f6d258',
  orange: '#f89724',
}

const Base = styled.div`
  height: 100px;
  width: 100px;
  color: ${colors.orange};
  transform-style: preserve-3d;
`;

const Triangle = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  border-bottom: ${props => `100px solid ${props.color}`};
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  transform-origin: center bottom;
  transform: ${props => props.transform};
  opacity: 0.9;
`;

Triangle.propTypes = {
  color: PropTypes.string.isRequired,
  transform: PropTypes.string.isRequired,
}

const Pyramid = () => (
  <Base>
    <Triangle id="front" color={colors.blue} transform="rotateX(-60deg)" />
    <Triangle
      id="back"
      color={colors.yellow}
      transform="translateY(-100px) rotateX(-120deg)"
    />
    <Triangle
      id="left"
      color={colors.red}
      transform="translate(-50px, -50px) rotateZ(90deg) rotateX(-60deg)"
    />
    <Triangle
      id="right"
      color={colors.green}
      transform="translate(50px, -50px) rotateZ(-90deg) rotateX(-60deg)"
    />
  </Base>
);

export default Pyramid;