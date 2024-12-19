import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Container from './components/Container'

export class App extends Component {
  

  render() {
    return (
      <div>
        <Navigation/>
        <Container/>
      </div>
      
    )
  }
}

export default App
