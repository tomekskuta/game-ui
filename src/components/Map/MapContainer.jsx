import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const MapWrapper = styled.div`
  width: inherit;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 2000px;
  perspective-origin: 50% 50%;
`;

const Map = styled.div`
  border: solid 2px black;
  width: 800px;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  transform: ${props => `rotate3d(${props.x}, ${props.y}, ${props.z}, 90deg) scale(0.8, 0.8)`};
  transform-style: preserve-3d;
`;

Map.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
}

const MapContainer = ({ children, x, y, z }) => (
  <MapWrapper>
    <Map x={x} y={y} z={z} >
      {children}
    </Map>
  </MapWrapper>
);

MapContainer.propTypes ={
  children: PropTypes.array.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
}

export default MapContainer;