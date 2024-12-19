import React, { Component } from 'react'
import NewsComponent from './NewsComponent'

export class Container extends Component {
  render() {
    return (
      <div>
        This is a Container
        <NewsComponent/>
      </div>
    )
  }
}

export default Container
