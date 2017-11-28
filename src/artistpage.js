import React, {Component} from 'react'
import './App.css'

class Artist extends Component{
  render(){
    return (
      <li className="list-group-item">
          <p className="listItems" >{this.props.artists.artist}</p>
          <p className="listItems" >{this.props.artists.venue}</p>
          <p className="listItems" >{this.props.artists.date} </p>

      </li>
    )
  }
}

export default Artist