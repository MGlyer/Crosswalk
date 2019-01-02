import React from 'react'

class MainPage extends React.Component{
  state = {
    //
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
              <img src="img/airplane.png" className="tag airplane"/>
              <img src="img/Building and Construction Trades.gif" className="tag building"/>
              <img src="img/econ.png" className="tag econ"/>
              <img src="img/Education, Child Development, and Family Services.png" className="tag education"/>
              <img src="img/Energy, Environment, and Utilities.gif" className="tag energy"/>
          </div>
          <div id='rowTwo'>
              <img src="img/Engineering and Architecture.gif" className="tag engineering"/>
              <img src="img/film.png" className="tag film"/>
              <img src="img/food on a tray.png" className="tag food"/>
              <img src="img/Health Science and Medical Technology.gif" className="tag healthScience"/>
              <img src="img/hospitality.png" className="tag hospitality"/>
          </div>
          <div id='rowThree'>
              <img src="img/Information and Communication Technologies.gif" className="tag it"/>
              <img src="img/Manufacturing and Product Development.png" className="tag manufacturing"/>
              <img src="img/Marketing, Sales, and Service.png" className="tag marketing"/>
              <img src="img/Public Services.png" className="tag publicService"/>
              <img src="img/wheat.png" className="tag wheat"/>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage