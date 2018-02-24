import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return(
    <div>
      <div className="wlc-message">
        <h2> Welcome to the demo website built with React.js! </h2>
        <h3>This website was built as a demo project during Tech Talks at AUA </h3>
        <br/>
        <img src="https://www.flyingblue.com/2.0.2/img/form/loading.gif" width="200px"/>

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
