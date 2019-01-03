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
    pathwayData: [],
    schoolData: null,
    top4CodeData: null,
    allPathwayCodes: [],
    validPathwayCodes: [],
    pathwayCodeToSearch: null
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
      } else {
        //resets opacity
        let tags = document.getElementsByClassName('tag')
        for (var i = 0; i < tags.length; i++) {
          tags[i].style.opacity = .75
        }
      }
    })
  }

  handleQuickPathwaySearch = (e) => {
    if (e.target.style.opacity === "1") {
      let title = e.target.id
      axios.get('/quickPathwaySearch', {params: {title}})
           .then((response) => {
             console.log(response.data)
             this.setState({industryData: response.data, allPathwayCodes: response.data.pathways, pageDisplay: 2}, () => {
              this.handleFullPathwySearch()
             })
           })
           .catch((err) => console.error(err))
    }
  }

  handleFullPathwySearch = () => {
    axios.get('/fullPathwaySearch', {params: {pathwayCodes: this.state.allPathwayCodes}})
         .then((response) => {
           console.log(response.data)
           this.setState({pathwayData: response.data})
        })
  }

  handleK12Search = () => {
    axios.get('/schoolSearch', {params: {pathwayCode: this.state.pathwayCodeToSearch}})
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
          <PathwaySelector pathways= {this.state.pathwayData}/>
        </div>
      )
    } else if (this.state.pageDisplay === 3) {
      return (
        <div>
          <MapAndInfo />
        </div>
      )
    }
  }
}

// export default (pathwayQuiery)(App)
export default App