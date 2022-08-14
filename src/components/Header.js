import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
      <header>
          <div className="logo">
              <h3>ポートフォリオ</h3>
          </div>

          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/Skills">Skills</Link>
                  </li>
                  <li>
                      <a href="https://github.com/kteworks/"  target="_blank" rel="noopener noreferrer">Github</a>
                  </li>
                  <li>
                      <Link to="/Contact">Contact</Link>
                  </li>
              </ul>
          </nav>
        </header>
  )
}

export default Header