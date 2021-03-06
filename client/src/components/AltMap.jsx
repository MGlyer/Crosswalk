import React from 'react'
import maps from 'google-maps-react'



export class Map extends React.Component{
    state = {
        //
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.google != this.props.google) {
        this.loadMap()
      }
    }

    componentDidMount() {
      this.loadMap()
    }

    loadMap = () => {
      if (this.props && this.props.google) {
        const {google} = this.props
        const maps = google.maps

        const mapRef = this.refs.map
        const node = ReactDOM.findDOMNode(mapRef)

        let zoom = 11
        let lat = 33.8366
        let lng = -117.9143

        const center = new maps.LatLng(lat, lng)
        const mapConfig = Object.assign({}, {
          center,
          zoom
        })
        this.map = new maps.Map(node, mapConfig)
      }
    }

    render() {
        return(
            <div ref='map'>
              My Map
            </div>
        )
    }
}

