import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

const apiKey = require('../../../googleAPIKey')

const mapStyle = {
    width: '100%',
    height: '100%'
}
const style = {
    width: '100vw',
    height: '100vh'
}

export class Container extends React.Component {
    render() {
      return (
        <div style={style}>
          <Map google={this.props.google} zoom={14} initialCenter={{lat:33.8366, lng:-117.9143 }} style= {mapStyle}>
            {this.props.schools.map((school, i) => {
                return(
                    <Marker key={i} name={school.name} position={{lat: school.lat, lng: school.lang}} />
                )
            })}
          </Map>
        </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: apiKey
  })(Container)