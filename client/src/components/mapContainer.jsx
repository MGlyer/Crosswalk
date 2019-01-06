import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

const apiKey = require('../../../googleAPIKey')

const mapStyle = {
    width: '75%',
    height: '50%',
}
const style = {
    width: '75vw',
    height: '50vh'
}

export class Container extends React.Component {

  state = {
    showPopup: false,
    popupInfo: {name: 'null', lat: 0, long: 0}
  }

  selectMarker = (info) => {
    this.setState({popupInfo: info, showPopup: true})
  }
    render() {
      return (
        <div style={style}>
          <Map google={this.props.google} zoom={12} initialCenter={{lat:33.8366, lng:-117.9143 }} style= {mapStyle}>
            {this.props.schools.map((school, i) => {
                return(
                    <Marker key={i} title={school.name} name={school.name} position={{lat: school.lat, lng: school.long}} onClick={() => this.selectMarker(school)} />
                )
            })}
                    <InfoWindow visible={this.state.showPopup} position={{lat: Number(this.state.popupInfo.lat) + 0.0001, lng: Number(this.state.popupInfo.long)}}
                    >
                      <div className='popup window'>{this.state.popupInfo.name}</div>
                    </InfoWindow>
          </Map>
        </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: apiKey
  })(Container)