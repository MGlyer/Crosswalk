import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    //
  }

  render() {
    return(
      <div>
        <p>React is working</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))