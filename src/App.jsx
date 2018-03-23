import React from 'react';
import styled from 'styled-components';

import { Button, ProgressBar, Modal, CircleMenu } from './components';

const MenuTriggerButton = styled(Button)`
  margin-top: 400px;
  margin-left: 500px;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isClicked: false,
      isModal: false,
      isCircleMenu: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleCircleMenu = this.toggleCircleMenu.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  toggleModal() {
    this.setState({ isModal: !this.state.isModal });
  }

  handleClick(e) {
    this.setState({ isClicked: true });
    this.toggleModal();
  }

  toggleCircleMenu() {
    this.setState({ isCircleMenu: !this.state.isCircleMenu });
  }

  render() {
    const { value, isClicked, isModal, isCircleMenu } = this.state;

    return (
      <div className="App">
        <ProgressBar resource="Gold" value={isClicked ? Number(value) : 0} maxValue={228} />
        <input type="text" onChange={this.handleChange} value={value} style={{ marginTop: 50 }} />
        <Button onClick={this.handleClick}>daj hajs i pokaz modal</Button>
        <MenuTriggerButton onClick={this.toggleCircleMenu}>menuTrigger</MenuTriggerButton>
        {isCircleMenu ? <CircleMenu /> : null}
        {isModal ? <Modal closeTrigger={this.toggleModal} header="Bierz te łapy z mojej nogi!" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in at enim sed. Facere accusantium impedit dolores quas debitis." /> : null}
      </div>
    );
  }
}

export default App;
