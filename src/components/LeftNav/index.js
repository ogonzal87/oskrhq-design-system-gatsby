import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../assets/logo/ds-logo.svg'

const DSLeftNav = () => (
  <div className="ds-left-nav">
    <img src={Logo} />

    <ul>
      <li><Link to="/">Introduction</Link></li>
      <li><Link to="/color/">Color</Link></li>
      <li><Link to="/typography/">Typography</Link></li>
      <li><Link to="/space/">Space</Link></li>
      <li><Link to="/depth/">Depth</Link></li>
    </ul>
  </div>
)

export default DSLeftNav