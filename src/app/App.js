import React, { Component } from 'react'
import { connect } from 'react-redux';
import  { MainComponent } from '../components/MainComponent';
import { UserComponent } from '../components/UserComponent';
import {setName,setAge} from '../store/actions/userActions'

class App extends Component {
  
  render() {
    return (
      <div className='container'>
        <UserComponent name={this.props.user.name}/>
        <hr/>
        <br/>
        <MainComponent changeName={this.props.setName}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{

  return {
    user:state.user,
    math:state.math
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);