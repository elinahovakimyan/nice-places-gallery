import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap';
import { ModalBtn } from '../common';

const GalleryItem = ({item}) => {
  return(
    <Col xs={12} sm={6} md={4}>
      <Thumbnail src={item.url} alt="WOW! Amazing Place!">
        <h4>{item.name}</h4>
        <ModalBtn btnTitle="See Description" modalTitle={item.name}>
          <img src={item.url} className="modal-img" alt="Better view"/>

          <p>{item.description}</p>
        </ModalBtn>
      </Thumbnail>
    </Col>
  )
}

export default GalleryItem;
