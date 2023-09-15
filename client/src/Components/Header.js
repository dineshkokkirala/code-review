import React, { Component } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      
        <div className='navbar-links-custom navbar navbar-color text-light p-4'>
            <div>
                <h3><Link className='custom-link' to="/">Code Review App</Link></h3>
            </div>
            <div>
                <ul>
                    <li><Link className='custom-link' to="/completed">Completed Reviews</Link></li>
                    <li><Link className='custom-link' to="/pending">Pending Reviews</Link></li>
                </ul>
            </div>
        </div>
   
    )
  }
}

export default Header