import React from 'react';

import MapContainer from './MapContainer';
import Pyramid from './Pyramid';

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    }

    this.renderDiv = this.renderDiv.bind(this);
  }

  renderDiv(howMany) {
    let components = [];
    for (let i = 0; i < howMany; i++) {
      components = [...components, i]
    }
    return components;
  }

  render() {
    return (
      <MapContainer>
        {this.renderDiv(64).map(item => <Pyramid key={item} />)}
      </MapContainer>
    )
  }
}