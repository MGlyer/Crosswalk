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
          this is the first page
        </div>
      )
    } else if (this.state.pageDisplay === 2) {
      return(
        <div>
          this is the second page
        </div>
      )
    } else if (this.state.pageDisplay === 3) {
      return (
        <div>
          this is the third page
        </div>
      )
    }
  }
}

// export default (pathwayQuiery)(App)
export default App