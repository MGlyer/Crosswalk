import React from 'react'

import ReactMapGL, { Marker, Popup } from 'react-map-gl'
const token = require('../../../mapboxConfig.js').mapboxToken

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
}; 


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
    const size = 40
    return (
      <Marker key={i} longitude={Number(long)} latitude={Number(lat)} >
        <svg className="schoolMarker" onClick = {() => this.setState({popupInfo: school})}
        height={size} viewBox="0 0 24 24" style={{...pinStyle, transform: `translate(${-size / 2}px,${-size}px)`}} >
          <path d={ICON}/>
          <text x="12" y="18" font-family="sans-serif" font-size="20px" text-anchor="middle" fill="black">
            {i}
          </text>
        </svg>
      </Marker>
    ) 
  }

  renderPopup = () => {
    const popupInfo = this.state

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={Number(popupInfo.long)}
        latitude={Number(popupInfo.lat)}
        closeOnClick={false}
        onClose={() => this.setState({popupInfo: null})} >
          {popupInfo.name}
      </Popup>
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

          {/* {this.renderPopup()} */}

      </ReactMapGL>
    );
  }
 
};

export default MapView