import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
      <header>
          <div className="logo">
              <h3></h3>
          </div>

          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <a href="https://github.com/kteworks/"  target="_blank" rel="noopener noreferrer">Github</a>
                  </li>
              </ul>
          </nav>
        </header>
  )
}

export default Header