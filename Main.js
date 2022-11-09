import React from 'react'
import {Link} from 'react-router-dom'; 
export default function Main() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/explore">Explore</Link></li>
            </ul>
        </nav>
    </div>
  )
}
