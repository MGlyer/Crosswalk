import React from 'react'

class MainPage extends React.Component{
  state = {
    hoverFocus: null,
    selected: null
  }

  handleHover = (e) => {
    this.state.hoverFocus ? 
    this.setState({hoverFocus: null}) : this.setState({hoverFocus: e.target.className})
  }

  render() {
    return(
      <div>
        <div>
          <h2>Crosswalk</h2>
          <h3>College Focus</h3>
        </div>

        <div>
          <div id='rowOne'>
              <img onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} src="img/airplane.png" className="tag airplane"/>
              <img onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} src="img/Building and Construction Trades.gif" className="tag building"/>
              <img src="img/econ.png" className="tag econ" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Education, Child Development, and Family Services.png" className="tag education" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Energy, Environment, and Utilities.gif" className="tag energy" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
          </div>
          <div id='rowTwo'>
              <img src="img/Engineering and Architecture.gif" className="tag engineering" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/film.png" className="tag film" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/food on a tray.png" className="tag food" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Health Science and Medical Technology.gif" className="tag healthScience" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/hospitality.png" className="tag hospitality" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
          </div>
          <div id='rowThree'>
              <img src="img/Information and Communication Technologies.gif" className="tag it" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Manufacturing and Product Development.png" className="tag manufacturing" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Marketing, Sales, and Service.png" className="tag marketing" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Public Services.png" className="tag publicService" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/wheat.png" className="tag wheat" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
          </div>
        </div>

        {this.state.hoverFocus ? 
          <div>
            {this.state.hoverFocus}
          </div>
          : null
        }
      </div>
    )
  }
}

export default MainPage