import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Header, Footer } from './common';
import Gallery from './gallery/Gallery';
import Homepage from './home/Homepage';
import ItemView from './item/ItemView';

class App extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <div className="App">
        <Header path={path}/>

        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/filtered/gallery/:type/:keyword" component={Gallery}/>
          <Route path="/gallery/item/:id" component={ItemView}/>
          <Route path="/gallery" component={Gallery}/>
        </Switch>

        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
