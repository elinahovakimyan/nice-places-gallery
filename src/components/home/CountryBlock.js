import React from "react";
import { Col } from "react-bootstrap";

const CountryBlock = ({ title, classAtt }) => {
  return(
    <Col md={6} className={"country-block " + classAtt}>
      <h2>{title}</h2>
    </Col>
  )
}

export default CountryBlock;
