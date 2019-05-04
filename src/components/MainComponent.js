import React, { Component } from 'react'
import random from 'random-name';

export class MainComponent extends Component {
   
  setName = ()=>{

    let name = random.first()+" "+random.middle()+" "+random.last();

    this.props.changeName(name);
  }


  render() {
    return (
      <div>

        {/* <label >Main Componenet</label>
        <hr/> */}
        <button 
            name='changeName' className='btn-primary'  
            onClick={this.setName}
        >generate
        </button>  
        
      </div>
    )
  }
}

