import React from "react";
import { Col, Glyphicon } from "react-bootstrap";

const FeatureBlock = ({ icon, title }) => {
  return(
    <Col xs={4} md={4}>
      <Glyphicon glyph={icon} />
      <h5>{title}</h5>
    </Col>
  )
}

export default FeatureBlock;
