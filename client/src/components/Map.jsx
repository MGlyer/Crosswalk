import React from 'react'

import ReactMapGL, { Marker, Popup } from 'react-map-gl'
const token = require('../../../mapboxConfig.js').mapboxToken

 
class MapView extends React.Component {
  state = {
    viewport: {
      width: 800,
      height: 500,
      latitude: 33.8366,
      longitude: -117.9143,
      zoom: 11,
    },
    mapStyle: 'mapbox://styles/martinglyer/cjqjuo29rjg272rocqqfuyzda',
    popupInfo: null
  };

  renderMarker = (school, i) => {
    const {name, lat, long} = school
    return (
      <Marker key={i} longitude={Number(long)} latitude={Number(lat)} >
        <div className="schoolMarker"><span>{i}</span></div>
      </Marker>
    ) 
  }

  render() {
    const {mapStyle} = this.state
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle={mapStyle}
        dragRotate={false}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={token}>
          {this.props.schools.map(this.renderMarker)}
      </ReactMapGL>
    );
  }
 
};

export default MapView