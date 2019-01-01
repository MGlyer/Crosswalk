import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'

const dbURL = new ApolloClient({
  uri: 'http://localhost:8087/graphql'
})

class App extends React.Component {
  state = {
    //
  }


  render() {
    return(
    <ApolloProvider client = {dbURL} >
          <App />
    </ApolloProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))