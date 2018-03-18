import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatureBlock from './FeatureBlock';
import CountryBlock from './CountryBlock';
import kazan from '../../assets/kazan.jpg';

const Homepage = () => {
  return(
    <div className="home-main">
      <img src={kazan} alt="Travelling Place" className="traveller-img" />

      <h1> Wondering why travel? </h1>

      <Row className="row-home-feature">
        <FeatureBlock icon="sunglasses" title="Relax and Re-Energize"/>
        <FeatureBlock icon="signal" title="High-Level Emotions"/>
        <FeatureBlock icon="heart" title="Love Towards Nature"/>
      </Row>

      {/*<Button bsStyle="primary" bsSize="large" className="home-btn">
        <Link to="/gallery">
          Start a Wonderful trip!
        </Link>
      </Button>*/}
      <Button bsStyle="primary" className="show-btn home-btns">
        <Link to="/gallery">
          Show the gallery
        </Link>
      </Button>
      <Button bsStyle="default" className="learn-btn home-btns">
        <Link to="https://list25.com/25-most-visited-countries-in-the-world/" target="_blank">
          Learn more
        </Link>
      </Button>

      <br/><br/><hr/><br/>

      <div>
        <h1> The most visited countries </h1>

        <Row className="row-country-block">
          <CountryBlock classAtt="france" title="France"/>
          <CountryBlock classAtt="us" title="United States"/>
          <CountryBlock classAtt="spain" title="Spain"/>
          <CountryBlock classAtt="china" title="China"/>
        </Row>
      </div>
    </div>
  )
}

export default Homepage;
