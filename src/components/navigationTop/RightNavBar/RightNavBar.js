import React from 'react'
import {Link} from "react-router-dom"

function RightNavBar() {
    return (
      <div>
      <nav>
    <ul>
      <li>
        <h1>Navigation</h1>
      </li>
      <li>
      <Link to="/">Tell</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/HelpPage">Help</Link>
      </li>
      <li>
        <Link to="/ProfilePage">Profile</Link>
      </li>
      <li>
        <Link to="/SigninPage">Signin</Link>
      </li>
      <li>
          <Link to="/UserGenPage">UserGenPage</Link>
      </li>
    </ul>
  </nav>
  </div>
    )
}

export default RightNavBar
