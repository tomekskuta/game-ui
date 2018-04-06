import React from 'react';
import PropTypes from 'prop-types';

import MapContainer from './MapContainer';
import Pyramid from './Pyramid';

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    }

    this.renderFields = this.renderFields.bind(this);
  }

  renderFields(howMany) {
    let components = [];
    for (let i = 0; i < howMany; i++) {
      components = [...components, i]
    }
    return components;
  }

  render() {
    const { x, y, z } = this.props;

    return (
      <MapContainer x={x} y={y} z={z} >
        {this.renderFields(64).map(item => <Pyramid key={item} />)}
      </MapContainer>
    )
  }
}

Map.propTypes ={
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
}