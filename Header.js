import React, { Component } from 'react'
export default class Header extends Component {


    constructor(){        super()
        this.state = {count : 0}
    }
    componentDidMount(){
      document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
      document.title = `CDU ${this.state.count} times`
    }
     render() {
    return (
      <div>    
                       <button onClick={ () => { this.setState({count : this.state.count + 1})}}> CLICK </button>
      </div>
    )
  }
}
