import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CircleWrapper = styled.div`
  border-radius: 50%;
  width: 14em;
  height: 14em;
  border: solid 1px black;
  display: flex;
`;

const CloseButton = styled.div`
  font-size: 2em;
  border: solid 2px black;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
`;

export default class CirlceMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isClosing: false,
    }
  }

  render() {
    return (
      <CircleWrapper>
        <CloseButton>&#10005;</CloseButton>
      </CircleWrapper>
    );
  }
}