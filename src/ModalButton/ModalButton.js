import React, {Component} from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  }

  hideModal = () => {
    this.setState({isModalShow: false})
  }

  showModal = () => {
    this.setState({isModalShow: true})
  }

  render() {
    let {isModalShow} = this.state
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        {isModalShow && 
          <Modal>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1>Модальное окно</h1>
                  <button onClick={this.hideModal}>Close</button>
                </div>
              </div>
            </div>
          </Modal>}
      </div>
    );
  }
}

export default ModalButton;
