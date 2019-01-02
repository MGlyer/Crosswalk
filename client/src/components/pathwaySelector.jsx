import React from 'react'

class pathwaySelector extends React.Component{
  state = {
    //
  }

  render() {
    return(
      <div>
        {this.props.pathways.length > 0 ? 
          <div>
            {this.props.pathways.map((path) => {
              return(
                <div>
                  {path.name}
                  <br/>
                  {path.code}
                  <br/>
                  {path.descriptor}
                </div>
              )
            })}
          </div>
          : null
        }
      </div>
    )
  }
}

export default pathwaySelector