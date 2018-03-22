import React from 'react';

import { Button, ProgressBar, Modal } from './components';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isClicked: false,
      isModal: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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

  render() {
    const { value, isClicked, isModal } = this.state;

    return (
      <div className="App">
        <ProgressBar resource="Gold" value={isClicked ? Number(value) : 0} maxValue={228} />
        <input type="text" onChange={this.handleChange} value={value} style={{ marginTop: 50 }} />
        <Button onClick={this.handleClick}>daj hajs i pokaz modal</Button>
        <Button>menuTrigger</Button>
        {isModal ? <Modal closeTrigger={this.toggleModal} header="Bierz te łapy z mojej nogi!" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in at enim sed. Facere accusantium impedit dolores quas debitis." /> : null}
      </div>
    );
  }
}

export default App;
