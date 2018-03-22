import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-areas: 20% 60% 20%;
  grid-template-areas:
    "header header header"
    "left map right"
    "left footer right";
`;

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      example: 'bla',
    };
  }

  render() {
    return (
      <Wrapper>
        {this.state.example}
      </Wrapper>
    );
  }
}
