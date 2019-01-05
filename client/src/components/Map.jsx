import React from 'react'

import ReactMapGL from 'react-map-gl'
const token = require('../../../mapboxConfig.js').mapboxToken

 
class MapView extends React.Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={token}
      />
    );
  }
 
};

export default MapView