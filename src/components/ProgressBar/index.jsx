import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const updateValueAnimation = keyframes`
  from { 
    opacity: 1;
    transform: translate(90px, 0)
  }
  to { 
    opacity: 0;
    transform: translate(105px, -25px)
  }
`;

const Wrapper = styled.div`
  width: 150px;
`;

const ValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 5px;
  position: relative;
`;

const DifferenceAnimation = styled.span`
  position: absolute;
  animation: ${updateValueAnimation} 2s ease-out;
  color: ${props => props.children > 0 ? '#81aa42' : '#f31216'};
  font-weight: 1.3em;
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
      differenceOfValue: null,
    };

    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.value !== this.props.value) {
      this.setState({ differenceOfValue: nextProp.value - this.props.value });
    }
  }

  handleAnimationEnd() {
    this.setState({ differenceOfValue: null });
  }

  render() {
    const { resource, value, maxValue } = this.props;
    const { differenceOfValue } = this.state;

    return (
      <Wrapper>
        <ValueWrapper>
          <span>{resource}</span>
          <span>{`${value}/${maxValue}`}</span>
          {
            differenceOfValue 
            ? <DifferenceAnimation onAnimationEnd={this.handleAnimationEnd} >
                {differenceOfValue < 0 ? differenceOfValue : `+${differenceOfValue}`}
              </DifferenceAnimation> 
            : null
          }
        </ValueWrapper>
        <BarWrapper>
          <Bar barLength={value / maxValue} />
        </BarWrapper>
      </Wrapper>
    );
  }
}

Bar.propTypes = {
  barLength: PropTypes.number.isRequired,
};

ProgressBar.propTypes = {
  resource: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};
