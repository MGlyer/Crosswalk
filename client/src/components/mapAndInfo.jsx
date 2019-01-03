import React from 'react'

class MapAndInfo extends React.Component{
  state = {
    //
  }

  render() {
    return(
      <div>
        {this.props.schoolsData.length > 0 ?
          this.props.schoolsData.map((school, ind) => {
            return(
              <div key={ind} >
                {school.name}
                <br/>
                {school.contact.name}
              </div>
            )
          })
          : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default MapAndInfo