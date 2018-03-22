import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const addValueAnimation = keyframes`
  50% { transform: scale(1.1, 1.1); }
`;

const Wrapper = styled.div`
  width: 150px;
`;

const ValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 5px;
  animation: ${props => props.animation} 1s;
`;

const BarWrapper = styled.div`
  border: 1px black solid;
  border-radius: 25px;
`;

const Bar = styled.div`
  background: #81aa42;
  height: 10px;
  border-radius: 25px;
  width: ${props => `${props.barLength * 100}%`};
  max-width: 100%;
`;

export default class ProgressBar extends React.Component {
  constructor() {
    super();

    this.state = {
      isValueUpdated: false,
    };

    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.value !== this.props.value) {
      this.setState({ isValueUpdated: true });
    }
  }

  handleAnimationEnd() {
    this.setState({ isValueUpdated: false });
  }

  render() {
    const { resource, value, maxValue } = this.props;

    return (
      <Wrapper>
        <ValueWrapper
          animation={this.state.isValueUpdated ? addValueAnimation : null}
          onAnimationEnd={this.handleAnimationEnd}
        >
          <span>{resource}</span>
          <span>{`${value}/${maxValue}`}</span>
        </ValueWrapper>
        <BarWrapper>
          <Bar barLength={value / maxValue} />
        </BarWrapper>
      </Wrapper>
    );
  }
}

ValueWrapper.propTypes = {
  animation: PropTypes.string,
};

Bar.propTypes = {
  barLength: PropTypes.number.isRequired,
};

ProgressBar.propTypes = {
  resource: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};
