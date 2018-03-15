import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../assets/logo/ds-logo.svg'
import DSProfileAvatar from '../ProfileAvatar'
import { NavLink } from 'react-router-dom'
import DSSketchImg from '../../assets/logo/sketch-brand-mark.png'
import DSGithubImg from '../../assets/logo/github-brand-mark.png'

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
      <li><NavLink exact to="/components/" activeClassName="ds-nav-link-isActive">Components</NavLink></li>
      <li><NavLink exact to="/contact/" activeClassName="ds-nav-link-isActive">Contact</NavLink></li>
    </ul>

    <div className="ds-leftnav-resources-container">
      <a href="https://github.com/ogonzal87/oskrhq-uikit-mobile-app" target="_blank" className="ds-leftnav-resource">
        <img src={DSSketchImg}/>
        <span className="ds-caption-text-style">UI KIT</span>
      </a>
      <a href="https://github.com/ogonzal87/oskrhq-design-system-react" target="_blank" className="ds-leftnav-resource">
        <img src={DSGithubImg} className="github-img"/>
        <span className="ds-caption-text-style">Github Repo</span>
      </a>
    </div>

    <DSProfileAvatar />
  </div>
)

export default DSLeftNav