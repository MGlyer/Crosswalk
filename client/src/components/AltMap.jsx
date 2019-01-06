import React from 'react'

const apiKey = require('../../../googleAPIKey')

export class Map extends React.Component{
    state = {
        //
    }

    render() {
        return(
            <div>My Map</div>
        )
    }
}

export class Container extends React.Component {
    render() {
      const style = {
        width: '100vw',
        height: '100vh'
      }
      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
        <div style={style}>
          <Map google={this.props.google} />
        </div>
      )
    }
  }
  
  export default GoogleApiComponent({
    apiKey: apiKey
  })(Container)