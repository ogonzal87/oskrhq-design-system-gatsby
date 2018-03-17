import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../../assets/logo/ds-logo.svg'
import DSLeftNavFooter from '../LeftNavFooter'
import { NavLink } from 'react-router-dom'

const DSLeftNav = () => (
  <div className="ds-left-nav">
    <img src={Logo} />

    <ul>
      <li><NavLink exact to="/" activeClassName="ds-nav-link-isActive">Introduction</NavLink></li>
      <li><NavLink exact to="/color/" activeClassName="ds-nav-link-isActive">Color</NavLink></li>
      <li><NavLink exact to="/typography/" activeClassName="ds-nav-link-isActive">Typography</NavLink></li>
      <li><NavLink exact to="/space/" activeClassName="ds-nav-link-isActive">Space</NavLink></li>
      <li><NavLink exact to="/depth/" activeClassName="ds-nav-link-isActive">Depth</NavLink></li>
      <li><NavLink exact to="/motion/" activeClassName="ds-nav-link-isActive">Motion</NavLink></li>
      <li><NavLink exact to="/iconography/" activeClassName="ds-nav-link-isActive">Iconography</NavLink></li>
      <li><NavLink exact to="/components/" activeClassName="ds-nav-link-isActive">Components</NavLink>
        <ul className="ds-leftnav-subnav-list">
          <li><NavLink exact to="/components/buttons/" activeClassName="ds-nav-link-isActive">Buttons</NavLink></li>
        </ul>
      </li>
      <li><NavLink exact to="/contact/" activeClassName="ds-nav-link-isActive">Contact</NavLink></li>
    </ul>

    <DSLeftNavFooter />
  </div>
)

export default DSLeftNav