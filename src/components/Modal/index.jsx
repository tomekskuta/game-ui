import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Button from '../Button';

const openAnimation = keyframes`
  0% { transform: scale(0, 0); }
  50% { transform: scale(1.1, 1.1); }
`;

const closeAnimation = keyframes`
  50% { transform: scale(1.1, 1.1); }
  100% { transform: scale(0, 0); }
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  animation: ${props => props.animation} 0.5s;
`;

const Header = styled.h2`
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
  max-width: 500px;
`;

const Paragraph = styled.p`
  text-align: center;
  max-width: 500px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
`;

export default class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      isJustClosing: false,
    }

    this.handleClose = this.handleClose.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.cancelClick = this.cancelClick.bind(this);
  }

  handleClose() {
    this.setState({ isJustClosing: true })
  }

  submitClick() {
    this.handleClose();
    if (this.props.submitAction) {
      this.props.submitAction()
    }
  }

  cancelClick() {
    this.handleClose();
    this.props.cancelAction();
  }

  render() {
    const {
      header, paragraph, submitText, cancelText, onAnimationEnd, cancelAction,
    } = this.props;
    
    return (
      <ModalWrapper>
        <ModalContent
          animation={this.state.isJustClosing ? closeAnimation : openAnimation}
          onAnimationEnd={this.state.isJustClosing ? onAnimationEnd : null}
        >
          <Header>{header}</Header>
          {paragraph ? <Paragraph>{paragraph}</Paragraph> : null}
          <ButtonsWrapper>
            {
              cancelAction
              ? <Button onClick={this.handleClose} >{cancelText}</Button>
              : null
            }
            <Button autofocus onClick={this.submitClick} >{submitText}</Button>
          </ButtonsWrapper>
        </ModalContent>
      </ModalWrapper>
    );
  }
}

Modal.defaultProps = {
  paragraph: null,
  submitText: 'OK',
  cancelText: 'Cancel',
  submitAction: null,
  cancelAction: null,
};

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  submitAction: PropTypes.func,
  cancelAction: PropTypes.func,
  onAnimationEnd: PropTypes.func.isRequired,
};
