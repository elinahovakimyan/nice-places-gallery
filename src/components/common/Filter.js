import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownValue: 'title',
      currentKeyword: this.props.keyword
    }
  }

  selectChange(e) {
    this.setState({
      dropdownValue: e.target.value
    });
  }

  keywordChange(e) {
    this.setState({
      currentKeyword: e.target.value
    })
  }

  submit() {
    const dropdownValue = this.state.dropdownValue;
    const searchText = this.state.currentKeyword;
    this.props.search(dropdownValue, searchText)
  }

  render() {
    const path = this.props.path;
    return(
      <div className="filter">
        <select className="dropdown" onChange={this.selectChange.bind(this)}>
          <option value="title"> Title </option>
          <option value="description"> Description </option>
        </select>
        <input type="text"
               placeholder="Type your keyword..."
               value={this.state.currentKeyword}
               onChange={this.keywordChange.bind(this)}
               className="filter-input"
        />
        <Button onClick={this.submit.bind(this)}> Search </Button>
        &nbsp;
        {path.includes('filtered') &&
        <Link to="/gallery">
          <Button  bsStyle="primary"> Clear Search </Button>
        </Link>}
      </div>
    )
  }
}

export { Filter };
