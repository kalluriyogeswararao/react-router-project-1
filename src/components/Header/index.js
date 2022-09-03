import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="link-items">
      <li className="link">
        <Link className="link-part" to="/">
          Home
        </Link>
      </li>
      <li className="link">
        <Link className="link-part" to="/about">
          About
        </Link>
      </li>
      <li className="link">
        <Link className="link-part" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
