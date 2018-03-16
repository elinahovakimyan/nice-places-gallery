import React from 'react';
import data from '../../data/data.json';

const ItemView = (props) => {
  const item = data.filter(item => item.id === props.match.params.id)[0];

  return(
    <div className="center">
      <h2>{item.name}</h2>
      <img src={item.url} alt={item.name} className="indItemImg"/>
      <h3> {item.description} </h3>
    </div>
  )
}

export default ItemView;
