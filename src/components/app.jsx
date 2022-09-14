import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {

  center() {
    return {
      lat: 10.99835602,
      lng: 77.01502627
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default App;
