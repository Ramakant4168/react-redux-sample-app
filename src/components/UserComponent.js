import React, { Component } from 'react'

export class UserComponent extends Component {
    
    render() {
    return (
      <div>

         <label style={ {"marginTop" : "3%"} }>Random Name Generator</label>
         <hr/>
         <label>{this.props.name}</label> 
        
      </div>
    )
  }
}



