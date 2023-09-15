import React, { Component } from 'react'
import "./Header"

export class Home extends Component {
  render() {
    return (
    <div className='container'>
        <h1>Code Review App</h1>
        <div className='p-3 custom-deployable'>
            <h4>Deployable Name</h4>
            <div className='reviews-custom'>
                <span className='custom-cicles'></span>
                <span className='custom-cicles'></span>
                <span className='custom-cicles'></span>
            </div>
        </div>
    </div>
    )
  }
}

export default Home