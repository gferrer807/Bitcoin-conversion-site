import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  
  render () {
      const {percent, newCP, newSP, title} = this.props.globalState.totalStatus
      
    return (<section id='Results'>
        <div className="container">
            <div className="ads"></div>
            <div className="col-md-12">
                <h3>Your ${newCP} dollar
                investment is now </h3>
            </div>
            <h1>{newSP} </h1>
            <h4>{title} {percent}% </h4>
                <a href="#" className="main-btn">
                Create an account to keep track
                of your profits </a>
            
                <a href="#" className="main-btn" onClick={this.props.goBack}>
                Check Another Transaction </a>
            
            <div className="ads"></div>
        </div>
      </section>)
  }
}