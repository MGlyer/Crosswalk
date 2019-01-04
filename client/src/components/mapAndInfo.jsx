import React from 'react'
import MapView from './Map.jsx'

class MapAndInfo extends React.Component{
  state = {
    //
  }

  render() {
    return(
      <div>
        {this.props.schoolsData.length > 0 ?
          // this.props.schoolsData.map((school, ind) => {
          //   return(
          //     <div key={ind} >
          //       {school.name}
          //       <br/>
          //       {school.contact.name}
          //     </div>
          //   )
          // })
          <MapView />
          : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default MapAndInfo