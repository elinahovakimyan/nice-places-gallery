import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import GalleryItem from './GalleryItem';
import { Filter } from '../common';

class Gallery extends React.Component {

  getData() {
    const { type, keyword } = this.props.match.params;
    if(!!type && !!keyword) {
      if(type === "title") {
        return data.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
      } else if(type === "description") {
        return data.filter(item => item.description.toLowerCase().includes(keyword.toLowerCase()));
      }
    } else {
      return data;
    }
  }

  search(type, keyword) {
    if(!!keyword) {
      this.props.history.push(`/filtered/gallery/${type}/${keyword}`)
    } else {
      this.props.history.push(`/gallery`)
    }
  }

  render() {
    const mainData =  this.getData(data);
    const { keyword } = this.props.match.params;
    const path = this.props.location.pathname;

    return(
      <div className="gallery-main">
        <h2>Amazing places to visit this year!</h2> <br/>
        <Filter search={this.search.bind(this)} keyword={keyword} path={path}/>

        {mainData.length === 0 && <div className="back-div">
          <h4> No Records Found :( </h4>
          <Link to="/gallery" className="back-link"> Go Back </Link>
        </div>}

        {mainData.length > 0 &&
          <Row className="gallery-row">
            {mainData.map(item => {
              return(
                <GalleryItem key={item.id} item={item}/>
              );
            })}
          </Row>}

      </div>
    )
  }
}

export default Gallery;
