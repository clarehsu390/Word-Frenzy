import React, { Component } from 'react';
import Map from './components/maps.jsx';
import Search from './components/search.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Maps</h1>
        <Search/>
        <Map />
      </div>
    );
  }
}

export default App;