import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './common';
import Gallery from './gallery/Gallery';
import Homepage from './home/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <main>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/gallery" component={Gallery}/>
          </Switch>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default App;
