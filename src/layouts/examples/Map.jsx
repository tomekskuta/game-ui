import React from 'react';

import Map from '../../components/Map';

export default class MapExample extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0.7,
      y: -0.5,
      z: 0.5,
    }

    this.moveMap = this.moveMap.bind(this);
  }

  moveMap(event) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    const setPosition = (position, length) => -(1 - (position / (length/2)));

    this.setState({
      x: -setPosition(event.clientY, windowHeight),
      y: setPosition(event.clientX, windowWidth),
      // z: -setPosition(event.clientX, windowWidth),
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.moveMap);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.moveMap);
  }

  render() {
    const { x, y, z } = this.state;
    return (
      <div>
        <Map x={x} y={y} z={z} />
      </div>
    )
  }
}
