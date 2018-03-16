import React from 'react';
import { Row, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatureBlock from './FeatureBlock';

const Homepage = () => {
  return(
    <div>
      {/*<div className="wlc-message">
        <h1>Let Your Journey Begin...</h1>
        <img src="https://www.flyingblue.com/2.0.2/img/form/loading.gif" width="300px" alt="trip-airplane"/>
        <h3> “I am not the same, having seen the moon shine on the other side of the world.” – Mary Anne Radmacher</h3>
        <br/>

      </div>*/}

      <div className="traveller-div">

        <h3> Let the Journey Begin For You... </h3>

        <a href="#features">
          <Glyphicon glyph="chevron-down"/>
        </a>
      </div>

      <div id="features">
        <h2> Wondering why travel? </h2>

        <Row bsClass="row-home-feature">
          <FeatureBlock icon="sunglasses" title="Relax and Re-Energize"/>
          <FeatureBlock icon="signal" title="High-Level Emotions"/>
          <FeatureBlock icon="heart" title="Love Towards Nature"/>
        </Row>
      </div>



      <Button bsStyle="primary" bsSize="large" className="home-btn">
        <Link to="/gallery">
          Start a Wonderful trip!
        </Link>
      </Button>
    </div>
  )
}

export default Homepage;
