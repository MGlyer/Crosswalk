import React from 'react'
import { graphql } from 'react-apollo'

import MainPage from './mainPage.jsx'
import PathwaySelector from './pathwaySelector.jsx'
import MapAndInfo from './pathwaySelector.jsx'

class App extends React.Component {
  state = {
    pageDisplay: 1
  }

  render() {
    if (this.state.pageDisplay === 1) {
      return(
        <div>
          <MainPage />
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