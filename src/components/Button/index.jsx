import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 15px;
  font-size: 1em;
  font-weight: 700;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.7);
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.07);
  }

  :active {
    transform: translate(3px, 1px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const Button = ({
  autofocus, disabled, type, onClick, children,
}) => (
  <StyledButton autofocus={autofocus} disabled={disabled} type={type} onClick={onClick}>
    {children}
  </StyledButton>
);

Button.defaultProps = {
  autofocus: false,
  disabled: false,
  type: 'button',
  onClick: null,
};

Button.propTypes = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};


export default Button;
