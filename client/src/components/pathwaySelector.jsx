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
        {this.props.pathways.length > 0 ? 
          <div>
            {this.props.pathways.map((path, ind) => {
              return(
                <div key={ind} className="pathwayMedallion" id={path.code} onClick={() => {this.props.handleK12Search(path.code)}}
                onMouseEnter={() => this.handleHover(ind)} onMouseLeave={() => this.handleHover(ind)}>
                  <span className="pathwayName">
                    {path.name}
                  </span>
                  <br/>
                  <span className="pathwayCode" >
                    {path.code}
                  </span>
                </div>
              )
            })}
            <div>
              {this.state.showDescription ? 
                <div>
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