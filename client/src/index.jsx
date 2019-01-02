import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './components/App.jsx'

const dbURL = new ApolloClient({
  uri: 'http://localhost:8087/graphql'
})

class Main extends React.Component {
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

ReactDOM.render(<Main />, document.getElementById("app"))