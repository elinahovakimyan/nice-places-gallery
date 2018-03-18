import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import data from '../../data/data.json';

class ItemView extends React.Component {
  nextItem() {
    let id = Number(this.props.match.params.id);
    if(id >= 1 && id < 12) {
      this.props.history.push(`/gallery/item/${id+1}`)
    } else {
      alert("No next item")
    }
  }

  prevItem() {
    let id = Number(this.props.match.params.id);
    if(id > 1 && id <= 12) {
      this.props.history.push(`/gallery/item/${id-1}`)
    } else {
      alert("No previous item")
    }
  }
  render() {
    const item = data.filter(item => item.id === this.props.match.params.id)[0];

    return(
      <div className="center ind-page">
        <ButtonGroup>
          <Button onClick={this.prevItem.bind(this)} className="slider-btn"> Previous </Button>
          <Button onClick={this.nextItem.bind(this)} className="slider-btn"> Next </Button>
        </ButtonGroup>

        {!!item &&
          <div>
        <h2>{item.name}</h2>
        <img src={item.url} alt={item.name} className="indItemImg"/>
        <h3> {item.description} </h3>
          </div>
        }

        {!item && <div className="center"> <br/> <br/> No Records Found </div>}
      </div>
    )
  }
}

export default ItemView;
