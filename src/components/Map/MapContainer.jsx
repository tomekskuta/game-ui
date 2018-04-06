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

const anim = keyframes`
  from { transform: rotate3d(0, 0, 0, 90deg); }
  to { transform: rotate3d(0.7, -0.5, 0.5, 90deg); }
`;

const Map = styled.div`
  border: solid 2px black;
  width: 800px;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  animation: ${anim} 2s forwards;
  /* transform: rotate3d(1, -0.5, 0.5, 90deg); */
  transform-style: preserve-3d;
`;

const MapContainer = ({ children }) => (
  <MapWrapper>
    <Map>
      {children}
    </Map>
  </MapWrapper>
);

MapContainer.propTypes ={
  children: PropTypes.array.isRequired,
}

export default MapContainer;