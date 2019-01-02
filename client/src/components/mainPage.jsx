import React from 'react'
import { codeQuery } from '../queries/queries.js'
import { graphql } from 'react-apollo';

class MainPage extends React.Component{
  state = {
    hoverFocus: null,
    selected: null,
    // searchCode: '',
    // pathInfo: this.props.data ? this.props.data : null
  }

  handleHover = (e) => {
    this.state.hoverFocus ? 
    this.setState({hoverFocus: null}) : this.setState({hoverFocus: e.target.id})
  }

  handleSearch = (e) => {
    this.setState({searchCode: e.target.value}, () => {
      if (this.state.searchCode.length === 4) {
        this.props.codeQuery({
          variables: {
            code: this.state.searchCode
          }
        })
      }
    })
  }

  render() {
    return(
      <div>
        <div>
          <div id='rowOne'>
              <img onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} src="img/airplane.png" className="tag airplane" id="FILL_ME_IN"/>
              <img onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} src="img/Building and Construction Trades.gif" className="tag building" id="Building and Construction"/>
              <img src="img/econ.png" className="tag econ" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} id="Economics"/>
              <img src="img/Education, Child Development, and Family Services.png" className="tag education" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} id="Education, Child Development, and Family Services"/>
              <img src="img/Energy, Environment, and Utilities.gif" className="tag energy" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} id="Energy, Environment, and Utilities"/>
          </div>
          <div id='rowTwo'>
              <img src="img/Engineering and Architecture.gif" className="tag engineering" id="Engineering and Architecture" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} />
              <img src="img/film.png" className="tag film" id="Entertainment" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/food on a tray.png" className="tag food" id="FILL_ME_IN" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Health Science and Medical Technology.gif" className="tag healthScience" id="Health Science and Medical Technology" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/hospitality.png" className="tag hospitality" id="Hospitality and Food Services" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
          </div>
          <div id='rowThree'>
              <img src="img/Information and Communication Technologies.gif" className="tag it" id="Information and Communication Technologies" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Manufacturing and Product Development.png" className="tag manufacturing" id="Manufacturing and Product Development" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Marketing, Sales, and Service.png" className="tag marketing" id="Marketing, Sales, and Service" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/Public Services.png" className="tag publicService" id="Public Services" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
              <img src="img/wheat.png" className="tag wheat" id="Agriculture" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
          </div>
        </div>

        {this.state.hoverFocus ? 
          <div className="industryTitle">
            {this.state.hoverFocus}
          </div>
          : null
        }

        
      </div>
    )
  }
}

// export default graphql(codeQuery, {name: "codeQuery"})(MainPage)
export default MainPage