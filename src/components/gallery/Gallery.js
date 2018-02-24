import React from 'react';
import data from '../../data/data.json';
import GalleryItem from './GalleryItem';
import { Grid, Row } from 'react-bootstrap';

class Gallery extends React.Component {
  render() {
    return(
      <Grid>
        <h2>Amazing places to visit this year!</h2> <br/>
        <Row>
          {data.map(item => {
            return(
              <GalleryItem key={item.id} item={item}/>
            );
          })}
        </Row>
      </Grid>
    )
  }
}

export default Gallery;
