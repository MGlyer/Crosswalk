import React from 'react'
// import MapView from './Map.jsx'
import MapView from './AltMap.jsx'
import Container from './mapContainer.jsx'


class MapAndInfo extends React.Component{
  state = {
    //
  }

  render() {
    return(
      <div>
        {this.props.schoolsData.length > 0 ?
        <div className="mapAndInfo">
          <div className='mapBox'>
            <Container schools = {this.props.schoolsData} />
          </div>
          <div className='infoBox'>
              {this.props.schoolsData.map((school) => {
                return(
                  <div><p>{school.name}</p></div>
                )
              })}
          </div>
        </div>
          : <p>Loading...</p>
        }
        {/* <MapView /> */}
      </div>
    )
  }
}

export default MapAndInfo