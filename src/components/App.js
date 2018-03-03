import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Header, Footer } from './common';
import Gallery from './gallery/Gallery';
import Homepage from './home/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header path={this.props.location.pathname}/>

        <main>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/filtered/gallery/:type/:keyword" component={Gallery}/>
            <Route path="/gallery" component={Gallery}/>
          </Switch>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
