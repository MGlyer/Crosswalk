import React from 'react'
// import MapView from './Map.jsx'
import MapView from './AltMap.jsx'
import Container from './mapContainer.jsx'
import {CSVLink} from 'react-csv'


class MapAndInfo extends React.Component{
  state = {
    csvData: []
  }

  componentDidMount() {
    setTimeout(() => this.arrangeDownload(), 3000)
  }

  arrangeDownload = () => {
    let schools = this.props.schoolsData
    let download = [['Name', 'Title', 'School', 'Phone', 'Email', 'Address']]
    console.log(schools)
    schools.forEach((school) => {
      let {name, phone, email, title, address} = school.contact
      let contactInformation = [name, title, school.name, phone, email, address]
      download.push(contactInformation)
    })
    this.setState({csvData: download})
  }

  render() {
    return(
      <div>
        {this.props.schoolsData.length > 0 ?
        <div className="mapAndInfo">
          <h2 style={{textAlign: 'center'}}>Relevant High Schools</h2>
          <h3 style={{textAlign: 'center'}}>And School Contacts</h3>
          <div className='mapBox'>
            <Container schools = {this.props.schoolsData} />
          </div>
          <div className="export">
            <CSVLink class='btn-gradient green' filename={'K12 School Contact Information.csv'} data={this.state.csvData}>Download Contacts as CSV</CSVLink>
          </div>
          <div className='infoBox'>
              {this.props.schoolsData.map((school, i) => {
                let {contact} = school
                return(
                  <div key={i} className='schoolBlock'>
                    <h4>{school.name} -- {school.address}</h4>
                    <p>{contact.name} -- {contact.title}</p>
                    <p>phone: {contact.phone}    ||    email: {contact.email}</p>
                  </div>
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