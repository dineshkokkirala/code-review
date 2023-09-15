import React, { Component } from 'react'
import "./Header.css"

class Header extends Component {
  render() {
    return (
      
        <div className='navbar-links-custom navbar navbar-color text-light p-4'>
            <div>
                <h3>Code Review App</h3>
            </div>
            <div>
                <ul>
                    <li>Completed Reviews</li>
                    <li>Pending Reviews</li>
                </ul>
            </div>
        </div>
   
    )
  }
}

export default Header