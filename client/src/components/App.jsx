import React from 'react'
import { graphql } from 'react-apollo'
import axios from 'axios'

import MainPage from './mainPage.jsx'
import PathwaySelector from './pathwaySelector.jsx'
import MapAndInfo from './pathwaySelector.jsx'

class App extends React.Component {
  state = {
    pageDisplay: 1,
    searchCode: '',
    industryData: null,
    pathwayData: null,
    schoolData: null,
    top4CodeData: null,
    allPathwayCodes: [],
    validPathwayCodes: []
  }

  handleCodeSearch = (e) => {
    this.setState({searchCode: e.target.value}, () => {
      if (this.state.searchCode.length === 4) {
        console.log(this.state.searchCode)
        axios.get('/initialSearch', {params: {code: this.state.searchCode}})
             .then((response) => {
               console.log(response.data)
               this.setState({industryData: response.data})
               response.data.forEach((industry) => {
                 let {name} = industry
                 let tag = document.getElementById(name)
                 tag.style.opacity = 1
                 console.log(name, tag)
               })
             })
             .catch((err) => console.error(err))
      }
    })
  }

  handleQuickPathwaySearch = (e) => {
    let title = e.target.id
    axios.get('/quickPathwaySearch', {params: {title}})
         .then((response) => {
           console.log(response.data)
           this.setState({industryData: response.data, allPathwayCodes: response.data.pathways})
         })
         .catch((err) => console.error(err))
  }

  handleFullPathwySearch = () => {
    axios.get('/fullPathwaySearch', {params: {pathwayCodes: this.state.pathwaysCodes}})
         .then((response) => {
           console.log(response.data)
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
          <MainPage handleQuickPathwaySearch = {this.handleQuickPathwaySearch}/>
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