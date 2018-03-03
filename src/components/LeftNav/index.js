import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../assets/logo/ds-logo.svg'
import DSProfileAvatar from '../ProfileAvatar'

const DSLeftNav = () => (
  <div className="ds-left-nav">
    <img src={Logo} />

    <ul>
      <li><Link to="/" className={(location.pathname == '/' ? 'ds-nav-link-isActive' : '')}>Introduction</Link></li>
      <li><Link to="/color/" className={(location.pathname == '/color/' ? 'ds-nav-link-isActive' : '')}>Color</Link></li>
      <li><Link to="/typography/" className={(location.pathname == '/typography/' ? 'ds-nav-link-isActive' : '')}>Typography</Link></li>
      <li><Link to="/space/" className={(location.pathname == '/space/' ? 'ds-nav-link-isActive' : '')}>Space</Link></li>
      <li><Link to="/depth/" className={(location.pathname == '/depth/' ? 'ds-nav-link-isActive' : '')}>Depth</Link></li>
    </ul>

    <DSProfileAvatar />
  </div>
)

export default DSLeftNav