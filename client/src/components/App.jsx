import React from 'react'
import { graphql } from 'react-apollo'
import axios from 'axios'

import MainPage from './mainPage.jsx'
import PathwaySelector from './pathwaySelector.jsx'
import MapAndInfo from './pathwaySelector.jsx'

class App extends React.Component {
  state = {
    pageDisplay: 1,
    searchCode: ''
  }

  handleCodeSearch = (e) => {
    this.setState({searchCode: e.target.value}, () => {
      if (this.state.searchCode.length === 4) {
        console.log(this.state.searchCode)
        axios.get('/initialSearch', {params: {code: this.state.searchCode}})
             .then((response) => {
               console.log(response.data)
             })
             .catch((err) => console.error(err))
      }
    })
  }

  render() {
    if (this.state.pageDisplay === 1) {
      return(
        <div>
            <div>
              <h2>Crosswalk</h2>
              <h3>College Focus</h3>
          </div>
          <MainPage />
          <input type="text" onChange={this.handleCodeSearch}/>
        </div>
      )
    } else if (this.state.pageDisplay === 2) {
      return(
        <div>
          <PathwaySelector />
        </div>
      )
    } else if (this.state.pageDisplay === 3) {
      return (
        <div>
          la la la
          <MapAndInfo />
        </div>
      )
    }
  }
}

// export default (pathwayQuiery)(App)
export default App