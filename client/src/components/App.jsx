import React from 'react'
import { graphql } from 'react-apollo'
import axios from 'axios'

import MainPage from './mainPage.jsx'
import PathwaySelector from './pathwaySelector.jsx'
import MapAndInfo from './mapAndInfo.jsx'

class App extends React.Component {
  state = {
    pageDisplay: 1,
    searchCode: '',
    industryData: null,
    pathwayData: [],
    schoolsData: [],
    top4CodeData: null,
    allPathwayCodes: [],
    validPathwayCodes: [],
    pathwaySelected: {}
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
                //  tag.style.opacity = 1
                this.handleCSSChange(tag)
                 console.log(name, tag)
               })
             })
             .catch((err) => console.error(err))
      } else {
        //resets opacity
        let tags = document.getElementsByClassName('tag')
        for (var i = 0; i < tags.length; i++) {
          tags[i].style.opacity = .5
        }
      }
    })
  }

  handleCSSChange = (target) => {
    let {style} = target
    style.opacity = 1
    style.border = "6px solid yellow"
    style.borderRadius = '50%'
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

  matchContacts = (schools, contacts) => {
    contacts.forEach((contact) => {
      schools.forEach((school) => {
        if (contact.SchoolID === school._id) {
          school.contact = contact
        }
      })
    })

    return schools
  }

  handleK12Search = (code, name) => {
    this.setState({pageDisplay: 3, pathwaySelected: {name, code}}, () => {
      axios.get('/schoolSearch', {params: {pathwayCode: code}})
           .then((response) => {
             console.log('post K12search, front end.  response from searching for the schools: ', response.data)
             let schoolInfo = this.matchContacts(response.data.schools, response.data.contacts)
             console.log('modified school info: ', schoolInfo)
             this.setState({schoolsData: schoolInfo})
           })
           .catch((err) => console.error(err))
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
          <div style={{textAlign: 'center'}}>
            <input type="text" onChange={this.handleCodeSearch} style={{textAlign: 'center'}} />
          </div>
          <MainPage handleQuickPathwaySearch = {this.handleQuickPathwaySearch}/>
        </div>
      )
    } else if (this.state.pageDisplay === 2) {
      return(
        <div>
          <PathwaySelector pathways= {this.state.pathwayData} handleK12Search={this.handleK12Search} />
        </div>
      )
    } else if (this.state.pageDisplay === 3) {
      return (
        <div>
          <MapAndInfo pathwaySelected={this.state.pathwaySelected} schoolsData={this.state.schoolsData} />
        </div>
      )
    }
  }
}

// export default (pathwayQuiery)(App)
export default App