import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    });
  }

  handleClose() {
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    const { btnTitle, modalTitle, itemId } = this.props;
    const { modalIsOpen } = this.state;

    return(
      <div>
        <Button bsStyle="primary" onClick={this.handleOpen}>{btnTitle}</Button>

        <Modal show={modalIsOpen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <Link to={`gallery/item/${itemId}`}>
              <Button bsStyle="primary">Learn More</Button>
            </Link>&nbsp;
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export { ModalBtn };
