import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      modalIsOpen: true
    })
  }

  handleClose() {
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    return(
      <div>
        <Button bsStyle="primary" onClick={this.handleOpen}>{this.props.btnTitle}</Button>

        <Modal show={this.state.modalIsOpen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export { ModalBtn };
