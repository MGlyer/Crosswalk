import React from 'react'
// import MapView from './Map.jsx'
import MapView from './AltMap.jsx'


class MapAndInfo extends React.Component{
  state = {
    //
  }

  render() {
    return(
      <div className='mapBox'>
        {this.props.schoolsData.length > 0 ?
          <MapView schools = {this.props.schoolsData} />
          : <p>Loading...</p>
        }
        {/* <MapView /> */}
      </div>
    )
  }
}

export default MapAndInfo