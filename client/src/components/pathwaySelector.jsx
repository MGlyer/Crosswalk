import React from 'react'

class pathwaySelector extends React.Component{
  state = {
    showDescription: false,
    descriptionToShow: null
  }

  handleHover = (i) => {
    if (this.state.showDescription) {
      this.setState({showDescription: false, descriptionToShow: null})
    } else {
      this.setState({showDescription: true, descriptionToShow: i})
    }
  }

  render() {
    return(
      <div>
        <h2 style={{textAlign: 'center'}}>Pathway Selector</h2>
        <h3 style={{textAlign: 'center'}}>Please select and available Pathway</h3>
        {this.props.pathways.length > 0 ? 
          <div className="circleHolder">
            {this.props.pathways.map((path, ind) => {
              return(
                  <div key={ind} className="pathwayMedallion" id={path.code} onClick={() => {this.props.handleK12Search(path.code, path.name)}}
                  onMouseEnter={() => this.handleHover(ind)} onMouseLeave={() => this.handleHover(ind)}>
                    <span className="pathwayName">
                      {path.name}
                    </span>
                    <br/><br/>
                    <span className="pathwayCode" >
                      {path.code}
                    </span>
                  </div>
              )
            })}
            <div>
              {this.state.showDescription ? 
                <div className='pathwayDescriptor' >
                  {this.props.pathways[this.state.descriptionToShow].descriptor}
                </div>
                : null
              }
            </div>
          </div>
          : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default pathwaySelector